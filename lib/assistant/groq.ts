import "server-only";

import { AssistantProviderError, type AssistantProvider, type ProviderMessage } from "./provider.ts";

const GROQ_CHAT_COMPLETIONS_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_GROQ_MODEL = "openai/gpt-oss-20b";
const REQUEST_TIMEOUT_MS = 15_000;

type GroqChatResponse = {
  choices?: { message?: { content?: unknown } }[];
};

export class GroqAssistantProvider implements AssistantProvider {
  constructor(private readonly apiKey: string, private readonly model = DEFAULT_GROQ_MODEL) {}

  async generate(messages: ProviderMessage[]): Promise<string> {
    let response: Response;
    try {
      response = await fetch(GROQ_CHAT_COMPLETIONS_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: 0.2,
          max_completion_tokens: 500,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
    } catch {
      throw new AssistantProviderError();
    }

    if (!response.ok) throw new AssistantProviderError();

    let body: GroqChatResponse;
    try {
      body = await response.json() as GroqChatResponse;
    } catch {
      throw new AssistantProviderError();
    }

    const content = body.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) throw new AssistantProviderError();
    return content.trim();
  }
}

export function createGroqProvider(): AssistantProvider | null {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  if (!apiKey) return null;
  const model = process.env.GROQ_MODEL?.trim() || DEFAULT_GROQ_MODEL;
  return new GroqAssistantProvider(apiKey, model);
}
