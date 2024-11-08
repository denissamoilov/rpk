import { loginSchema, signUpSchema } from "@/features/auth/model/schemas";
import { router, publicProcedure } from "../trpc";
import { prisma } from "@/shared/lib/prisma";
import { z } from "zod";
import { User } from "@/entities/user/model/types";

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

    console.log("user", user);

    return { message: "Login successful", success: true, user };
  }),
  register: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
      const { name, email, password, agreedToTerms } = input;

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("User already exists");
      }

      // Create new user
      const newUser = await prisma.user.create({
        data: { email, password, name, agreedToTerms },
      });

      return {
        message: "User created successfully",
        success: true,
        user: newUser as User,
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
});
