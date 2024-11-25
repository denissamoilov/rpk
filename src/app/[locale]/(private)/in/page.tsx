import { DashboardPage } from "@/pages/DashboardPage/DashboardPage";
import { setRequestLocale } from "next-intl/server";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return <DashboardPage />;
}
