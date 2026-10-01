import type { Metadata } from "next";
import {
  ArticleArchive,
  Experiential,
  LearnerJourney,
  NewsletterFeature,
  PodcastCards,
  WhyIWrite,
  WriteCategoryLabels,
  WriteHero,
} from "@/components/write-sections";

export const metadata: Metadata = {
  title: "Being Writer",
  description: "Everything written by Vikas Surani: Being Curious newsletters, essays and Mastek perspectives.",
};

export default function WritePage() {
  return (
    <>
      <WriteHero />
      <WriteCategoryLabels />
      <ArticleArchive />
      <NewsletterFeature />
      <WhyIWrite />
      <LearnerJourney />
      <PodcastCards />
      <Experiential />
    </>
  );
}
