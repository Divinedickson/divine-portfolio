"use client";

import AssistantMark from "./AssistantMark";
import { useAssistant } from "./AssistantContext";

export default function HeroAssistantButton() {
  const { openAssistant } = useAssistant();

  return (
    <button type="button" onClick={(event) => openAssistant(event.currentTarget)} className="button-secondary !px-3 text-sm sm:!px-[1.15rem] sm:text-base">
      <AssistantMark size="xs" />
      Ask my AI assistant
    </button>
  );
}
