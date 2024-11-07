"use client";

import { useCallback } from "react";
import { useAppStore } from "@/entities/app/model/store";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Select, SelectProps } from "@/shared/ui/Select/Select";
export const LanguageSelector = () => {
  const t = useTranslations("LanguageSelector");
  const locale = useLocale();
  const { language, setLanguage } = useAppStore();
  const router = useRouter();
  const currentPathname = usePathname();

  const languageChangeHandler = useCallback(
    (value: string) => {
      const newLocale = value;

      const days = 30;
      const date = new Date();
      date.setDate(date.getDate() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (newLocale !== locale) {
        setLanguage(newLocale);
        router.push(currentPathname!.replace(`/${locale}`, `/${newLocale}`));
      }
    },
    [router, language]
  );

  return (
    <Select
      className="w-auto"
      size="sm"
      options={[
        { value: "en", label: t("english") },
        { value: "et", label: t("estonian") },
        { value: "ru", label: t("russian") },
      ]}
      value={language}
      onChange={languageChangeHandler}
    />
  );
};
