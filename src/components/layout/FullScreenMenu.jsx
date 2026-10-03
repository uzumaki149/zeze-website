"use client";

import { X } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import SidebarNavigation from "./SidebarNavigation";
import SidebarSocials from "./SidebarSocials";
import SidebarEmail from "./SidebarEmail";

function FullScreenMenu({ onClose }) {
  return (
    <div
      className="
        fixed
        inset-0
        z-60
        flex
        flex-col
        bg-white
        dark:bg-zinc-950
        lg:hidden
      "
    >
      {/* Top Bar */}
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          border-zinc-200
          px-5
          py-4
          dark:border-zinc-800
        "
      >
        <Link
          href="/"
          onClick={onClose}
          className="font-ui text-xl font-semibold text-zinc-900 transition-opacity hover:opacity-70 dark:text-blue-500"
        >
          M. Zanzenj
        </Link>

        <button
          onClick={onClose}
          className="
            rounded-lg
            p-2
            text-zinc-900
            transition
            hover:bg-zinc-100
            dark:text-zinc-100
            dark:hover:bg-zinc-800
          "
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </header>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-8">
        <SidebarNavigation onNavigate={onClose} />

        <div className="mt-10">
          <p className="mb-3 font-ui text-sm text-zinc-500">
            Theme
          </p>

          <div className="inline-flex">
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-auto">
          <SidebarSocials />
          <SidebarEmail />
        </div>
      </div>
    </div>
  );
}

export default FullScreenMenu;
