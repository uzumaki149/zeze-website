import Image from "next/image";
import Link from "next/link";

import Section from "../../../components/ui/Section";
import amberJackImage from "../../../assets/images/journal/amber-jack.jpg";
import locationMapImage from "../../../assets/images/journal/location-map.png";

export default function AmberJackPage() {
  return (
    <Section>
      <article className="mx-auto w-full max-w-5xl px-4 pt-0 pb-8 sm:px-6 sm:pb-12">
        <header className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-blue-500 dark:text-zinc-400"
          >
            <span aria-hidden="true">←</span>
            all_post
          </Link>
          <span className="font-mono text-[10px] tracking-widest text-zinc-400">
            JOURNAL / 2026
          </span>
        </header>

        <figure className="overflow-hidden rounded-3xl">
          <div className="relative">
            <Image
              src={amberJackImage}
              alt="Dexter holding an Amber Jack fish"
              priority
              width={1200}
              height={675}
              className="h-auto max-h-140 w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
              <h1 className="font-ui text-4xl font-bold tracking-tight sm:text-6xl">
                Amber Jack
              </h1>
              <p className="mt-2 font-mono text-xs text-zinc-200">by Dexter</p>
            </figcaption>
          </div>
          <p className="border-b border-zinc-200 py-3 text-right font-mono text-[10px] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            Photo taken on Jul 19, 2026
          </p>
        </figure>

        <section className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_2fr] sm:gap-12">
          <div>
            <span className="font-mono text-xs text-zinc-400">01 / STORY</span>
            <h2 className="mt-3 font-ui text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              A Final Cast in Hilatan
            </h2>
          </div>
          <div className="space-y-4 font-ui text-sm leading-8 text-zinc-600 dark:text-zinc-300 sm:text-base">
            <p>
              I had the luck to go boat fishing with my friend Dexter in
              Barangay Hilatan, Guihulngan City. We started our day early,
              out on the water from 4:00 AM to 10:00 AM, testing our luck
              against the sea. The real magic happened just as our trip was
              coming to an end.
            </p>
            <p>
              Heading back to the shore is usually a quiet moment. But right
              before we packed up, Dexter decided to drop his line into the
              water one last time—a classic "one final cast" that completely
              changed the day.
            </p>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 items-center gap-6 border-y border-zinc-200 py-7 dark:border-zinc-800 sm:grid-cols-2">
          <div>
            <span className="font-mono text-xs text-zinc-400">LOCATION</span>
            <h3 className="mt-3 font-ui text-2xl font-semibold uppercase leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
              Guihulngan City
              <br />
              Philippines
            </h3>
          </div>
          <Image
            src={locationMapImage}
            alt="Location map of Guihulngan City"
            width={600}
            height={360}
            className="h-48 w-full object-cover"
          />
        </section>

        <section className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_2fr] sm:gap-12">
          <div>
            <span className="font-mono text-xs text-zinc-400">02 / EXPERIENCE</span>
            <h2 className="mt-3 font-ui text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Deep-sea action
            </h2>
          </div>
          <div className="space-y-4 font-ui text-sm leading-8 text-zinc-600 dark:text-zinc-300 sm:text-base">
            <p>Deep-sea action</p>
            <p>
              Adrenaline, screaming reels, sudden bites, deep waters, and
              massive fish: these are the things that come to mind when
              you hook a real fighter out on the ocean.
            </p>
            <p>
              The calm of our return vanished instantly when Dexter's reel
              suddenly screamed to life. We had a beautiful, sunny day and
              calm waters, which made everything perfect as he worked a
              200g Bukklan metal jig. The wild sound of the line dragging
              out made us want to shout with excitement as a powerful fish
              fought hard on the other end. It was a huge milestone for
              him; using his own fishing setup, it was the very first time
              he had ever landed a 7 1/4 KG Amberjack. When the fish
              finally hit the boat, Dexter went absolutely wild—losing his
              mind and shouting like a little kid,{" "}
              <i className="text-blue-700 dark:text-blue-400">
                "WOOOOAH Thankyou Lord Wala mo nimo zerohe!"
              </i>
            </p>
            <p>
              After that, we headed back to his house. He invited me to
              stay and eat for a while before I went home, and right
              before I left, he shared his catch and gave me half of the
              fish meat to take with me. He really is a great friend.
            </p>
          </div>
        </section>
      </article>
    </Section>
  );
}