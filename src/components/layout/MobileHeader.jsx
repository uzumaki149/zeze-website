
"use client";

import SidebarIdentity from "./SidebarIdentity";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";

function MobileHeader() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 xl:hidden">
      <nav
        aria-label="Mobile navigation"
        className="
          mx-auto flex w-max max-w-full items-center justify-center gap-1
          overflow-x-auto rounded-full border border-white/70
          bg-[#e9edf2] px-2 py-2
          shadow-[0_5px_18px_rgba(15,23,42,0.07)]
          dark:border-zinc-700/70 dark:bg-zinc-900
          dark:shadow-[0_5px_18px_rgba(0,0,0,0.25)]
        "
      >
        <div className="shrink-0">
          <SidebarIdentity />
        </div>

        <div className="mx-1 h-6 w-px shrink-0 bg-zinc-300/80 dark:bg-zinc-700" />

        <div className="shrink-0">
          <SidebarNavigation />
        </div>

        <div className="mx-1 h-6 w-px shrink-0 bg-zinc-300/80 dark:bg-zinc-700" />

        <div className="shrink-0 rounded-full bg-[#e9edf2] p-1 dark:bg-zinc-900">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default MobileHeader;
