import { BriefcaseBusiness } from "lucide-react";

function Biography() {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          <BriefcaseBusiness size={18} aria-hidden="true" />
        </div>

        <h2 className="font-ui text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          About
        </h2>
      </div>

      <div className="max-w-3xl space-y-4 font-ui text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
        <p>
          I'm currently a fourth-year student at Saint Francis College
          Guihulngan in Negros Oriental. I'm always looking to learn and grow
          in the field of technology, with a strong focus on becoming a
          full-stack software developer.
        </p>

        <p>
          Before reaching my final year of college, I spent my time diving
          deep into modern web technologies to prepare myself for the
          industry. I am constantly building and sharpening my skills by
          learning the basics of front-end and back-end development.
        </p>
      </div>
    </article>
  );
}

export default Biography;