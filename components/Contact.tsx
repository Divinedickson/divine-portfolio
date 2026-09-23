import { contactLinks } from "@/data/links";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#faf8ff] py-18 sm:py-24">
      <div className="container-wide">
        <div className="surface mx-auto max-w-4xl rounded-xl px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="eyebrow mb-4">Next steps</p>
          <h2 className="section-heading">Let&apos;s build something meaningful.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">I’m interested in software engineering, applied AI, and research opportunities. Reach out if you’d like to connect.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {contactLinks.map((item, index) => item.href ? (
              <a key={item.label} href={item.href} className={index === 0 ? "button-primary" : "button-secondary"} target={index === 0 ? undefined : "_blank"} rel={index === 0 ? undefined : "noopener noreferrer"}>{item.label}{index === 0 ? <Mail aria-hidden="true" size={18} /> : <ArrowUpRight aria-hidden="true" size={18} />}</a>
            ) : (
              <span key={item.label} className="button-secondary cursor-not-allowed text-slate-400" title={`${item.label} destination coming soon`}>{item.label} · Soon</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
