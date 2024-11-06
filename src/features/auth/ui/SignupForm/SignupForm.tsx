"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useTranslations } from "next-intl";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { GoogleIcon } from "@/shared/icons/GoogleIcon";
import { Separator } from "@/shared/ui/Separator/Separator";
import { useSignupSchema } from "../../model/schemas";
import { SignupFormData } from "../../model/schemas";
import { trpc } from "@/app/_trpc/client";
import { useSignup } from "../../api/signup";
import { useUserStore } from "@/entities/user/model/store";

export const SignupForm = () => {
  const t = useTranslations();
  const signupSchema = useSignupSchema();
  const setUser = useUserStore((state) => state.setUser);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const { mutateAsync: signUp, isLoading } = trpc.auth.register.useMutation();

  const onSubmit = async (data: SignupFormData) => {
    console.log("data  ::", data);

    const processedData = {
      ...data,
      //   agreedToTerms: data.agreedToTerms === "true",
    };

    try {
      //   const result = await signup.mutateAsync(processedData);
      const result = await signUp(processedData);
      if (result.success) {
        setUser({ ...result.user, status: "active" });
        router.push("/"); // Redirect to login page after successful signup
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes("already exists")) {
          setError("email", {
            type: "manual",
            message: t("Errors.emailAlreadyExists"),
          });
        } else {
          console.log("error  ::", error);
          setError("root", {
            type: "manual",
            message: t("Errors.somethingWentWrong"),
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
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

        <Checkbox
          {...register("agreedToTerms", {
            required: t("Errors.agreeToTermsRequired"),
          })}
          error={errors.agreedToTerms?.message}
          id="agreedToTerms"
          label={t.rich("Auth.SignupForm.agreeToTerms", {
            termsLink: (chunks) => (
              <Link href="/terms-and-conditions">{chunks}</Link>
            ),
          })}
        />

        <Button
          type="submit"
          disabled={isSubmitting || isLoading}
          isLoading={isSubmitting || isLoading}
          size="lg"
        >
          {isSubmitting || isLoading
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
      <p className="text-center text-md text-gray-600">
        {t("Auth.SignupForm.haveAccount")}{" "}
        <Link href="/">{t("Auth.LoginForm.login")}</Link>
      </p>
    </div>
  );
};
