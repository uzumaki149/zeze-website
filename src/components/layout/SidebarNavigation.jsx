"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserRound,
  Newspaper,
  NotebookPen,
  Layers3,
  Mail,
  FolderKanban,
} from "lucide-react";

const navigation = [
  { label: "About", to: "/about", Icon: UserRound },
  { label: "Blog", to: "/blog", Icon: Newspaper },
  { label: "Journal", to: "/journal", Icon: NotebookPen },
  { label: "Projects", to: "/projects", Icon: FolderKanban },
  { label: "Stacks", to: "/stacks", Icon: Layers3 },
  { label: "Contact", to: "/contact", Icon: Mail },
];

function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <div className="flex shrink-0 items-center gap-0.5 lg:gap-1.5">
      {navigation.map(({ label, to, Icon }) => {
        const isActive =
          pathname === to || pathname.startsWith(`${to}/`);

        return (
          <Link
            key={to}
            href={to}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
            title={label}
            className={`
              group relative flex h-7 w-7 xl:h-8 xl:w-8 shrink-0 items-center justify-center
              rounded-lg border transition-all duration-200 ease-out
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-blue-500
              sm:h-10 sm:w-10 sm:rounded-xl
              ${
                isActive
                  ? "border-zinc-300/70 bg-[#e1e6ed] text-blue-600 shadow-[inset_3px_3px_6px_rgba(150,160,175,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-blue-400 dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.04)]"
                  : "border-transparent bg-transparent text-zinc-600 hover:bg-black/4 dark:text-zinc-400 dark:hover:bg-white/6 dark:hover:text-zinc-100"
              }
            `}
          >
            <span
              className={`
                flex h-7 w-7 items-center justify-center rounded-md
                transition-all duration-200
                sm:h-8 sm:w-8 sm:rounded-lg
                ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.12)] dark:bg-zinc-700 dark:text-white"
                    : "text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-zinc-100"
                }
              `}
            >
              <Icon
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:scale-105 sm:h-4.5 sm:w-4.5"
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarNavigation;
