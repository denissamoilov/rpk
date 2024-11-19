"use client";

import { trpc } from "@/app/_trpc/client";
import { useUserStore } from "@/entities/user/model/store";
import { Button } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useState } from "react";

export function DashboardPage() {
  const t = useTranslations("Index");
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const { mutateAsync: logout } = trpc.auth.logout.useMutation();

  // If cookie access token is not set, redirect to login
  useEffect(() => {
    fetch("/api/get-token")
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        setAccessToken(token);
        console.log("token :: ", data);
        if (!token) {
          router.push("/login");
        }
      });
  }, [router]);

  // if (!user) {
  //   console.log("accessToken ::", accessToken);
  //   router.push("/login");
  // }

  const onLogoutHandle = useCallback(async () => {
    const result = await logout();

    if (result.success) {
      router.push("/");
    }
  }, [logout, router]);

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">
        {user?.name && t("hello", { name: user.name })}
      </h1>
      <Button onClick={onLogoutHandle}>Logout</Button>
    </>
  );
}
