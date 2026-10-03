
import Image from "next/image";
import Link from "next/link";

import Section from "../../../components/ui/Section";
import amberJackImage from "../../../assets/images/journal/amber-jack.jpg";

function JournalPage() {
  return (
    <Section>
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          Personal stories
        </p>

        <h1 className="mt-2 font-ui text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
          journal
        </h1>

        <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          Moments, experiences, and stories worth keeping.
        </p>
      </div>

      <Link
        href="/journal/amber-jack"
        aria-label="Read Amber Jack journal entry by Dexter"
        className="group relative block overflow-hidden rounded-2xl"
      >
        <Image
          src={amberJackImage}
          alt="Dexter holding an Amber Jack fish"
          width={1200}
          height={675}
          priority
          className="h-75 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
          <p className="font-mono text-xs text-zinc-300">
            Jul 27, 2026 · By Dexter
          </p>

          <h2 className="mt-2 font-ui text-3xl font-bold text-white sm:text-5xl">
            Amber Jack
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-200">
            A memorable fishing experience and the story behind the catch.
          </p>

          <span className="mt-5 inline-block text-sm text-white underline underline-offset-4 transition-colors group-hover:text-green-300">
            Read journal ↗
          </span>
        </div>
      </Link>
    </Section>
  );
}

export default JournalPage;
