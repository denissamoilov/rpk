"use client";

import { useUserStore } from "@/entities/user/model/store";
import { useTranslations } from "next-intl";
export function OfficePage() {
  const t = useTranslations("Index");
  const user = useUserStore((state) => state.user);

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">
        {user?.name && t("hello", { name: user.name })}
      </h1>
    </>
  );
}
