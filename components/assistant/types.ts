export type ChatAction = {
  label: string;
  href: string;
  type: "internal" | "external";
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  actions?: ChatAction[];
};

export type AssistantReply = {
  content: string;
  actions?: ChatAction[];
};

export type AssistantApiResponse = {
  message: {
    role: "assistant";
    content: string;
    actions?: ChatAction[];
  };
};
