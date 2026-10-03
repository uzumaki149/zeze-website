"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function ProjectGrid() {
  const [sortOrder, setSortOrder] = useState("newest");

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;

    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const sortButtonClass = (value) =>
    `rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
      sortOrder === value
        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
        : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
    }`;

  return (
    <section aria-label="Project list">
      <div className="mb-5 flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {String(projects.length).padStart(2, "0")} projects
        </p>

        <div className="flex items-center gap-2">
          <span className="mr-1 text-xs text-zinc-500 dark:text-zinc-400">
            Sort:
          </span>

          <button
            type="button"
            onClick={() => setSortOrder("newest")}
            aria-pressed={sortOrder === "newest"}
            className={sortButtonClass("newest")}
          >
            Newest
          </button>

          <button
            type="button"
            onClick={() => setSortOrder("oldest")}
            aria-pressed={sortOrder === "oldest"}
            className={sortButtonClass("oldest")}
          >
            Oldest
          </button>
        </div>
        
      </div>

      <div className="flex flex-col gap-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
