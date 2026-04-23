import { ArrowRight, Lock } from "lucide-react";

export function BotttleMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 12% 0%, rgba(37,99,235,0.14), transparent 60%), radial-gradient(ellipse 55% 45% at 92% 0%, rgba(16,185,129,0.12), transparent 60%)",
        }}
      />

      <div className="relative h-full flex flex-col items-center text-center px-[4%] pt-[6%] pb-0">
        <div className="inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-surface-border shadow-sm px-2 py-[3px] text-[8px] md:text-[10px] text-ink font-medium">
          <Lock size={8} strokeWidth={2} className="text-ink-muted" />
          Self-hosted · Open architecture
        </div>

        <h2
          className="mt-[3%] font-bold tracking-[-0.025em] leading-[1.02] text-ink text-[16px] md:text-[24px] lg:text-[32px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          The client portal
          <br />
          you actually own.
        </h2>

        <p className="mt-[3%] text-[8px] md:text-[10.5px] lg:text-[12.5px] text-ink-muted leading-[1.45] max-w-[70%]">
          Manage projects, send invoices, track time, and collaborate with
          clients from a single self-hosted workspace.
        </p>

        <div className="mt-[3.5%] flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-[6px] bg-brand px-2.5 py-[6px] text-[8px] md:text-[10.5px] font-medium text-white shadow-sm">
            Get started
            <ArrowRight size={9} strokeWidth={2.2} />
          </span>
          <span className="inline-flex items-center rounded-[6px] bg-white ring-1 ring-surface-border px-2.5 py-[6px] text-[8px] md:text-[10.5px] font-medium text-ink">
            See features
          </span>
        </div>

        <Terminal />
      </div>
    </div>
  );
}

function Terminal() {
  return (
    <div className="mt-auto w-[92%] max-w-[560px] translate-y-[14%] rounded-t-[10px] overflow-hidden shadow-[0_20px_40px_-20px_rgba(15,17,23,0.45)]">
      <div className="flex items-center justify-between bg-[#e9eaee] px-2 py-[5px]">
        <div className="flex gap-[3px]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[7px] md:text-[9px] text-[#6b7280] font-mono">
          terminal
        </span>
      </div>
      <div className="bg-[#0e1016] text-[#e5e7eb] px-2.5 py-[7px] font-mono text-[6.5px] md:text-[9px] lg:text-[10.5px] leading-[1.55]">
        <Line>
          <Prompt /> <Cmd>docker</Cmd> compose up <Flag>--build</Flag>
        </Line>
        <Line dim>[+] Running 4/4</Line>
        <SvcRow name="postgres" right="Started   1.2s" />
        <SvcRow name="redis" right="Started   0.8s" />
        <SvcRow name="api" right="Ready" url="http://localhost:3001" />
        <SvcRow name="web" right="Ready" url="http://localhost:8080" />
        <Line>
          <Prompt />
        </Line>
      </div>
    </div>
  );
}

function Line({
  children,
  dim,
}: {
  children?: React.ReactNode;
  dim?: boolean;
}) {
  return (
    <div className={dim ? "text-[#8b93a1]" : undefined}>{children}</div>
  );
}

function Prompt() {
  return <span className="text-[#6b7280]">$</span>;
}

function Cmd({ children }: { children: React.ReactNode }) {
  return <span className="text-[#d174e0]">{children}</span>;
}

function Flag({ children }: { children: React.ReactNode }) {
  return <span className="text-[#fbbf24]">{children}</span>;
}

function SvcRow({
  name,
  right,
  url,
}: {
  name: string;
  right: string;
  url?: string;
}) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-[#d174e0]">✓</span>
      <span className="text-[#d174e0] min-w-[44px]">{name}</span>
      {url ? (
        <span className="text-[#60a5fa] underline decoration-[#60a5fa]/60 underline-offset-[2px] truncate">
          {url}
        </span>
      ) : null}
      <span className="ml-auto text-[#8b93a1]">{right}</span>
    </div>
  );
}
