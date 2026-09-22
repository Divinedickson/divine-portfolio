type Props = {
  size?: "xs" | "sm" | "md";
  className?: string;
};

const sizeClasses = {
  xs: "size-7 text-[10px] rounded-md",
  sm: "size-8 text-[11px] rounded-md",
  md: "size-9 text-xs rounded-lg",
};

export default function AssistantMark({ size = "sm", className = "" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center bg-blue-600 font-extrabold tracking-[-.04em] text-white shadow-sm ring-1 ring-blue-700/20 ${sizeClasses[size]} ${className}`}
    >
      DD
    </span>
  );
}
