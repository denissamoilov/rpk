import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { useTranslations } from "next-intl";
export default function LoginPage() {
  const t = useTranslations("Index");

  return (
    <>
      <h1 className="text-heading-1 text-center mb-6">{t("login")}</h1>
      <LoginForm />
    </>
  );
}
