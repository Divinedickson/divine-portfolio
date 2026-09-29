import HeroAssistantButton from "@/components/assistant/HeroAssistantButton";
import { links } from "@/data/links";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="container-wide py-3 min-[360px]:py-4 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-blue-600" />
            Divine Dickson-Uwakwe
          </p>
          <h1 className="max-w-3xl text-[clamp(2.65rem,10vw,4.75rem)] leading-[1.04] font-extrabold tracking-[-.06em] [overflow-wrap:anywhere]">
            I build software and <span className="text-blue-600">intelligent systems.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mt-7 sm:text-lg">
            Software engineer and Computer Science student building full-stack applications, machine learning systems, and applied AI products.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2 sm:mt-9 sm:gap-3">
            <a href="#projects" className="button-primary !px-2.5 text-sm sm:!px-[1.15rem] sm:text-base">
              View My Work
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            {links.resume ? (
              <a href={links.resume} className="button-secondary !px-2.5 text-sm sm:!px-[1.15rem] sm:text-base">
                <FileText aria-hidden="true" size={18} />
                View Resume
              </a>
            ) : (
              <span className="button-secondary cursor-not-allowed opacity-60" title="Resume link coming soon">
                View Resume · Soon
              </span>
            )}
            <HeroAssistantButton />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-500 sm:mt-8">
            {links.github ? (
              <a className="inline-flex min-h-11 items-center gap-1.5 hover:text-blue-600" href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : (
              <span title="Profile URL coming soon">GitHub · Soon</span>
            )}
            {links.linkedin ? (
              <a className="inline-flex min-h-11 items-center gap-1.5 hover:text-blue-600" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : (
              <span title="Profile URL coming soon">LinkedIn · Soon</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
