import { ArrowUpRightIcon } from "@/components/icons";
import { Cta, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background">
      <div className="mx-auto max-w-8xl px-5 py-24 text-center sm:px-8 lg:px-10">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          This page didn&apos;t make the cut.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-muted">
          The link's broken, or the page moved. Either way, here's a way back.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Cta href="/">Back to home</Cta>
          <Cta href="/contact" style="outline">
            Get in touch <ArrowUpRightIcon className="h-4 w-4" />
          </Cta>
        </div>
      </div>
    </section>
  );
}
