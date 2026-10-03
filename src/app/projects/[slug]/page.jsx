import ProjectDetailPage from "../../../features/projects/ProjectDetailPage";
import { projects } from "../../../features/projects/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
