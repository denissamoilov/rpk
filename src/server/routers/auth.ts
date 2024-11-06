import { loginSchema, signUpSchema } from "@/features/auth/model/schemas";
import { router, publicProcedure } from "../trpc";
import { prisma } from "@/shared/lib/prisma";
import { z } from "zod";

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ input }) => {
    const { email, password } = input;

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    console.log("user", user);

    return { message: "Login successful", user };
  }),
  register: publicProcedure.input(signUpSchema).mutation(async ({ input }) => {
    const { name, email, password, agreedToTerms } = input;

    console.log("prisma", prisma);

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
      user: newUser,
    };
  }),
});
