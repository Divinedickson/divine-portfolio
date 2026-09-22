"use client";

import { useEffect, type RefObject } from "react";

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
    input.style.height = "0px";
    input.style.height = `${Math.min(input.scrollHeight, 128)}px`;
    input.style.overflowY = input.scrollHeight > 128 ? "auto" : "hidden";
  }, [inputRef, value]);

  return (
    <form className="shrink-0 border-t border-slate-200 bg-white px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5" onSubmit={(event) => { event.preventDefault(); onSend(); }}>
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
          className="max-h-32 min-h-11 flex-1 resize-none overflow-y-hidden bg-transparent px-2 py-2 text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400"
        />
        <button type="submit" disabled={!value.trim() || loading} className="min-h-11 shrink-0 rounded-md bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600">{loading ? "Sending" : "Send"}</button>
      </div>
      <p className="mt-2 text-xs text-slate-500">Enter to send · Shift+Enter for a new line</p>
    </form>
  );
}
