import { Check, ShieldCheck } from "lucide-react";
import SectionHead from "./SectionHead";

const responses = [
  {
    label: "False positive",
    title: "Refine the detector",
    Icon: Check,
    color: "text-[var(--green)]",
    text: "Mark the event, update thresholds/rules and feed validated examples into the improvement loop.",
  },
  {
    label: "Confirmed threat",
    title: "Escalate with evidence",
    Icon: ShieldCheck,
    color: "text-[var(--danger)]",
    text: "Notify stakeholders, preserve the incident record and take the permitted containment action.",
  },
];

export default function IncidentResponse() {
  return (
    <section className="section-pad" id="response">
      <div className="mx-auto w-[92%] max-w-295">
        <SectionHead
          eyebrow="05 / Incident response"
          title="Detection is only useful when the evidence is actionable."
        >
          Show judges exactly what happens after a model produces a suspicious
          event.
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-2">
          {responses.map(({ label, title, Icon, color, text }) => (
            <div
              key={title}
              className="reveal rounded-[22px] border border-[var(--line)] bg-[var(--surface)] p-7"
            >
              <span
                className={`font-mono text-[11px] font-medium uppercase tracking-[.12em] ${color}`}
              >
                {label}
              </span>

              <div className={`mt-4 flex items-center gap-3 ${color}`}>
                <Icon />
                <h3 className="text-xl font-bold text-[var(--text)]">
                  {title}
                </h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
