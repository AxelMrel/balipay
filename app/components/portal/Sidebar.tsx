"use client";

import Link from "next/link";
import { useState } from "react";
import { logoutAction } from "@/app/[lang]/(portal)/actions";
import { localizedPath, type Locale } from "@/app/lib/locales";

type Labels = {
  menu: string;
  overview: string;
  assets: string;
  activity: string;
  website: string;
  logout: string;
};

export default function Sidebar({
  locale,
  labels,
  user,
}: {
  locale: Locale;
  labels: Labels;
  user: { name: string; email: string };
}) {
  const [open, setOpen] = useState(false);
  const initials = user.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const items = [
    { href: "#overview", icon: "fa-th-large", label: labels.overview },
    { href: "#assets", icon: "fa-pie-chart", label: labels.assets },
    { href: "#activity", icon: "fa-exchange", label: labels.activity },
  ];

  return (
    <>
      <button className="dash-burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={labels.menu}>
        <i className={`fa ${open ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
      </button>
      <aside className={`dash-side${open ? " open" : ""}`}>
        <Link href={localizedPath(locale, "/")} className="dash-logo">
          <img src="/img/logo.png" alt="BarilPay" />
        </Link>
        <nav>
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <i className={`fa ${item.icon}`} aria-hidden="true"></i>
              {item.label}
            </a>
          ))}
          <Link href={localizedPath(locale, "/")}>
            <i className="fa fa-globe" aria-hidden="true"></i>
            {labels.website}
          </Link>
        </nav>
        <div className="dash-user">
          <span className="dash-avatar" aria-hidden="true">
            {initials}
          </span>
          <div>
            <strong>{user.name}</strong>
            <small>{user.email}</small>
          </div>
        </div>
        <form action={logoutAction}>
          <input type="hidden" name="lang" value={locale} />
          <button type="submit" className="dash-logout">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            {labels.logout}
          </button>
        </form>
      </aside>
      {open && <div className="dash-scrim" onClick={() => setOpen(false)}></div>}
    </>
  );
}
