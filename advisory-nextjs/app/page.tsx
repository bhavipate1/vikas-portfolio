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
          <a href="#book" className="hidden rounded-md bg-[#c79a68] px-5 py-2.5 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 md:inline-flex">
            Book a conversation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#16130f] pt-16">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">
              <span className="h-1.5 w-1.5 rounded-sm bg-[#a79c90]" />
              Advisory · 100% donated
            </span>
            <h1 className="font-[family-name:var(--font-head)] text-5xl font-semibold leading-[1.05] tracking-tight text-[#f7f1e8] sm:text-6xl lg:text-[72px]">
              Buy a conversation.<br/>
              <span className="font-light text-[#c79a68]">Give back.</span>
            </h1>
            <p className="max-w-md text-base leading-7 text-[#a79c90]">
              Book an hour with me for advice, perspective or mentorship. I don't keep the contribution — every rupee goes to a social cause. Your conversation creates an impact beyond the conversation.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="#contribute" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">See contributions</a>
              <a href="#how" className="rounded-md border border-white/20 px-6 py-3 text-sm text-[#f4ede3] transition-colors hover:border-[#c79a68] hover:text-[#c79a68]">How it works</a>
            </div>
            <div className="flex flex-wrap gap-10 border-t border-[#2e271a] pt-6">
              {[{n:"100%",l:"Contribution donated"},{n:"₹0",l:"Kept as a fee"},{n:"45 min",l:"Per conversation"}].map(s=>(
                <div key={s.n}>
                  <div className="font-[family-name:var(--font-head)] text-2xl font-semibold text-[#c79a68]">{s.n}</div>
                  <div className="mt-1 text-xs text-[#a79c90]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas in conversation" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#16130f]/80 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c79a68]">
                  <span className="text-xs text-[#16130f]">♥</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#f4ede3]">One hour, two beneficiaries</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#a79c90]">You get the perspective you came for. Someone you'll never meet gets a chance they wouldn't have had.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC STRIP */}
      <section className="border-y border-[rgba(26,23,20,0.12)] bg-[#f3eee2] py-5">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {["Career & Leadership","AI & Transformation","Startup & Product","Student Mentorship"].map(l=>(
              <span key={l} className="text-xs font-medium uppercase tracking-widest text-[#a2917f]">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">How it works</p>
            <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Three steps, one good side effect</h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {n:"01",title:"Pick a conversation",body:"Career advice, a review — co-founder call, or an AI decision. The subject is whatever you're weighing."},
              {n:"02",title:"Contribute to the cause",body:"You choose how much to contribute at least the minimum. The money goes directly to the cause — not to me."},
              {n:"03",title:"We talk, properly",body:"45 minutes on a decision you're weighing up. The contribution is donated the same month. Sometimes we follow up after."},
            ].map(s=>(
              <div key={s.n} className="rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-8">
                <div className="font-[family-name:var(--font-head)] text-4xl font-light text-[#c79a68]">{s.n}</div>
                <h3 className="mt-4 font-[family-name:var(--font-head)] text-xl font-medium text-[#18140e]">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#a2917f]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRIBUTION IMPACT */}
      <section id="contribute" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Contributions</p>
              <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Choose your impact</h2>
              <p className="mt-4 text-sm leading-6 text-[#a2917f]">Amounts shown are placeholders. Every option contributes differently based on how many conversations you do and how much you put towards it.</p>
              <div className="mt-10 grid grid-cols-3 gap-6 rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-head)] text-xl font-semibold text-[#18140e]">You contribute</div>
                  <div className="mt-1 text-xs text-[#a2917f]">Your payment</div>
                </div>
                <div className="text-center rounded-lg bg-[#18140e] p-4">
                  <div className="font-[family-name:var(--font-head)] text-2xl font-semibold text-[#c79a68]">100%</div>
                  <div className="mt-1 text-xs text-[#a79c90]">goes to the cause</div>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-head)] text-xl font-semibold text-[#18140e]">I keep nothing</div>
                  <div className="mt-1 text-xs text-[#a2917f]">₹0 taken</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-[#18140e]">
                <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="The cause" className="h-48 w-full object-cover opacity-80" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#c79a68]">The Master's Cause</p>
                  <h3 className="mt-2 font-[family-name:var(--font-head)] text-xl font-medium text-[#f7f1e8]">Education for students who can't buy access to advice</h3>
                  <p className="mt-3 text-sm leading-6 text-[#a79c90]">Beneficiary organisation named to announce shortly. The goal is to help one has access to the kind of advice that's otherwise a family game.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="book" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {title:"One Conversation",desc:"45 minutes on a topic. You bring the decision; I bring the outside view.",price:"₹X",per:"per session",cta:"Book this"},
              {title:"Two Conversations",desc:"Two sessions on the same topic, to track the decision from first principles to the final call.",price:"₹X",per:"for both",cta:"Book this",highlight:true},
              {title:"A Season of Advice",desc:"Monthly conversations for three months, on one strategic challenge worth solving.",price:"₹X",per:"per month",cta:"Book this"},
            ].map(p=>(
              <div key={p.title} className={`rounded-xl p-8 ${p.highlight?"bg-[#18140e] text-[#f7f1e8]":"border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] text-[#18140e]"}`}>
                <h3 className="font-[family-name:var(--font-head)] text-xl font-medium">{p.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${p.highlight?"text-[#a79c90]":"text-[#a2917f]"}`}>{p.desc}</p>
                <div className="my-6 border-t border-white/10" />
                <div className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#c79a68]">{p.price}</div>
                <div className={`text-xs ${p.highlight?"text-[#a79c90]":"text-[#a2917f]"}`}>{p.per}</div>
                <a href="#" className={`mt-6 inline-block rounded-md px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 ${p.highlight?"bg-[#c79a68] text-[#16130f]":"border border-[rgba(26,23,20,0.2)] text-[#18140e] hover:border-[#c79a68] hover:text-[#c79a68]"}`}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f3eee2] pb-20">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {q:"Forty-five minutes saved me a year of going the wrong way — and the money went somewhere it mattered more than the invoice.",who:"Shreya Rastogi",role:"Finance, Technology"},
              {q:"I expected a polite chat. I got two hard questions I hadn't asked myself, and a note the next morning summarising both.",who:"Dhruv M.",role:"Strategic Technology"},
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

      {/* REQUEST FORM */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Request a conversation</p>
              <h2 className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Tell me what you're weighing up</h2>
              <p className="text-base leading-7 text-[#a2917f]">Great timing, honest personality and reply within a few days. If the timing doesn't work, I'll say rather than leave you wondering.</p>
              <div className="overflow-hidden rounded-xl">
                <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas" className="h-52 w-full object-cover" />
              </div>
              <p className="text-sm italic text-[#a2917f]">"One good question is enough."</p>
            </div>
            <form className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {["Career advice","Startup / product","AI strategy","Team & leadership","Personal clarity"].map((t,i)=>(
                  <button key={t} type="button" className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${i===0?"border-[#c79a68] bg-[#c79a68] text-[#16130f]":"border-[rgba(26,23,20,0.15)] text-[#a2917f] hover:border-[#c79a68] hover:text-[#c79a68]"}`}>{t}</button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Name<input type="text" placeholder="Your name" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">Email<input type="email" placeholder="you@example.com" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              </div>
              <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">LinkedIn<input type="text" placeholder="linkedin.com/in/yourname" className="rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              <label className="flex flex-col gap-1.5 text-xs font-medium text-[#a2917f]">What are you weighing up?<textarea rows={4} placeholder="The decision, the stakes, and what you've already considered" className="resize-none rounded-md border border-[rgba(26,23,20,0.15)] bg-[#f8f7f3] px-4 py-2.5 text-sm text-[#18140e] outline-none placeholder:text-[#a2917f] focus:border-[#c79a68]" /></label>
              <button type="submit" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Book conversation</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Good to know</p>
              <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Questions, answered plainly</h2>
            </div>
            <div className="space-y-6">
              {[
                {q:"Do you keep any part of the contribution?","a":"No. The whole amount goes to the selected cause. It comes directly from them and then to the cause."},
                {q:"What can we actually talk about?","a":"Anything within the professional domain: career, company direction, AI strategy, team dynamics, or decisions you're sitting on."},
                {q:"Is this consulting for my company?","a":"No. This is a personal conversation, not a consulting engagement. If you need a proposal, go through Mastek."},
                {q:"How is the cause chosen?","a":"I choose causes in education and opportunity. The beneficiary is announced before you contribute, so you know exactly where it goes."},
              ].map(f=>(
                <div key={f.q} className="rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6">
                  <h3 className="font-[family-name:var(--font-head)] text-base font-medium text-[#18140e]">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#a2917f]">{f.a}</p>
                </div>
              ))}
            </div>
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
          <a href="#book" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Go to the form ↗</a>
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
