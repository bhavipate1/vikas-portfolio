export default function Page() {
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
          <a href="#form" className="hidden rounded-md bg-[#c79a68] px-5 py-2.5 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 md:inline-flex">
            Invite Vikas to speak
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#16130f] pt-16">
        <div className="mx-auto grid max-w-[90rem] items-start gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#a79c90]" />
                Open for 2026
              </span>
              <span className="text-xs uppercase tracking-[3.22px] text-[#a79c90]">Replies within 48 hours</span>
            </div>
            <h1 className="font-[family-name:var(--font-head)] text-5xl font-semibold leading-[1.05] tracking-tight text-[#f7f1e8] sm:text-6xl lg:text-[72px]">
              Let's start a<br/>
              <span className="font-light text-[#c79a68]">conversation</span>
            </h1>
            <p className="max-w-md text-base leading-7 text-[#a79c90]">
              A keynote, a panel, an advisory hour, a student session, or a question you can't place anywhere else. Tell me what you have in mind — I read every message myself.
            </p>
            <div className="grid gap-0 sm:max-w-md">
              {[
                {icon:"✉",label:"Email",value:"suranivikas@gmail.com"},
                {icon:"in",label:"LinkedIn",value:"/in/suranivikas"},
                {icon:"☎",label:"Phone",value:"+91 95129 19669"},
                {icon:"📍",label:"Based in",value:"Ahmedabad, India"},
              ].map(c=>(
                <div key={c.label} className="flex items-center gap-4 border-b border-white/8 bg-white/4 px-5 py-4 first:rounded-t-xl last:rounded-b-xl last:border-b-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c79a68]/20 text-sm text-[#c79a68]">{c.icon}</div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#a79c90]">{c.label}</div>
                    <div className="mt-0.5 text-sm text-[#f4ede3]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas Surani" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#16130f]/80 p-5 backdrop-blur-sm">
              <div className="text-sm font-medium text-[#f4ede3]">One reply, from me — not a form response</div>
              <p className="mt-2 text-sm leading-6 text-[#a79c90]">If the timing or the fit isn't right, I'll say so plainly rather than leave you waiting on a maybe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-y border-[rgba(26,23,20,0.12)] bg-[#f3eee2] py-5">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {["Keynotes","Panels & Firesides","Advisory Hours","Campus Sessions"].map(l=>(
              <span key={l} className="text-xs font-medium uppercase tracking-widest text-[#a2917f]">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR REASONS */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Start here</p>
            <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Four reasons people usually write</h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {icon:"🎤",title:"Book a keynote",body:"Conference, summit or internal leadership event. Share the audience, date and format.",link:"Speaker page"},
              {icon:"💬",title:"Advisory hour",body:"45 minutes on a decision you're weighing up. The contribution is donated in full.",link:"Advisory page"},
              {icon:"🎓",title:"Campus & students",body:"College sessions, mentorship and career conversations — always room for these.",link:"Use the form below"},
              {icon:"📱",title:"Media & podcasts",body:"Interviews, quotes and commentary on AI, transformation and the future of work.",link:"Use the form below"},
            ].map(c=>(
              <div key={c.title} className="rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[rgba(199,154,104,0.12)] text-xl">{c.icon}</div>
                <h3 className="mt-4 font-[family-name:var(--font-head)] text-lg font-medium text-[#18140e]">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#a2917f]">{c.body}</p>
                <a href="#form" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#c79a68] hover:underline">{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="form" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Write to me</p>
              <h2 className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Tell me what you have in mind</h2>
              <p className="text-base leading-7 text-[#a2917f]">The more context the better — audience, date, format, and what you'd want people to walk away with. Every talk is built for the room rather than reused.</p>
              <div className="overflow-hidden rounded-xl">
                <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas" className="h-52 w-full object-cover" />
              </div>
              <ul className="space-y-2">
                {["Replies within 18 hours, personally","Student and non-profit requests never carry a fee","Formal engagements routed through Mastek"].map(b=>(
                  <li key={b} className="flex items-center gap-2 text-sm text-[#a2917f]"><span className="text-[#c79a68]">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <form className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {["Keynote","Panel or Fireside","Advisory Hour","Campus session","Media"].map((t,i)=>(
                  <button key={t} type="button" className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${i===0?"border-[#c79a68] bg-[#c79a68] text-[#16130f]":"border-[rgba(26,23,20,0.15)] text-[#a2917f] hover:border-[#c79a68] hover:text-[#c79a68]"}`}>{t}</button>
                ))}
              </div>
              <p className="text-sm text-[#a2917f]">Something else?</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Name<input type="text" placeholder="Your name" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Email<input type="email" placeholder="you@company.com" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Organisation<input type="text" placeholder="Company or institution" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Date, if you have one<input type="text" placeholder="e.g. March 2027" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              </div>
              <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">About the keynote<textarea rows={4} placeholder="Event, audience, theme, and what you want them to leave with" className="resize-none rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              <p className="text-xs text-[#a2917f]">Share the event, audience size and date — I tailor every keynote to the room.</p>
              <button type="submit" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Send message</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#a79c90]">Learn · Share · Inspire</p>
          <h2 className="mt-4 font-[family-name:var(--font-head)] text-4xl font-semibold leading-tight text-[#f7f1e8] sm:text-5xl">
            Bring an idea<br/><span className="font-light text-[#c79a68]">to the room</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-[#a79c90]">Keynotes, panels, advisory hours and campus sessions. Every message is read personally — usually answered within 48 hours.</p>
          <a href="#form" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Go to the form ↗</a>
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
