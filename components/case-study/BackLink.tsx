import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"><ArrowLeft aria-hidden="true" size={18} />{children}</Link>;
}
