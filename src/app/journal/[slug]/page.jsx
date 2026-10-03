
import { notFound } from "next/navigation";

import { journalEntries } from "../../../features/journal/data/journalEntries";
import AmberJackPage from "../../../features/journal/pages/AmberJackPage";

const journalPages = {
  "amber-jack": AmberJackPage,
};

export function generateStaticParams() {
  return journalEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);

  if (!entry) {
    return {
      title: "Journal | Jhan-Zine Maningo",
      description: "Journal posts by Jhan-Zine Maningo.",
    };
  }

  return {
    title: `${entry.title} | Jhan-Zine Maningo`,
    description: entry.excerpt,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const entry = journalEntries.find((item) => item.slug === slug);
  const JournalPage = journalPages[slug];

  if (!entry || !JournalPage) {
    notFound();
  }

  return <JournalPage />;
}
