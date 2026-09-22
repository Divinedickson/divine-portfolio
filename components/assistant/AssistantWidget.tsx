"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([introMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const pendingRef = useRef(false);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => () => requestRef.current?.abort(), []);

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
    <ChatButton buttonRef={launcherRef} open={open} onClick={() => setOpen(true)} />
    <ChatDrawer open={open} onClose={() => setOpen(false)} onClosed={() => launcherRef.current?.focus()} messages={messages} input={input} onInputChange={setInput} onSend={() => void sendMessage(input)} onPromptSelect={(prompt) => void sendMessage(prompt)} loading={loading} error={error} />
  </>;
}
