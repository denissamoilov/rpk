import { useTranslations } from "next-intl";
import { SignupForm } from "@/features/auth/ui/SignupForm/SignupForm";
export function SignupPage() {
  const t = useTranslations("Index");

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">{t("createAccount")}</h1>
      <SignupForm />
    </>
  );
}
