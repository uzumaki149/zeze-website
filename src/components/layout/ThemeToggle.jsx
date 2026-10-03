
"use client";

import { flushSync } from "react-dom";
import useTheme from "../../hooks/useTheme";
import { Monitor, Sun, Moon } from "lucide-react";

const themes = [
  { id: "system", label: "System", icon: Monitor },
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (nextTheme, event) => {
    if (theme === nextTheme) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-reveal-x", `${x}px`);
    root.style.setProperty("--theme-reveal-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !document.startViewTransition
    ) {
      setTheme(nextTheme);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
  };

  return (
    <div
      className="
        inline-flex items-center rounded-full border border-zinc-200/70
        bg-white/90 p-0.5 backdrop-blur transition-colors duration-300
        dark:border-zinc-700 dark:bg-zinc-900/90
      "
    >
      {themes.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            type="button"
            onClick={(event) => handleThemeChange(item.id, event)}
            aria-label={item.label}
            aria-pressed={theme === item.id}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
              theme === item.id
                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;
