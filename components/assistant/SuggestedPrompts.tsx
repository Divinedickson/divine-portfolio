const prompts = [
  "Tell me about his RAG project",
  "What technologies does he use?",
  "What research is he working on?",
  "What software engineering experience does he have?",
  "Show me his machine learning projects",
];

export default function SuggestedPrompts({ onSelect, disabled }: { onSelect: (prompt: string) => void; disabled: boolean }) {
  return <div className="mt-5 min-[360px]:mt-6"><p className="mb-2.5 text-xs font-bold uppercase tracking-[.12em] text-slate-500">Try asking</p><div className="assistant-prompts -mx-3 flex shrink-0 gap-2 overflow-x-auto px-3 pb-1.5 min-[360px]:-mx-4 min-[360px]:px-4 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">{prompts.map((prompt) => <button key={prompt} type="button" disabled={disabled} onClick={() => onSelect(prompt)} className="min-h-11 w-max max-w-[calc(100vw_-_3rem)] shrink-0 snap-start overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-blue-200 bg-white px-3 py-2 text-left text-sm font-semibold leading-5 text-blue-700 transition hover:border-blue-400 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-none">{prompt}</button>)}</div></div>;
}
