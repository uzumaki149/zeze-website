"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previousBehavior;
  }, [pathname]);

  useEffect(() => {
    let hideTimeout;

    const handleScroll = () => {
      document.documentElement.classList.add("scrolling");

      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(() => {
        document.documentElement.classList.remove("scrolling");
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(hideTimeout);
      document.documentElement.classList.remove("scrolling");
    };
  }, []);

  return null;
}