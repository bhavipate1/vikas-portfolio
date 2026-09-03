"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { advisory } from "@/lib/content";

type AdvisoryFormState = {
  topic: string;
  setTopic: (topic: string) => void;
  tier: string;
  tierTouched: boolean;
  setTier: (tier: string) => void;
};

const AdvisoryFormContext = createContext<AdvisoryFormState | null>(null);

export function AdvisoryFormProvider({ children }: { children: ReactNode }) {
  const [topic, setTopic] = useState(advisory.categories[0]);
  const [tier, setTierState] = useState(advisory.offers[0].title);
  const [tierTouched, setTierTouched] = useState(false);

  function setTier(next: string) {
    setTierState(next);
    setTierTouched(true);
  }

  return (
    <AdvisoryFormContext.Provider value={{ topic, setTopic, tier, tierTouched, setTier }}>
      {children}
    </AdvisoryFormContext.Provider>
  );
}

export function useAdvisoryForm() {
  const ctx = useContext(AdvisoryFormContext);
  if (!ctx) throw new Error("useAdvisoryForm must be used within AdvisoryFormProvider");
  return ctx;
}

export function scrollToRequestForm() {
  document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
