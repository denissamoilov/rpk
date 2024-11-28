import { Button } from "@/shared/ui/Button/Button";
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
  DrawerHeader,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay,
} from "@/shared/ui/Drawer/Drawer";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const CreateCompanyDrawer = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" leftIcon={<Plus />}>
          {t("Buttons.addCompany")}
        </Button>
      </DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div>Create company form</div>
        {/* <ProfileForm className="px-4" /> */}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
