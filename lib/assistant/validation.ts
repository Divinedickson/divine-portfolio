import type { AssistantApiRequest, AssistantMessage, AssistantRole } from "./types.ts";

export const MAX_MESSAGE_LENGTH = 1_000;
export const MAX_HISTORY_ITEMS = 20;
export const MAX_HISTORY_ITEMS_SENT = 8;
export const MAX_HISTORY_CONTENT_LENGTH = 6_000;

export type ValidationResult =
  | { ok: true; value: AssistantApiRequest }
  | { ok: false; status: 400 | 413; error: string };

function isRole(value: unknown): value is AssistantRole {
  return value === "user" || value === "assistant";
}

function validateHistory(value: unknown): ValidationResult | AssistantMessage[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) return { ok: false, status: 400, error: "History must be an array." };
  if (value.length > MAX_HISTORY_ITEMS) return { ok: false, status: 413, error: "Conversation history is too long." };

  let totalLength = 0;
  const history: AssistantMessage[] = [];
  for (const item of value) {
    if (typeof item !== "object" || item === null) return { ok: false, status: 400, error: "Conversation history is malformed." };
    const entry = item as Record<string, unknown>;
    if (!isRole(entry.role) || typeof entry.content !== "string") return { ok: false, status: 400, error: "Conversation history is malformed." };
    const content = entry.content.trim();
    if (!content) return { ok: false, status: 400, error: "Conversation history cannot contain empty messages." };
    if (content.length > MAX_MESSAGE_LENGTH) return { ok: false, status: 413, error: "A history message is too long." };
    totalLength += content.length;
    history.push({ role: entry.role, content });
  }

  if (totalLength > MAX_HISTORY_CONTENT_LENGTH) return { ok: false, status: 413, error: "Conversation history is too long." };
  return history.slice(-MAX_HISTORY_ITEMS_SENT);
}

export function validateAssistantRequest(value: unknown): ValidationResult {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return { ok: false, status: 400, error: "Request body must be a JSON object." };
  const body = value as Record<string, unknown>;
  if (typeof body.message !== "string") return { ok: false, status: 400, error: "Message is required." };
  const message = body.message.trim();
  if (!message) return { ok: false, status: 400, error: "Message cannot be empty." };
  if (message.length > MAX_MESSAGE_LENGTH) return { ok: false, status: 413, error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` };

  const history = validateHistory(body.history);
  if (!Array.isArray(history)) return history;
  return { ok: true, value: { message, history } };
}
