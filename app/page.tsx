import {
  AboutTeaser,
  FourAreas,
  Formats,
  Hero,
  HomeContact,
  InTheRoom,
  LogoStrip,
  Perspectives,
  QuoteStats,
  SpeakAbout,
} from "@/components/home-sections";
import { LinkedInVoices } from "@/components/linkedin-voices";
import { getTestimonials } from "@/lib/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <SpeakAbout />
      <AboutTeaser />
      <FourAreas />
      <InTheRoom />
      <Formats />
      <QuoteStats />
      <Perspectives />
      <LinkedInVoices page="curious" items={getTestimonials("curious")} />
      <HomeContact />
    </>
  );
}
