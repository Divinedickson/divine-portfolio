import { NextResponse } from "next/server";
import { createGroqProvider } from "@/lib/assistant/groq";
import { generateAssistantResponse } from "@/lib/assistant/service";
import { validateAssistantRequest } from "@/lib/assistant/validation";

export const runtime = "nodejs";
export const maxDuration = 20;

const MAX_REQUEST_BYTES = 16_000;

function errorResponse(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) return errorResponse("Content-Type must be application/json.", 415);

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) return errorResponse("Request body is too large.", 413);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse("Request body must contain valid JSON.", 400);
  }

  const validation = validateAssistantRequest(body);
  if (!validation.ok) return errorResponse(validation.error, validation.status);

  const provider = createGroqProvider();
  if (!provider) return errorResponse("The assistant is temporarily unavailable. Please try again later.", 503);

  const result = await generateAssistantResponse(provider, validation.value);
  if (!result.ok) return errorResponse(result.error, result.status);
  return NextResponse.json(result.response, { status: 200 });
}
