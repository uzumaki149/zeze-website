export default function PostgreSqlArticle() {
  return (
    <section className="mx-auto flex min-h-87.5 max-w-2xl items-center px-6 py-16">
      <div className="w-full border-l-2 border-neutral-300 py-2 pl-6 dark:border-neutral-700 sm:pl-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          A note from me
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Not quite ready.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base">
          I’m still figuring things out with PostgreSQL. There’s more to learn,
          and I’ll share my experience here when I’m ready.
        </p>

        <p className="mt-6 text-xs text-neutral-400">
          — Zanzenj
        </p>
      </div>
    </section>
  );
}