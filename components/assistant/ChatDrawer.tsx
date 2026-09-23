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
        dialog.style.bottom = "auto";
      } else {
        dialog.style.height = "";
        dialog.style.top = "";
        dialog.style.bottom = "";
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
    if (!open) return;
    const scrollY = window.scrollY;
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      paddingRight: document.body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
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
        <header className="assistant-header flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-3 pb-3 min-[360px]:px-4 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-3"><AssistantMark size="md" /><div className="min-w-0"><h2 id="assistant-title" className="truncate text-lg font-bold tracking-tight">Ask about Divine</h2><p id="assistant-subtitle" className="text-xs text-slate-500">Portfolio AI Assistant</p></div></div>
          <button type="button" onClick={onClose} aria-label="Close assistant" className="grid size-11 shrink-0 place-items-center rounded-md text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"><X aria-hidden="true" size={22} /></button>
        </header>

        <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-4 min-[360px]:px-4 min-[360px]:py-5 sm:px-5">
          <ol role="log" aria-label="Assistant conversation" aria-live="polite" aria-relevant="additions" className="space-y-4">{messages.map((message) => <ChatMessage key={message.id} message={message} />)}</ol>
          {messages.length === 1 && <SuggestedPrompts onSelect={onPromptSelect} disabled={loading} />}
          {loading && <div role="status" className="mt-4 flex items-end gap-2"><AssistantMark size="sm" /><div className="flex min-h-11 items-center gap-1 rounded-lg rounded-bl-sm border border-slate-200 bg-white px-4 shadow-sm"><span className="sr-only">Assistant is responding</span><span className="assistant-loading-dot" /><span className="assistant-loading-dot" /><span className="assistant-loading-dot" /></div></div>}
          {error && <div role="alert" className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm leading-6 text-rose-800">{error}</div>}
          <div ref={endRef} />
        </div>

        <ChatInput value={input} onChange={onInputChange} onSend={onSend} loading={loading} inputRef={inputRef} />
      </div>
    </dialog>
  );
}
