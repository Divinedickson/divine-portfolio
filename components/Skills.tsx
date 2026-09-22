import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-white pb-18 sm:pb-24">
      <div className="container-wide">
        <div className="border-t border-slate-200 pt-14 sm:pt-16">
          <p className="eyebrow mb-4">Technical toolkit</p>
          <h2 className="section-heading">Skills<span className="text-blue-600">.</span></h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Languages, frameworks, and tools used across my software and AI work.</p>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <article key={group.category} className="surface rounded-xl p-6">
                <h3 className="text-base font-bold tracking-tight">{group.category}</h3>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                  {group.items.map((skill) => <li key={skill} className="tag">{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
