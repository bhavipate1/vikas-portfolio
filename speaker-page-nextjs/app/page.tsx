"use client";
import { useState } from "react";

const turns = [
  {year:"2004",title:"A bachelor of engineering, and a habit",body:"Atmiya Engineering, Rajkot. No grand plan just an interest in taking things apart and a tolerance for not knowing the answer yet."},
  {year:"2008",title:"Learning why good technology rarely sticks",body:"The same transformation plan lands differently in every culture. Some patterns still travel."},
  {year:"2012",title:"Forty countries, one mounting problem",body:"Scale changes what you can observe. You stop seeing the problems firsthand and start trusting the people who do."},
  {year:"2018",title:"Leading 500+ transformation",body:"The questions that got me here are not the same questions that are useful now. The job changed."},
  {year:"2023",title:"Staying a loud fool",body:"Most people go quiet as they get senior. I went the other way. Being Curious started with a decision to think in public."},
];

export default function Page() {
  const [activeTurn, setActiveTurn] = useState(0);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#16130f]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <span className="font-heading text-lg font-semibold text-[#f7f1e8]">Vikas Surani</span>
          <nav className="hidden gap-6 text-sm text-[#a79c90] md:flex">
            {["About","Speaker","Advisory","Newsletter"].map(l=>(
              <a key={l} href="#" className="transition-colors hover:text-[#f7f1e8]">{l}</a>
            ))}
          </nav>
          <a href="#connect" className="hidden rounded-md bg-[#c79a68] px-5 py-2.5 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5 md:inline-flex">
            Invite Vikas to speak
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#16130f] pt-16">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">9 more countries · Mastek</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-orange-300">Newsletter</span>
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-tight tracking-tight text-[#f7f1e8] sm:text-6xl lg:text-7xl">
              An engineer who stayed{" "}
              <span className="font-light text-[#c79a68]">curious</span>
            </h1>
            <p className="max-w-md text-base leading-7 text-[#a79c90]">
              I started at a small engineering college in Rajkot with no plan. Fifteen years later the same questions were somehow producing transformation programmes across forty countries and a newsletter 3000+ people read.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Mastek","IIM","Atmiya"].map(t=>(
                <span key={t} className="rounded-full border border-[#2e271a] px-4 py-1.5 text-xs text-[#a79c90]">{t}</span>
              ))}
            </div>
            <div className="grid max-w-md grid-cols-2 gap-3.5">
              {[
                {n:"15+",l:"Years IT Consulting"},
                {n:"40+",l:"Countries"},
                {n:"$50M+",l:"AI transformation led"},
                {n:"3000+",l:"Newsletter readers"},
              ].map(s=>(
                <div key={s.n} className="rounded-md border border-[#2e271a] bg-[#1c170f] p-4">
                  <div className="font-heading text-2xl font-semibold text-[#f7f1e8]">{s.n}</div>
                  <div className="mt-0.5 text-xs text-[#7e736a]">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#journey" className="rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">The journey</a>
              <a href="#connect" className="rounded-md border border-white/20 px-6 py-3 text-sm text-[#f4ede3] transition-colors hover:border-[#c79a68] hover:text-[#c79a68]">Say hello</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#1c170f]">
              <img src="/assets/075a8262-1-3-36.png" alt="Vikas Surani" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background:"linear-gradient(to right, #16130f 0%, rgba(22,19,15,0.4) 30%, transparent 60%)"}} />
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee2] border-y border-[rgba(26,23,20,0.12)]">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 divide-x divide-[rgba(26,23,20,0.1)] sm:grid-cols-4">
            {[{n:"15+",l:"Years IT Consulting"},{n:"40+",l:"Countries worked in"},{n:"$50M+",l:"AI transformation led"},{n:"3000+",l:"Newsletter subscribers"}].map(s=>(
              <div key={s.n} className="px-6 py-8">
                <div className="font-heading text-3xl font-semibold text-[#18140e]">{s.n}</div>
                <div className="mt-2 text-xs text-[#a2917f]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-[#e8e3d9]">
              <img src="/assets/vikas-surani-in-conversation-22-1299.png" alt="Vikas" className="max-h-[420px] w-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="font-heading text-xl font-light leading-8 text-[#18140e]">
                I have never been the smartest person in the room. I have usually been the one asking the most questions in it and that turned out to be the more useful habit.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-[rgba(26,23,20,0.1)] pt-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#7c4d1e]">Then</div>
                  <p className="mt-2 text-sm leading-6 text-[#a2917f]">Good technology falls over because the organisation is not ready. The first decade was mostly learning why smart plans fail slowly.</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#7c4d1e]">Now</div>
                  <p className="mt-2 text-sm leading-6 text-[#a2917f]">Real transformation at scale. I care about people leaving more capable than they came.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7c4d1e]">The journey</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-[#18140e] sm:text-4xl">Five turns that mattered</h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="space-y-1">
              {turns.map((t,i)=>(
                <button key={t.year} type="button" onClick={()=>setActiveTurn(i)}
                  className={"w-full rounded-lg px-5 py-4 text-left transition-colors " + (i===activeTurn ? "bg-[#18140e] text-[#f7f1e8]" : "text-[#a2917f] hover:bg-[rgba(26,23,20,0.06)] hover:text-[#18140e]")}>
                  <span className="text-xs font-medium">{t.year}</span>
                  <div className="mt-0.5 text-sm font-medium">{t.title}</div>
                </button>
              ))}
            </div>
            <div className="flex items-start gap-6 lg:col-span-2">
              <div className="shrink-0 font-heading text-[100px] font-light leading-none text-[rgba(26,23,20,0.08)]">{turns[activeTurn].year}</div>
              <div className="pt-2">
                <h3 className="font-heading text-2xl font-semibold text-[#18140e]">{turns[activeTurn].title}</h3>
                <p className="mt-4 text-base leading-7 text-[#a2917f]">{turns[activeTurn].body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#a79c90]">Values</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-[#f7f1e8] sm:text-4xl">Four values, tested</h2>
            </div>
            <div className="space-y-8">
              {[
                {n:"I",title:"Curiosity first",body:"Ask your most uncomfortable question politely. The answer is almost always more interesting and gets you further than the polite alternative."},
                {n:"II",title:"Say the hard thing",body:"Most bad results have an early warning and a person who noticed it. The most useful skill is being that person and saying it clearly."},
                {n:"III",title:"Leave people better",body:"Not better managed, not better informed. Better capable. The organisations that last do exactly the same thing."},
                {n:"IV",title:"Simple beats clever",body:"If you cannot explain it simply it is not good enough yet and it will not get there by itself."},
              ].map(v=>(
                <div key={v.n} className="flex gap-6 border-t border-[#2e271a] pt-6">
                  <span className="w-8 shrink-0 font-heading text-lg text-[#a79c90]">{v.n}</span>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-[#f7f1e8]">{v.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#a79c90]">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7c4d1e]">Where I learned it</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-[#18140e] sm:text-4xl">Education, and the parts that stuck</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {tag:"Senior Management",name:"IIM Ahmedabad",sub:"Senior Management Programme"},
              {tag:"PGD",name:"Ahmedabad University",sub:"Marketing and Information System Management"},
              {tag:"Engineering",name:"Atmiya University, Rajkot",sub:"Bachelor of Engineering"},
            ].map(e=>(
              <div key={e.name} className="rounded-xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-6">
                <span className="rounded-full bg-[rgba(199,154,104,0.12)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-[#c79a68]">{e.tag}</span>
                <h3 className="mt-4 font-heading text-lg font-medium text-[#18140e]">{e.name}</h3>
                <p className="mt-1 text-sm text-[#a2917f]">{e.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img src="/assets/vikas-surani-on-the-tedx-stage-12-179.png" alt="Group photo" className="h-64 w-full object-cover" />
          </div>
          <blockquote className="mt-8 border-l-4 border-[#c79a68] pl-6">
            <p className="text-base leading-7 text-[#a2917f]">The degrees are the smallest part of it. Most of what I use daily was learned on programmes that went sideways.</p>
          </blockquote>
        </div>
      </section>

      <section id="connect" className="bg-[#f3eee2] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl border border-[rgba(26,23,20,0.1)] bg-[#f8f7f3] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7c4d1e]">Sound familiar?</p>
                <h2 className="font-heading text-3xl font-semibold text-[#18140e] sm:text-4xl">If any of this sounds familiar</h2>
                <p className="text-sm leading-6 text-[#a2917f]">Trying to transform, mentoring, or just aligning an organisation with what is now possible. One conversation is usually enough.</p>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="mailto:suranivikas@gmail.com" className="flex items-center gap-3 rounded-md border border-[rgba(26,23,20,0.15)] bg-white px-4 py-3 text-sm text-[#18140e] transition-colors hover:border-[#c79a68]">
                    <span className="text-[#c79a68]">@</span>suranivikas@gmail.com
                  </a>
                  <a href="#" className="flex items-center gap-3 rounded-md border border-[rgba(26,23,20,0.15)] bg-white px-4 py-3 text-sm text-[#18140e] transition-colors hover:border-[#c79a68]">
                    <span className="text-[#c79a68]">in</span>/in/suranivikas
                  </a>
                </div>
                <a href="#" className="flex items-center justify-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">
                  Go to speaker page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#16130f] py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-5 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a79c90]">Learn Share Inspire</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-[#f7f1e8] sm:text-5xl">
            Bring an idea to the room
          </h2>
          <a href="#connect" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c79a68] px-6 py-3 text-sm font-medium text-[#16130f] transition-all hover:-translate-y-0.5">Get in touch</a>
        </div>
      </section>

      <footer className="border-t border-[#2e271a] bg-[#16130f] py-16">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="font-heading text-base font-semibold text-[#f7f1e8]">Vikas Surani</div>
              <p className="mt-3 text-sm leading-6 text-[#a79c90]">Global Vice President at Mastek, TEDx speaker and industry voice on AI-led transformation, leadership and innovation.</p>
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
            <span>2026 Vikas Surani</span>
            <span>Personal views, independently shared</span>
          </div>
        </div>
      </footer>
    </>
  );
}
