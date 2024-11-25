import { trpc } from "@/app/_trpc/client";
import { Button } from "@/shared/ui";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const Header = () => {
  const router = useRouter();

  const { mutateAsync: logout } = trpc.auth.logout.useMutation();

  const onLogoutHandle = useCallback(async () => {
    const result = await logout();

    if (result.success) {
      router.push("/");
    }
  }, [logout, router]);
  return (
    <header className="p-5">
      <Button onClick={onLogoutHandle}>Logout</Button>
    </header>
  );
};
