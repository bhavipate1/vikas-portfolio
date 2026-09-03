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
          <a href="#contact" className="hidden rounded-md bg-[#c79a68] px-5 py-2.5 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(199,154,104,0.5)] md:inline-flex">
            Invite Vikas to speak
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#16130f] pt-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[90rem] items-center gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">
              <span className="h-1.5 w-1.5 rounded-sm bg-[#a79c90]" />
              Open for 2026 keynotes
            </span>
            <h1 className="font-[family-name:var(--font-head)] text-5xl font-semibold leading-[1.05] tracking-tight text-[#f7f1e8] sm:text-6xl lg:text-[76px]">
              From intent<br/>
              to <span className="font-light text-[#c79a68]">impact</span>
            </h1>
            <p className="max-w-md text-base text-[#a79c90] sm:text-lg leading-7">
              Vice President at Mastek. TEDx speaker. Two decades spent turning AI ambition into transformation that actually lands in boardrooms, on stages, and inside teams.
            </p>
            <div className="grid max-w-md grid-cols-2 gap-3.5">
              {[
                {icon:"🎤",title:"TEDx Speaker",meta:"Rise of Bharat"},
                {icon:"⚡",title:"AI-Led Transformation",meta:"Enterprise programmes"},
                {icon:"👥",title:"20+ Years Leading",meta:"Global delivery & strategy"},
                {icon:"📊",title:"50+ Stages",meta:"Conferences · Campuses · Forums"},
              ].map(s=>(
                <div key={s.title} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/4 p-4">
                  <span className="text-base">{s.icon}</span>
                  <div>
                    <div className="font-[family-name:var(--font-head)] text-[13px] text-[#f4ede3]">{s.title}</div>
                    <div className="mt-0.5 text-[11px] text-[#7e736a]">{s.meta}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a href="#contact" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">
                Book a keynote
              </a>
              <a href="#about" className="rounded-md border border-white/20 px-6 py-3 text-sm text-[#f4ede3] transition-colors hover:border-[#c79a68] hover:text-[#c79a68]">
                The story
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-delivering-a-tedx-talk-12-12.png" alt="Vikas Surani speaking" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background:"linear-gradient(to right, #16130f 0%, rgba(22,19,15,0.4) 30%, transparent 60%)"}} />
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-y border-[rgba(26,23,20,0.12)] bg-[#f3eee2] py-6">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {["TEDx","Mastek","Karnavati University","Industry Conferences","Government Forums","Leadership Summits"].map(l=>(
              <span key={l} className="text-xs font-medium uppercase tracking-widest text-[#a2917f]">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAK TOPICS */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">What I speak about</p>
            <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold tracking-tight text-[#18140e] sm:text-4xl lg:text-5xl">
              Ideas that move organisations forward
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {[
              {dark:true, num:"01",title:"AI-Led Transformation",body:"Moving past pilots and proofs of concept to AI that changes how the business actually operates — with owners, budgets, and a retired legacy process behind it.",tags:["Beyond the pilot trap","Buy, build or wait?","AI inside the operating model"]},
              {dark:false,num:"02",title:"Leadership in the Age of Machines",body:"What stays human when the work changes: judgement under ambiguity, trust across distance, and the willingness to make a call the model can only advise on.",tags:["Deciding with machines","Trust at speed","The manager's new job"]},
              {dark:false,num:"03",title:"Innovation That Ships",body:"Building the conditions — teams, incentives, tolerance for risk — where new ideas survive contact with reality instead of dying in a steering committee.",tags:["Why good ideas stall","Funding uncertainty","From lab to line"]},
              {dark:false,num:"04",title:"The Rise of Bharat",body:"India's next decade as a market, a talent engine and a source of global ideas — what the headline numbers miss, and what it means for how you build teams.",tags:["Beyond market size","Talent as export","Building for Bharat"]},
            ].map(c=>(
              <div key={c.title} className={`rounded-xl p-8 ${c.dark?"bg-[#241d13] text-[#f7f1e8]":"border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] text-[#18140e]"}`}>
                <span className={`text-xs font-medium ${c.dark?"text-[#a79c90]":"text-[#a2917f]"}`}>{c.num}</span>
                <h3 className="mt-3 font-[family-name:var(--font-head)] text-xl font-medium">{c.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${c.dark?"text-[#a79c90]":"text-[#a2917f]"}`}>{c.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map(t=>(
                    <span key={t} className={`rounded-full border px-3 py-1 text-xs ${c.dark?"border-white/15 text-[#a79c90]":"border-[rgba(26,23,20,0.15)] text-[#a2917f]"}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section id="about" className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#c79a68]">About</p>
              <h2 className="font-[family-name:var(--font-head)] text-3xl font-semibold leading-tight text-[#f7f1e8] sm:text-4xl lg:text-[44px]">
                Two decades between the strategy deck and the shop floor
              </h2>
              <p className="text-base leading-7 text-[#a79c90]">
                He has led global transformation programmes at Mastek, where technology decisions kept the same two biggest targets in focus: customers and ROI. On stage, he brings the same lens — bigger questions about the future, most of what it takes to get there.
              </p>
              <div className="flex flex-wrap gap-10 border-t border-[#2e271a] pt-6">
                {[{n:"20+",l:"Countries worked in"},{n:"50+",l:"Stages & talks"},{n:"TEDx",l:"Narayana Business School"}].map(s=>(
                  <div key={s.n}>
                    <div className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#f7f1e8]">{s.n}</div>
                    <div className="mt-1 text-xs text-[#a79c90]">{s.l}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-[#c79a68] hover:underline">Read the full story ↗</a>
            </div>
            <div className="overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas Surani" className="h-full max-h-[480px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ON STAGE */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Speaking</p>
              <h2 className="mt-3 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">On stage, in the room</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#a2917f]">TEDx talks, conference keynotes, panels, university sessions and closed-door leadership forums.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl">
            <img src="/assets/vikas-surani-on-the-tedx-stage-12-179.png" alt="Vikas on the TEDx stage" className="max-h-[480px] w-full object-cover" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {title:"Keynote",pts:["45–60 minutes, one clear idea","Built for the room rather than reused","Slides, stories and sharp takeaways"]},
              {title:"Panel & Fireside",pts:["Sharp perspective, not polished corporate","Welcomes provocative questions","Will challenge the speaker to the right"]},
              {title:"Leadership Workshop",pts:["Half or full day, interactive","AI strategy, operating model, team change","Leaves with decisions made, not deferred"]},
            ].map(f=>(
              <div key={f.title} className="rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6">
                <h3 className="font-[family-name:var(--font-head)] text-lg font-medium text-[#18140e]">{f.title}</h3>
                <ul className="mt-4 space-y-2">
                  {f.pts.map(p=><li key={p} className="flex items-start gap-2 text-sm text-[#a2917f]"><span className="mt-0.5 shrink-0 text-[#c79a68]">—</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-delivering-a-tedx-talk-12-12.png" alt="Vikas speaking" className="max-h-[400px] w-full object-cover" />
            </div>
            <blockquote className="space-y-6">
              <p className="font-[family-name:var(--font-head)] text-2xl font-light leading-9 text-[#f7f1e8] sm:text-3xl">
                "AI doesn't transform a business. Leaders who are willing to change how the work is done with AI in their hands do."
              </p>
              <cite className="not-italic">
                <div className="text-sm font-medium text-[#f7f1e8]">Vikas Surani</div>
                <div className="text-xs text-[#a79c90]">Global Vice President, Mastek</div>
              </cite>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm text-[#f4ede3] transition-colors hover:border-[#c79a68] hover:text-[#c79a68]">Watch the talk ↗</a>
            </blockquote>
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between">
            <h2 className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Writing &amp; perspectives</h2>
            <a href="#" className="hidden text-sm font-medium text-[#c79a68] hover:underline sm:inline">All writing ↗</a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {tag:"Newsletter",title:"Why most AI programmes stall at the pilot",date:"Jul 2026",read:"9 min read"},
              {tag:"Essay",title:"Rise of Bharat: a movement beyond markets",date:"May 2026",read:"14 min watch"},
              {tag:"Field Note",title:"The leadership skill AI can't automate",date:"Apr 2026",read:"4 min read"},
            ].map(a=>(
              <article key={a.title} className="group cursor-pointer rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6 transition-shadow hover:shadow-md">
                <span className="rounded-full bg-[rgba(199,154,104,0.12)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-[#c79a68]">{a.tag}</span>
                <h3 className="mt-4 font-[family-name:var(--font-head)] text-[17px] font-medium leading-6 text-[#18140e] group-hover:text-[#c79a68] transition-colors">{a.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-[#a2917f]">
                  <span>{a.date}</span><span>{a.read}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f3eee2] pb-20">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {q:"He talks about AI the way an operator does — no theatre, just what worked, what failed, and why. Our leadership team was still debating it a week later.",who:"Conference Chair",role:"Leadership Conclave"},
              {q:"Three hundred students, zero phones out. He made the future of work feel like something they got to build, not something happening to them.",who:"Programme Director",role:"University Business School"},
            ].map(t=>(
              <figure key={t.who} className="rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-8">
                <div className="flex gap-0.5 text-[#c79a68] text-base">★★★★★</div>
                <blockquote className="mt-4 text-sm leading-7 text-[#18140e]">"{t.q}"</blockquote>
                <figcaption className="mt-6">
                  <div className="text-sm font-medium text-[#18140e]">{t.who}</div>
                  <div className="text-xs text-[#a2917f]">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Contact</p>
              <h2 className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Start a conversation</h2>
              <p className="text-base leading-7 text-[#a2917f]">Keynotes, panels, advisory hours and campus sessions. Every message is read personally — usually answered within 48 hours.</p>
              <div className="overflow-hidden rounded-xl">
                <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas speaking" className="h-52 w-full object-cover" />
              </div>
            </div>
            <form className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {["Keynote","Panel or Fireside","Advisory Hour","Campus session","Media"].map((t,i)=>(
                  <button key={t} type="button" className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${i===0?"border-[#c79a68] bg-[#c79a68] text-[#16130f]":"border-[rgba(26,23,20,0.15)] text-[#a2917f] hover:border-[#c79a68] hover:text-[#c79a68]"}`}>{t}</button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Name<input type="text" placeholder="Your name" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Email<input type="email" placeholder="you@company.com" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Organisation<input type="text" placeholder="Company or institution" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Date, if you have one<input type="text" placeholder="e.g. March 2027" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              </div>
              <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Tell me about the event<textarea rows={4} placeholder="Event, audience, theme, and what you want them to leave with" className="resize-none rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              <p className="text-xs text-[#a2917f]">Share the event, audience size and date — I tailor every keynote to the room.</p>
              <button type="submit" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(199,154,104,0.5)]">Send message</button>
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
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Get to the form ↗</a>
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
