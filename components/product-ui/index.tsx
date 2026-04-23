import { BotttleMockup } from "./botttle";
import { FoliomintMockup } from "./foliomint";
import { OpenConduitMockup } from "./openconduit";
import { QueriouslyMockup } from "./queriously";
import { RezumateMockup } from "./rezumate";

const registry: Record<string, () => React.ReactNode> = {
  botttle: BotttleMockup,
  foliomint: FoliomintMockup,
  openconduit: OpenConduitMockup,
  queriously: QueriouslyMockup,
  rezumate: RezumateMockup,
};

export function ProductMockup({ slug }: { slug: string }) {
  const Mock = registry[slug];
  if (!Mock) return null;
  return <Mock />;
}
