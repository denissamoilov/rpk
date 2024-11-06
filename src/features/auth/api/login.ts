// import { User } from "@/entities/user/model/types";
import { useUserStore } from "@/entities/user/model/store";
import { useMutation } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { LoginFormData } from "../model/schemas";

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);

  console.log("useLogin");

  return useMutation({
    mutationFn: (data: LoginFormData) =>
      trpc.auth.login.useMutation().mutateAsync(data),
    onSuccess: (user) => {
      setUser(user);
    },
  });
};
