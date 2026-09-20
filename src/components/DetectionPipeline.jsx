import { ChevronRight } from "lucide-react";
import { detectionSteps } from "../data/content";
import SectionHead from "./SectionHead";

export default function DetectionPipeline() {
  return (
    <section className="section-pad" id="pipeline">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="03 / Detection pipeline"
          title="Every observed packet becomes evidence."
        >
          The detection pipeline converts passive traffic into structured
          features, model outputs and analyst-ready alerts.
        </SectionHead>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {detectionSteps.map(({ number, title, description, tag, Icon }, index) => (
            <div
              key={number}
              className="reveal relative min-h-[250px] rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--primary)]"
            >
              <span className="font-mono text-[11px] text-[var(--primary)]">
                {number}
              </span>

              <div className="mt-7 grid h-10 w-10 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--primary)_10%,var(--surface))] text-[var(--primary)]">
                <Icon size={19} />
              </div>

              <h3 className="mt-4 text-[17px] font-bold">{title}</h3>

              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                {description}
              </p>

              <span className="mt-4 inline-block rounded-md bg-[var(--surface-2)] px-2 py-1 font-mono text-[9px] text-[var(--muted)]">
                {tag}
              </span>

              {index < 4 && (
                <ChevronRight
                  className="absolute -right-5 top-1/2 z-10 hidden text-[var(--primary)] lg:block"
                  size={22}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
