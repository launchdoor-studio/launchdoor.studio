import { ArrowRight, Sparkles } from "lucide-react";

export function QueriouslyMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#faf8f5]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 45% at 0% 0%, rgba(217,119,6,0.08), transparent 55%)",
        }}
      />

      <div className="relative h-full grid grid-cols-[1.1fr_1fr] gap-[3%] px-[5%] py-[6%]">
        <div className="flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-surface-border px-1.5 py-[2px] text-[6.5px] md:text-[8.5px] text-ink-muted font-medium">
            <Sparkles size={7} strokeWidth={2} className="text-amber-600" />
            Research copilot
          </span>

          <h2
            className="mt-[5%] font-normal tracking-[-0.02em] leading-[1.0] text-ink text-[16px] md:text-[24px] lg:text-[34px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technical
            <br />
            decisions, with
            <br />
            <em className="italic">defensible</em>
            <br />
            evidence.
          </h2>

          <p className="mt-[5%] text-[7.5px] md:text-[10px] lg:text-[12px] text-ink-muted leading-[1.45] max-w-[95%]">
            Read papers alongside an AI that annotates in the margins, cites
            sources, and runs entirely on your machine.
          </p>

          <div className="mt-[5%] flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-[6px] bg-ink px-2 py-[5px] text-[7.5px] md:text-[10px] font-medium text-white">
              Download for macOS
              <ArrowRight size={8} strokeWidth={2.2} />
            </span>
          </div>
        </div>

        <SessionCard />
      </div>
    </div>
  );
}

function SessionCard() {
  return (
    <div className="self-center rounded-xl bg-white ring-1 ring-surface-border shadow-[0_20px_40px_-20px_rgba(15,17,23,0.18)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-surface-border bg-surface">
        <div className="flex items-center gap-1 text-[7px] md:text-[9px] font-mono text-ink-subtle">
          <span className="h-[5px] w-[5px] rounded-full bg-amber-500" />
          Session · 12:04
        </div>
        <span className="ml-auto text-[6.5px] md:text-[8px] font-mono text-ink-subtle">
          3 sources
        </span>
      </div>

      <div className="p-2 md:p-2.5 flex flex-col gap-1.5">
        <div className="text-[7.5px] md:text-[9.5px] font-medium text-ink leading-snug tracking-tight">
          Model de-striping in decision-offloading planning
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="h-[2px] w-full rounded-full bg-surface-sunken" />
          <div className="h-[2px] w-5/6 rounded-full bg-surface-sunken" />
          <div className="h-[2px] w-4/6 rounded-full bg-surface-sunken" />
        </div>

        <div className="rounded-md border border-amber-500/25 bg-amber-500/[0.06] px-2 py-1.5 flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-[6.5px] md:text-[8px] font-mono uppercase tracking-[0.1em] text-amber-700">
            <Sparkles size={7} strokeWidth={2} />
            marginalia
          </div>
          <div className="text-[7px] md:text-[9px] text-ink-muted leading-snug">
            Conflicts with Zhao et&nbsp;al. (2022), Fig.&nbsp;4 — their
            striping assumption does not hold under offline RL.
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-surface-border pt-1.5 text-[6.5px] md:text-[8.5px] text-ink-subtle font-mono">
          <span>p.&nbsp;14 · §&nbsp;2.1</span>
          <span className="inline-flex items-center gap-0.5 text-ink">
            cite ↵
          </span>
        </div>
      </div>
    </div>
  );
}
