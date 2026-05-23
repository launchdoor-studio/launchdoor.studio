import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { process } from "@/data/capabilities";

export function Process() {
  return (
    <section className="py-14 md:py-28 bg-surface-sunken/60">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A steady rhythm from
              {" "}
              <span className="font-display italic font-semibold">
                problem
              </span>
              {" "}to{" "}
              <span className="font-display italic font-semibold">launch</span>.
            </>
          }
          description="Clear steps, honest timelines, and regular updates. No surprises."
        />

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {process.map((step) => (
            <div
              key={step.step}
              className="flex flex-col rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 md:p-7"
            >
              <span className="font-mono text-[12.5px] text-brand tracking-tight">
                / {step.step}
              </span>
              <h3 className="mt-5 text-[18px] font-medium tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
