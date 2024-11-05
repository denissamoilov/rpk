"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useLoginSchema, type LoginFormData } from "../../model/schemas";
import { trpc } from "@/shared/api/trpc";
import { useTranslations } from "next-intl";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { Separator } from "@/shared/ui/Separator/Separator";
import { GoogleIcon } from "@/shared/icons/GoogleIcon";
import { ArrowRightIcon } from "lucide-react";

export const LoginForm = () => {
  const t = useTranslations();
  const loginSchema = useLoginSchema();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const login = trpc.auth.login.useMutation();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login.mutateAsync(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          {...register("email")}
          type="email"
          placeholder={t("Auth.LoginForm.emailExample")}
          label={t("Auth.LoginForm.email")}
          error={errors.email?.message}
          size="lg"
        />
        <Input
          {...register("password")}
          type="password"
          placeholder={t("Auth.LoginForm.passwordExample")}
          label={t("Auth.LoginForm.password")}
          error={errors.password?.message}
          size="lg"
        />
        <div className="flex justify-between items-center">
          <Checkbox id="rememberMe" label={t("Auth.LoginForm.rememberMe")} />
          <Link href="/forgot-password" className="text-md">
            {t("Auth.LoginForm.forgotPassword")}
          </Link>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting || login.isLoading}
          size="lg"
          isLoading={isSubmitting || login.isLoading}
        >
          {isSubmitting || login.isLoading
            ? t("Common.loading")
            : t("Auth.LoginForm.login")}
        </Button>
      </form>
      <Separator label={t("Common.or")} className="my-4" />

      <div className="flex flex-col gap-3">
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            /* Add Google login handler */
          }}
          leftIcon={<GoogleIcon className="h-6 w-6" />}
        >
          {t("Common.continueWithGoogle")}
        </Button>
      </div>

      <p className="text-center text-md text-gray-600">
        {t("Auth.LoginForm.noAccount")}{" "}
        <Link href="/signup">{t("Auth.LoginForm.register")}</Link>
      </p>
    </div>
  );
};
