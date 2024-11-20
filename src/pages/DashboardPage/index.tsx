"use client";

import { trpc } from "@/app/_trpc/client";
import { useUserStore } from "@/entities/user/model/store";
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

  const { mutateAsync: logout } = trpc.auth.logout.useMutation();

  useEffect(() => {
    if (authError) {
      router.push("/login");
    }
  }, [authError, router]);

  // console.log("userData ::", userData);
  // console.log("isFetched ::", isFetched);

  // if (isFetched && !userData?.id) {
  //   router.push("/login");
  // }

  // If cookie access token is not set, redirect to login
  // useEffect(() => {
  //   fetch("/api/get-token")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const token = data.token;
  //       // setAccessToken(token);
  //       console.log("token :: ", data);
  //       if (!token) {
  //         router.push("/login");
  //       }
  //     });
  // }, [router]);

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
        {userData?.name && t("hello", { name: userData.name })}
      </h1>
      <Button onClick={onLogoutHandle}>Logout</Button>
    </>
  );
}
