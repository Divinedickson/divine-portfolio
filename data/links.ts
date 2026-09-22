// Replace empty values with verified contact URLs. Add the PDF at this path when ready.
export const links = { github: "", linkedin: "", resume: "/resume.pdf", email: "" } as const;

export const contactLinks = [
  { label: "Email", href: links.email ? `mailto:${links.email}` : "" },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
];
