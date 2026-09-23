"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

type AssistantContextValue = {
  open: boolean;
  openAssistant: (trigger?: HTMLElement | null) => void;
  closeAssistant: () => void;
  restoreTriggerFocus: () => void;
};

const AssistantContext = createContext<AssistantContextValue | null>(null);

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openAssistant = useCallback((trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null;
    setOpen(true);
  }, []);

  const closeAssistant = useCallback(() => setOpen(false), []);
  const restoreTriggerFocus = useCallback(() => triggerRef.current?.focus({ preventScroll: true }), []);

  return <AssistantContext.Provider value={{ open, openAssistant, closeAssistant, restoreTriggerFocus }}>{children}</AssistantContext.Provider>;
}

export function useAssistant() {
  const context = useContext(AssistantContext);
  if (!context) throw new Error("useAssistant must be used within AssistantProvider");
  return context;
}
