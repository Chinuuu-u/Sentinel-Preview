import SectionHead from "./SectionHead";
import { alerts, dashboardBars } from "../data/content";

export default function Dashboard() {
  return (
    <section className="section-pad" id="demo">
      <div className="mx-auto w-[92%] max-w-295">
        <SectionHead
          eyebrow="06 / Product concept"
          title="A command center for one-way network visibility."
        >
          {/* Dummy dashboard below. Replace the chart data, alert rows and cards
          with your real application screenshots or live API output. */}
        </SectionHead>

        <div className="reveal rounded-[25px] border border-[#21334a] bg-[#08111e] p-5 shadow-2xl md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <strong className="text-white">CHERENKOV / MONITORING</strong>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2d8066] px-2.5 py-1.5 font-mono text-[9px] text-[#42df9f]">
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#42df9f]" />
              LIVE MONITORING
            </span>
          </div>

          <div className="flex justify-center items-center">
            {/* <TrafficChart /> */}
            {/* <AlertList /> */}
            <Demo />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrafficChart() {
  return (
    <div className="rounded-2xl border border-[#1f3045] bg-[#0d1725] p-5">
      <div className="mb-3 font-mono text-[10px] text-[#8ea0b6]">
        TRAFFIC VOLUME / LAST 60 MIN
      </div>

      <div className="flex h-47.5 items-end gap-1.5 bg-[linear-gradient(rgba(91,140,255,.08)_1px,transparent_1px)] bg-size-[100%_36px]">
        {dashboardBars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t bg-linear-to-b from-[#5b8cff] to-[#1a4ba8]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function AlertList() {
  return (
    <div className="rounded-2xl border border-[#1f3045] bg-[#0d1725] p-5">
      <div className="font-mono text-[10px] text-[#8ea0b6]">RECENT ALERTS</div>

      <div className="mt-2 grid gap-2">
        {alerts.map(([level, text, score]) => (
          <div
            key={text}
            className="rounded-lg bg-[#111f30] p-2.5 font-mono text-[10px] text-[#aab8c9]"
          >
            <b
              className={level === "HIGH" ? "text-[#ff7781]" : "text-[#42df9f]"}
            >
              {level}
            </b>{" "}
            · {text} · {score}
          </div>
        ))}
      </div>
    </div>
  );
}
function Demo() {
  return (
    <div className="h-full w-full">
      <video width="320" height="240" controls className="h-screen w-screen">
        <source src="/assets/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
