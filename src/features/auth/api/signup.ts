import { trpc } from "@/app/_trpc/client";
import { SignupFormData } from "../model/schemas";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupFormData) =>
      trpc.auth.register.useMutation().mutateAsync(data),
  });
};
