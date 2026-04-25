import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { whyLaunchdoor } from "@/data/capabilities";

export function WhyLaunchdoor() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Why Launchdoor"
              title={
                <>
                  Engineering partners who
                  {" "}
                  <span className="font-display italic font-normal">
                    actually ship
                  </span>
                  .
                </>
              }
              description="We combine engineering discipline with product thinking to create software that is practical, scalable, and built to last."
            />
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-surface-border">
              {whyLaunchdoor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand shrink-0">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-[15.5px] text-ink leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
