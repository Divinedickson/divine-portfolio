import type { RefObject } from "react";
import AssistantMark from "./AssistantMark";

type Props = {
  onClick: () => void;
  open: boolean;
  buttonRef: RefObject<HTMLButtonElement | null>;
  hintVisible: boolean;
  onHintDismiss: () => void;
};

export default function ChatButton({ onClick, open, buttonRef, hintVisible, onHintDismiss }: Props) {
  return (
    <div className="assistant-launcher-wrap">
      {hintVisible && (
        <div className="assistant-discovery-hint" aria-live="polite">
          <button type="button" onClick={onClick} className="min-h-11 flex-1 px-3 py-2 text-left text-sm font-semibold leading-5 text-slate-700">
            Have a question? Ask my portfolio AI.
          </button>
          <button type="button" onClick={onHintDismiss} aria-label="Dismiss assistant suggestion" className="grid size-11 shrink-0 place-items-center rounded-md text-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800">×</button>
        </div>
      )}
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        aria-haspopup="dialog"
        aria-controls="portfolio-assistant"
        aria-expanded={open}
        className="assistant-launcher inline-flex min-h-13 items-center gap-2.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-700"
      >
        <AssistantMark size="sm" className="bg-blue-800 ring-white/25" />
        Ask about Divine
      </button>
    </div>
  );
}
