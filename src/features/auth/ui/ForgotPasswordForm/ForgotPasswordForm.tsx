"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/shared/ui";
import { useTranslations } from "next-intl";
import {
  useForgotPasswordSchema,
  type ForgotPasswordFormData,
} from "../../model/schemas";

export const ForgotPasswordForm = () => {
  const t = useTranslations();

  const forgotPasswordSchema = useForgotPasswordSchema();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log("Forgot Password Data:", data);
    // Call your forgot password API here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        {...register("email")}
        type="email"
        placeholder={t("Auth.ForgotPassword.emailExample")}
        label={t("Auth.ForgotPassword.email")}
        error={errors.email?.message}
        size="lg"
      />
      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? t("Common.loading") : t("Buttons.submit")}
      </Button>
    </form>
  );
};
