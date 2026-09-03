"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackToTop } from "@/components/back-to-top";
import { ArrowDownIcon, ArrowUpRightIcon, MailIcon, PhoneIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/ui";
import { contact, footer, site } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();
  const onContactPage = pathname === "/contact";

  return (
    <footer className="border-t border-border bg-background">
      <section className="border-b border-border pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
          <Reveal className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[3.30px] text-muted">
                {contact.footerTeaser.eyebrow}
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:leading-[54px]">
                {contact.footerTeaser.title[0]}
                <br />
                <span className="font-light text-accent">{contact.footerTeaser.title[1]}</span>
              </h2>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-base text-muted">{contact.footerTeaser.body}</p>
              <div className="mt-4">
              {onContactPage ? (
                <Cta href="#write-to-me">
                  Go to the form <ArrowDownIcon className="h-4 w-4" />
                </Cta>
              ) : (
                <Cta href="/contact">
                  Get in touch <ArrowUpRightIcon className="h-4 w-4" />
                </Cta>
              )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div>
        <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.6fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-soft text-[10px] font-semibold text-accent">
                  {site.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
                <span className="text-base font-semibold text-foreground">{site.name}</span>
              </div>
              <p className="mt-5 max-w-sm text-sm text-muted">{footer.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {footer.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-normal uppercase tracking-[2.64px] text-muted">Navigate</span>
              <ul className="mt-4 space-y-2.5">
                {footer.navigate.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-muted hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[2.64px] text-muted">Get in touch</span>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2.5 text-sm text-foreground/90 hover:text-accent transition-colors"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-accent">
                      <MailIcon className="h-3.5 w-3.5" />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-center gap-2.5 text-sm text-foreground/90 hover:text-accent transition-colors"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-accent">
                      <PhoneIcon className="h-3.5 w-3.5" />
                    </span>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-foreground/90 hover:text-accent transition-colors"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-accent">
                      <LinkedInIcon className="h-3.5 w-3.5" />
                    </span>
                    {site.linkedinHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <span>{footer.bottomNote}</span>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
