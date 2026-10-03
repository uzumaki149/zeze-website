import Hero from "../components/Hero";
import ContentPreview from "../components/ContentPreview";
import StackPreview from "../components/StackPreview";
import Footer from "../../../components/layout/Footer";
import { projects } from "../../projects/data/projects";

// Replace these sample entries with your actual blog data.
const blogItems = [
  {
    id: 1,
    title: "How I Built My First Laravel API",
    description:
      "Building a RESTful API using Laravel, authentication, routing, and best practices.",
    date: "Jul 27, 2026",
    href: "/blog/how-i-built-my-first-laravel-api",
  },
  {
    id: 2,
    title: "React State Management: What I Learned",
    description:
      "Understanding when to use Context, useReducer, and local component state.",
    date: "Jul 27, 2026",
    href: "/blog/react-state-management",
  },
];

// Replace these sample entries with your actual journal data.
const journalItems = [
  {
    id: 1,
    title: "Amber Jack",
    description: "by Dexter",
    href: "/journal/amber-jack",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="mx-auto w-full max-w-5xl px-4">
        <ContentPreview
          title="Blog"
          linkLabel="all_posts"
          href="/blog"
          items={blogItems}
        />

        <ContentPreview
          title="Journal"
          linkLabel="all_posts"
          href="/journal"
          items={journalItems}
        />

        <ContentPreview
          title="Projects"
          linkLabel="all_projects"
          href="/projects"
          items={projects}
        />

        <StackPreview linkLabel="all_stacks" />
      </main>

      <Footer />
    </>
  );
}