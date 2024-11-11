import ConfirmEmailPage from "@/pages/ConfirmEmailPage/ConfirmEmailPage";
import { setRequestLocale } from "next-intl/server";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return <ConfirmEmailPage />;
}
