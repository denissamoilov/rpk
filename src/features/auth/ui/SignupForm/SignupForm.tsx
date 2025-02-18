"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Checkbox, Separator, Link } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { GoogleIcon } from "@/shared/icons/GoogleIcon";
import { useSignupSchema } from "../../model/schemas";
import { SignupFormData } from "../../model/schemas";
import { trpc } from "@/app/_trpc/client";
import { useUserStore } from "@/entities/user/model/store";
import { sendEmail } from "@/shared/utils/emails";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
  const t = useTranslations();
  const signupSchema = useSignupSchema();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const { mutateAsync: signUp, isLoading: isSignUpLoading } =
    trpc.auth.signup.useMutation();

  const onSubmit = async (data: SignupFormData) => {
    try {
      const result = await signUp(data);

      if (result.success) {
        await sendEmail({
          token: result.user.requestToken,
          uid: result.user.id,
          email: result.user.email,
        });

        setUser({ ...result.user });

        router.push("/confirm-email");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes("already exists")) {
          setError("email", {
            type: "manual",
            message: t("Errors.emailAlreadyExists"),
          });
        } else {
          setError("root", {
            type: "manual",
            message: t("Errors.somethingWentWrong"),
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {errors.root && (
          <div className="text-red-500 text-sm text-center">
            {errors.root.message}
          </div>
        )}

        <Input
          {...register("name", {
            required: t("Errors.nameRequired"),
            minLength: {
              value: 2,
              message: t("Errors.nameTooShort"),
            },
          })}
          error={errors.name?.message}
          type="text"
          placeholder={t("Auth.SignupForm.nameExample")}
          label={t("Auth.SignupForm.name")}
          size="lg"
        />

        <Input
          {...register("email", {
            required: t("Errors.emailRequired"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("Errors.invalidEmail"),
            },
          })}
          error={errors.email?.message}
          type="email"
          placeholder={t("Auth.SignupForm.emailExample")}
          label={t("Auth.SignupForm.email")}
          size="lg"
        />

        <Input
          {...register("password", {
            required: t("Errors.passwordRequired"),
            minLength: {
              value: 8,
              message: t("Errors.passwordTooShort"),
            },
          })}
          error={errors.password?.message}
          type="password"
          placeholder={t("Auth.SignupForm.passwordExample")}
          label={t("Auth.SignupForm.password")}
          size="lg"
        />
        <Controller
          control={control}
          name={`agreedToTerms`}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              onCheckedChange={onChange}
              checked={value === true}
              error={errors.agreedToTerms?.message}
              id="agreedToTerms"
              label={t.rich("Auth.SignupForm.agreeToTerms", {
                termsLink: (chunks) => (
                  <Link href="/terms-and-conditions">{chunks}</Link>
                ),
              })}
            />
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting || isSignUpLoading}
          isLoading={isSubmitting || isSignUpLoading}
          size="lg"
        >
          {isSubmitting || isSignUpLoading
            ? t("Common.loading")
            : t("Auth.SignupForm.createAccount")}
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
        >
          <GoogleIcon className="h-6 w-6" />
          {t("Common.continueWithGoogle")}
        </Button>
      </div>
      <p className="text-center text-md">
        {t("Auth.SignupForm.haveAccount")}{" "}
        <Link href="/">{t("Auth.LoginForm.login")}</Link>
      </p>
    </div>
  );
};
