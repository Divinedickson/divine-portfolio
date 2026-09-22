export type AssistantRole = "user" | "assistant";

export type AssistantMessage = {
  role: AssistantRole;
  content: string;
};

export type AssistantAction = {
  label: string;
  href: string;
  type: "internal" | "external";
};

export type AssistantApiRequest = {
  message: string;
  history: AssistantMessage[];
};

export type AssistantApiResponse = {
  message: AssistantMessage & { actions?: AssistantAction[] };
};
