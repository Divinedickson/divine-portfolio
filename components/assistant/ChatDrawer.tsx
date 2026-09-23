"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import AssistantMark from "./AssistantMark";
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
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();
    if (window.matchMedia("(min-width: 768px)").matches) inputRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const htmlOverflow = document.documentElement.style.overflow;
    const htmlScrollBehavior = document.documentElement.style.scrollBehavior;
    const bodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      paddingRight: document.body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyStyles.overflow;
      document.body.style.position = bodyStyles.position;
      document.body.style.top = bodyStyles.top;
      document.body.style.width = bodyStyles.width;
      document.body.style.paddingRight = bodyStyles.paddingRight;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
        document.documentElement.style.scrollBehavior = htmlScrollBehavior;
      });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => {
      const messagesRegion = messagesRef.current;
      if (messagesRegion) messagesRegion.scrollTop = messagesRegion.scrollHeight;
    });
    return () => cancelAnimationFrame(frame);
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
      className="assistant-dialog overflow-hidden border-0 bg-[#f7f9ff] p-0 text-slate-900 shadow-2xl"
    >
      <div className="assistant-shell">
        <header className="assistant-header flex min-w-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-3 pb-3 min-[360px]:px-4 md:px-5 md:py-4">
          <div className="flex min-w-0 items-center gap-3"><AssistantMark size="md" /><div className="min-w-0"><h2 id="assistant-title" className="truncate text-lg font-bold tracking-tight">Ask about Divine</h2><p id="assistant-subtitle" className="text-xs text-slate-500">Portfolio AI Assistant</p></div></div>
          <button type="button" onClick={onClose} aria-label="Close assistant" className="grid size-11 shrink-0 place-items-center rounded-md text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"><X aria-hidden="true" size={22} /></button>
        </header>

        <div ref={messagesRef} className="assistant-messages min-h-0 overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-4 min-[360px]:px-4 min-[360px]:py-5 md:px-5">
          <ol role="log" aria-label="Assistant conversation" aria-live="polite" aria-relevant="additions" className="space-y-4">{messages.map((message) => <ChatMessage key={message.id} message={message} />)}</ol>
          {messages.length === 1 && <SuggestedPrompts onSelect={onPromptSelect} disabled={loading} />}
          {loading && <div role="status" className="mt-4 flex items-start gap-2"><AssistantMark size="xs" className="mt-1 md:size-8 md:text-[11px]" /><div className="flex min-h-11 items-center gap-1 rounded-lg rounded-bl-sm border border-slate-200 bg-white px-4 shadow-sm"><span className="sr-only">Assistant is responding</span><span className="assistant-loading-dot" /><span className="assistant-loading-dot" /><span className="assistant-loading-dot" /></div></div>}
          {error && <div role="alert" className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm leading-6 text-rose-800">{error}</div>}
        </div>

        <ChatInput value={input} onChange={onInputChange} onSend={onSend} loading={loading} inputRef={inputRef} />
      </div>
    </dialog>
  );
}
