import type { AssistantApiResponse, AssistantReply, ChatAction, ChatMessage } from "./types";

function isChatAction(value: unknown): value is ChatAction {
  if (typeof value !== "object" || value === null) return false;
  const action = value as Record<string, unknown>;
  if (typeof action.label !== "string" || !action.label.trim() || typeof action.href !== "string") return false;
  if (action.type === "internal") return action.href.startsWith("/") && !action.href.startsWith("//") && !action.href.includes("\\");
  if (action.type !== "external") return false;
  try {
    const url = new URL(action.href);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function isAssistantResponse(value: unknown): value is AssistantApiResponse {
  if (typeof value !== "object" || value === null) return false;
  const envelope = value as Record<string, unknown>;
  if (typeof envelope.message !== "object" || envelope.message === null) return false;
  const message = envelope.message as Record<string, unknown>;
  return message.role === "assistant" && typeof message.content === "string" && message.content.trim().length > 0 && (message.actions === undefined || (Array.isArray(message.actions) && message.actions.every(isChatAction)));
}

export async function sendAssistantMessage(message: string, history: ChatMessage[], signal?: AbortSignal): Promise<AssistantReply> {
  const response = await fetch("/api/assistant", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      history: history.slice(-8).map(({ role, content }) => ({ role, content })),
    }),
    signal,
  });

  if (!response.ok) {
    let clientMessage = "The assistant could not answer right now. Please try again later.";
    try {
      const body: unknown = await response.json();
      if (typeof body === "object" && body !== null && typeof (body as Record<string, unknown>).error === "string") clientMessage = (body as { error: string }).error;
    } catch {
      // Use the stable client-safe fallback above.
    }
    throw new Error(clientMessage);
  }

  const result: unknown = await response.json();
  if (!isAssistantResponse(result)) {
    throw new Error("The assistant returned an unexpected response. Please try again later.");
  }
  return result.message;
}
