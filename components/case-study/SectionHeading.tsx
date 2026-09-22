type Props = { eyebrow?: string; title: string; description?: string; id?: string };

export default function SectionHeading({ eyebrow, title, description, id }: Props) {
  return <div id={id} className="mb-7 max-w-3xl scroll-mt-32">{eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}<h2 className="section-heading">{title}</h2>{description && <p className="mt-4 leading-7 text-slate-600">{description}</p>}</div>;
}
