import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto grid w-[92%] max-w-[1180px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={label}
            className={`border-[var(--line)] px-6 py-7 ${
              index < 3 ? "border-b sm:border-r lg:border-b-0" : ""
            }`}
          >
            <strong className="text-3xl font-extrabold tracking-[-.04em]">
              {value}
            </strong>
            <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
