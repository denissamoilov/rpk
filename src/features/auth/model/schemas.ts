import { useTranslations } from "next-intl";
import { z } from "zod";

const MIN_PASSWORD_LENGTH = 8;

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(MIN_PASSWORD_LENGTH, {
    message: "Password must be at least 8 characters long",
  }),
});

export const useLoginSchema = () => {
  //   const t = useTranslations();
  return z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      //   message: t("Errors.passwordTooShort"),
      message: "Password must be at least 8 characters long",
    }),
  });
};

export type LoginFormData = z.infer<ReturnType<typeof useLoginSchema>>;

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  agreedToTerms: z.string().optional(),
});

export const useSignupSchema = () => {
  //   const t = useTranslations();
  return z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      //   message: t("Errors.passwordTooShort"),
      message: "Password must be at least 8 characters long",
    }),
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" }),
    agreedToTerms: z.string().optional(),
    // agreedToTerms: z.string().refine((v) => v === "true", {
    //   message: t("Errors.agreeToTermsRequired"),
    // }),
  });
};

export type SignupFormData = z.infer<ReturnType<typeof useSignupSchema>>;

export const useForgotPasswordSchema = () => {
  //   const t = useTranslations();
  return z.object({
    email: z.string().email({ message: "Invalid email" }),
  });
};

export type ForgotPasswordFormData = z.infer<
  ReturnType<typeof useForgotPasswordSchema>
>;

export const useNewPasswordSchema = () => {
  //   const t = useTranslations();
  return z.object({
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(MIN_PASSWORD_LENGTH, {
      message: "Password must be at least 8 characters long",
    }),
  });
};

export type NewPasswordFormData = z.infer<
  ReturnType<typeof useNewPasswordSchema>
>;
