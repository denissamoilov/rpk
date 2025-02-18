import { loginSchema, signUpSchema } from "@/features/auth/model/schemas";
import { router, publicProcedure, privateProcedure } from "../trpc";
import { prisma } from "@/shared/lib/prisma";
import { z } from "zod";
import {
  createSession,
  decryptToken,
  deleteSession,
  getSession,
  setSession,
} from "@/server/jwt";

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ input }) => {
    const { email, password, rememberMe } = input;

    console.log("rememberMe", rememberMe);

    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log("user ::", user);
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    const expires = rememberMe ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60;

    const token = await createSession(user.id);

    setSession({
      token,
      expires,
    });

    return { message: "Login successful", success: true, user: user };
  }),
  logout: publicProcedure.mutation(async () => {
    const token = await getSession();

    if (token !== "") {
      console.log("logout!", token);

      await deleteSession("session");
    }

    return { success: true };
  }),
  signup: publicProcedure.input(signUpSchema).mutation(async ({ input }) => {
    const { name, email, password, agreedToTerms } = input;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    if (!agreedToTerms) {
      throw new Error("You must agree to the terms and conditions");
    }

    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: { email, password, name, agreedToTerms },
    });

    const token = await createSession(newUser.id);

    const updatedUser = await prisma.user.update({
      where: { id: newUser.id },
      data: { requestToken: token },
    });

    return {
      message: "User created successfully",
      success: true,
      user: updatedUser,
    };
  }),
  setRequestToken: publicProcedure
    .input(z.object({ id: z.string(), token: z.string() }))
    .mutation(async ({ input }) => {
      const { id, token } = input;

      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        throw new Error("User not found");
      }

      await prisma.user.update({
        where: { id },
        data: { requestToken: token },
      });
    }),
  getRequestToken: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;
      const user = await prisma.user.findUnique({ where: { id } });
      return user?.requestToken;
    }),
  confirmEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ input }) => {
      const { token } = input;

      const payload = await decryptToken(token);

      console.log("payload ::", payload);

      const user = await prisma.user.findUnique({
        where: { id: payload?.userId as string },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.requestToken !== token) {
        throw new Error("Invalid token");
      }

      // Update user emailVerified and remove requestToken
      await prisma.user.update({
        where: { id: payload?.userId as string },
        data: { emailVerified: new Date(), requestToken: null },
      });
    }),
  getUser: privateProcedure.query(({ ctx }) => {
    if (!ctx.user) {
      throw new Error("User not found");
    }

    return ctx.user;
  }),
});
