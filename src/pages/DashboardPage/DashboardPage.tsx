"use client";

import { trpc } from "@/app/_trpc/client";
// import { useUserStore } from "@/entities/user/model/store";
import { Button } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export function DashboardPage() {
  const t = useTranslations("Index");
  // const user = useUserStore((state) => state.user);
  const router = useRouter();
  // const [accessToken, setAccessToken] = useState<string | null>(null);

  const { data: userData, error: authError } = trpc.auth.getUser.useQuery();

  useEffect(() => {
    if (authError) {
      router.push("/login");
    }
  }, [authError, router]);

  return (
    <div className="rounded-lg bg-background">
      <h1 className="text-heading-1 text-center mb-6">
        {userData?.name && t("hello", { name: userData.name })}
      </h1>
    </div>
  );
}
