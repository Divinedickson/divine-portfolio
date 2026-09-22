import Link from "next/link";
import AssistantMark from "./AssistantMark";
import type { ChatAction, ChatMessage as ChatMessageType } from "./types";

function ActionLink({ action }: { action: ChatAction }) {
  const className = "inline-flex min-h-9 items-center rounded-md border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50";
  return action.type === "internal"
    ? <Link href={action.href} className={className}>{action.label} <span className="ml-1" aria-hidden="true">↗</span></Link>
    : <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>{action.label} <span className="ml-1" aria-hidden="true">↗</span></a>;
}

export default function ChatMessage({ message }: { message: ChatMessageType }) {
  const fromUser = message.role === "user";
  return (
    <li className={`flex items-end gap-2 ${fromUser ? "justify-end" : "justify-start"}`}>
      {!fromUser && <AssistantMark size="sm" />}
      <div className={`max-w-[84%] rounded-lg px-4 py-3 text-sm leading-6 shadow-sm ${fromUser ? "rounded-br-sm bg-blue-600 text-white" : "rounded-bl-sm border border-slate-200 bg-white text-slate-700"}`}>
        <span className="sr-only">{fromUser ? "You" : "Portfolio assistant"}: </span>
        <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{message.content}</p>
        {message.actions && message.actions.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{message.actions.map((action) => <ActionLink key={`${action.type}-${action.href}`} action={action} />)}</div>}
      </div>
    </li>
  );
}
