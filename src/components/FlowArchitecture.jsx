import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleAlert,
  Database,
  FileSearch,
  Globe2,
  Monitor,
  RefreshCw,
  Search,
  ServerCog,
  ShieldCheck,
  Zap,
} from "lucide-react";

const vars = {
  cyan: "border-cyan-500/35",
  green: "border-emerald-500/35",
  violet: "border-violet-500/35",
  orange: "border-orange-500/35",
  blue: "border-blue-500/35",
};

export default function FlowArchitecture() {
  return (
    <section id="technical-flow" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid,rgba(21,94,239,.06)) 1px,transparent 1px),linear-gradient(90deg,var(--grid,rgba(21,94,239,.06)) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom,black,transparent 92%)",
        }}
      />

      <div className="relative mx-auto w-[92%] max-w-[1180px]">
        <header className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.14em] text-[var(--primary)]">
            <i className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] shadow-[0_0_12px_var(--cyan)]" />
            CHERENKOV / Technical Flow
          </span>
          <h2 className="mx-auto mt-5 max-w-[850px] text-4xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-5xl md:text-6xl">
            From <span className="text-[var(--primary)]">one-way traffic</span>{" "}
            to an actionable threat.
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-[var(--muted)] md:text-base">
            A passive pipeline that observes, extracts, detects, alerts and
            learns — without requiring a return channel into the protected
            environment.
          </p>
        </header>

        <Node
          icon={<Globe2 />}
          step="01"
          title="Start Monitoring Portal"
          text="Operator opens the CHERENKOV monitoring dashboard."
          accent
        />

        <Connector label="initialize" />

        <Node
          icon={<ServerCog />}
          step="SYSTEM"
          title="System Initialization"
          text="Load models, establish connections and start monitoring services."
          bullets={[
            "Load AI models",
            "Establish connections",
            "Start monitoring services",
          ]}
        />

        <Connector label="monitor" />

        <div className="rounded-[30px] border border-[var(--line)] bg-[var(--surface)]/80 p-3 shadow-[0_25px_80px_rgba(0,0,0,.08)] backdrop-blur sm:p-5">
          <div className="mb-5 flex flex-col justify-between gap-2 px-2 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-[var(--primary)]">
                Core detection pipeline
              </p>
              <h3 className="mt-1 text-xl font-extrabold tracking-[-.03em]">
                CHERENKOV technical approach
              </h3>
            </div>
            <span className="font-mono text-[9px] text-[var(--muted)]">
              PASSIVE • NO RETURN TRAFFIC
            </span>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1.12fr_auto_1fr_auto_1fr]">
            <Pipeline
              n="02"
              title="Ingestion"
              icon={<Database />}
              tone="cyan"
              items={[
                "Passive packet capture",
                "DPDK / eBPF processing",
                "No return traffic",
              ]}
            />
            <DesktopArrow />
            <Pipeline
              n="03"
              title="Extraction"
              icon={<FileSearch />}
              tone="green"
              items={[
                "Parse IP headers",
                "Extract byte-level features",
                "Calculate flow statistics",
                "Capture timing",
              ]}
            />
            <DesktopArrow />
            <Pipeline
              n="04"
              title="AI Detection"
              icon={<BrainCircuit />}
              tone="violet"
            >
              <Model
                title="1D-CNN"
                text="Learned malicious patterns"
                icon={<Zap />}
              />
              <Model
                title="Autoencoder"
                text="Anomalous / unseen patterns"
                icon={<RefreshCw />}
              />
            </Pipeline>
            <DesktopArrow />
            <Pipeline
              n="05"
              title="Alerting"
              icon={<CircleAlert />}
              tone="orange"
              items={[
                "Generate real-time alerts",
                "Risk scoring",
                "Attach traffic evidence",
                "Send to dashboard",
              ]}
            />
            <DesktopArrow />
            <Pipeline
              n="06"
              title="Monitoring"
              icon={<Monitor />}
              tone="blue"
              items={[
                "View alerts & logs",
                "Analyze traffic patterns",
                "Investigate evidence",
              ]}
            />
          </div>
        </div>

        <Connector label="incident generated" />

        <div className="rounded-[30px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm sm:p-7">
          <div className="mb-6 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-[var(--primary)]">
              07 / Incident response
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-[-.035em]">
              Threat alert generated
            </h3>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Every alert carries a risk score and supporting evidence.
            </p>
          </div>

          <div className="mx-auto max-w-[330px]">
            <div className="rounded-[20px] border border-red-500/35 bg-red-500/[.06] p-5 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-red-500">
                <CircleAlert />
              </div>
              <h4 className="mt-3 font-extrabold">Threat Alert Generated</h4>
              <p className="mt-1 font-mono text-[9px] text-[var(--muted)]">
                RISK SCORE // 93% • EVIDENCE ATTACHED
              </p>
            </div>
          </div>

          <div className="mx-auto mt-6 grid max-w-[900px] gap-4 md:grid-cols-2">
            <Decision yes={false} />
            <Decision yes />
          </div>

          <div className="mx-auto mt-4 max-w-[470px]">
            <div className="rounded-[20px] border border-violet-500/30 bg-violet-500/[.05] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-500">
                  <Search size={19} />
                </div>
                <div>
                  <h4 className="font-extrabold">Log & Investigate</h4>
                  <p className="font-mono text-[9px] text-[var(--muted)]">
                    REVIEW • VALIDATE • DOCUMENT
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  "Review traffic details",
                  "Validate threat",
                  "Take necessary action",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-lg bg-[var(--surface-2)] px-3 py-2 text-[10px] text-[var(--muted)]"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Connector label="feedback loop" />

        <div className="mx-auto max-w-[650px] rounded-[24px] border border-blue-500/30 bg-blue-500/[.05] p-6">
          <div className="flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-500">
              <RefreshCw />
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[.13em] text-blue-500">
                Feedback loop
              </span>
              <h3 className="mt-1 text-xl font-extrabold">
                Continuous Learning
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                Validated events improve detection accuracy, reduce false alarms
                and update models and rules for the next monitoring cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({ icon, step, title, text, bullets = [], accent }) {
  return (
    <div
      className={`mx-auto max-w-[560px] rounded-[24px] border p-6 shadow-sm ${
        accent
          ? "border-[color-mix(in_srgb,var(--primary)_45%,var(--line))] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))]"
          : "border-[var(--line)] bg-[var(--surface)]"
      }`}
    >
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
          {icon}
        </div>
        <div>
          <span className="font-mono text-[10px] text-[var(--primary)]">
            {step}
          </span>
          <h3 className="mt-1 text-xl font-extrabold">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
        </div>
      </div>
      {bullets.length > 0 && (
        <div className="mt-5 grid gap-2 border-t border-[var(--line)] pt-4 sm:grid-cols-3">
          {bullets.map((x) => (
            <div key={x} className="text-xs text-[var(--muted)]">
              • {x}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Connector({ label }) {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="h-7 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--cyan)]" />
      <ArrowDown size={16} className="text-[var(--primary)]" />
      <span className="mt-1 font-mono text-[8px] uppercase tracking-[.12em] text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
}

function Pipeline({ n, title, icon, tone, items, children }) {
  const border = vars[tone];
  const iconColor = {
    cyan: "text-cyan-500 bg-cyan-500/10",
    green: "text-emerald-500 bg-emerald-500/10",
    violet: "text-violet-500 bg-violet-500/10",
    orange: "text-orange-500 bg-orange-500/10",
    blue: "text-blue-500 bg-blue-500/10",
  }[tone];

  return (
    <div
      className={`group rounded-[20px] border ${border} bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-[10px] font-medium ${iconColor.split(" ")[0]}`}
        >
          {n}
        </span>
        <div
          className={`grid h-10 w-10 place-items-center rounded-xl ${iconColor}`}
        >
          {icon}
        </div>
      </div>
      <h4 className="mt-4 text-base font-extrabold">{title}</h4>
      {children}
      {items && (
        <ul className="mt-4 grid gap-2">
          {items.map((x) => (
            <li key={x} className="text-[11px] leading-5 text-[var(--muted)]">
              • {x}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Model({ icon, title, text }) {
  return (
    <div className="mt-3 rounded-xl border border-violet-500/25 bg-violet-500/[.06] p-3">
      <div className="flex items-center gap-2 text-violet-500">
        {icon}
        <span className="text-xs font-extrabold text-[var(--text)]">
          {title}
        </span>
      </div>
      <p className="mt-1 text-[9px] text-[var(--muted)]">{text}</p>
    </div>
  );
}

function DesktopArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <ArrowRight size={18} className="text-[var(--primary)]" />
    </div>
  );
}

function Decision({ yes }) {
  return (
    <div
      className={`rounded-[20px] border p-5 ${
        yes
          ? "border-red-500/30 bg-red-500/[.05]"
          : "border-emerald-500/30 bg-emerald-500/[.05]"
      }`}
    >
      <span
        className={`font-mono text-[9px] font-bold ${yes ? "text-red-500" : "text-emerald-500"}`}
      >
        {yes ? "YES" : "NO"} // DECISION
      </span>
      <div
        className={`mt-3 flex items-center gap-2 ${yes ? "text-red-500" : "text-emerald-500"}`}
      >
        {yes ? <ShieldCheck size={22} /> : <CheckCircle2 size={22} />}
        <h4 className="text-base font-extrabold text-[var(--text)]">
          {yes ? "Confirmed Threat" : "False Positive"}
        </h4>
      </div>
      <ul className="mt-4 grid gap-2 text-[11px] leading-5 text-[var(--muted)]">
        {(yes
          ? [
              "Isolate / block if applicable",
              "Notify stakeholders",
              "Document the incident",
            ]
          : [
              "Mark event as false positive",
              "Update rules / thresholds",
              "Feed validated data back",
            ]
        ).map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}
