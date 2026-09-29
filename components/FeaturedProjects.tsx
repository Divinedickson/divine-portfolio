import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

function ProjectLinks({ project }: { project: Project }) {
  const entries = [
    { label: "Live Demo", url: project.links.demo },
    { label: "GitHub", url: project.links.github },
  ];

  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
      <Link href={project.route} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900">
        {project.slug === "category-learning" ? "View Research" : "Read Case Study"}
        <ArrowRight aria-hidden="true" size={17} />
      </Link>
      {entries.map(({ label, url }) =>
        url ? (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
          >
            {label}
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ) : null,
      )}
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`surface flex h-full flex-col rounded-lg ${featured ? "border-blue-200" : ""}`}>
      <div className={featured ? "p-5 min-[360px]:p-7 sm:p-10" : "p-5 min-[360px]:p-7 sm:p-8"}>
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="eyebrow">{project.type}</span>
          <span className="font-mono text-xs text-slate-400">/{project.number}</span>
        </div>
        <h3 className={`${featured ? "max-w-2xl text-3xl sm:text-4xl" : "text-2xl"} font-bold leading-tight tracking-[-.04em] [overflow-wrap:anywhere]`}>
          {project.title}
        </h3>
        <p className="mt-5 max-w-3xl leading-7 text-slate-600">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-18 sm:py-24">
      <div className="container-wide">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="section-heading">Projects<span className="text-blue-600">.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Software, applied AI, and research built around real questions and useful outcomes.
          </p>
        </div>
        <div className="space-y-5">
          <ProjectCard project={projects[0]} featured />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(1).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
