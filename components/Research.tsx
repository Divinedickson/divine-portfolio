import { research } from "@/data/research";

export default function Research() {
  return (
    <section id="research" className="bg-slate-50 py-18 sm:py-24">
      <div className="container-wide">
        <p className="eyebrow mb-4">Scientific inquiry</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="section-heading">Research<span className="text-blue-600">.</span></h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">{research.introduction}</p></div>
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700">{research.status}</span>
        </div>
        <div className="mt-10 border-l-4 border-blue-600 pl-5 sm:pl-7">
          <p className="eyebrow mb-3">Primary research question</p>
          <h3 className="max-w-4xl text-xl font-bold leading-snug tracking-tight sm:text-2xl">{research.question}</h3>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {research.conditions.map((condition, index) => (
            <article key={condition.name} className="surface rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-3"><span className={`size-2.5 rounded-full ${index === 0 ? "bg-blue-600" : "bg-violet-600"}`} /><span className="text-xs font-bold uppercase tracking-[.12em] text-slate-500">Condition {index + 1}</span></div>
              <h4 className="mt-5 text-lg font-bold tracking-tight">{condition.name}</h4>
              <p className="mt-3 leading-7 text-slate-600">{condition.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 border-t border-slate-200 pt-6">
          <h4 className="font-bold">Human and neural-network comparison</h4>
          <p className="mt-1 max-w-4xl leading-7 text-slate-600">{research.comparison}</p>
        </div>
      </div>
    </section>
  );
}
