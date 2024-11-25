import { LanguageSelector } from "@/features";
import { Button, Link } from "@/shared/ui";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

export const Sidebar = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-10 h-full justify-between">
      <div>
        <Button variant="outline" leftIcon={<Plus />}>
          {t("Buttons.addCompany")}
        </Button>
      </div>
      <nav className="h-full">
        <ul className="flex flex-col gap-1">
          <li className="bg-primary-500 input-md">
            <Link href="#">{t("Sidebar.Menu.sell")}</Link>
          </li>
          <li className="bg-primary-500 input-md">
            <Link href="#">{t("Sidebar.Menu.buy")}</Link>
          </li>
          <li className="bg-primary-500 input-md">
            <Link href="#">{t("Sidebar.Menu.reports")}</Link>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
    </div>
  );
};
