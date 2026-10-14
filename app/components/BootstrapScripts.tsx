"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type JQueryStatic = (selector: string) => { carousel: () => void };

let loading: Promise<void> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

// Bootstrap 4 tabs / carousels need jQuery, loaded first.
function loadBootstrap() {
  loading ??= loadScript("/js/jquery.min.js").then(() => loadScript("/js/bootstrap.bundle.min.js"));
  return loading;
}

export default function BootstrapScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // data-ride="carousel" is only auto-initialised on window load; run it after each client-side navigation.
    loadBootstrap().then(() => {
      const $ = (window as unknown as { jQuery: JQueryStatic }).jQuery;
      $('[data-ride="carousel"]').carousel();
    });
  }, [pathname]);

  return null;
}
