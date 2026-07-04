import { BotttleMockup } from "./botttle";
import { CairnlyMockup } from "./cairnly";
import { FoliomintMockup } from "./foliomint";
import { OpenConduitMockup } from "./openconduit";
import { QueriouslyMockup } from "./queriously";
import { RezumateMockup } from "./rezumate";

const registry: Record<string, () => React.ReactNode> = {
  botttle: BotttleMockup,
  cairnly: CairnlyMockup,
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
