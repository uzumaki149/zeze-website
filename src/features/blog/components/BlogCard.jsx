import Link from "next/link";
import Image from "next/image";

function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <article>
        <Image
          src={post.image}
          alt={post.title}
          width={640}
          height={360}
          className="h-48 w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <p className="mt-5 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {post.date}
        </p>

        <h2
          className="
            mt-2 line-clamp-2 font-ui text-2xl font-bold leading-tight
            text-zinc-900 transition-colors duration-300
            group-hover:text-blue-600
            dark:text-zinc-100
            dark:group-hover:text-blue-400
          "
        >
          {post.title}
        </h2>

        <div className="mt-3 flex items-center gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span>{post.readTime} read</span>
            <span>•</span>
            <span>{post.views} views</span>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;