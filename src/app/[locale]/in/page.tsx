import { OfficePage } from "@/pages/OfficePage";
import { setRequestLocale } from "next-intl/server";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return <OfficePage />;
}
