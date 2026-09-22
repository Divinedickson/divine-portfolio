type TechGroup = { category: string; technologies: string[] };

export default function TechStack({ groups }: { groups: TechGroup[] }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{groups.map((group) => <section key={group.category} className="surface rounded-xl p-6"><h3 className="text-sm font-bold">{group.category}</h3><ul className="mt-4 flex flex-wrap gap-2">{group.technologies.map((technology) => <li key={technology} className="tag">{technology}</li>)}</ul></section>)}</div>;
}
