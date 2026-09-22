import { contactLinks, links } from "@/data/links";

export default function Footer() {
  const profiles = contactLinks.filter((item) => item.label !== "Email");
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container-wide flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-sm font-bold">Divine Dickson-Uwakwe</p><p className="mt-1 text-xs text-slate-500">© {new Date().getFullYear()} Divine Dickson-Uwakwe</p></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          {profiles.map((item) => item.href ? <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700">{item.label}</a> : <span key={item.label} className="text-slate-400" title={`${item.label} destination coming soon`}>{item.label} · Soon</span>)}
          <a href={links.resume} className="text-slate-600 hover:text-blue-700">Resume</a>
        </nav>
      </div>
    </footer>
  );
}
