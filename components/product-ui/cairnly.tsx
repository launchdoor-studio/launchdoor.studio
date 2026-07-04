import Image from "next/image";

const timeline = [
  { label: "Email", body: "Re: Q1 planning", meta: "2d", color: "bg-[#d56f35]" },
  { label: "Call", body: "32 min summary saved", meta: "5d", color: "bg-[#5d7fa1]" },
  { label: "Note", body: "Loves Oxford commas", meta: "1w", color: "bg-[#c39a45]" },
] as const;

export function CairnlyMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#fbfaf6] text-[#332d27]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(220,210,196,0.75) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,210,196,0.75) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(ellipse at 68% 36%, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 68% 36%, black 0%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d56f35]/20 blur-3xl"
      />

      <div className="relative grid h-full grid-cols-1 gap-4 p-5 sm:grid-cols-[0.96fr_1.04fr] sm:p-6">
        <section className="flex min-w-0 flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e1d8cc] bg-[#f7f3eb] px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-[#6f6256]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6da36f]" />
            Self-hosted CRM
          </div>

          <div className="mt-5 flex items-center gap-2.5">
            <Image
              src="/product-logos/cairnly.svg"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8"
            />
            <span className="font-display text-[24px] leading-none text-[#332d27]">
              Cairnly
            </span>
          </div>

          <h3 className="mt-5 font-display text-[34px] leading-[0.95] tracking-tight text-[#332d27] sm:text-[42px]">
            The CRM that
            <br />
            <span className="italic text-[#d56f35]">marks the path.</span>
          </h3>
          <p className="mt-4 max-w-[260px] text-[12px] leading-relaxed text-[#786f66]">
            The CRM that respects your data, your taste, and your time.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-[10.5px] text-[#786f66]">
            <span>Your server</span>
            <span className="opacity-40">·</span>
            <span>AGPLv3</span>
            <span className="opacity-40">·</span>
            <span>One command</span>
          </div>
        </section>

        <aside className="relative flex items-center justify-center">
          <div className="absolute inset-x-5 top-8 h-[76%] rounded-xl border border-dashed border-[#d9cfc1]" />
          <div className="relative w-full max-w-[280px] rounded-xl border border-[#e1d8cc] bg-[#f7f3eb] p-4 shadow-[0_28px_60px_-34px_rgba(51,45,39,0.38)]">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[#e1d8cc] pb-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#e4a15f] to-[#b95d2f] font-display text-[13px] text-white">
                SC
              </div>
              <div className="min-w-0">
                <div className="font-display text-[18px] leading-none text-[#332d27]">
                  Sarah Chen
                </div>
                <div className="mt-1 truncate text-[10.5px] text-[#8b8075]">
                  sarah@northwind.co · Customer
                </div>
              </div>
              <span className="flex flex-col items-center gap-[2px]">
                <span className="h-1 w-2 rounded-sm bg-[#d56f35]" />
                <span className="h-1.5 w-4 rounded-sm bg-[#c9bfb1]" />
                <span className="h-2 w-6 rounded-sm bg-[#b8aea1]" />
              </span>
            </div>

            <ol className="mt-4 grid gap-3">
              {timeline.map((item, index) => (
                <li
                  key={item.label}
                  className="relative grid grid-cols-[18px_52px_1fr_auto] items-center gap-2 text-[11px]"
                >
                  {index < timeline.length - 1 ? (
                    <span className="absolute left-[8px] top-6 h-5 w-px bg-[#e1d8cc]" />
                  ) : null}
                  <span className={`h-4 w-4 rounded-full ${item.color}`} />
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#9a8f82]">
                    {item.label}
                  </span>
                  <span className="truncate font-medium text-[#3b342e]">
                    {item.body}
                  </span>
                  <span className="font-mono text-[9px] text-[#9a8f82]">
                    {item.meta}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-4 border-t border-[#e1d8cc] pt-3 text-center font-display text-[13px] italic text-[#786f66]">
              One timeline per person.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
