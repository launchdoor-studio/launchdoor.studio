import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyLaunchdoor } from "@/components/sections/why-launchdoor";
import { Process } from "@/components/sections/process";
import { Audience } from "@/components/sections/audience";
import { ContactCTA } from "@/components/sections/contact-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — A modern software studio`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedWork />
      <WhyLaunchdoor />
      <Process />
      <Audience />
      <ContactCTA />
    </>
  );
}
