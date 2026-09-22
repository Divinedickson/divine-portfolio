import { getWhitelistedActions } from "./actions.ts";
import { sanitizeAssistantContent } from "./content-safety.ts";
import { buildSystemPrompt } from "./prompt.ts";
import type { AssistantProvider, ProviderMessage } from "./provider.ts";
import type { AssistantApiRequest, AssistantApiResponse } from "./types.ts";

export type AssistantServiceResult =
  | { ok: true; response: AssistantApiResponse }
  | { ok: false; status: 502; error: "The assistant is temporarily unavailable. Please try again later." };

export async function generateAssistantResponse(provider: AssistantProvider, request: AssistantApiRequest): Promise<AssistantServiceResult> {
  const messages: ProviderMessage[] = [
    { role: "system", content: buildSystemPrompt() },
    ...request.history,
    { role: "user", content: request.message },
  ];

  try {
    const content = sanitizeAssistantContent(await provider.generate(messages));
    if (!content) throw new Error("Provider returned empty content");
    return {
      ok: true,
      response: {
        message: {
          role: "assistant",
          content,
          actions: getWhitelistedActions(request.message),
        },
      },
    };
  } catch {
    return { ok: false, status: 502, error: "The assistant is temporarily unavailable. Please try again later." };
  }
}
