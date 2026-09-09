import type { Metadata } from "next";
import {
  AdvisoryCause,
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

export const metadata: Metadata = {
  title: "Advisory",
  description: "Paid advisory hours where every contribution funds education for students who can't buy access to advice.",
};

export default function AdvisoryPage() {
  return (
    <AdvisoryFormProvider>
      <AdvisoryHero />
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
