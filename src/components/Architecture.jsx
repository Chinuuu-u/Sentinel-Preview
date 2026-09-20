import SectionHead from "./SectionHead";

export default function Architecture() {
  return (
    <section className="section-pad pt-8" id="architecture">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <SectionHead
          eyebrow="02 / System architecture"
          title="From packet capture to an analyst-ready incident."
        >
          Our complete technical approach — ingestion, feature extraction, AI
          detection, alerting and response.
        </SectionHead>

        <div className="reveal rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-3 shadow-2xl sm:p-4">
          <img
            src="/assets/architecture.jpg"
            alt="CHERENKOV technical architecture"
            className="block w-full rounded-2xl"
          />
          <div className="px-2 pb-1 pt-4 font-mono text-[10px] text-[var(--muted)]">
            ARCHITECTURE // REPLACE WITH YOUR FINAL SYSTEM DIAGRAM
          </div>
        </div>
      </div>
    </section>
  );
}
