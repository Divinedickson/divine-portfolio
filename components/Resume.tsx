import { links } from "@/data/links";

export default function Resume() {
  return (
    <section id="resume" className="bg-[#f2f4ff] py-18 sm:py-24">
      <div className="container-wide">
        <div className="surface flex flex-col gap-7 rounded-xl p-6 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-blue-100 text-2xl text-blue-700" aria-hidden="true">▤</span>
            <div>
              <p className="eyebrow mb-2">Background & experience</p>
              <h2 className="text-2xl font-bold tracking-tight">Resume</h2>
              <p className="mt-2 max-w-lg leading-7 text-slate-600">A concise overview of my education, experience, projects, and technical skills.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:shrink-0">
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="button-primary">View Resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
