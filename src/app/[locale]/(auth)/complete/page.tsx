import CompletePage from "@/pages/CompletePage/CompletePage";
import { setRequestLocale } from "next-intl/server";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return <CompletePage />;
}
