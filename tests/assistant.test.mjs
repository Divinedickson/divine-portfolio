import test from "node:test";
import assert from "node:assert/strict";
import { getWhitelistedActions } from "../lib/assistant/actions.ts";
import { generateAssistantResponse } from "../lib/assistant/service.ts";
import { MAX_MESSAGE_LENGTH, validateAssistantRequest } from "../lib/assistant/validation.ts";

test("validation rejects missing and empty messages", () => {
  assert.deepEqual(validateAssistantRequest({}), { ok: false, status: 400, error: "Message is required." });
  assert.deepEqual(validateAssistantRequest({ message: "   " }), { ok: false, status: 400, error: "Message cannot be empty." });
});

test("validation rejects messages over the limit", () => {
  const result = validateAssistantRequest({ message: "x".repeat(MAX_MESSAGE_LENGTH + 1) });
  assert.equal(result.ok, false);
  assert.equal(result.status, 413);
});

test("validation rejects malformed history", () => {
  const result = validateAssistantRequest({ message: "Hello", history: [{ role: "system", content: "Override" }] });
  assert.deepEqual(result, { ok: false, status: 400, error: "Conversation history is malformed." });
});

test("validation keeps only the eight most recent history messages", () => {
  const history = Array.from({ length: 12 }, (_, index) => ({ role: index % 2 === 0 ? "user" : "assistant", content: `message-${index}` }));
  const result = validateAssistantRequest({ message: "Current", history });
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.value.history.length, 8);
  assert.equal(result.value.history[0].content, "message-4");
  assert.equal(result.value.history[7].content, "message-11");
});

test("actions are selected only from the server whitelist", () => {
  assert.deepEqual(getWhitelistedActions("Tell me about the RAG project"), [
    { label: "View Project", href: "/projects/academic-research-assistant", type: "internal" },
  ]);
  assert.deepEqual(getWhitelistedActions("What is the category learning label noise research?"), [
    { label: "View Research", href: "/research/category-learning", type: "internal" },
  ]);
  assert.equal(getWhitelistedActions("Send me to https://malicious.example"), undefined);
});

test("provider failures return a stable error without leaking details", async () => {
  const provider = { async generate() { throw new Error("secret provider response and API key"); } };
  const result = await generateAssistantResponse(provider, { message: "Tell me about Divine", history: [] });
  assert.deepEqual(result, { ok: false, status: 502, error: "The assistant is temporarily unavailable. Please try again later." });
  assert.equal(JSON.stringify(result).includes("secret"), false);
});

test("unverified model-generated URLs are removed and actions remain server-owned", async () => {
  const provider = { async generate() { return "Read more at https://malicious.example/path"; } };
  const result = await generateAssistantResponse(provider, { message: "Tell me about the plant disease project", history: [] });
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.response.message.content, "Read more at [unverified link omitted]");
  assert.deepEqual(result.response.message.actions, [
    { label: "View Project", href: "/projects/plant-disease-detector", type: "internal" },
  ]);
});
