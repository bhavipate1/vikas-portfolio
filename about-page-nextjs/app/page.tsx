export default function Page() {
  const engagements = [
    {n:"01",title:"The Rise of Bharat",org:"TEDxNBS · Narayana Business School",badge:"TEDx",highlight:true},
    {n:"02",title:"Global Computing Conference",org:"Hyderabad",badge:"Keynote",highlight:false},
    {n:"03",title:"International Conference on Innovation",org:"United World",badge:"Conference",highlight:false},
    {n:"04",title:"National Conclave on Emerging Trends",org:"Karnavati University",badge:"Conclave",highlight:false},
    {n:"05",title:"Fireside Chats, Townhalls, Strategy & AI Workshops",org:"Mastek · Globally",badge:"Corporate",highlight:false},
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
          <a href="#contact" className="hidden rounded-md bg-[#c79a68] px-5 py-2.5 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 md:inline-flex">
            Invite Vikas to speak
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#16130f] pt-16">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">
              <span className="h-1.5 w-1.5 rounded-sm bg-[#a79c90]" />
              Speaker Profile
            </span>
            <h1 className="font-[family-name:var(--font-head)] text-5xl font-semibold leading-[1.05] tracking-tight text-[#f7f1e8] sm:text-6xl lg:text-[72px]">
              Being <span className="font-light text-[#c79a68]">curious</span><br/>
              on every stage
            </h1>
            <p className="max-w-md text-base leading-7 text-[#a79c90]">
              A speaking style that blends storytelling, strategy and on-ground experience making complex ideas simple, relatable and actionable. TEDx speaker, transformation leader, Global Vice President at Mastek.
            </p>
            <blockquote className="border-l-2 border-[#c79a68] pl-5">
              <p className="font-[family-name:var(--font-head)] text-lg font-light text-[#f4ede3]">"My mission: inspire people to embrace curiosity and lead meaningful change."</p>
            </blockquote>
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="#contact" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Check availability</a>
              <a href="#formats" className="rounded-md border border-white/20 px-6 py-3 text-sm text-[#f4ede3] transition-colors hover:border-[#c79a68] hover:text-[#c79a68]">Speaking formats</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/vikas-surani-on-the-tedx-stage-12-179.png" alt="Vikas speaking on stage" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background:"linear-gradient(to right, #16130f 0%, rgba(22,19,15,0.4) 30%, transparent 60%)"}} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1c170f] border-y border-[#2e271a]">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#2e271a]">
            {[{n:"14+",l:"Countries where transformation\nprogrammes were delivered"},{n:"$50M+",l:"Multi-pillar transformation\ndeals led"},{n:"20+",l:"Global forums on transformation,\nAI and leadership"},{n:"3000+",l:"Members of Being Curious,\nhis experiential newsletter"}].map(s=>(
              <div key={s.n} className="px-6 py-8">
                <div className="font-[family-name:var(--font-head)] text-3xl font-semibold text-[#a79c90] sm:text-4xl">{s.n}</div>
                <div className="mt-2 text-xs leading-5 text-[#a79c90] whitespace-pre-line">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-b border-[rgba(26,23,20,0.12)] bg-[#f3eee2] py-4">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {["United World","Karnavati University","Mastek","IIM Ahmedabad","TEDxNBS","Global Computing Conference"].map(l=>(
              <span key={l} className="text-xs font-medium uppercase tracking-[2.6px] text-[#a2917f]">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Notable engagements</p>
              <h2 className="mt-3 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Stages, so far</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#a2917f]">TEDx, national conclaves, global conferences, universities and closed-door corporate forums.</p>
          </div>
          <div className="mt-10 divide-y divide-[rgba(26,23,20,0.1)] rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3]">
            {engagements.map(e=>(
              <div key={e.title} className={`flex items-center gap-6 px-6 py-6 ${e.highlight?"bg-[#f3eee2]":""}`}>
                <span className="shrink-0 text-xs text-[#a2917f]">{e.n}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-[family-name:var(--font-head)] text-lg font-medium text-[#18140e] truncate">{e.title}</div>
                  <div className="mt-1 text-sm text-[#a2917f]">{e.org}</div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest ${e.highlight?"bg-[#7c4d1e] text-white":"border border-[rgba(26,23,20,0.2)] text-[#7c4d1e]"}`}>{e.badge}</span>
                  <span className="text-[#c79a68]">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#f3eee2] pb-20">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Watch</p>
              <h2 className="mt-3 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Talks on video</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {tag:"TEDx",title:"The Rise of Bharat",org:"TEDxNBS · Narayana Business School"},
              {tag:"Keynote",title:"Transformation beyond the technology",org:"Global Computing Conference · Hyderabad"},
            ].map(v=>(
              <div key={v.title} className="group cursor-pointer rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] overflow-hidden">
                <div className="relative flex h-52 items-center justify-center bg-[#18140e]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c79a68] transition-transform group-hover:scale-110">
                    <span className="ml-1 text-xl text-[#16130f]">▶</span>
                  </div>
                  <span className="absolute top-4 left-4 rounded-full bg-[#c79a68] px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-[#16130f]">{v.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-head)] text-lg font-medium text-[#18140e]">{v.title}</h3>
                  <p className="mt-1 text-sm text-[#a2917f]">{v.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#a79c90]">Speaking formats</p>
            <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#f7f1e8] sm:text-4xl">Four ways to put him in front of your room</h2>
            <p className="mt-4 text-base leading-7 text-[#a79c90]">The message adapts to the audience, the argument. Every talk is tailored to the room rather than reused.</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {icon:"🎤",title:"TEDx & Public Forums",body:"One argument, told through story and structure — built for a wide room in a complex subject."},
              {icon:"🔧",title:"Leadership & Innovation Workshops",body:"Working sessions where leadership teams walk away with options and a plan, not another slide deck."},
              {icon:"🏢",title:"Corporate & Industry Forums",body:"A practitioner's view: unscripted — useful when the room wants plain takes rather than safe consensus."},
              {icon:"🎓",title:"Universities & Business Schools",body:"High-content debates for MBAs weighing the same decisions at a different scale and different stakes."},
            ].map(f=>(
              <div key={f.title} className="rounded-xl border border-white/10 bg-[#1c170f] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[rgba(199,154,104,0.15)] text-xl">{f.icon}</div>
                <h3 className="mt-4 font-[family-name:var(--font-head)] text-lg font-medium text-[#f7f1e8]">{f.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#a79c90]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#7c4d1e]">Background</p>
                <h2 className="mt-4 font-[family-name:var(--font-head)] text-3xl font-semibold text-[#18140e] sm:text-4xl">Storytelling, strategy, and the scars of delivery</h2>
                <p className="mt-4 text-base leading-7 text-[#a2917f]">Fifteen plus years in enterprise IT consulting, transformation programmes across forty countries, and a habit of staying curious in public. The result: on stage, complex ideas made simple, relatable and actionable.</p>
              </div>
              <div className="space-y-4">
                {[
                  {label:"Senior Management",value:"IIM Ahmedabad · Senior Management Programme"},
                  {label:"PGD",value:"Ahmedabad University · Marketing & Information System Management"},
                  {label:"Engineering",value:"Atmiya University, Rajkot · Bachelor of Engineering"},
                  {label:"Newsletter",value:"Being Curious · An experiential newsletter, 3000+ members"},
                ].map(e=>(
                  <div key={e.label} className="flex gap-4 border-t border-[rgba(26,23,20,0.1)] pt-4">
                    <div className="w-32 shrink-0 text-xs font-medium text-[#a2917f]">{e.label}</div>
                    <div className="text-sm text-[#18140e]">{e.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-2xl bg-[#e8e3d9]">
                <img src="/assets/vikas-surani-on-the-tedx-stage-12-179.png" alt="Vikas at conference" className="h-52 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl bg-[#e8e3d9]">
                <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas speaking" className="h-40 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl bg-[#e8e3d9]">
                <img src="/assets/vikas-surani-delivering-a-tedx-talk-12-12.png" alt="Vikas at event" className="h-40 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="contact" className="bg-[#f3eee2] pb-20">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-2xl bg-[#18140e]">
            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[3.9px] text-[#a79c90]">Let's connect</p>
                <h2 className="font-[family-name:var(--font-head)] text-2xl font-semibold text-[#f7f1e8] sm:text-3xl">Let's connect to inspire greatness</h2>
                <p className="text-sm leading-6 text-[#a79c90]">Share the event, audience and date. Every talk is shaped around the room — never a reused deck.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {label:"suranivikas@gmail.com",icon:"✉"},
                  {label:"+91 95129 19669",icon:"☎"},
                  {label:"/in/suranivikas",icon:"in"},
                  {label:"Speaker profile PDF",icon:"↓"},
                ].map(c=>(
                  <a key={c.label} href="#" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f4ede3] transition-colors hover:border-[#c79a68] hover:text-[#c79a68]">
                    <span className="text-[#c79a68]">{c.icon}</span>{c.label}
                  </a>
                ))}
              </div>
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
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Get in touch ↗</a>
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
