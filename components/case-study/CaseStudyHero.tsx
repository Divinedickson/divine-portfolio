import Link from "next/link";
import BackLink from "./BackLink";

type Action = { label: string; href?: string };
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  actions?: Action[];
  status?: string;
};

export default function CaseStudyHero({ eyebrow, title, description, backHref, backLabel, actions = [], status }: Props) {
  return (
    <section id="top" className="border-b border-slate-200 bg-white py-14 sm:py-20">
      <div className="container-wide">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/#top" className="hover:text-blue-700">Home</Link><span aria-hidden="true">/</span>
          <Link href={backHref} className="hover:text-blue-700">{backLabel}</Link><span aria-hidden="true">/</span>
          <span aria-current="page" className="text-slate-800">{title}</span>
        </nav>
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3"><p className="eyebrow">{eyebrow}</p>{status && <span className="rounded-md bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">{status}</span>}</div>
          <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[1.08] tracking-[-.055em]">{title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action, index) => action.href ? <a key={action.label} href={action.href} target="_blank" rel="noopener noreferrer" className={index === 0 ? "button-primary" : "button-secondary"}>{action.label} <span aria-hidden="true">↗</span></a> : <span key={action.label} className="button-secondary cursor-not-allowed text-slate-400" title={`${action.label} URL coming soon`}>{action.label} · Soon</span>)}
            <BackLink href={backHref}>Back to {backLabel}</BackLink>
          </div>
        </div>
      </div>
    </section>
  );
}
