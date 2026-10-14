"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { loginAction, registerAction, type ErrorCode, type FormState } from "@/app/[lang]/(portal)/actions";
import { localizedPath, type Locale } from "@/app/lib/locales";

export type AuthCopy = {
  email: string;
  password: string;
  name: string;
  confirm: string;
  show: string;
  hide: string;
  submitLogin: string;
  submitRegister: string;
  pending: string;
  terms: string;
  strength: [string, string, string, string];
  errors: Record<ErrorCode, string>;
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`ui-field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="ui-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function PasswordInput({
  id,
  name,
  autoComplete,
  copy,
  invalid,
  onChange,
}: {
  id: string;
  name: string;
  autoComplete: string;
  copy: Pick<AuthCopy, "show" | "hide">;
  invalid: boolean;
  onChange?: (value: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="ui-input ui-input-password">
      <i className="fa fa-lock" aria-hidden="true"></i>
      <input
        id={id}
        name={name}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        required
        aria-invalid={invalid}
        aria-describedby={invalid ? `${id}-error` : undefined}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button type="button" className="ui-toggle" onClick={() => setVisible(!visible)} aria-pressed={visible}>
        {visible ? copy.hide : copy.show}
      </button>
    </div>
  );
}

function strengthOf(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password) || password.length >= 14) score++;
  return password ? Math.max(score, 1) : 0;
}

export function LoginForm({ locale, copy }: { locale: Locale; copy: AuthCopy }) {
  const [state, action, pending] = useActionState<FormState, FormData>(loginAction, null);
  const errors = state?.errors ?? {};

  return (
    <form action={action} className="ui-form" noValidate>
      <input type="hidden" name="lang" value={locale} />
      {errors.form && (
        <p className="ui-alert" role="alert">
          {copy.errors[errors.form]}
        </p>
      )}
      <Field id="email" label={copy.email} error={errors.email && copy.errors[errors.email]}>
        <div className="ui-input">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={state?.values?.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </div>
      </Field>
      <Field id="password" label={copy.password}>
        <PasswordInput id="password" name="password" autoComplete="current-password" copy={copy} invalid={false} />
      </Field>
      <button className="ui-button" type="submit" disabled={pending}>
        {pending ? copy.pending : copy.submitLogin}
      </button>
    </form>
  );
}

export function RegisterForm({ locale, copy }: { locale: Locale; copy: AuthCopy }) {
  const [state, action, pending] = useActionState<FormState, FormData>(registerAction, null);
  const [password, setPassword] = useState("");
  const errors = state?.errors ?? {};
  const score = strengthOf(password);

  return (
    <form action={action} className="ui-form" noValidate>
      <input type="hidden" name="lang" value={locale} />
      <Field id="name" label={copy.name} error={errors.name && copy.errors[errors.name]}>
        <div className="ui-input">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={state?.values?.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </div>
      </Field>
      <Field id="email" label={copy.email} error={errors.email && copy.errors[errors.email]}>
        <div className="ui-input">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={state?.values?.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </div>
      </Field>
      <Field id="password" label={copy.password} error={errors.password && copy.errors[errors.password]}>
        <PasswordInput
          id="password"
          name="password"
          autoComplete="new-password"
          copy={copy}
          invalid={!!errors.password}
          onChange={setPassword}
        />
        <div className="ui-strength" data-score={score} aria-live="polite">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <em>{score ? copy.strength[score - 1] : ""}</em>
        </div>
      </Field>
      <Field id="confirm" label={copy.confirm} error={errors.confirm && copy.errors[errors.confirm]}>
        <PasswordInput id="confirm" name="confirm" autoComplete="new-password" copy={copy} invalid={!!errors.confirm} />
      </Field>
      <div className={`ui-check${errors.terms ? " has-error" : ""}`}>
        <label>
          <input type="checkbox" name="terms" />
          <span>{copy.terms}</span>
        </label>
        {errors.terms && (
          <p className="ui-error" role="alert">
            {copy.errors[errors.terms]}
          </p>
        )}
      </div>
      <button className="ui-button" type="submit" disabled={pending}>
        {pending ? copy.pending : copy.submitRegister}
      </button>
    </form>
  );
}

export function AuthSwitch({
  locale,
  text,
  label,
  href,
}: {
  locale: Locale;
  text: string;
  label: string;
  href: string;
}) {
  return (
    <p className="ui-switch">
      {text} <Link href={localizedPath(locale, href)}>{label}</Link>
    </p>
  );
}
