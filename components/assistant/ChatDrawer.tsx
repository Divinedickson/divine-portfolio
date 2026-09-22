"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";
import type { ChatMessage as ChatMessageType } from "./types";

export type ChatDrawerProps = {
  open: boolean;
  onClose: () => void;
  onClosed: () => void;
  messages: ChatMessageType[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onPromptSelect: (prompt: string) => void;
  loading: boolean;
  error: string | null;
};

export default function ChatDrawer({ open, onClose, onClosed, messages, input, onInputChange, onSend, onPromptSelect, loading, error }: ChatDrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();
    inputRef.current?.focus();

    // The visual viewport shrinks with mobile keyboards in browsers where 100dvh does not.
    const viewport = window.visualViewport;
    const mobile = window.matchMedia("(max-width: 639px)");
    const syncViewport = () => {
      if (mobile.matches && viewport) {
        dialog.style.height = `${viewport.height}px`;
        dialog.style.top = `${viewport.offsetTop}px`;
      } else {
        dialog.style.height = "";
        dialog.style.top = "";
      }
    };
    syncViewport();
    viewport?.addEventListener("resize", syncViewport);
    viewport?.addEventListener("scroll", syncViewport);
    mobile.addEventListener("change", syncViewport);
    return () => {
      viewport?.removeEventListener("resize", syncViewport);
      viewport?.removeEventListener("scroll", syncViewport);
      mobile.removeEventListener("change", syncViewport);
    };
  }, [open]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "end" });
  }, [open, messages, loading, error]);

  return (
    <dialog
      ref={dialogRef}
      id="portfolio-assistant"
      aria-modal="true"
      aria-labelledby="assistant-title"
      aria-describedby="assistant-subtitle"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClose={onClosed}
      className="assistant-dialog h-[100dvh] max-h-[100dvh] w-full max-w-none overflow-hidden border-0 bg-[#f7f9ff] p-0 text-slate-900 shadow-2xl sm:w-[440px] sm:max-w-[440px]"
    >
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:px-5">
          <div className="min-w-0"><div className="flex items-center gap-2"><span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white">✦</span><h2 id="assistant-title" className="text-lg font-bold tracking-tight">Ask about Divine</h2></div><p id="assistant-subtitle" className="mt-1 pl-10 text-xs text-slate-500">Portfolio AI Assistant</p></div>
          <button type="button" onClick={onClose} aria-label="Close assistant" className="grid size-10 shrink-0 place-items-center rounded-md text-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">×</button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5">
          <ol role="log" aria-label="Assistant conversation" aria-live="polite" aria-relevant="additions" className="space-y-4">{messages.map((message) => <ChatMessage key={message.id} message={message} />)}</ol>
          {messages.length === 1 && <SuggestedPrompts onSelect={onPromptSelect} disabled={loading} />}
          {loading && <div role="status" className="mt-4 flex items-center gap-2 text-sm text-slate-500"><span className="size-2 animate-pulse rounded-full bg-blue-600" />Waiting for assistant…</div>}
          {error && <div role="alert" className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm leading-6 text-rose-800">{error}</div>}
          <div ref={endRef} />
        </div>

        <ChatInput value={input} onChange={onInputChange} onSend={onSend} loading={loading} inputRef={inputRef} />
      </div>
    </dialog>
  );
}
