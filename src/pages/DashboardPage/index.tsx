"use client";

import { useUserStore } from "@/entities/user/model/store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export function DashboardPage() {
  const t = useTranslations("Index");
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // If cookie access token is not set, redirect to login
  useEffect(() => {
    fetch("/api/get-token")
      .then((res) => res.json())
      .then((data) => setAccessToken(data.token));
  }, []);

  if (!accessToken && !user) {
    router.push("/login");
  }

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">
        {user?.name && t("hello", { name: user.name })}
      </h1>
    </>
  );
}
