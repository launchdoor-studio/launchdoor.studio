import { ArrowRight, Github } from "lucide-react";

export function OpenConduitMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f3fbf6]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.14), transparent 65%)",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-[4%] pt-[4%] pb-0">
        <ChatBubbleLogo />

        <h2
          className="mt-[3%] font-extrabold tracking-[-0.03em] leading-[1.0] text-ink text-[15px] md:text-[23px] lg:text-[31px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Your WhatsApp CRM,
          <br />
          <span className="text-emerald-500">on your server</span>
        </h2>

        <div className="mt-[3%] inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-emerald-500/25 px-2 py-[3px] text-[7px] md:text-[9.5px] text-ink-muted font-medium">
          <span className="h-[4px] w-[4px] rounded-full bg-emerald-500" />
          Open Source · Self-Hostable · Free Forever
        </div>

        <p className="mt-[3%] text-[7.5px] md:text-[10px] lg:text-[12px] text-ink-muted leading-[1.45] max-w-[70%]">
          OpenConduit is the open-source WhatsApp CRM built for solo operators
          and small teams. Manage contacts, conversations, and lead pipelines,
          all self-hosted, all yours.
        </p>

        <div className="mt-[3%] flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-[6px] bg-emerald-500 px-2.5 py-[6px] text-[8px] md:text-[10.5px] font-medium text-white shadow-sm">
            Get Started
            <ArrowRight size={9} strokeWidth={2.2} />
          </span>
          <span className="inline-flex items-center gap-1 rounded-[6px] bg-white ring-1 ring-surface-border px-2.5 py-[6px] text-[8px] md:text-[10.5px] font-medium text-ink">
            <Github size={9} strokeWidth={2} />
            View on GitHub
          </span>
        </div>

        <InstallTerminal />
      </div>
    </div>
  );
}

function ChatBubbleLogo() {
  return (
    <div className="flex h-[22px] w-[24px] md:h-[30px] md:w-[32px] items-center justify-center">
      <svg viewBox="0 0 32 30" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="oc-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>
        <path
          d="M4 4h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H12l-6 6v-6H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
          fill="url(#oc-g)"
          stroke="#065f46"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <g fill="#ffffff">
          <circle cx="10" cy="13" r="1.8" />
          <circle cx="16" cy="13" r="1.8" />
          <circle cx="22" cy="13" r="1.8" />
        </g>
      </svg>
    </div>
  );
}

function InstallTerminal() {
  return (
    <div className="mt-auto w-[84%] max-w-[500px] translate-y-[18%] rounded-[10px] overflow-hidden shadow-[0_20px_40px_-20px_rgba(15,17,23,0.5)]">
      <div className="relative flex items-center justify-between bg-[#1a1f2a] px-2 py-[5px]">
        <div className="flex gap-[3px]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#28c840]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[7px] md:text-[9px] text-[#9ca3af] font-mono">
          terminal
        </span>
        <span className="h-[8px] w-[8px] rounded-[2px] ring-1 ring-[#6b7280]/60" />
      </div>
      <div className="bg-[#1a1f2a] text-[#e5e7eb] px-3 py-[7px] font-mono text-[6.5px] md:text-[9px] lg:text-[10.5px] leading-[1.55]">
        <div>
          <span className="text-[#fbbf24]">$</span>{" "}
          <span className="text-[#fbbf24]">git</span> clone{" "}
          <span className="text-[#e5e7eb]">
            https://github.com/launchdoor/openconduit.git
          </span>
        </div>
        <div>
          <span className="text-[#fbbf24]">$</span>{" "}
          <span className="text-[#fbbf24]">cd</span> openconduit
        </div>
        <div>
          <span className="text-[#fbbf24]">$</span>{" "}
          <span className="text-[#fbbf24]">docker</span> compose up
        </div>
      </div>
    </div>
  );
}
