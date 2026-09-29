"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, LinkedInIcon } from "@/components/icons";
import { Reveal, RevealGroup, revealItem } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { type Testimonial, type TestimonialPage, testimonialSections } from "@/lib/testimonials";

export function LinkedInVoices({ page, items }: { page: TestimonialPage; items: Testimonial[] }) {
  if (items.length === 0) return null;
  const section = testimonialSections[page];

  return (
    <section className="border-t border-paper-border bg-paper py-12 sm:py-16">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <Eyebrow light>{section.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-paper-foreground sm:text-4xl">{section.title}</h2>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {items.map((t) => (
            <motion.figure
              key={t.id}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="flex h-full flex-col border border-paper-border bg-paper-surface p-6"
            >
              <LinkedInIcon className="h-4 w-4 text-[#8a5a34]" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-paper-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-paper-border pt-5">
                {t.photo && (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-paper-foreground">{t.name}</div>
                  {t.role && <div className="truncate text-xs text-paper-muted">{t.role}</div>}
                </div>
                {t.postUrl && (
                  <a
                    href={t.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${t.name}'s comment on LinkedIn`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper-border text-[#8a5a34] transition-colors hover:border-[#8a5a34] focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
