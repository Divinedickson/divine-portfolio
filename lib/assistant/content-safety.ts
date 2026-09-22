import { getVerifiedExternalUrls } from "./context.ts";

const URL_PATTERN = /https?:\/\/[^\s<>"')\]]+/gi;

function normalizeUrl(value: string): string | null {
  try {
    const url = new URL(value);
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function sanitizeAssistantContent(content: string): string {
  const allowed = new Set(Array.from(getVerifiedExternalUrls(), (url) => normalizeUrl(url)).filter((url): url is string => Boolean(url)));
  return content.replace(URL_PATTERN, (candidate) => {
    const trailing = candidate.match(/[.,;:!?]+$/)?.[0] ?? "";
    const bare = trailing ? candidate.slice(0, -trailing.length) : candidate;
    const normalized = normalizeUrl(bare);
    return normalized && allowed.has(normalized) ? `${bare}${trailing}` : `[unverified link omitted]${trailing}`;
  }).trim();
}
