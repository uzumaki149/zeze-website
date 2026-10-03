
import Image from "next/image";
import Link from "next/link";

const stacks = [
  {
    icon: "/icons/react.svg",
    name: "React",
    category: "UI Library",
    description:
      "Builds reusable user interfaces with a component-based architecture.",
    status: "Currently using",
  },
  {
    icon: "/icons/tailwindcss-icon-svgrepo-com.svg",
    name: "Tailwind CSS",
    category: "CSS Framework",
    description:
      "Utility-first CSS framework used to build the responsive design system.",
    status: "Currently using",
  },
  {
    icon: "/icons/git.svg",
    name: "Git",
    category: "Version Control",
    description:
      "Tracks source-code changes and keeps the project history manageable.",
    status: "Daily Tool",
  },
];

function StackPreview() {
  return (
    <section className="mt-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            My toolkit
          </p>

          <h2 className="font-ui text-3xl font-semibold lowercase text-zinc-900 dark:text-zinc-100">
            stacks
          </h2>
        </div>

        <Link
          href="/stacks"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          all_stacks ↗
        </Link>
      </div>

      <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map((stack, index) => (
          <article
            key={stack.name}
            className="border-t border-zinc-300 py-5 dark:border-zinc-800"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <Image
                src={stack.icon}
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="h-6 w-6 object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {stack.name}
            </h3>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {stack.category}
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {stack.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StackPreview;
