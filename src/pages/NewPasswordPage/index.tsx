import { NewPasswordForm } from "@/features/auth/ui/NewPasswordForm/NewPasswordForm";
import { useTranslations } from "next-intl";

export function NewPasswordPage() {
  const t = useTranslations("Auth.NewPassword");

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">{t("title")}</h1>
      <NewPasswordForm />
    </>
  );
}
