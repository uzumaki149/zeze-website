
import Image from "next/image";
import Link from "next/link";

function ContentPreview({ title, linkLabel, href, items = [] }) {
  return (
    <section className="mt-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-ui text-2xl font-semibold lowercase tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          {title}
        </h2>

        <Link
          href={href}
          className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {linkLabel} ↗
        </Link>
      </div>

      <div className="space-y-0">
        {items.slice(0, 4).map((item, index) => (
          <Link
            key={item.id ?? item.slug ?? item.title ?? index}
            href={item.href ?? href}
            className={
              item.image
                ? "group block overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                : "group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6"
            }
          >
            {item.image ? (
              <article className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  width={1200}
                  height={675}
                  className="h-70 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] sm:h-90 lg:h-120"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-ui text-4xl font-bold leading-tight transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl">
                    {item.title}
                  </h3>
                  {item.author && (
                    <p className="font-mono text-lg text-zinc-300 sm:text-xl">
                      by {item.author}
                    </p>
                  )}
                </div>
              </article>
            ) : (
              <>
                <div className="relative flex justify-center">
                  <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800" />

                  <span className="relative z-10 mt-1 h-2 w-2 rounded-full border-2 border-zinc-400 bg-white transition-colors group-hover:border-green-500 group-hover:bg-green-500 dark:border-zinc-600 dark:bg-zinc-950" />

                  <time className="absolute right-0 top-5 text-[10px] text-zinc-400 sm:text-xs">
                    {item.date}
                  </time>
                </div>

                <div className="min-w-0 border-b border-zinc-200 pb-5 dark:border-zinc-800">
                  <h3 className="font-ui text-base font-medium text-zinc-800 transition-colors group-hover:text-green-600 dark:text-zinc-200 dark:group-hover:text-green-400">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ContentPreview;
