import type { RefObject } from "react";

type Props = { onClick: () => void; open: boolean; buttonRef: RefObject<HTMLButtonElement | null> };

export default function ChatButton({ onClick, open, buttonRef }: Props) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-controls="portfolio-assistant"
      aria-expanded={open}
      className="assistant-launcher fixed right-4 bottom-4 z-40 inline-flex min-h-12 max-w-[calc(100vw-2rem)] items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700 sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="text-lg leading-none text-blue-100">✦</span>
      Ask about Divine
    </button>
  );
}
