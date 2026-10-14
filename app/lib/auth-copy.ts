import type { AuthCopy } from "@/app/components/portal/AuthForms";
import type { Translate } from "./i18n";

export function authCopy(t: Translate): AuthCopy {
  return {
    email: t("Email address"),
    password: t("Password"),
    name: t("Full name"),
    confirm: t("Confirm password"),
    show: t("Show"),
    hide: t("Hide"),
    submitLogin: t("Sign in"),
    submitRegister: t("Create my account"),
    pending: t("Please wait…"),
    terms: t("I agree to the Terms of Service and the Privacy Policy"),
    strength: [t("Weak"), t("Fair"), t("Good"), t("Strong")],
    errors: {
      name_required: t("Please enter your full name."),
      email_invalid: t("Please enter a valid email address."),
      email_taken: t("An account with this email already exists."),
      password_short: t("Use at least 8 characters."),
      password_weak: t("Mix letters and numbers."),
      password_mismatch: t("Passwords do not match."),
      terms_required: t("You must accept the terms to continue."),
      invalid_credentials: t("Incorrect email or password."),
    },
  };
}
