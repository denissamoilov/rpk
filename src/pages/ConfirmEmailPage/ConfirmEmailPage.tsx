"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui/Button/Button";
import Link from "next/link";
import { sendEmail } from "@/shared/utils/emails";
import { useRouter } from "next/dist/client/components/navigation";
import { useUserStore } from "@/entities/user/model/store";

export default function ConfirmEmailPage() {
  const t = useTranslations("Auth.CompletePage");
  const [isLoading, setIsLoading] = useState(false);
  const user = useUserStore((state) => state.user);
  // const [shouldFetchToken, setShouldFetchToken] = useState(false);

  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  const token = user?.requestToken;

  // If we came from SignupForm, then we have a user in the store

  const handleResendEmail = useCallback(async () => {
    if (!token) return;

    setIsLoading(true);
    await sendEmail({
      token,
      uid: user!.id,
      email: user!.email,
    });
    setIsLoading(false);
  }, [token]);

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-heading-1">{t("emailSent")}</h1>
        <p className="text-md mb-8">{t("checkInbox")}</p>
      </div>
      <Button
        variant="primary"
        size="lg"
        isLoading={isLoading}
        disabled={!token}
        onClick={handleResendEmail}
      >
        {t("resendEmail")}
      </Button>
      <Link href="/">{t("goToHome")}</Link>
    </div>
  );
}
