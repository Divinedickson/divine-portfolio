import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200 bg-white py-18 sm:py-24">
      <div className="container-wide">
        <p className="eyebrow mb-4">Professional background</p>
        <h2 className="section-heading">Experience<span className="text-blue-600">.</span></h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">Building and maintaining useful, accessible web experiences in an institutional setting.</p>
        <div className="mt-10 space-y-5">
          {experience.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="surface rounded-xl p-6 sm:p-9">
              <div className="flex flex-wrap items-start gap-4 sm:gap-5">
                <div aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-100 font-bold text-blue-700">WP</div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 font-semibold text-blue-700">{item.organization}</p>
                </div>
                <span className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">Web development</span>
              </div>
              <p className="mt-6 max-w-3xl leading-7 text-slate-600">{item.summary}</p>
              <h4 className="mt-8 text-xs font-bold uppercase tracking-[.14em] text-slate-500">Areas of contribution</h4>
              <ul className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {item.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3 text-sm leading-6 text-slate-700"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />{contribution}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
