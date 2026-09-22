import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import TechStack from "@/components/case-study/TechStack";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import BackLink from "@/components/case-study/BackLink";
import { academicCaseStudy, projects } from "@/data/projects";

const project = projects[0];

export const metadata: Metadata = {
  title: "Academic Research Assistant | Divine Dickson-Uwakwe",
  description: "A case study of a full-stack RAG platform for searching academic papers and generating answers with source citations.",
};

export default function AcademicResearchAssistantPage() {
  return <CaseStudyShell>
    <CaseStudyHero eyebrow="Flagship case study · Applied AI" title={project.title} description="A RAG-based academic research platform that lets users upload research papers, organize them into collections, and ask questions grounded in uploaded literature with source citations." backHref="/#projects" backLabel="Projects" actions={[{ label: "Live Demo", href: project.links.demo }, { label: "GitHub", href: project.links.github }]} />

    <section className="py-16 sm:py-20"><div className="container-wide grid gap-8 lg:grid-cols-2 lg:gap-14">
      <div><SectionHeading eyebrow="The problem" title="Research spans many documents." /><p className="leading-8 text-slate-600">{academicCaseStudy.problem}</p></div>
      <div><SectionHeading eyebrow="The solution" title="A source-aware research workspace." /><p className="leading-8 text-slate-600">{academicCaseStudy.solution}</p></div>
    </div></section>

    <section className="bg-[#f2f4ff] py-16 sm:py-20"><div className="container-wide">
      <SectionHeading eyebrow="Product capabilities" title="From uploaded paper to cited answer." />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{academicCaseStudy.capabilities.map((capability) => <li key={capability} className="surface flex min-h-20 items-center gap-3 rounded-lg p-4 text-sm font-semibold"><span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue-600" />{capability}</li>)}</ul>
    </div></section>

    <section className="py-16 sm:py-20"><div className="container-wide">
      <SectionHeading eyebrow="System design" title="Architecture" description="The diagram follows document ingestion and question answering through the same application. It is a conceptual flow, with no performance measurements implied." />
      <ArchitectureDiagram steps={academicCaseStudy.architecture} label="Academic research assistant data flow" />
    </div></section>

    <section className="bg-white py-16 sm:py-20"><div className="container-wide">
      <SectionHeading eyebrow="Implementation" title="Technical Stack" />
      <TechStack groups={academicCaseStudy.stack} />
      <p className="mt-5 text-sm leading-6 text-slate-500">Cloud deployment configuration is prepared; the source project does not claim provisioned production services.</p>
    </div></section>

    <section className="bg-[#f2f4ff] py-16 sm:py-20"><div className="container-wide">
      <SectionHeading eyebrow="Selected implementation details" title="Key Engineering Work" />
      <div className="grid gap-4 md:grid-cols-2">{academicCaseStudy.engineeringWork.map((item) => <article key={item.title} className="surface rounded-xl p-6"><h3 className="text-lg font-bold tracking-tight">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.detail}</p></article>)}</div>
    </div></section>

    <section className="py-16 sm:py-20"><div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div><SectionHeading eyebrow="Design considerations" title="Engineering Challenges" /><ul className="space-y-4">{academicCaseStudy.challenges.map((challenge) => <li key={challenge} className="flex gap-3 leading-7 text-slate-600"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-violet-600" />{challenge}</li>)}</ul></div>
      <div><SectionHeading eyebrow="Takeaways" title="What I Learned" /><ul className="space-y-4">{academicCaseStudy.lessons.map((lesson) => <li key={lesson} className="flex gap-3 leading-7 text-slate-600"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-blue-600" />{lesson}</li>)}</ul></div>
    </div></section>

    <section className="border-t border-slate-200 bg-white py-10"><div className="container-wide"><BackLink href="/#projects">Back to Projects</BackLink></div></section>
  </CaseStudyShell>;
}
