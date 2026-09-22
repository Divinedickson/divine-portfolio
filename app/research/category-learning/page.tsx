import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import BackLink from "@/components/case-study/BackLink";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title: "Category Learning Under Label Noise | Divine Dickson-Uwakwe",
  description: "Ongoing research comparing human and neural-network category learning under clean and entrenched-noise labels.",
};

export default function CategoryLearningPage() {
  return <CaseStudyShell>
    <CaseStudyHero eyebrow="Academic research" title="Human vs Neural Network Category Learning Under Label Noise" description="An ongoing study of how systematic errors in training labels may affect category-learning accuracy and generalization in college students and neural networks." status="Status: Ongoing Research" backHref="/#research" backLabel="Research" />

    <section className="py-16 sm:py-20"><div className="container-wide">
      <div className="rounded-xl border border-blue-200 bg-[#e4eaff] p-6 sm:p-9"><p className="eyebrow mb-3">Primary research question</p><h2 className="max-w-4xl text-xl font-bold leading-snug tracking-tight sm:text-2xl">{research.question}</h2></div>
      <div className="mt-12 max-w-3xl"><SectionHeading eyebrow="Why this study" title="Research Motivation" /><p className="leading-8 text-slate-600">The study compares how college students and neural networks learn unfamiliar visual categories when some training labels contain systematic errors. It asks how those labels affect both learning and performance on new, correctly labeled examples. No results have been reported.</p></div>
    </div></section>

    <section className="bg-[#f2f4ff] py-16 sm:py-20"><div className="container-wide">
      <SectionHeading eyebrow="Study plan" title="Experimental Design" description="The planned stimuli are unfamiliar computer-generated images. Each category has a consistent color, while multiple visual features distinguish one category from another." />
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="surface rounded-xl p-6"><dt className="text-sm text-slate-500">Categories</dt><dd className="mt-2 text-3xl font-bold text-blue-700">{research.design.categories}</dd></div>
        <div className="surface rounded-xl p-6"><dt className="text-sm text-slate-500">Training images per category</dt><dd className="mt-2 text-3xl font-bold text-blue-700">{research.design.trainingImagesPerCategory}</dd></div>
        <div className="surface rounded-xl p-6"><dt className="text-sm text-slate-500">Training images total</dt><dd className="mt-2 text-3xl font-bold text-blue-700">{research.design.trainingImagesTotal}</dd></div>
        <div className="surface rounded-xl p-6"><dt className="text-sm text-slate-500">Correct test images</dt><dd className="mt-2 text-3xl font-bold text-blue-700">{research.design.correctTestImages}</dd></div>
      </dl>
      <p className="mt-5 text-sm leading-7 text-slate-600">{research.design.stimuli}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="surface rounded-xl p-6 sm:p-8"><span className="eyebrow">Condition 01</span><h3 className="mt-3 text-xl font-bold">Clean Labels</h3><p className="mt-3 leading-7 text-slate-600">All training examples receive their correct category labels.</p></article>
        <article className="surface rounded-xl p-6 sm:p-8"><span className="eyebrow !text-violet-700">Condition 02</span><h3 className="mt-3 text-xl font-bold">Entrenched Noise</h3><p className="mt-3 leading-7 text-slate-600">{research.design.noise}</p></article>
      </div>
    </div></section>

    <section className="py-16 sm:py-20"><div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div><SectionHeading eyebrow="Participant task" title="Human Comparison" /><p className="leading-8 text-slate-600">{research.humanTask}</p><ul className="mt-5 flex flex-wrap gap-2"><li className="tag">Category-learning accuracy</li><li className="tag">Transfer and generalization</li></ul></div>
      <div><SectionHeading eyebrow="Model task" title="Neural Network Comparison" /><p className="leading-8 text-slate-600">{research.modelTask}</p><ul className="mt-5 flex flex-wrap gap-2"><li className="tag">MLP</li><li className="tag">CNN</li><li className="tag">Transfer-learning CNN</li></ul></div>
    </div></section>

    <section className="bg-[#f2f4ff] py-16 sm:py-20"><div className="container-wide"><SectionHeading eyebrow="Research context" title="Related Research" description="These areas inform the study design. They are listed as context, without attributing results to the ongoing experiment." /><div className="grid gap-4 sm:grid-cols-2">{research.relatedResearch.map((item) => <article key={item.authors} className="surface rounded-xl p-6"><h3 className="font-bold">{item.authors}</h3><p className="mt-2 leading-7 text-slate-600">{item.area}</p></article>)}</div></div></section>

    <section className="border-t border-slate-200 bg-white py-10"><div className="container-wide"><BackLink href="/#research">Back to Research</BackLink></div></section>
  </CaseStudyShell>;
}
