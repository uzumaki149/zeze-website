import SidebarIdentity from "./SidebarIdentity";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  return (
    
<header className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
  <nav
    aria-label="Main navigation"
    className="
      relative flex items-center gap-1
      rounded-full border border-white/70
      bg-[#e9edf2] px-2 py-2
      shadow-[0_5px_18px_rgba(15,23,42,0.07)]
      dark:border-zinc-700/70
      dark:bg-zinc-900
      dark:shadow-[0_5px_18px_rgba(0,0,0,0.25)]
      before:pointer-events-none before:absolute before:inset-px
      before:rounded-full before:border before:border-white/50
      before:content-['']
      dark:before:border-white/5
      sm:gap-2 sm:px-3
      lg:gap-3 lg:px-4 lg:py-2.5
    "
  >
    <SidebarIdentity />

    <div className="mx-1 h-6 w-px shrink-0 bg-zinc-300/80 dark:bg-zinc-700 lg:h-7" />

    <SidebarNavigation />

    <div className="mx-1 h-6 w-px shrink-0 bg-zinc-300/80 dark:bg-zinc-700 lg:h-7" />

    <div className="rounded-full bg-[#e9edf2] p-0.5 shadow-[inset_2px_2px_5px_rgba(163,177,198,0.35),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] dark:bg-zinc-900 dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.04)] sm:p-1">
      <ThemeToggle />
    </div>
  </nav>
</header>

  );
}

export default Sidebar;
