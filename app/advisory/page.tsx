import type { Metadata } from "next";
import { LearnerHero, LearnerJourney } from "@/components/learner-sections";

export const metadata: Metadata = {
  title: "Being Learner",
  description: "The experiences, questions and lessons that shaped Vikas Surani's learning journey.",
};

export default function AdvisoryPage() {
  return (
    <>
      <LearnerHero />
      <LearnerJourney />
    </>
  );
}
