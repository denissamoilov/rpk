"use client";

import { Link } from "@/shared/ui";
import { useTranslations } from "next-intl";
export function HomePage() {
  const t = useTranslations("Index");

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">{t("welcome")}</h1>
      <Link href="/login">{t("login")}</Link>
    </>
  );
}
