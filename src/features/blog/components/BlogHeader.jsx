import Image from "next/image";
import Link from "next/link";

function BlogHeader({ post }) {
  return (
    <header>
      <Link
        href="/blog"
        className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &lt; all_post
      </Link>

      <p className="mt-6 font-mono text-xs text-zinc-500 lg:mt-8">
        {post.date}
      </p>

      <h1
        className="
          mt-4
          max-w-4xl
          font-ui
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-zinc-900
          sm:text-5xl
          lg:text-6xl
          dark:text-zinc-100
        "
      >
        {post.title}
      </h1>

      <p
        className="
          mt-5
          max-w-3xl
          line-clamp-2
          text-sm
          leading-7
          text-zinc-500
          dark:text-zinc-400
        "
      >
        {post.excerpt}
      </p>

      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={675}
        className="
          mt-8
          h-56
          w-full
          rounded-xl
          object-cover
          sm:h-72
          lg:h-80
        "
      />
    </header>
  );
}

export default BlogHeader;