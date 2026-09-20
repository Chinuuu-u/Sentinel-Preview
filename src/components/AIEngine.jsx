import { BrainCircuit, RefreshCw } from "lucide-react";
import Eyebrow from "./Eyebrow";
import SectionHead from "./SectionHead";

const models = [
  {
    label: "Model A",
    title: "1D-CNN",
    Icon: BrainCircuit,
    text: "Learns local patterns in sequential network features to classify traffic associated with known malicious behavior.",
    formula: "INPUT → FEATURE WINDOW → CONV → POOL → DENSE → THREAT SCORE",
  },
  {
    label: "Model B",
    title: "Autoencoder",
    Icon: RefreshCw,
    text: "Learns normal traffic structure and flags observations with unusually high reconstruction error.",
    formula: "NORMAL TRAFFIC → ENCODE → DECODE → ERROR → ANOMALY SCORE",
  },
];

export default function AIEngine() {
  return (
    <section
      className="section-pad border-y border-(--line) bg-(--surface)"
      id="ai-engine"
    >
      <div className="mx-auto w-[92%] max-w-295">
        <SectionHead
          eyebrow="04 / AI engine"
          title="Two models. Two ways to catch a threat."
        >
          {/* Replace the placeholders with your actual model architecture, metrics
          and training results. */}
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-2">
          {models.map(({ label, title, Icon, text, formula }) => (
            <div
              key={title}
              className="reveal rounded-3xl border border-(--line) bg-linear-to-br from-(--surface) to-(--surface-2) p-8"
            >
              <Eyebrow>{label}</Eyebrow>

              <div className="mt-4 flex items-center gap-3 text-(--primary)">
                <Icon />
                <h3 className="text-2xl font-bold text-(--text)">{title}</h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-(--muted)">{text}</p>

              <div className="mt-6 rounded-xl border border-dashed border-(--line) p-4 font-mono text-[11px] text-(--primary)">
                {formula}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
