import type { Metadata } from "next";
import { ContactCategoryLabels, ContactForm, ContactHero, ContactReasons } from "@/components/contact-sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Vikas Surani what you have in mind — keynotes, panels, advisory hours and campus sessions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCategoryLabels />
      <ContactReasons />
      <ContactForm />
    </>
  );
}
