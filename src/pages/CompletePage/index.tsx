"use client";

import React, { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui/Button/Button";
import Link from "next/link";
import { useUserStore } from "@/entities/user/model/store";
import { trpc } from "@/app/_trpc/client";
import { sendEmail } from "@/shared/utils/emails";

export default function CompletePage() {
  const t = useTranslations("Auth.CompletePage");
  const { user } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldFetchToken, setShouldFetchToken] = useState(false);

  const {
    data: requestToken,
    isLoading: isRequestTokenLoading,
    error,
  } = trpc.auth.getRequestToken.useQuery(
    { id: user!.id },
    {
      enabled: shouldFetchToken && !!user,
      onSuccess: (data) => {
        sendEmail({
          token: data,
          uid: user!.id,
          email: user!.email,
        }).then(() => {
          setIsLoading(false);
          setShouldFetchToken(false);
        });
      },
      onError: (err) => {
        console.error("Error fetching request token:", err);
        setIsLoading(false);
        setShouldFetchToken(false);
      },
    }
  );

  const handleResendEmail = useCallback(() => {
    if (!user) return;
    setIsLoading(true);
    setShouldFetchToken(true);
  }, [user]);

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
        disabled={!user}
        onClick={handleResendEmail}
      >
        {t("resendEmail")}
      </Button>
      <Link href="/">{t("goToHome")}</Link>
    </div>
  );
}
