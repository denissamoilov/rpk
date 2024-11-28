import { trpc } from "@/app/_trpc/client";
import { Button, Input, Link } from "@/shared/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/Avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/shared/ui/Dropdown/Dropdown";
import {
  Bell,
  ChevronDown,
  LucideLogOut,
  Plus,
  ReceiptText,
  Search,
  Settings2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { CreateCompanyDrawer } from "../CreateCompanyDrawer/CreateCompanyDrawer";

export const Header = () => {
  const t = useTranslations();
  const router = useRouter();

  const { mutateAsync: logout } = trpc.auth.logout.useMutation();

  const {
    data: userData,
    isLoading: userDataLoading,
    error: authError,
  } = trpc.auth.getUser.useQuery();

  const onLogoutHandle = useCallback(async () => {
    const result = await logout();

    if (result.success) {
      router.push("/");
    }
  }, [logout, router]);
  return (
    <header className="flex items-center justify-between px-5 py-4 gap-3">
      <Input
        placeholder={t("Common.search")}
        className="max-w-md"
        leftIcon={<Search size={20} strokeWidth={1.5} />}
      />
      <div className="flex gap-3">
        <Button variant="ghost" size="icon-md" leftIcon={<Bell />} />
        <CreateCompanyDrawer />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 items-center rounded-full">
            <Avatar>
              {userData?.image && <AvatarImage src={userData?.image} />}
              <AvatarFallback>{userData?.name}</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="dropdown-item">
              <Link href="#">
                <Settings2 size={16} strokeWidth={1.5} />
                {t("Common.contracts")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="dropdown-item">
              <Link href="#">
                <ReceiptText size={16} strokeWidth={1.5} />
                {t("Common.settings")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                className="w-full justify-start"
                size="xs"
                variant="ghost"
                onClick={onLogoutHandle}
                leftIcon={<LucideLogOut size={16} strokeWidth={1.5} />}
              >
                {t("Buttons.logout")}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
