import { useLoginSchema, useSignupSchema } from "@/features/auth/model/schemas";
import { router, publicProcedure } from "../trpc";
import { prisma } from "@/shared/lib/prisma";

export const authRouter = router({
  login: publicProcedure.input(useLoginSchema()).mutation(async ({ input }) => {
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
  register: publicProcedure
    .input(useSignupSchema())
    .mutation(async ({ input }) => {
      const { name, email, password } = input;

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("User already exists");
      }

      // Create new user
      const newUser = await prisma.user.create({
        data: { email, password, name },
      });

      return { message: "User created successfully", user: newUser };
    }),
});
