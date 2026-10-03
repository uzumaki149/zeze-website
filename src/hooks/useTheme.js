"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

export default function useTheme() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) || "system";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" && mediaQuery.matches);

      root.classList.toggle("dark", isDark);
    };

    applyTheme();
    localStorage.setItem(STORAGE_KEY, theme);

    if (theme === "system") {
      mediaQuery.addEventListener("change", applyTheme);
      return () => mediaQuery.removeEventListener("change", applyTheme);
    }
  }, [theme]);

  return { theme, setTheme };
}
