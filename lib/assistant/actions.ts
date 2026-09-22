import type { AssistantAction } from "./types.ts";

const actionRules: { patterns: RegExp[]; action: AssistantAction }[] = [
  {
    patterns: [/\brag\b/i, /retrieval[- ]augmented/i, /academic research assistant/i],
    action: { label: "View Project", href: "/projects/academic-research-assistant", type: "internal" },
  },
  {
    patterns: [/plant disease/i, /leaflens/i, /leaf image/i],
    action: { label: "View Project", href: "/projects/plant-disease-detector", type: "internal" },
  },
  {
    patterns: [/category learning/i, /label noise/i, /entrenched noise/i],
    action: { label: "View Research", href: "/research/category-learning", type: "internal" },
  },
  {
    patterns: [/\bresume\b/i, /\bcv\b/i],
    action: { label: "View Resume", href: "/resume.pdf", type: "internal" },
  },
];

export function getWhitelistedActions(message: string): AssistantAction[] | undefined {
  const actions = actionRules.filter((rule) => rule.patterns.some((pattern) => pattern.test(message))).map((rule) => rule.action);
  return actions.length ? actions.slice(0, 2) : undefined;
}
