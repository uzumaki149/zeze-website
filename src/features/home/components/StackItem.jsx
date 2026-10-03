
function StackItem({
  name,
  category,
  description,
  status,
  icon: Icon,
}) {
  return (
    <article
      className="
        group flex h-full flex-col rounded-xl
        border border-zinc-200 bg-white/60 p-5
        transition-colors duration-200
        hover:border-zinc-400 hover:bg-zinc-50
        dark:border-zinc-800 dark:bg-zinc-900/50
        dark:hover:border-zinc-600 dark:hover:bg-zinc-900
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <Icon
            className="h-6 w-6 text-zinc-700 dark:text-zinc-100"
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-ui text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {category}
          </p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-5">
        <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {status}
        </span>
      </div>
    </article>
  );
}

export default StackItem;
