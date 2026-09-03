import type { Metadata } from "next";
import {
  SpeakerBackground,
  SpeakerContact,
  SpeakerEngagements,
  SpeakerFormats,
  SpeakerHero,
  SpeakerLogos,
  SpeakerStats,
  SpeakerVideos,
} from "@/components/speaker-sections";

export const metadata: Metadata = {
  title: "Speaker",
  description: "Being curious on every stage — book Vikas Surani for keynotes, panels and workshops.",
};

export default function SpeakerPage() {
  return (
    <>
      <SpeakerHero />
      <SpeakerStats />
      <SpeakerLogos />
      <SpeakerEngagements />
      <SpeakerVideos />
      <SpeakerFormats />
      <SpeakerBackground />
      <SpeakerContact />
    </>
  );
}
