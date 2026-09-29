"use client";

import AssistantMark from "./AssistantMark";
import { useAssistant } from "./AssistantContext";

export default function HeroAssistantButton() {
  const { openAssistant } = useAssistant();

  return (
    <button
      type="button"
      onClick={(event) => openAssistant(event.currentTarget)}
      className="hidden min-h-11 items-center gap-2 px-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:inline-flex"
    >
      <AssistantMark size="xs" />
      Ask my AI assistant
    </button>
  );
}
