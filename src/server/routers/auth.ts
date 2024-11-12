import { loginSchema, signUpSchema } from "@/features/auth/model/schemas";
import { router, publicProcedure } from "../trpc";
import { prisma } from "@/shared/lib/prisma";
import { z } from "zod";
import { createSession, decryptToken } from "@/server/jwt";

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;

    console.log("ctx", ctx);

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    return { message: "Login successful", success: true, user };
  }),
  signup: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
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

      const user = await prisma.user.findUnique({
        where: { id: payload?.userId },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.requestToken !== token) {
        throw new Error("Invalid token");
      }

      // Update user emailVerified and remove requestToken
      await prisma.user.update({
        where: { id: payload?.userId },
        data: { emailVerified: new Date(), requestToken: null },
      });
    }),
});
