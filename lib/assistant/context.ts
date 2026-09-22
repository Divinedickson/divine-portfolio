import { experience } from "../../data/experience.ts";
import { links } from "../../data/links.ts";
import { profile } from "../../data/profile.ts";
import { academicCaseStudy, plantCaseStudy, projects } from "../../data/projects.ts";
import { research } from "../../data/research.ts";
import { skills } from "../../data/skills.ts";

function list(items: readonly string[]): string {
  return items.join(", ");
}

export function buildPortfolioContext(): string {
  const projectContext = projects.map((project) => {
    const verifiedLinks = [project.links.demo && `demo: ${project.links.demo}`, project.links.github && `repository: ${project.links.github}`].filter(Boolean).join("; ");
    return `- ${project.title} (${project.type}): ${project.description} Stack: ${list(project.technologies)}. Portfolio route: ${project.route}.${verifiedLinks ? ` Verified links: ${verifiedLinks}.` : ""}`;
  }).join("\n");

  const experienceContext = experience.map((item) => `- ${item.role}, ${item.organization}: ${item.summary} Contributions: ${item.contributions.join(" ")}`).join("\n");
  const skillsContext = skills.map((group) => `- ${group.category}: ${list(group.items)}`).join("\n");

  return [
    `PERSON\n${profile.name}. ${profile.summary}`,
    `EDUCATION\n${profile.education.degree}, ${profile.education.institution}.`,
    `EXPERIENCE\n${experienceContext}`,
    `PROJECTS\n${projectContext}`,
    `ACADEMIC RESEARCH ASSISTANT DETAILS\nCapabilities: ${list(academicCaseStudy.capabilities)}. This is a full-stack RAG system with private collections, page-aware PDF processing, semantic retrieval, grounded generation, and citations. Deployment configuration is prepared; do not claim unverified production scale or metrics.`,
    `PLANT DISEASE DETECTOR DETAILS\n${plantCaseStudy.overview} The application displays confidence and a screening disclaimer. Threshold-based uncertainty handling is planned but is not verified as implemented. Do not present it as shipped.`,
    `RESEARCH\n${research.title}. Status: ${research.status}. Question: ${research.question} ${research.introduction} Conditions: ${research.conditions.map((condition) => `${condition.name}: ${condition.description}`).join(" ")} Do not state or infer findings.`,
    `SKILLS\n${skillsContext}`,
    `VERIFIED CONTACT LINKS\nGitHub: ${links.github}\nLinkedIn: ${links.linkedin}\nEmail: ${links.email}\nResume: ${links.resume}`,
  ].join("\n\n");
}

export function getVerifiedExternalUrls(): ReadonlySet<string> {
  const urls = new Set<string>([links.github, links.linkedin]);
  for (const project of projects) {
    if (project.links.demo) urls.add(project.links.demo);
    if (project.links.github) urls.add(project.links.github);
  }
  return urls;
}
