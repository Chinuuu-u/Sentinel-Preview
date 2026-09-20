import { ArrowRight, Check, CircleAlert } from "lucide-react";
import SectionHead from "./SectionHead";

const cards = [
  {
    icon: <ArrowRight size={21} />,
    title: "Unidirectional by design",
    text: "Data can move from a protected source toward a monitoring or analysis zone without creating a direct reverse channel.",
    points: [
      "Observe flows without relying on response packets.",
      "Preserve network isolation as a security property.",
      "Generate evidence and alerts out-of-band.",
    ],
  },
  {
    icon: <CircleAlert size={21} />,
    title: "Why conventional monitoring can fall short",
    text: "Many security workflows assume a bidirectional conversation for confirmation, interrogation or active response.",
    points: [
      "Passive capture becomes essential.",
      "Features must be derived from observed traffic.",
      "Detection should work without changing the flow.",
    ],
  },
];

export default function Problem() {
  return (
    <section className="section-pad" id="problem">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="01 / The problem"
          title="Security systems built for two-way networks don't fit every environment."
        >
          Some critical environments intentionally prevent direct return traffic.
          That changes how telemetry, detection and response must be designed.
        </SectionHead>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="reveal rounded-[22px] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-sm transition hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[color-mix(in_srgb,var(--primary)_11%,var(--surface))] text-[var(--primary)]">
                {card.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {card.text}
              </p>

              <div className="mt-5 grid gap-3">
                {card.points.map((point) => (
                  <div key={point} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 shrink-0 text-[var(--green)]" size={16} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
