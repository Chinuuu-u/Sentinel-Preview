import { ArrowUp } from "lucide-react";
import Eyebrow from "./Eyebrow";

export default function FooterCTA() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-295">
          <div className="reveal rounded-[28px] border border-(--line) bg-(--surface) p-10 text-center shadow-2xl md:p-16">
            <Eyebrow>Hackathon submission</Eyebrow>

            <h2 className="mt-4 text-4xl font-extrabold leading-none tracking-tighter md:text-6xl">
              Turn one-way traffic into one-way visibility.
            </h2>

            <p className="mx-auto mt-4 max-w-162.5 text-(--muted)">
              AI-powered passive network monitoring system that observes one-way
              traffic and produces threat intelligence without interacting with
              the protected network.
            </p>

            <a
              href="#top"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-[13px] font-extrabold text-white"
            >
              Back to top
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-(--line) py-7">
        <div className="mx-auto flex w-[92%] max-w-295 flex-col justify-between gap-3 text-xs text-(--muted) sm:flex-row">
          <span>© 2026 CHERENKOV · Replace with your team / institution.</span>
          <span className="font-mono">
            BUILT FOR SECURITY • DESIGNED FOR ONE-WAY NETWORKS
          </span>
        </div>
      </footer>
    </>
  );
}
