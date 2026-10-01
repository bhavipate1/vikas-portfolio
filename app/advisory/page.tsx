import type { Metadata } from "next";
import {
  AdvisoryCause,
  CareInitiatives,
  AdvisoryFaq,
  AdvisoryForm,
  AdvisoryHero,
  AdvisoryHowItWorks,
  AdvisoryImpact,
  AdvisoryOffers,
  AdvisoryPartners,
  AdvisoryPrinciples,
  Testimonials,
} from "@/components/advisory-sections";
import { AdvisoryFormProvider } from "@/components/advisory-form-context";
import { LearnerHero, LearnerJourney } from "@/components/learner-sections";

export const metadata: Metadata = {
  title: "Being Learner",
  description: "Vikas Surani's learning journey, advisory work, and the experiences that shaped how he helps others grow.",
};

export default function AdvisoryPage() {
  return (
    <AdvisoryFormProvider>
      <LearnerHero />
      <LearnerJourney />
      <AdvisoryHero />
      <CareInitiatives />
      <AdvisoryHowItWorks />
      <AdvisoryImpact />
      <AdvisoryCause />
      <AdvisoryOffers />
      <AdvisoryPartners />
      <AdvisoryPrinciples />
      <Testimonials />
      <AdvisoryFaq />
      <AdvisoryForm />
    </AdvisoryFormProvider>
  );
}
