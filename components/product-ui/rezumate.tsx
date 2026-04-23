import Image from "next/image";
import { Upload } from "lucide-react";

export function RezumateMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f7f6f2] font-mono">
      <div className="relative h-full flex flex-col px-[3%] pt-[3%] pb-0">
        <TopBar />
        <div className="mt-[2%] border-t border-ink/15" />

        <div className="mt-[3%] mx-auto w-[94%] rounded-lg bg-white ring-1 ring-ink/80 p-2 md:p-2.5 flex flex-col gap-2">
          <span className="text-[8px] md:text-[11px] font-bold text-ink tracking-tight">
            Score Resume
          </span>

          <Field label="Job Description" placeholder="Paste the job description here..." />

          <UploadZone />

          <DisabledButton>Get Score</DisabledButton>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="flex h-[10px] w-[10px] md:h-[14px] md:w-[14px] items-center justify-center overflow-hidden rounded-full bg-[#4b4d50] ring-1 ring-ink/25">
          <Image
            src="/product-logos/rezumate.png"
            alt=""
            width={14}
            height={14}
            className="h-full w-full object-cover"
          />
        </span>
        <span className="text-[8.5px] md:text-[11px] font-bold text-ink tracking-tight">
          Rezumate
        </span>
      </div>
      <div className="inline-flex items-center rounded-md bg-white ring-1 ring-ink/80 p-[2px] text-[7px] md:text-[9px] gap-[1px]">
        <Tab active>Score</Tab>
        <Tab>Compare</Tab>
        <Tab>Rank</Tab>
        <Tab>Chat</Tab>
      </div>
    </div>
  );
}

function Tab({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`px-1.5 py-[3px] md:px-2 md:py-[4px] rounded-[4px] transition-colors ${
        active ? "bg-ink text-white" : "text-ink-muted"
      }`}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[7px] md:text-[9px] font-bold text-ink">{label}</span>
      <div className="h-[24px] md:h-[40px] rounded-md ring-1 ring-ink/70 bg-white px-2 py-1.5 text-[6.5px] md:text-[9px] text-ink-subtle flex items-start">
        {placeholder}
      </div>
    </div>
  );
}

function UploadZone() {
  return (
    <div className="rounded-md border-2 border-dashed border-ink/40 bg-[#f1efe9] flex flex-col items-center gap-1 py-3 md:py-5">
      <span className="flex h-[14px] w-[14px] md:h-[22px] md:w-[22px] items-center justify-center rounded-full ring-1 ring-ink/70">
        <Upload size={8} strokeWidth={2} className="text-ink" />
      </span>
      <span className="text-[7px] md:text-[9.5px] font-bold text-ink">
        No resume uploaded
      </span>
      <span className="text-[6.5px] md:text-[8.5px] text-ink-subtle">
        Upload your resume in PDF format
      </span>
      <span className="mt-0.5 inline-flex items-center rounded-[4px] bg-ink px-2 py-[3px] md:px-2.5 md:py-[5px] text-[6.5px] md:text-[9px] font-bold text-white">
        Upload Resume
      </span>
    </div>
  );
}

function DisabledButton({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center self-start rounded-[4px] bg-ink/40 px-2.5 py-[4px] md:px-3 md:py-[6px] text-[7px] md:text-[9.5px] font-bold text-white cursor-not-allowed">
      {children}
    </span>
  );
}
