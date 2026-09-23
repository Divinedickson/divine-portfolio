"use client";

import { useEffect, type RefObject } from "react";
import { Send } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  loading: boolean;
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

export default function ChatInput({ value, onChange, onSend, loading, inputRef }: Props) {
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const resizeInput = () => {
      input.style.height = "0px";
      const maxHeight = Number.parseFloat(getComputedStyle(input).maxHeight) || 112;
      input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;
      input.style.overflowY = input.scrollHeight > maxHeight ? "auto" : "hidden";
    };
    resizeInput();
    window.addEventListener("resize", resizeInput);
    return () => window.removeEventListener("resize", resizeInput);
  }, [inputRef, value]);

  return (
    <form className="min-w-0 border-t border-slate-200 bg-white px-3 pt-3 pb-[max(.75rem,env(safe-area-inset-bottom))] min-[360px]:px-4 md:px-5 md:pb-[max(1rem,env(safe-area-inset-bottom))]" onSubmit={(event) => { event.preventDefault(); onSend(); }}>
      <label htmlFor="assistant-message" className="sr-only">Message the portfolio assistant</label>
      <div className="flex items-end gap-2 rounded-lg border border-slate-300 bg-white p-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <textarea
          ref={inputRef}
          id="assistant-message"
          rows={1}
          maxLength={1000}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              onSend();
            }
          }}
          placeholder="Ask about Divine’s work..."
          className="max-h-28 min-h-11 min-w-0 flex-1 resize-none overflow-y-hidden bg-transparent px-2 py-2 text-base leading-6 text-slate-800 outline-none placeholder:text-slate-400 md:max-h-32 md:text-sm"
        />
        <button type="submit" disabled={!value.trim() || loading} aria-label={loading ? "Sending message" : "Send message"} className="grid size-11 shrink-0 place-items-center rounded-md bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"><Send aria-hidden="true" size={19} /></button>
      </div>
      <p className="mt-2 hidden text-xs text-slate-500 md:block">Enter to send · Shift+Enter for a new line</p>
    </form>
  );
}
