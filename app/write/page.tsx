import type { Metadata } from "next";
import { ArticleArchive, Experiential, WhyIWrite, WriteCategoryLabels, WriteHero } from "@/components/write-sections";

export const metadata: Metadata = {
  title: "Write",
  description: "Thinking aloud — essays, talks and field notes on AI, leadership and Bharat.",
};

export default function WritePage() {
  return (
    <>
      <WriteHero />
      <WriteCategoryLabels />
      <ArticleArchive />
      <WhyIWrite />
      <Experiential />
    </>
  );
}
