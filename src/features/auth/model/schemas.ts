import { useTranslations } from "next-intl";
import { z } from "zod";

const MIN_PASSWORD_LENGTH = 8;

export const useLoginSchema = () => {
  const t = useTranslations();
  return z.object({
    email: z.string().email({ message: t("Errors.invalidEmail") }),
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      message: t("Errors.passwordTooShort"),
    }),
  });
};

export type LoginFormData = z.infer<ReturnType<typeof useLoginSchema>>;

export const useSignupSchema = () => {
  const t = useTranslations();
  return z.object({
    email: z.string().email({ message: t("Errors.invalidEmail") }),
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      message: t("Errors.passwordTooShort"),
    }),
    name: z.string().min(2, { message: t("Errors.nameTooShort") }),
    agreeToTerms: z.string().refine((v) => v === "true", {
      message: t("Errors.agreeToTermsRequired"),
    }),
  });
};

export type SignupFormData = z.infer<ReturnType<typeof useSignupSchema>>;

export const useForgotPasswordSchema = () => {
  const t = useTranslations();
  return z.object({
    email: z.string().email({ message: t("Errors.invalidEmail") }),
  });
};

export type ForgotPasswordFormData = z.infer<
  ReturnType<typeof useForgotPasswordSchema>
>;

export const useNewPasswordSchema = () => {
  const t = useTranslations();
  return z.object({
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      message: t("Errors.passwordTooShort"),
    }),
    confirmPassword: z.string().min(MIN_PASSWORD_LENGTH, {
      message: t("Errors.passwordTooShort"),
    }),
  });
};

export type NewPasswordFormData = z.infer<
  ReturnType<typeof useNewPasswordSchema>
>;
