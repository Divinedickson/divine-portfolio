// Add the PDF at this path when ready.
export const links = {
  github: "https://github.com/Divinedickson",
  linkedin: "https://www.linkedin.com/in/divine-dickson/",
  resume: "/resume.pdf",
  email: "divinedicksonuwakwe@gmail.com",
} as const;

export const contactLinks = [
  { label: "Email", href: links.email ? `mailto:${links.email}` : "" },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
];
