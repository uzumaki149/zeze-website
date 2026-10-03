
import Image from "next/image";
import Link from "next/link";


function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-zinc-200/80 p-4 transition-colors duration-300 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600 sm:p-5">
      <div className="flex items-start gap-4 sm:gap-5">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.title}`}
          className="relative block aspect-square w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 sm:w-24"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="96px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </Link>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {project.category}
                {project.date && ` · ${new Date(project.date).getFullYear()}`}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-1 inline-block text-base font-semibold text-zinc-900 hover:text-green-600 dark:text-zinc-100 dark:hover:text-green-400"
              >
                {project.title}
              </Link>
            </div>

            <span aria-hidden="true" className="text-sm text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md bg-zinc-100 px-2 py-1 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}


export default ProjectCard;
