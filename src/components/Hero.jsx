import { ArrowRight, SunMedium } from "lucide-react";
import Eyebrow from "./Eyebrow";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] pb-16 pt-[145px] hero-grid">
      <div className="pointer-events-none absolute inset-0 hero-glow" />

      <div className="relative mx-auto grid w-[92%] max-w-[1180px] items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="reveal">
          <Eyebrow>AI • Network Security • Unidirectional Traffic</Eyebrow>

          <h1 className="my-5 max-w-[820px] text-[54px] font-extrabold leading-[.9] tracking-[-.065em] sm:text-7xl md:text-[88px]">
            See the threat.
            <br />
            <span className="text-[var(--primary)]">Before it spreads.</span>
          </h1>

          <p className="max-w-[650px] text-lg leading-8 text-[var(--muted)]">
            CHERENKOV is an AI-driven monitoring and threat-detection platform
            designed for high-security environments where traffic must remain
            strictly unidirectional.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-[13px] font-extrabold text-white transition hover:-translate-y-0.5"
            >
              Explore the system
              <ArrowRight size={16} />
            </a>

            <a
              href="#demo"
              className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-[13px] font-extrabold transition hover:-translate-y-0.5 hover:border-[var(--primary)]"
            >
              View live concept
            </a>
          </div>

          <p className="mt-5 font-mono text-[10px] text-[var(--muted)]">
            STATUS // MONITORING ACTIVE • RETURN TRAFFIC BLOCKED
          </p>
        </div>

        <DetectorTerminal />
      </div>
    </section>
  );
}

function DetectorTerminal() {
  return (
    <div className="relative reveal">
      <div className="overflow-hidden rounded-[20px] border border-[#23334a] bg-[#07101d] shadow-2xl rotate-[1.2deg]">
        <div className="flex h-11 items-center gap-2 border-b border-[#203047] px-4">
          <span className="h-2 w-2 rounded-full bg-[#6d7d92]" />
          <span className="h-2 w-2 rounded-full bg-[#6d7d92]" />
          <span className="h-2 w-2 rounded-full bg-[#6d7d92]" />
          <span className="ml-auto font-mono text-[10px] text-[#8090a8]">
            cherenkov / detector.log
          </span>
        </div>

        <div className="p-6 font-mono text-xs leading-8 text-[#b9c8dc]">
          <Line time="12:41:08">
            ingest.flow <Green>OK</Green>
          </Line>
          <Line time="12:41:09">packets=1,284</Line>
          <Line time="12:41:10">
            feature_vector <Green>READY</Green>
          </Line>
          <Line time="12:41:10">cnn.score=0.93</Line>
          <Line time="12:41:10">anomaly.score=0.87</Line>
          <Line time="12:41:11">
            threat <Red>HIGH</Red>
          </Line>
          <Line time="12:41:11">alert_id=CH-7A19</Line>
          <div className="mt-2 text-[#6e819a]">— evidence attached —</div>
        </div>
      </div>

      <div className="mt-4 w-full rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-[18px] shadow-2xl sm:absolute sm:-bottom-8 sm:-right-7 sm:mt-0 sm:w-[235px]">
        <small className="text-[11px] text-[var(--muted)]">
          THREAT CONFIDENCE
        </small>
        <div className="text-[34px] font-extrabold text-[var(--danger)]">
          93%
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-2)]">
          <span className="block h-full w-[84%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--danger)]" />
        </div>
      </div>
    </div>
  );
}

function Line({ time, children }) {
  return (
    <div>
      <span className="text-[#74a0ff]">[{time}]</span> {children}
    </div>
  );
}

function Green({ children }) {
  return <span className="text-[#42df9f]">{children}</span>;
}

function Red({ children }) {
  return <span className="text-[#ff7781]">{children}</span>;
}
