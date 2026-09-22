import Link from "next/link";

export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"><span aria-hidden="true">←</span>{children}</Link>;
}
