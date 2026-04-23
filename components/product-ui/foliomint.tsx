import { ArrowRight } from "lucide-react";

export function FoliomintMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f4faf5]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(134,188,144,0.18) 0%, rgba(134,188,144,0.04) 40%, transparent 80%)",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-[4%] pt-[5%] pb-0">
        <div className="inline-flex items-center rounded-full bg-white ring-1 ring-surface-border px-2.5 py-[3px] text-[7.5px] md:text-[10px] text-ink-muted font-medium">
          Now with Groq AI-powered parsing
        </div>

        <h2
          className="mt-[3.5%] whitespace-nowrap font-black tracking-[-0.02em] leading-[1.0] text-ink text-[15px] md:text-[22px] lg:text-[30px] font-fraunces"
        >
          Turn your resume into a
          <br />
          <span className="text-emerald-700/80">stunning portfolio</span>
        </h2>

        <p className="mt-[3%] text-[8px] md:text-[10.5px] lg:text-[12.5px] text-ink-muted leading-[1.45] max-w-[68%]">
          Upload your resume, optionally use AI to structure your content,
          customize in the editor, and publish a professional site.
        </p>

        <div className="mt-[3.5%] flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-[6px] bg-emerald-600 px-2.5 py-[6px] text-[8px] md:text-[10.5px] font-medium text-white shadow-sm">
            Get Started
            <ArrowRight size={9} strokeWidth={2.2} />
          </span>
          <span className="inline-flex items-center rounded-[6px] bg-white ring-1 ring-surface-border px-2.5 py-[6px] text-[8px] md:text-[10.5px] font-medium text-ink">
            View Pricing
          </span>
        </div>

        <Preview />
      </div>
    </div>
  );
}

function Preview() {
  return (
    <div className="mt-auto w-[86%] max-w-[520px] translate-y-[18%] rounded-t-[10px] bg-white ring-1 ring-surface-border shadow-[0_20px_40px_-20px_rgba(15,17,23,0.15)] overflow-hidden">
      <div className="px-4 py-3 text-center border-b border-surface-border">
        <span className="text-[9px] md:text-[12px] font-bold text-ink tracking-tight font-fraunces">
          Everything you need to stand out
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2 md:p-2.5">
        {["Upload Your Resume", "AI-Powered Parsing", "Beautiful Themes"].map(
          (t) => (
            <div
              key={t}
              className="rounded-md border border-surface-border p-1.5 md:p-2 flex flex-col gap-1"
            >
              <span className="h-[9px] w-[9px] rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/25" />
              <span className="text-[6.5px] md:text-[8.5px] font-semibold text-ink leading-tight font-fraunces">
                {t}
              </span>
              <div className="flex flex-col gap-0.5">
                <div className="h-[2px] w-full rounded-full bg-surface-sunken" />
                <div className="h-[2px] w-4/5 rounded-full bg-surface-sunken" />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
