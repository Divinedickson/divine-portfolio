"use client";

import AssistantMark from "./AssistantMark";
import { useAssistant } from "./AssistantContext";

export default function HeroAssistantButton() {
  const { openAssistant } = useAssistant();

  return (
    <button type="button" onClick={(event) => openAssistant(event.currentTarget)} className="button-secondary">
      <AssistantMark size="xs" />
      Ask my AI assistant
    </button>
  );
}
