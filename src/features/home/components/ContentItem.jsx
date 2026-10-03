function ContentItem({ title, description, date }) {
  return (
    <article className="border-b border-zinc-200 py-5 last:border-b-0">
      <div className="flex items-start justify-between gap-6">
        <h3
          className="
            cursor-pointer
            font-ui
            text-lg
            font-semibold
            text-zinc-900
            transition-colors
            duration-200
            hover:text-blue-600
            dark:text-zinc-100
            dark:hover:text-blue-400
          "
          >
          {title}
        </h3>

        <time
          dateTime={date}
          className="shrink-0 font-ui text-sm text-zinc-500"
        >
          {date}
        </time>
      </div>

      <p className="mt-1 font-ui text-sm text-zinc-500">
        {description}
      </p>
    </article>
  );
}

export default ContentItem;