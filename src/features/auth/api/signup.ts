import { trpc } from "@/app/_trpc/client";
import { SignupFormData } from "../model/schemas";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/entities/user/model/store";

export const useSignup = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: SignupFormData) =>
      trpc.auth.register.useMutation().mutateAsync(data),
    onSuccess: (user) => {
      setUser({ ...user.user });
    },
  });
};
