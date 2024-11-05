"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useTranslations } from "next-intl";
import {
  useNewPasswordSchema,
  type NewPasswordFormData,
} from "../../model/schemas";

export const NewPasswordForm = () => {
  const t = useTranslations();
  const newPasswordSchema = useNewPasswordSchema();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordFormData>({
    resolver: zodResolver(newPasswordSchema),
  });

  const onSubmit = async (data: NewPasswordFormData) => {
    console.log("New Password Data:", data);
    // Call your new password API here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        {...register("password")}
        type="password"
        placeholder={t("Auth.NewPassword.passwordExample")}
        label={t("Auth.NewPassword.password")}
        error={errors.password?.message}
        size="lg"
      />
      <Input
        {...register("confirmPassword")}
        type="password"
        placeholder={t("Auth.NewPassword.confirmPasswordExample")}
        label={t("Auth.NewPassword.confirmPassword")}
        error={errors.confirmPassword?.message}
        size="lg"
      />
      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? t("Common.loading") : t("Buttons.submit")}
      </Button>
    </form>
  );
};
