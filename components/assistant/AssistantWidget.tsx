"use client";

import { useEffect, useRef, useState } from "react";
import { useAssistant } from "./AssistantContext";
import ChatButton from "./ChatButton";
import ChatDrawer from "./ChatDrawer";
import { sendAssistantMessage } from "./assistant-client";
import type { ChatMessage } from "./types";

const introMessage: ChatMessage = {
  id: "intro",
  role: "assistant",
  content: "Hi! I can answer questions about Divine's projects, technical skills, experience, and research.",
};

export default function AssistantWidget() {
  const { open, openAssistant, closeAssistant, restoreTriggerFocus } = useAssistant();
  const [messages, setMessages] = useState<ChatMessage[]>([introMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hintVisible, setHintVisible] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const hintDismissedRef = useRef(false);
  const pendingRef = useRef(false);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => () => requestRef.current?.abort(), []);

  useEffect(() => {
    if (open) {
      hintDismissedRef.current = true;
      setHintVisible(false);
      try { sessionStorage.setItem("divine-assistant-hint-seen", "true"); } catch { /* Storage can be unavailable in private browsing. */ }
    }
  }, [open]);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let seen = false;
    try { seen = sessionStorage.getItem("divine-assistant-hint-seen") === "true"; } catch { /* Treat unavailable storage as no hint. */ return; }
    if (seen || !window.matchMedia("(min-width: 390px)").matches) return;

    const showTimer = setTimeout(() => {
      if (hintDismissedRef.current) return;
      try { sessionStorage.setItem("divine-assistant-hint-seen", "true"); } catch { return; }
      setHintVisible(true);
      hideTimer = setTimeout(() => setHintVisible(false), 6500);
    }, 1200);

    return () => {
      clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  function dismissHint() {
    hintDismissedRef.current = true;
    setHintVisible(false);
    try { sessionStorage.setItem("divine-assistant-hint-seen", "true"); } catch { /* The hint still remains dismissed for this page view. */ }
  }

  function openFromLauncher() {
    dismissHint();
    openAssistant(launcherRef.current);
  }

  async function sendMessage(value: string) {
    const content = value.trim();
    if (!content || pendingRef.current) return;

    pendingRef.current = true;
    const controller = new AbortController();
    requestRef.current = controller;
    const history = messages.filter((message) => message.id !== introMessage.id);
    setMessages((current) => [...current, { id: crypto.randomUUID(), role: "user", content }]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const reply = await sendAssistantMessage(content, history, controller.signal);
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", ...reply }]);
    } catch (cause) {
      if (cause instanceof Error && cause.name === "AbortError") return;
      setError(cause instanceof Error ? cause.message : "The assistant could not connect right now. Please try again later.");
    } finally {
      requestRef.current = null;
      pendingRef.current = false;
      setLoading(false);
    }
  }

  return <>
    <ChatButton buttonRef={launcherRef} open={open} onClick={openFromLauncher} hintVisible={hintVisible} onHintDismiss={dismissHint} />
    <ChatDrawer open={open} onClose={closeAssistant} onClosed={restoreTriggerFocus} messages={messages} input={input} onInputChange={setInput} onSend={() => void sendMessage(input)} onPromptSelect={(prompt) => void sendMessage(prompt)} loading={loading} error={error} />
  </>;
}
