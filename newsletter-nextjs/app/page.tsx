export default function Page() {
  const articles = [
    {tag:"Newsletter",title:"The year every company became an AI company — and what that cost them",date:"Jul 2026",read:"7 min read"},
    {tag:"Essay",title:"Why most AI programmes stall at the pilot",date:"Jul 2026",read:"9 min read"},
    {tag:"Talk",title:"Rise of Bharat: a movement beyond markets",date:"May 2026",read:"14 min watch"},
    {tag:"Field Note",title:"The leadership skill AI can't automate",date:"Apr 2026",read:"4 min read"},
    {tag:"Newsletter",title:"What forty countries taught me about change",date:"Mar 2026",read:"8 min read"},
    {tag:"Essay",title:"Innovation is a budgeting problem",date:"Feb 2026",read:"5 min read"},
  ];
  return (
    <>
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#16130f]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <span className="font-[family-name:var(--font-head)] text-lg font-semibold text-[#f7f1e8]">Vikas Surani</span>
          <nav className="hidden gap-6 text-sm text-[#a79c90] md:flex">
            {["About","Speaker","Advisory","Newsletter"].map(l=>(
              <a key={l} href="#" className="transition-colors hover:text-[#f7f1e8]">{l}</a>
            ))}
          </nav>
          <a href="#subscribe" className="hidden rounded-md bg-[#c79a68] px-5 py-2.5 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 md:inline-flex">
            Subscribe
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#16130f] pt-16">
        <div className="mx-auto grid max-w-[90rem] items-start gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">
              <span className="h-1.5 w-1.5 rounded-sm bg-[#a79c90]" />
              Being Curious · Newsletter
            </span>
            <h1 className="font-[family-name:var(--font-head)] text-5xl font-semibold leading-[1.05] tracking-tight text-[#f7f1e8] sm:text-6xl lg:text-[72px]">
              Thinking<br/>
              <span className="font-light text-[#c79a68]">out loud</span>
            </h1>
            <p className="max-w-md text-base leading-7 text-[#a79c90]">
              Newsletters, essays and half-formed ideas on AI, transformation and leadership written from inside the work, not above it.
            </p>
            <form id="subscribe" className="flex max-w-md flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="your@email.com" className="flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#f7f1e8] outline-none placeholder:text-[#a79c90] focus:border-[#c79a68]" />
              <button type="submit" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] whitespace-nowrap transition-all hover:-translate-y-0.5">Subscribe</button>
            </form>
            <p className="text-xs text-[#a79c90]">One issue every other week. No pitches, no filler.</p>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/link-12-479.png" alt="Latest issue preview" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#16130f]/80 via-transparent to-[#16130f]/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-[#c79a68] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#16130f]">Latest issue · #24</span>
              <h3 className="mt-3 font-[family-name:var(--font-head)] text-xl font-medium text-[#f7f1e8] leading-7">The year every company became an AI company — and what that cost them</h3>
              <p className="mt-2 text-sm text-[#a79c90]">Everyone shipped a copilot. Very few changed a process.</p>
              <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3 text-xs text-[#a79c90]">
                <span>July 2026 · 7 min read</span>
                <span className="text-[#c79a68]">↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-y border-[rgba(26,23,20,0.12)] bg-[#f3eee2] py-5">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {["Newsletters","Essays","Field Notes","Talk Transcripts"].map(l=>(
              <span key={l} className="text-xs font-medium uppercase tracking-widest text-[#a2917f]">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">The library</p>
              <h2 className="mt-2 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Everything written</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All","Newsletter","Essay","Field note","Talk"].map((f,i)=>(
                <button key={f} type="button" className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${i===0?"border-[#7c4d1e] bg-[#7c4d1e] text-white":"border-[rgba(26,23,20,0.2)] text-[#a2917f] hover:border-[#7c4d1e] hover:text-[#7c4d1e]"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map(a=>(
              <article key={a.title} className="group cursor-pointer rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6 transition-shadow hover:shadow-md">
                <div className="h-36 overflow-hidden rounded-lg bg-[#e8e3d9]" />
                <span className="mt-4 inline-block rounded-full bg-[rgba(199,154,104,0.12)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-[#c79a68]">{a.tag}</span>
                <h3 className="mt-3 font-[family-name:var(--font-head)] text-[17px] font-medium leading-6 text-[#18140e] group-hover:text-[#c79a68] transition-colors">{a.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-[#a2917f]">
                  <span>{a.date}</span><span className="flex items-center gap-1">{a.read} <span className="text-[#c79a68]">→</span></span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button type="button" className="rounded-md border border-[rgba(26,23,20,0.2)] px-6 py-3 text-sm font-medium text-[#a2917f] transition-colors hover:border-[#7c4d1e] hover:text-[#7c4d1e]">Load more writing</button>
          </div>
        </div>
      </section>

      {/* WHY I WRITE */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-[#e8e3d9]">
              <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas writing" className="max-h-[400px] w-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Why I write</p>
              <blockquote className="border-l-4 border-[#c79a68] pl-6">
                <p className="font-[family-name:var(--font-head)] text-2xl font-light leading-9 text-[#18140e] sm:text-3xl">
                  "Writing is how I find out what I actually think. The newsletter is just the part I let other people read."
                </p>
              </blockquote>
              <cite className="not-italic">
                <div className="text-sm font-medium text-[#18140e]">Vikas Surani</div>
                <div className="text-xs text-[#a2917f]">Global Vice President, Mastek</div>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#a79c90]">Being Curious</p>
              <h2 className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#f7f1e8] sm:text-4xl">An experiential newsletter</h2>
              <p className="text-base leading-7 text-[#a79c90]">3000+ leaders, operators and students read it. One issue every other week on what worked, what didn't, and what I'm still unsure about.</p>
              <form className="flex max-w-md flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="your@email.com" className="flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#f7f1e8] outline-none placeholder:text-[#a79c90] focus:border-[#c79a68]" />
                <button type="submit" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] whitespace-nowrap transition-all hover:-translate-y-0.5">Subscribe</button>
              </form>
              <div className="flex flex-wrap gap-10">
                {[{n:"3000+",l:"Subscribers"},{n:"24",l:"Issues published"},{n:"Weekly",l:"Cadence"}].map(s=>(
                  <div key={s.n}>
                    <div className="font-[family-name:var(--font-head)] text-2xl font-semibold text-[#c79a68]">{s.n}</div>
                    <div className="mt-1 text-xs text-[#a79c90]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-delivering-a-tedx-talk-12-12.png" alt="Vikas" className="max-h-[400px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-[#16130f] border-t border-[#2e271a] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#a79c90]">Learn · Share · Inspire</p>
          <h2 className="mt-4 font-[family-name:var(--font-head)] text-4xl font-semibold leading-tight text-[#f7f1e8] sm:text-5xl">
            Bring an idea<br/><span className="font-light text-[#c79a68]">to the room</span>
          </h2>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Get in touch ↗</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2e271a] bg-[#16130f] py-16">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="font-[family-name:var(--font-head)] text-base font-semibold text-[#f7f1e8]">Vikas Surani</div>
              <p className="mt-3 text-sm leading-6 text-[#a79c90]">Global Vice President at Mastek, TEDx speaker and industry voice on AI-led transformation, leadership and innovation.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2e271a] px-3 py-1 text-xs text-[#a79c90]">TEDx Speaker</span>
                <span className="rounded-full border border-[#2e271a] px-3 py-1 text-xs text-[#a79c90]">Ahmedabad, India</span>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#a79c90]">Navigate</p>
              <ul className="space-y-2">
                {["About","Speaker","Write","Advisory","Contact"].map(l=>(
                  <li key={l}><a href="#" className="text-sm text-[#a79c90] transition-colors hover:text-[#f7f1e8]">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#a79c90]">Get in touch</p>
              <ul className="space-y-2 text-sm text-[#a79c90]">
                <li>suranivikas@gmail.com</li>
                <li>+91 95129 19669</li>
                <li>/in/suranivikas</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-[#2e271a] pt-6 text-xs text-[#a79c90]">
            <span>© 2026 Vikas Surani</span>
            <span>Personal views, independently shared</span>
          </div>
        </div>
      </footer>
    </>
  );
}
