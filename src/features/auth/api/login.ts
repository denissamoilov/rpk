import { api } from "@/shared/api/base";
import { User } from "@/entities/user/model/types";
import { useUserStore } from "@/entities/user/model/store";
import { useMutation } from "@tanstack/react-query";

interface LoginDTO {
  email: string;
  password: string;
}

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: LoginDTO) =>
      api.post<User>("/auth/login", data).then((res) => res.data),
    onSuccess: (user) => {
      setUser(user);
    },
  });
};
