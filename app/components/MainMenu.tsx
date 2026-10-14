"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localizedPath, type Locale } from "@/app/lib/locales";

export type MenuItem = { label: string; href: string; children?: { label: string; href: string }[] };

const DESKTOP_MIN = 992;

type Props = {
  locale: Locale;
  items: MenuItem[];
  cta: { label: string; href: string };
  login: { label: string; href: string };
};

export default function MainMenu({ locale, items, cta, login }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Close menus when navigating to another page.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenIndex(null);
  }

  useEffect(() => {
    const reset = () => {
      setOpenIndex(null);
      setMobileOpen(false);
    };
    window.addEventListener("resize", reset);
    return () => window.removeEventListener("resize", reset);
  }, []);

  const isDesktop = () => window.innerWidth >= DESKTOP_MIN;

  return (
    <div className="main_menu float-left">
      <div className="menu">
        <a
          href="#"
          className="menu-mobile"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(!mobileOpen);
          }}
        >
          &nbsp;
        </a>
        <ul className={`clearfix${mobileOpen ? " show-on-mobile" : ""}`}>
          {items.map((item, i) => {
            const active = localizedPath(locale, item.href) === pathname;
            const open = openIndex === i;
            return (
              <li
                key={item.label}
                className={[active ? "active" : "", item.children ? "menu-dropdown-icon" : ""].join(" ").trim()}
                onMouseEnter={() => item.children && isDesktop() && setOpenIndex(i)}
                onMouseLeave={() => item.children && isDesktop() && setOpenIndex(null)}
                onClick={() => item.children && !isDesktop() && setOpenIndex(open ? null : i)}
              >
                <Link href={item.href.startsWith("/") ? localizedPath(locale, item.href) : item.href}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="normal-sub" style={{ display: open ? "block" : "none" }}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={localizedPath(locale, c.href)}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu_actions">
        <Link href={localizedPath(locale, login.href)} className="menu_login">
          {login.label}
        </Link>
        <Link href={localizedPath(locale, cta.href)} className="menu_cta">
          {cta.label}
          <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
