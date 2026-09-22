import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import TechStack from "@/components/case-study/TechStack";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import BackLink from "@/components/case-study/BackLink";
import { plantCaseStudy, projects } from "@/data/projects";

const project = projects[1];

export const metadata: Metadata = {
  title: "Plant Disease Detector | Divine Dickson-Uwakwe",
  description: "A case study of a React, Django, and PyTorch application for preliminary plant disease screening from leaf images.",
};

export default function PlantDiseaseDetectorPage() {
  return <CaseStudyShell>
    <CaseStudyHero eyebrow="Case study · Computer vision" title={project.title} description={plantCaseStudy.overview} backHref="/#projects" backLabel="Projects" actions={[{ label: "Live Demo", href: project.links.demo }, { label: "GitHub", href: project.links.github }]} />

    <section className="py-16 sm:py-20"><div className="container-wide grid gap-8 lg:grid-cols-2 lg:gap-14">
      <div><SectionHeading eyebrow="The problem" title="Useful screening needs context." /><p className="leading-8 text-slate-600">{plantCaseStudy.problem}</p></div>
      <div><SectionHeading eyebrow="The solution" title="Image-based preliminary analysis." /><p className="leading-8 text-slate-600">{plantCaseStudy.solution}</p></div>
    </div></section>

    <section className="bg-[#f2f4ff] py-16 sm:py-20"><div className="container-wide"><SectionHeading eyebrow="Model workflow" title="From leaf photo to screening result." /><ArchitectureDiagram steps={plantCaseStudy.modelWorkflow} label="Image classification flow" /></div></section>

    <section className="py-16 sm:py-20"><div className="container-wide"><SectionHeading eyebrow="Application design" title="Architecture" /><ArchitectureDiagram steps={plantCaseStudy.architecture} label="Frontend, API, and model" /></div></section>

    <section className="bg-white py-16 sm:py-20"><div className="container-wide"><SectionHeading eyebrow="Implementation" title="Technical Stack" /><TechStack groups={plantCaseStudy.stack} /></div></section>

    <section className="bg-[#f2f4ff] py-16 sm:py-20"><div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div><SectionHeading eyebrow="Responsible presentation" title="Uncertainty Handling" /><p className="leading-8 text-slate-600">{plantCaseStudy.uncertainty}</p><p className="mt-5 rounded-lg border border-violet-200 bg-violet-50 p-4 text-sm leading-6 text-violet-900">The classifier covers 38 PlantVillage-style classes. A prediction is preliminary screening, not a plant-health diagnosis.</p></div>
      <div><SectionHeading eyebrow="Takeaways" title="Lessons Learned" /><ul className="space-y-4">{plantCaseStudy.lessons.map((lesson) => <li key={lesson} className="flex gap-3 leading-7 text-slate-600"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-blue-600" />{lesson}</li>)}</ul></div>
    </div></section>

    <section className="border-t border-slate-200 bg-white py-10"><div className="container-wide"><BackLink href="/#projects">Back to Projects</BackLink></div></section>
  </CaseStudyShell>;
}
