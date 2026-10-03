import Image from "next/image";

function AuthorCard({ post }) {
  return (
    <section className="mb-10 lg:mb-16">
      <div
        className="
          flex
          flex-col
          items-start
          gap-4
          sm:flex-row
          sm:items-center
        "
      >
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={56}
          height={56}
          className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
        />

        <div>
          <p className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {post.author.name}
          </p>

          <p className="font-ui text-sm text-zinc-500 dark:text-zinc-400">
            {post.author.role}
          </p>
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
    </section>
  );
}

export default AuthorCard;