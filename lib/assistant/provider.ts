import type { AssistantMessage } from "./types.ts";

export type ProviderMessage = AssistantMessage | { role: "system"; content: string };

export interface AssistantProvider {
  generate(messages: ProviderMessage[]): Promise<string>;
}

export class AssistantProviderError extends Error {
  constructor(message = "Assistant provider request failed") {
    super(message);
    this.name = "AssistantProviderError";
  }
}
