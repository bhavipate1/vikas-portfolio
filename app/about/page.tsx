import type { Metadata } from "next";
import {
  AboutConnect,
  AboutHero,
  AboutIntro,
  AboutStats,
  EducationSection,
  OnTheField,
  OtherHalf,
  TurnsThatMattered,
  ValuesTested,
} from "@/components/about-sections";

export const metadata: Metadata = {
  title: "About",
  description: "The engineer who stayed curious — Vikas Surani's story, from Rajkot to a TEDx stage.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutIntro />
      <TurnsThatMattered />
      <ValuesTested />
      <EducationSection />
      <OtherHalf />
      <OnTheField />
      <AboutConnect />
    </>
  );
}
