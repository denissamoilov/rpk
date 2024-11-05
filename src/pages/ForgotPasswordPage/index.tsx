import { ForgotPasswordForm } from "@/features/auth/ui/ForgotPasswordForm/ForgotPasswordForm";
import { useTranslations } from "next-intl";

export function ForgotPasswordPage() {
  const t = useTranslations("Auth.ForgotPassword");

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">{t("title")}</h1>
      <ForgotPasswordForm />
    </>
  );
}
