import Image from "next/image";

import {
  siNextdotjs,
  siReact,
  siTailwindcss,
  siLucide,
  siNodedotjs,
  siLaravel,
  siFigma,
} from "simple-icons";

const iconMap = {
  "Next.js": siNextdotjs,
  React: siReact,
  "Tailwind CSS": siTailwindcss,
  "Lucide React": siLucide,
  "Node.js": siNodedotjs,
  Laravel: siLaravel,
  Figma: siFigma,
};

const localIconMap = {
  Canva: "/icons/canva-svgrepo-com.svg",
  ChatGPT: "/icons/openai-com-logo.svg",
  Claude: "/icons/Claude_AI_symbol.svg",
  Git: "/icons/git.svg",
};

function StackItem({ stack }) {
  return (
    <article className="group flex min-h-52 flex-col rounded-2xl border border-zinc-200/80 bg-white/50 p-5 transition-colors duration-300 hover:border-zinc-400/80 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-600 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-grotesque text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          {stack.name}
        </h2>

        <span className="font-mono text-[10px] tracking-widest text-zinc-400">
          {String(stack.id).padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stack.technologies.map((technology) => {
          const icon = iconMap[technology.name];
          const localIcon = localIconMap[technology.name];

          return (
            <div
              key={technology.name}
              className="group/item flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-transparent p-3 text-center transition-all duration-300 hover:border-zinc-200 hover:bg-zinc-100/70 dark:hover:border-zinc-800 dark:hover:bg-zinc-800/50"
            >
              <div className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover/item:-translate-y-1 motion-reduce:transition-none">
                {localIcon ? (
                  <Image
                    src={localIcon}
                    alt={`${technology.name} logo`}
                    width={36}
                    height={36}
                    className={`h-9 w-9 object-contain ${
                      ["Canva", "ChatGPT"].includes(technology.name)
                        ? "dark:brightness-0 dark:invert"
                        : ""
                    }`}
                  />
                ) : (
                  icon && (
                    <svg
                      role="img"
                      aria-label={`${technology.name} logo`}
                      viewBox="0 0 24 24"
                      className={`h-9 w-9 ${
                        technology.name === "Next.js"
                          ? "dark:fill-white"
                          : ""
                      }`}
                      fill={`#${icon.hex}`}
                    >
                      <path d={icon.path} />
                    </svg>
                  )
                )}
              </div>

              <span className="font-grotesque text-sm font-medium text-zinc-600 transition-colors group-hover/item:text-zinc-950 dark:text-zinc-400 dark:group-hover/item:text-zinc-100">
                {technology.name}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default StackItem;
