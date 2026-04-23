import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { audience } from "@/data/capabilities";

export function Audience() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Who we work with"
          title={
            <>
              From first line of code to
              {" "}
              <span className="font-display italic font-normal">
                long-term
              </span>
              {" "}partnerships.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className="flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 md:p-7"
            >
              <span className="font-mono text-[11.5px] text-ink-subtle">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[17px] font-medium tracking-tight text-ink">
                {a.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
