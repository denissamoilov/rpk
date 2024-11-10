"use client";

import { trpc } from "@/app/_trpc/client";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmEmailPage() {
  const t = useTranslations("Auth.ConfirmEmailPage");
  const searchParams = useSearchParams();

  const uid = searchParams?.get("uid");
  const token = searchParams?.get("token");

  const { mutateAsync: confirmEmail, isLoading: isConfirmEmailLoading } =
    trpc.auth.confirmEmail.useMutation();

  useEffect(() => {
    if (uid && token) {
      confirmEmail({ id: uid, token });
    }
  }, [uid, token, confirmEmail]);

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-heading-1">{t("congratulations")}</h1>
        <p className="text-md">{t("emailConfirmed")}</p>
      </div>
    </div>
  );
}
