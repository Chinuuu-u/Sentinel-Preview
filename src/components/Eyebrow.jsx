export default function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[.12em] text-[var(--primary)] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] shadow-[0_0_18px_var(--cyan)]" />
      {children}
    </span>
  );
}
