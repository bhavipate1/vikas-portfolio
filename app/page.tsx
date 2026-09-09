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
  Testimonials,
} from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <SpeakAbout />
      <AboutTeaser />
      <Testimonials />
      <FourAreas />
      <InTheRoom />
      <Formats />
      <QuoteStats />
      <Perspectives />
      <HomeContact />
    </>
  );
}
