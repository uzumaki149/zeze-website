// frontend/src/features/projects/ProjectDetailPage.jsx
import Link from "next/link";
import { projects } from "./data/projects";

function ProjectDetailPage({ slug }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Project not found.</h1>;
  }

  return (
    <article className="p-10">
      <header className="mb-10 lg:mb-16">
        <Link href="/projects" className="font-mono text-sm text-zinc-500 hover:text-zinc-300">
          &lt; all_projects
        </Link>

        <p className="mt-6 lg:mt-8 font-mono text-sm text-zinc-500">
          {/* You can add a date field to projects if needed */}
        </p>

        <h1 className="mt-4 max-w-4xl font-ui text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h1>
      </header>

      <section className="mx-auto max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
        <p className="mb-6">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          {project.technologies.map((t) => (
            <span key={t} className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              {t}
            </span>
          ))}
        </div>

        {/* TODO: add rich project content or link to repo/demo */}
      </section>
    </article>
  );
}

export default ProjectDetailPage;