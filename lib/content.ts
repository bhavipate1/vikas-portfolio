// Content sourced from the Figma file (view-only access — Dev Mode inspect,
// exact copy on truncated frames, and final image assets were not reachable
// without a Figma login). Copy is reconstructed from what was legible on
// canvas; re-check word-for-word against Figma once you have Dev Mode access.

export const site = {
  name: "Vikas Surani",
  role: "Vice President, Mastek",
  email: "suranivikas@gmail.com",
  phone: "+91 95129 19669",
  phoneHref: "+919512919669",
  linkedin: "https://linkedin.com/in/suranivikas",
  linkedinHandle: "/in/suranivikas",
  location: "Ahmedabad, India",
  domain: "https://www.vikassurani.com",
};

export const socials = [
  { label: "LinkedIn", handle: "/in/suranivikas", href: "https://www.linkedin.com/in/suranivikas" },
  { label: "Instagram", handle: "@vrsurani", href: "https://www.instagram.com/vrsurani/" },
  { label: "Facebook", handle: "Vikas Surani", href: "https://www.facebook.com/vikas.surani" },
  { label: "YouTube · Being Curious", handle: "@beingcurious3211", href: "https://www.youtube.com/@beingcurious3211" },
  { label: "YouTube · VRSurani", handle: "@vrsurani", href: "https://www.youtube.com/@vrsurani" },
  { label: "YouTube · Vicky TV", handle: "@vickytv5541", href: "https://www.youtube.com/@vickytv5541" },
  { label: "YouTube · CloudYou", handle: "@cloudyou710", href: "https://www.youtube.com/@cloudyou710" },
];

export const nav = [
  { label: "Being Curious", href: "/" },
  { label: "Being Leader", href: "/about" },
  { label: "Being Speaker", href: "/speaker" },
  { label: "Advisory", href: "/advisory" },
  { label: "Being Writer", href: "/write" },
];

// ---------------------------------------------------------------- Homepage

export const home = {
  badge: "Open for 2026 keynotes",
  headline: ["From intent", "to impact"],
  sub: "Vice President at Mastek. TEDx speaker. Two decades spent turning AI ambition into transformation that actually lands in boardrooms, on stages, and inside teams.",
  stats: [
    { icon: "mic", title: "TEDx Speaker", meta: "Rise of Bharat" },
    { icon: "sparkle", title: "AI-Led Transformation", meta: "Enterprise programmes" },
    { icon: "user", title: "16+ Years Leading", meta: "Global delivery & strategy" },
    { icon: "bars", title: "50+ Stages", meta: "Conferences · Campuses · Forums" },
  ],
  ctas: [
    { label: "Book a keynote", href: "/contact", style: "solid" },
    { label: "The story", href: "/about", style: "outline" },
  ],
  logos: ["TEDx", "Mastek", "Karnavati University", "Industry Conferences", "Government Forums", "Leadership Summits"],
  about: {
    eyebrow: "Being Leader",
    title: "Two decades between the strategy deck and the shop floor",
    body: "Vikas leads global transformation programmes at Mastek, where technology decisions meet the messy reality of people, process and P&L. On stage, he brings the same lens: fewer slogans about the future, more of what it takes to get there.",
    link: { label: "Read the full story", href: "/about" },
    photoBadge: "Innovation & Social Impact · 2026",
    photoStats: [
      { value: "16+", label: "Years in consulting" },
      { value: "50+", label: "Stages & forums" },
      { value: "TEDx", label: "Speaker, 2026" },
    ],
  },
  speakAbout: {
    eyebrow: "What I speak about",
    title: "Ideas that move organisations forward",
    topics: [
      {
        title: "AI-Led Transformation",
        dark: true,
        icon: "chip",
        description: "Moving past pilots and proofs of concept to AI that changes how the business actually operates — with owners, budgets and a retired legacy process behind it.",
        tags: ["Beyond the pilot trap", "Buy, build or wait?", "AI inside the operating model"],
      },
      {
        title: "Leadership in the Age of Machines",
        dark: false,
        icon: "bulb",
        description: "What stays human when the work changes: judgement under ambiguity, trust across distance, and the willingness to make a call the model can only advise on.",
        tags: ["Deciding with machines", "Trust at speed", "The manager's new job"],
      },
      {
        title: "Innovation That Ships",
        dark: false,
        icon: "wrench",
        description: "Building the conditions — teams, incentives, tolerance for risk — where new ideas survive contact with reality instead of dying in a steering committee.",
        tags: ["Why good ideas stall", "Funding uncertainty", "From lab to line"],
      },
      {
        title: "The Rise of Bharat",
        dark: false,
        icon: "globe",
        description: "India's next decade as a market, a talent engine and a source of global ideas — what the headline numbers miss, and what it means for how you build teams.",
        tags: ["Beyond market size", "Talent as export", "Building for Bharat"],
      },
    ],
  },
  fourAreas: {
    eyebrow: "Where I go deep",
    subtitle: "Four areas, one throughline: making it land",
    items: [
      { n: "01", title: "Enterprise AI & data strategy", description: "Choosing the few use cases worth the org's attention and killing the rest early." },
      { n: "02", title: "Digital transformation at scale", description: "Multi-year, multi-geography programmes where the technology is rarely the hardest part." },
      { n: "03", title: "Mentoring the next generation", description: "Campus sessions and one-to-one mentoring for students and early career technologists." },
      { n: "04", title: "Future of work & talent", description: "What changes for teams when the tools get good, and what leaders owe them through it." },
    ],
  },
  inTheRoom: {
    eyebrow: "Speaking",
    title: "On stage, in the room",
    subtitle: "TEDx talks, conference keynotes, panels, university sessions and closed-door leadership forums.",
  },
  quote: {
    text: "AI doesn't transform a business. Leaders who are willing to change how the work is done with AI in their hands do.",
    watchLabel: "Watch the talk · 14 min",
    stats: [
      { value: "16+", label: "Years in consulting" },
      { value: "50+", label: "Stages & forums" },
      { value: "TEDx", label: "Speaker" },
    ],
  },
  formats: {
    eyebrow: "Speaking formats",
    items: [
      {
        title: "Keynote",
        duration: "30-45 min",
        description: "One argument, carried the whole way — built for a room that has to act on it Monday morning.",
        points: ["Tailored to your industry and audience", "Live case material, not generic AI theory", "Q&A and post-talk notes for attendees"],
        bestFor: "Best for conferences & summits",
      },
      {
        title: "Panel & fireside",
        duration: "45-60 min",
        description: "A practitioner's view, unscripted — for rooms that want tension and specifics, not consensus.",
        points: ["Moderated or co-panel formats", "Prep call to sharpen the question set", "Comfortable with hostile or technical rooms"],
        bestFor: "Best for forums & campuses",
      },
      {
        title: "Leadership workshop",
        duration: "Half day",
        description: "Working sessions for leadership teams making real AI, operating-model and talent calls.",
        points: ["Use-case triage on your own portfolio", "Operating-model and ownership mapping", "A written point of view you keep"],
        bestFor: "Best for exec teams",
      },
    ],
  },
  perspectives: {
    eyebrow: "Insights",
    title: "Writing & perspectives",
  },
  // Real comment from the "Give One Hour a Week to Your Idea" Being Curious
  // edition (Aug 30, 2026) — full title verified via public search since
  // LinkedIn's own comment view only shows it in full to a logged-in viewer.
  testimonials: [
    {
      quote: "So many brilliant minds in our nation have their ideas “killed” — not just by the person who thought of them, but by the environment, lack of opportunities, resources, time, and sometimes simply the absence of support.",
      name: "Rafik Mansuri",
      meta: "Managing Trustee, Gujarat Rajya Gram Vikas Samiti",
    },
  ],
  homeContact: {
    eyebrow: "Contact",
    title: "Start a conversation",
    photoCard: {
      title: "Keynotes, panels",
      titleLine2: "& leadership sessions",
      body: "Share the event, audience and date. Vikas replies personally to speaking requests, and tailors every talk to the room rather than reusing a deck.",
    },
    email: "hello@vikassurani.com",
    linkedinHandle: "/in/suranivikas",
    askOptions: ["Keynote", "Panel", "Workshop", "Interview"],
    detailsPlaceholder: "Event, audience, date, format…",
    submitLabel: "Send request",
  },
};

// ------------------------------------------------------------------ About

export const about = {
  badge: "Being Leader",
  headline: ["An engineer who", "stayed curious"],
  body: "I started in a small engineering college in Rajkot with no plan beyond “understand how things work.” Twenty years later that same question has taken me through 14 countries, a hundred-million-dollar transformation, a TEDx stage, and a newsletter I write mostly to think.",
  ctas: [
    { label: "The journey", href: "#turns", style: "solid" },
    { label: "Off the clock", href: "#off-the-clock", style: "outline" },
    { label: "Say hello", href: "/contact", style: "outline" },
  ],
  photoCaption: { name: "Vikas Surani", role: "Global Vice President, Mastek · Ahmedabad" },
  stats: [
    { value: "16+", label: "Years in enterprise IT consulting and transformation" },
    { value: "14", label: "Countries where those programmes were delivered" },
    { value: "$100M+", label: "Transformation programmes led end to end" },
    { value: "2900+", label: "Subscribers to the Being Curious newsletter" },
  ],
  intro: "I've never been the smartest person in the room. I've usually been the one asking the most questions in it and that turned out to be the more useful habit.",
  thenNow: [
    {
      label: "Then",
      body: "My first job wasn't glamorous. It was learning, in painful detail, why good technology fails inside real organisations — the politics, the half-finished data, the team that was never asked. That education has been worth more than any framework I've read since.",
    },
    {
      label: "Now",
      body: "I lead transformation at Mastek and speak wherever people are wrestling with the same questions. What I care about hasn't changed: making complicated things simple enough to act on, and leaving teams more capable than I found them.",
    },
  ],
  turns: {
    eyebrow: "The journey",
    subtitle: "Five turns that mattered",
    description: "Not a résumé — the moments that actually changed how I work.",
    items: [
      {
        year: "2004",
        tag: "Rajkot",
        title: "A bachelor of engineering, and a habit",
        school: "Atmiya University, Rajkot",
        body: "No grand plan — just an interest in taking things apart and a tolerance for not knowing the answer yet.",
      },
      {
        year: "2009",
        tag: "Wipro",
        title: "Learning why good technology fails",
        school: "Wipro Technologies",
        body: "A delayed graduate offer, then the 2008 recession pushed the start date back. First real lesson in how good technology fails inside real organisations — the politics, the half-finished data, the team that was never asked.",
      },
      {
        year: "2016",
        tag: "Global",
        title: "14 countries, one recurring problem",
        school: undefined as string | undefined,
        body: "Fourteen countries, one repeating pattern: the technology was rarely the hardest part. The real work was always people, process and the P&L nobody wanted to touch.",
      },
      {
        year: "2021",
        tag: "Mastek",
        title: "Leading $100M+ transformation",
        school: undefined as string | undefined,
        body: "From Trainee Associate Consultant to Programme Manager, then leading transformation programmes worth over $100M end to end — the shift from doing the work to owning the outcome.",
      },
      {
        year: "2025",
        tag: "TEDx",
        title: "Saying it out loud",
        school: undefined as string | undefined,
        body: "A TEDx stage, a weekly newsletter, and campus sessions where students ask the questions boards are too polite to. Twenty years of learning, finally spoken instead of just applied.",
      },
    ],
  },
  values: {
    title: "Four values, tested",
    intro: "Easy to write on a wall. Harder in week fourteen of a difficult programme which is where they count.",
    items: [
      { title: "Curiosity first", body: "Ask one more question than feels comfortable. The answer is almost always sitting just past the point where everyone else stopped asking." },
      { title: "Say the hard thing", body: "Bad news early is a gift. Delivered kindly and with a plan attached, it is the whole job." },
      { title: "Leave people better", body: "The programme ends and the slides get archived. The people you built stay in the industry for another twenty years." },
      { title: "Simple beats clever", body: "If the room cannot repeat it back in one sentence, it is not a strategy yet — it is a diagram." },
    ],
  },
  education: {
    eyebrow: "Where I learned it",
    title: "Education, and the parts that stuck",
    description: "A degree teaches you to finish things. The rest of it reading, teaching, being wrong in public is the part that compounds.",
    items: [
      {
        tag: "Senior mgmt",
        org: "IIM Ahmedabad",
        program: "Senior Management Programme",
        body: "Strategic Management",
        timeline: "2025-2026",
      },
      {
        tag: "MBA",
        org: "Ahmedabad University",
        program: "Marketing & Information System Management",
        body: "Master of Business Administration",
        timeline: "2009-2011",
      },
      {
        tag: "Engineering",
        org: "Atmiya University, Rajkot",
        program: "Bachelor of Engineering",
        body: "Computer Science",
        timeline: "2004-2008",
      },
    ],
  },
  beyondDegrees: {
    body: "The degrees are the smallest part of it. Most of what I use daily was learned on programmes that went sideways, and in classrooms where I was supposed to be the teacher.",
    meta: "Thirty-odd campus sessions a year keep the learning honest — students ask the questions boards are too polite to.",
  },
  otherHalf: {
    title: "The other half of the story",
    subtitle: "Nobody's whole self fits on a LinkedIn profile. Here's what fills the rest of the week.",
    reader: {
      title: "A reader, first",
      body: "Two or three books a month, and rarely the ones you'd expect from a technology executive. History, biography and behavioural science teach you more about transformation than most management titles do — people haven't changed, only the tools have.",
      tags: ["History", "Biography", "Behavioural science", "Economics", "Indian classics", "Occasionally sci-fi"],
      stats: [
        { value: "30+", label: "Books a year, give or take" },
        { value: "6am", label: "The only hour nobody books" },
      ],
    },
    quote: { text: "Read widely, then talk to strangers. That's the whole method.", meta: "On where ideas actually come from" },
    facts: [
      {
        tag: "Family",
        title: "Sunday belongs to them",
        body: "The calendar can hold anything except this. Two decades of travel taught me the cost of assuming otherwise.",
      },
      {
        tag: "Travel",
        title: "14 countries, one habit",
        body: "I skip the landmark and find the market. The best briefing on any economy is what people are buying at 8am.",
      },
      {
        tag: "Mentoring",
        title: "The most honest audience",
        body: "Students ask the questions boards are too polite to. Thirty-plus campus sessions a year, and no fee for any of them.",
      },
      {
        tag: "Writing",
        title: "Being Learner, biweekly",
        body: "Half thinking tool, half public notebook. If I cannot write the idea down clearly, I do not understand it yet.",
      },
    ],
  },
  onField: {
    eyebrow: "On the field",
    title: "Sport taught me more about teams than work did",
    description:
      "Nothing exposes a team's real dynamics faster than a game with a scoreboard — and nothing clears a stuck problem like a long walk.",
    sports: [
      {
        tag: "Every Sunday",
        title: "Cricket",
        body: "Sunday mornings, same ground, same arguments about the LBW. Twenty years of the best leadership lessons I never paid for.",
      },
      {
        tag: "Twice a week",
        title: "Badminton",
        body: "Midweek, fast and unforgiving. An hour where nobody cares what your title is — only whether you reach the shuttle.",
      },
      {
        tag: "Most mornings",
        title: "Walking",
        body: "Six kilometres before the first call. Most of what I write and half of what I say on stage was worked out on that route.",
      },
    ],
  },
  connect: {
    eyebrow: "Let's connect",
    title: "If any of this sounds familiar",
    body: "Speaking invitations, mentoring requests, or an argument you think I have wrong — all welcome.",
    cards: [
      { label: "Email", value: site.email, href: `mailto:${site.email}` },
      { label: "Mobile", value: site.phone, href: `tel:${site.phoneHref}` },
      { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin },
      { label: "Speaking", value: "See the speaker page", href: "/speaker", highlight: true },
    ],
  },
};

// ---------------------------------------------------------------- Speaker

export const speaker = {
  badge: "Being Speaker",
  headline: ["Being", "curious", "on every stage"],
  body: "A speaking style that blends storytelling, strategy and on ground experience making complex ideas simple, relatable and actionable. TEDx speaker, transformation leader, Global Vice President at Mastek.",
  quote: "My mission: inspire people to embrace curiosity and lead meaningful change.",
  ctas: [
    { label: "Check availability", href: "/contact", style: "solid" },
    { label: "Speaking formats", href: "#formats", style: "outline" },
  ],
  stats: [
    { value: "14+", label: "Countries where transformation programmes were delivered" },
    { value: "$100M+", label: "Transformation programmes led" },
    { value: "20+", label: "Global forums on transformation, AI and leadership" },
    { value: "45+", label: "Being Curious newsletter editions" },
  ],
  logos: ["United World", "Karnavati University", "Mastek", "IIM Ahmedabad", "TEDxNBS", "Global Computing Conference"],
  engagements: {
    eyebrow: "Notable engagements",
    title: "Stages, so far",
    intro: "TEDx, national conclaves, global conferences, universities and closed-door corporate forums.",
    items: [
      { title: "The Curious Case of Bharat", meta: "TEDxNBS · 19 Dec 2025", tag: "TEDx", href: "https://www.youtube.com/watch?v=JDt7lnnmKA0" },
      { title: "International Conference on Innovation, Sustainability & Social Impact", meta: "15 Oct 2025", tag: "Conference", href: "https://drive.google.com/drive/folders/1snL0ll73BJwFQQJgB55OLsgyFOsOJPVL?usp=drive_link" },
      { title: "National Conclave on Emerging Trends", meta: "HR, L&D & CSR · 9 Nov 2024", tag: "Conclave", href: "https://drive.google.com/drive/folders/1GW0XLx98wz1Wi2tkyxGpC9YTBF_-RtmM?usp=drive_link" },
      { title: "The Future is NOW - IGNITE 2026", meta: "SKIPS University", tag: "Keynote", href: "https://www.instagram.com/reel/DbZ7wBgqbIp/" },
      { title: "National Conclave on AI", meta: "Ahmedabad University", tag: "Conclave", href: "https://ahduni.edu.in/all-events/the-alumni-series-seventh-conversation/" },
    ],
  },
  videos: {
    eyebrow: "Watch",
    title: "Talks on video",
    items: [
      { tag: "TEDx", duration: "YouTube", title: "The Curious Case of Bharat", meta: "TEDxNBS · 19 Dec 2025", image: "/images/speaker/videos/tedx-curious-case-of-bharat.jpg", href: "https://www.youtube.com/watch?v=JDt7lnnmKA0" },
      { tag: "Short", duration: "YouTube", title: "The Curious Case of Bharat · Short", meta: "TEDxNBS · 21 Nov 2025", image: "/images/speaker/videos/curious-case-of-bharat-short.jpg", href: "https://www.youtube.com/watch?v=W390iP902lk" },
      { tag: "Story", duration: "LinkedIn", title: "Chinese Farmer", meta: "15 May 2024", image: "/images/speaker/background.jpg", href: "https://www.linkedin.com/posts/suranivikas_storytelling-activity-7032283496895197184-fpYR" },
      { tag: "Story", duration: "LinkedIn", title: "Don't Be the Ladder Guy", meta: "15 May 2023", image: "/images/speaker/contact.jpg", href: "https://www.linkedin.com/posts/suranivikas_storytelling-activity-7033455329140969472-XyH2" },
      { tag: "Profile", duration: "YouTube", title: "Employee Spotlight - Vikas Surani", meta: "14 Sep 2023", image: "/images/speaker/videos/employee-spotlight.jpg", href: "https://www.youtube.com/watch?v=e6PUD0UEE5o" },
      { tag: "Testimonial", duration: "YouTube", title: "Brand Champion Testimonial", meta: "18 Dec 2024", image: "/images/speaker/videos/brand-champion-testimonial.jpg", href: "https://www.youtube.com/watch?v=Je5LxK_kwic" },
      { tag: "Testimonial", duration: "YouTube", title: "PoSH IC Testimonial", meta: "12 Sep 2024", image: "/images/speaker/videos/posh-ic-testimonial.jpg", href: "https://www.youtube.com/watch?v=12JA80XgHPQ" },
    ],
  },
  formats: {
    eyebrow: "Speaking formats",
    title: "Four ways to put him in front of your room",
    intro: "The message adapts to the audience; the argument doesn't. Every talk is tailored to the room rather than reused.",
    items: [
      { icon: "mic", title: "TEDx & Public Formus", description: "One argument, told through story and evidence — built for a main stage or a company-wide moment." },
      { icon: "globe", title: "Leadership & Innovation Workshops", description: "Working sessions where leadership teams make real calls on AI, operating models and priorities." },
      { icon: "building", title: "Corporate & Industry Forums", description: "A practitioner's view, unscripted — useful when the room wants tension rather than consensus." },
      { icon: "cap", title: "Universities & Business Schools", description: "Small, closed-door conversations for CXOs weighing the same decisions at the same time." },
    ],
  },
  background: {
    eyebrow: "Background",
    title: "Storytelling, strategy, and the scars of delivery",
    body: "Sixteen-plus years in enterprise IT consulting, transformation programmes across 14 countries, and a habit of staying curious in public. The result on stage: complex ideas made simple, relatable and actionable.",
    photoCaption: { name: "Vikas Surani", role: "Global Vice President, Mastek" },
    table: [
      { label: "Senior management", org: "IIM Ahmedabad", meta: "Senior Management Programme" },
      { label: "MBA", org: "Ahmedabad University", meta: "Marketing & Information System Management" },
      { label: "Engineering", org: "Atmiya University, Rajkot", meta: "Bachelor of Engineering" },
      { label: "Newsletter", org: "Being Curious", meta: "45+ editions, 2900+ subscribers" },
    ],
  },
  contact: {
    eyebrow: "Let's connect",
    title: "Let's connect to inspire greatness",
    body: "Share the event, audience and date. Every talk is shaped around the room — never a reused deck.",
    fields: [
      { label: "Email", value: site.email, href: `mailto:${site.email}` },
      { label: "Mobile", value: site.phone, href: `tel:${site.phoneHref}` },
      { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin },
      { label: "One-pager", value: "Speaker profile PDF", href: "/documents/speaker-profile.pdf", highlight: true },
    ],
  },
};

// --------------------------------------------------------------- Advisory

export const advisory = {
  badge: "Being Writer · 100% donated",
  headline: ["Buy a conversation.", "Give back."],
  body: "Book an hour with me for advice, perspective or mentorship. I don't keep the contribution — every rupee goes to a social cause. Your conversation creates an impact beyond the conversation.",
  ctas: [
    { label: "See contributions", href: "#contributions", style: "solid" },
    { label: "How it works", href: "#how-it-works", style: "outline" },
  ],
  photoCard: {
    title: "One hour, two beneficiaries",
    body: "You get the perspective you came for. Someone you'll never meet gets a chance they wouldn't have had.",
  },
  stats: [
    { value: "100%", label: "Contribution donated" },
    { value: "₹0", label: "Kept as a fee" },
    { value: "45 min", label: "Per conversation" },
  ],
  categories: ["Career & leadership", "AI & transformation", "Startup & product", "Student mentorship"],
  cares: {
    eyebrow: "Vikas cares",
    title: "Causes and community work",
    intro: "Initiatives and responsibilities documented in the portfolio index.",
    items: [
      { title: "PoSH Internal Committee", organisation: "Mastek", detail: "Prevention of Sexual Harassment for Women at Workplace · IC member", meta: "2023-2026" },
      { title: "PoSH Certified Trainer", organisation: "Mahabodhi", detail: "Certified trainer", meta: undefined as string | undefined },
      { title: "Thursday Giving", organisation: undefined as string | undefined, detail: undefined as string | undefined, meta: undefined as string | undefined },
      { title: "Run for a Cause", organisation: undefined as string | undefined, detail: undefined as string | undefined, meta: undefined as string | undefined },
      { title: "Tree Plantation", organisation: undefined as string | undefined, detail: undefined as string | undefined, meta: undefined as string | undefined },
      { title: "Mastek Foundation", organisation: undefined as string | undefined, detail: undefined as string | undefined, meta: undefined as string | undefined },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps, one good side effect",
    steps: [
      {
        icon: "calendar",
        title: "Pick a conversation",
        body: "Tell me what you're weighing up — a career call, an AI decision, a team problem. One session or a few.",
      },
      {
        icon: "heart",
        title: "Contribute to the cause",
        body: "Your contribution goes directly to the cause — not to me. The receipt comes from them, not from an invoice of mine.",
      },
      {
        icon: "chat",
        title: "We talk, properly",
        body: "45 focused minutes on video. No deck, no pitch — a real conversation, with a written follow-up note after.",
      },
    ],
  },
  impact: {
    eyebrow: "Contributions",
    title: "Choose your impact",
    moneyGoesEyebrow: "Where the money goes",
    moneyGoesNote: "Three parties. Only one of them keeps anything.",
    flow: [
      { title: "You contribute", body: "One conversation booked, one contribution made." },
      { value: "100%", title: "goes to the cause", body: "Paid to the beneficiary, receipted by them." },
      { value: "₹0", title: "I keep nothing", body: "No fee, no retainer, no invoice — not now, not later." },
    ],
    disclaimer: "Amounts shown are placeholders. Every option is donated in full — the only difference is how much time we get and how far it goes.",
  },
  cause: {
    eyebrow: "This quarter's cause",
    title: "Education for students who can't buy access to advice",
    body: "Beneficiary organisation named in advance each quarter. Every contribution is added to the total below, published openly.",
    progress: {
      raisedLabel: "raised so far",
      goalLabel: "Goal this quarter · ₹50,000",
      note: "New this quarter — the total updates after each conversation.",
    },
    stats: [
      { value: "0", label: "Students supported" },
      { value: "0", label: "Conversations funded" },
      { value: "₹0", label: "Kept as a fee" },
    ],
    photoCaption: { title: "The people on the other side of the invoice", meta: "Campus sessions, Gujarat · 2026" },
  },
  offers: [
    {
      title: "One Conversation",
      badge: "Most booked",
      description: "A single 45-minute session on one decision you want a second read on.",
      impact: "Funds one student's month of learning",
      price: "₹5,000",
      priceUnit: "/ session",
    },
    {
      title: "Two Conversations",
      badge: "Flexible timing",
      description: "One to open the problem up, one a few weeks later to check the direction.",
      impact: "Funds a full term of learning",
      price: "₹18,000",
      priceUnit: "/ two sessions",
    },
    {
      title: "A Season of Advice",
      badge: "For founders",
      description: "Quarterly guidance for a founder or leadership team through a real transition.",
      impact: "Funds a cohort scholarship",
      price: "₹75,000",
      priceUnit: "/ quarter",
    },
  ],
  contribution: {
    eyebrow: "Your contribution",
    roomsNote: "Goes to the students in these rooms",
    perUnit: "Per session · donated in full",
    toTheCause: "to the cause",
    impactLabel: "Your impact",
    checklist: ["45 minutes on video", "Written follow-up note", "100% donated to the cause"],
    ctaLabel: "Contribute & book",
    footnote: "Paid to the cause, receipted by them — never to me",
  },
  partners: {
    eyebrow: "Your rupees land here",
    title: "Partner organisations",
    intro: "One named beneficiary per quarter. Logos and photographs to be added as each partnership is confirmed.",
    announcedLabel: "Beneficiary to be announced",
    items: [
      {
        tag: "Education",
        org: "Partner to be confirmed",
        description: "What the contribution funds here — school fees, materials, a scholarship place.",
        status: "Current quarter",
        image: undefined as string | undefined,
      },
      {
        tag: "Skilling",
        org: "Partner to be confirmed",
        description: "Vocational and digital-skills training for students without access to it.",
        status: "Previously funded",
        // Was showing an unrelated TEDx stage photo of Vikas — misleading,
        // since this partner (like the other two) isn't actually confirmed
        // yet. No real photo exists until one is.
        image: undefined as string | undefined,
      },
      {
        tag: "Opportunity",
        org: "Partner to be confirmed",
        description: "Mentoring and placement support for first-generation graduates.",
        status: "Shortlisted",
        image: undefined as string | undefined,
      },
    ],
  },
  principles: {
    eyebrow: "Where it goes",
    title: "The whole point of the page",
    body: "Contributions are directed to education and opportunity for students who can't buy access to advice — the thing I got for free and never forgot. Beneficiary organisations and a public tally will be listed here.",
    items: [
      { title: "Directed, not pooled", body: "Named cause per quarter, chosen in advance." },
      { title: "Receipted", body: "The acknowledgement comes from the cause itself." },
      { title: "Published tally", body: "Total raised, updated openly on this page." },
      { title: "No exceptions", body: "No retainers, no side arrangements, no fee." },
    ],
  },
  testimonials: [
    {
      quote: "Forty-five minutes saved me a year of going the wrong way — and the money went somewhere it mattered more than his invoice.",
      name: "Startup Founder",
      meta: "SaaS, Bengaluru",
    },
    {
      quote: "I expected a polite chat. I got two hard questions I hadn't asked myself, and a note the next morning summarising both.",
      name: "Director, Technology",
      meta: "Enterprise IT, Pune",
    },
  ],
  form: {
    eyebrow: "Request a conversation",
    title: "Tell me what you're weighing up",
    body: "I read every request personally and reply within a few days. If the timing doesn't work, I'll say so rather than leave you waiting.",
    photoCaption: "45 minutes. One good question is enough.",
    topicLabel: "What would you like to talk about?",
    contributionLabel: "Contribution",
    contextLabel: "Context",
    contextPlaceholder: "The decision you're facing, and what a useful answer would look like…",
    submitLabel: "Send request",
  },
  faq: {
    eyebrow: "Good to know",
    title: "Questions, answered plainly",
    items: [
      {
        question: "Do you keep any part of the contribution?",
        answer: "No. The entire amount goes to the named cause — the receipt comes from them, not from me. There is no invoice and no fee.",
      },
      {
        question: "What can we actually talk about?",
        answer:
          "Anything you're weighing up in career and leadership, AI and transformation, startup and product decisions, or student mentorship. If it doesn't fit one of those, ask anyway.",
      },
      {
        question: "Is this consulting for my company?",
        answer:
          "No — this is a personal, one-to-one conversation, not a company engagement. For a formal keynote, workshop, or advisory arrangement for your organisation, use the speaking page instead.",
      },
      {
        question: "What if I can't contribute right now?",
        answer:
          "Say so when you write in. Student and early-career requests are never turned away for that reason — the conversation happens regardless.",
      },
      {
        question: "How is the cause chosen?",
        answer:
          "One beneficiary organisation is named publicly at the start of each quarter, chosen around a simple test: does it get education or opportunity to students who wouldn't otherwise have access to it.",
      },
    ],
  },
};

// ------------------------------------------------------------------ Write

export const write = {
  badge: "Being Writer · Being Curious Newsletter",
  headline: ["Thinking", "out loud"],
  body: "Newsletters, essays and half-formed ideas on AI, transformation and leadership written from inside the work, not above it.",
  subscribeNote: "Follow Being Curious on LinkedIn for every new edition.",
  subscribeHref: "https://www.linkedin.com/newsletters/being-curious-7247115007161757696/",
  categoryLabels: ["Leadership", "AI", "Growth mindset", "Transformation"],
  filters: ["Newsletter", "Mastek Perspectives"],
  hubLinks: [
    { label: "The Curiosity Channel", meta: "Being Curious on YouTube", href: "https://www.youtube.com/@beingcurious3211", external: true },
    { label: "The Curious Brief", meta: "Newsletter on LinkedIn", href: "https://www.linkedin.com/newsletters/being-curious-7247115007161757696/", external: true },
    { label: "Enterprise Playbooks", meta: "Mastek articles", href: "#being-learner-library", external: false },
  ],
  featured: {
    issue: "Latest issue · #42",
    title: "2025 Reflections",
    body: "The latest edition of Being Curious, published on LinkedIn.",
    meta: "January 2026 · Being Curious Newsletter",
    href: "https://www.linkedin.com/pulse/2025-reflections-vikas-surani-9aeqf",
  },
  library: { eyebrow: "The library", title: "Everything written" },
  whyIWrite: {
    eyebrow: "Why I write",
    quote: "Writing is how I find out what I actually think. The newsletter is just the part I let other people read.",
    name: "Vikas Surani",
    role: "Global Vice President, Mastek",
  },
  experiential: {
    eyebrow: "Being Writer",
    title: "An experiential newsletter",
    body: "2900+ leaders, operators and students read Being Curious: what worked, what didn't, and what I'm still unsure about.",
    stats: [
      { value: "2900+", label: "Subscribers" },
      { value: "45+", label: "Editions published" },
      { value: "Weekly", label: "Cadence" },
    ],
  },
  podcasts: {
    eyebrow: "Podcasts",
    title: "Conversations in development",
    intro: "Podcast concepts from the portfolio index. Links will be added when episodes are published.",
    items: ["Being Curious with Vikas Surani", "Coffee Conversations with Vikas Surani"],
  },
  journey: {
    eyebrow: "Being Writer",
    title: "A lifetime of learning, one chapter at a time",
    intro: "From a joint family in Gujarat to transformation programmes across fourteen countries.",
    items: [
      { year: "1985", title: "Roots in a joint family", body: "Grew up in a joint family. Top three in class through Class 8, with cricket as the closest passion." },
      { year: "School years", title: "The seeker", body: "A spiritual phase so strong that, at one point, becoming a monk felt like a real path." },
      { year: "2001", title: "Science in Gandhinagar", body: "Moved to Gandhinagar for Class 11 and 12 in science under the CBSE board." },
      { year: "2004–2008", title: "Engineering, and a new obsession", body: "Bachelor of Engineering in Computer Science at Atmiya University. Less about programming, more about data and everything digital." },
      { year: "2007–2008", title: "Wipro, and a recession", body: "A campus offer from Wipro, then the 2008 recession delayed the joining date. Worked on DCOI: Device Control Over Internet." },
      { year: "2009–2011", title: "MBA, first batch", body: "Master of Business Administration in Marketing and Information Systems at Ahmedabad University." },
      { year: "Mastek", title: "The consulting climb", body: "Trainee Associate Consultant, Associate Consultant, Consultant, Solutions and Pre-sales, then Programme Manager." },
      { year: "Growth", title: "New regions, new cultures", body: "Business development and overall strategy beyond Oracle. Adopting new cultures and leading by helping first." },
      { year: "14 countries", title: "A global footprint", body: "India, UAE, UK, Australia, New Zealand, Philippines, Qatar, Oman, Kuwait, Denmark, Thailand, Singapore, Malaysia and Vietnam." },
    ],
  },
};

export type Article = {
  title: string;
  description: string;
  tag: "Newsletter" | "Mastek Perspectives";
  date: string;
  meta: string;
  href: string;
  homeFeatured?: boolean;
  image: string;
  /** Local offline copy of the source PDF (see AGENTS.md "Image Rendering Logic"), when available. */
  offlineCopy?: string;
};

// Cover image resolution (see AGENTS.md "Image Rendering Logic"):
// 1. PDF link on the row -> first page rendered and stored locally.
// 2. No PDF but a LinkedIn post/article link -> that post's preview image,
//    downloaded once and stored locally (never scraped at runtime).
// 3. Neither available -> BRANDED_FALLBACK_IMAGE (Being Curious cover).
// The 5th column is that resolved cover image path, or "" to use the fallback.
// The 6th column is the row's own offline-copy PDF, stored locally from the
// workbook's "Offline Copy" link, or "" where Drive sharing blocked the download.
const BRANDED_FALLBACK_IMAGE = "/images/write/hero.jpg";

const articleRows = [
  ["How to Get Things Done, Grow, and Thrive.", "2024-10-06", "Newsletter", "https://www.linkedin.com/pulse/how-get-things-done-grow-thrive-vikas-surani-btlxf", "/images/articles/how-to-get-things-done-grow-and-thrive.jpg", "/documents/articles/how-to-get-things-done-grow-and-thrive.pdf"],
  ["GenAI. Powered by You.", "2024-10-13", "Newsletter", "https://www.linkedin.com/pulse/genai-powered-you-vikas-surani-bpfvf", "/images/articles/genai-powered-by-you.jpg", "/documents/articles/genai-powered-by-you.pdf"],
  ["Building the Fearless Workplace. Now.", "2024-10-20", "Newsletter", "https://www.linkedin.com/pulse/building-fearless-workplace-now-vikas-surani-vc3pf", "/images/articles/building-the-fearless-workplace-now.jpg", "/documents/articles/building-the-fearless-workplace-now.pdf"],
  ["Digital Odyssey", "2024-10-27", "Newsletter", "https://www.linkedin.com/pulse/digital-odyssey-vikas-surani-u6w1c", "/images/articles/digital-odyssey.jpg", "/documents/articles/digital-odyssey.pdf"],
  ["The Indian Way", "2024-11-03", "Newsletter", "https://www.linkedin.com/pulse/indian-way-vikas-surani-himqc", "/images/articles/the-indian-way.jpg", "/documents/articles/the-indian-way.pdf"],
  ["Reflections on the Journey", "2024-11-10", "Newsletter", "https://www.linkedin.com/pulse/reflections-journey-vikas-surani-cloxf", "/images/articles/reflections-on-the-journey.jpg", "/documents/articles/reflections-on-the-journey.pdf"],
  ["Embracing a Growth Mindset", "2024-11-17", "Newsletter", "https://www.linkedin.com/pulse/embracing-growth-mindset-vikas-surani-e4z1f", "/images/articles/embracing-a-growth-mindset.jpg", "/documents/articles/embracing-a-growth-mindset.pdf"],
  ["How to Lead When You're Not in Charge", "2024-11-24", "Newsletter", "https://www.linkedin.com/pulse/how-lead-when-youre-charge-vikas-surani-v5pbf", "/images/articles/how-to-lead-when-you-re-not-in-charge.jpg", "/documents/articles/how-to-lead-when-you-re-not-in-charge.pdf"],
  ["Treat Soft Things, Hard.", "2024-12-01", "Newsletter", "https://www.linkedin.com/pulse/treat-soft-things-hard-vikas-surani-q85ef", "/images/articles/treat-soft-things-hard.jpg", "/documents/articles/treat-soft-things-hard.pdf"],
  ["The Forgotten Art of Curiosity", "2024-12-08", "Newsletter", "https://www.linkedin.com/pulse/forgotten-art-curiosity-vikas-surani-xmmcf", "/images/articles/the-forgotten-art-of-curiosity.jpg", "/documents/articles/the-forgotten-art-of-curiosity.pdf"],
  ["Connecting the Dots", "2024-12-15", "Newsletter", "https://www.linkedin.com/pulse/connecting-dots-vikas-surani-fymaf", "/images/articles/connecting-the-dots.jpg", "/documents/articles/connecting-the-dots.pdf"],
  ["5 Hacks to Turn Teamwork into Dreamwork", "2024-12-22", "Newsletter", "https://www.linkedin.com/pulse/5-hacks-turn-teamwork-dreamwork-vikas-surani-wgmvf", "/images/articles/5-hacks-to-turn-teamwork-into-dreamwork.jpg", "/documents/articles/5-hacks-to-turn-teamwork-into-dreamwork.pdf"],
  ["2024 Reflections, 2025 Year of Experiences", "2024-12-24", "Newsletter", "https://www.linkedin.com/pulse/2024-reflections-2025-year-experiences-vikas-surani-1wlbf", "/images/articles/2024-reflections-2025-year-of-experiences.jpg", "/documents/articles/2024-reflections-2025-year-of-experiences.pdf"],
  ["Kickstart 2025 with the Wheel of Life", "2025-01-05", "Newsletter", "https://www.linkedin.com/pulse/kickstart-2025-wheel-life-vikas-surani-tzxnf", "/images/articles/kickstart-2025-with-the-wheel-of-life.jpg", "/documents/articles/kickstart-2025-with-the-wheel-of-life.pdf"],
  ["The Power of Paradoxes", "2025-01-11", "Newsletter", "https://www.linkedin.com/pulse/power-paradoxes-vikas-surani-jqibf", "/images/articles/the-power-of-paradoxes.jpg", "/documents/articles/the-power-of-paradoxes.pdf"],
  ["The Power of 80:20", "2025-01-19", "Newsletter", "https://www.linkedin.com/pulse/power-8020-vikas-surani-8szaf", "/images/articles/the-power-of-80-20.jpg", "/documents/articles/the-power-of-80-20.pdf"],
  ["Success Leads Happiness?", "2025-01-26", "Newsletter", "https://www.linkedin.com/pulse/success-leads-happiness-vikas-surani-ndygf", "/images/articles/success-leads-happiness.jpg", "/documents/articles/success-leads-happiness.pdf"],
  ["You Are the CEO of Your Life.", "2025-02-02", "Newsletter", "https://www.linkedin.com/pulse/you-ceo-your-life-vikas-surani-gdzif", "/images/articles/you-are-the-ceo-of-your-life.jpg", "/documents/articles/you-are-the-ceo-of-your-life.pdf"],
  ["Good Thing, Bad Thing, Who Knows?", "2025-02-09", "Newsletter", "https://www.linkedin.com/pulse/good-thing-bad-who-knows-vikas-surani-fcorf", "/images/articles/good-thing-bad-thing-who-knows.jpg", "/documents/articles/good-thing-bad-thing-who-knows.pdf"],
  ["Clear Mind, Bold Action, Consistent Growth", "2025-02-16", "Newsletter", "https://www.linkedin.com/pulse/clear-mind-bold-action-consistent-growth-vikas-surani-1435f", "/images/articles/clear-mind-bold-action-consistent-growth.jpg", "/documents/articles/clear-mind-bold-action-consistent-growth.pdf"],
  ["Heads You Win, Tails You Learn", "2025-02-23", "Newsletter", "https://www.linkedin.com/pulse/heads-you-win-tails-learn-vikas-surani-tzcjf", "/images/articles/heads-you-win-tails-you-learn.jpg", "/documents/articles/heads-you-win-tails-you-learn.pdf"],
  ["Leading without a Map: Thriving in Uncertainty", "2025-03-03", "Newsletter", "https://www.linkedin.com/pulse/leading-without-map-thriving-uncertainty-vikas-surani-msquf", "/images/articles/leading-without-a-map-thriving-in-uncertainty.jpg", "/documents/articles/leading-without-a-map-thriving-in-uncertainty.pdf"],
  ["Generalist vs. Specialist: Finding Your Edge", "2025-03-10", "Newsletter", "https://www.linkedin.com/pulse/generalist-vs-specialist-finding-your-edge-vikas-surani-p9taf", "/images/articles/generalist-vs-specialist-finding-your-edge.jpg", "/documents/articles/generalist-vs-specialist-finding-your-edge.pdf"],
  ["Behavior Follows Your Identity", "2025-03-18", "Newsletter", "https://www.linkedin.com/pulse/behavior-follows-your-identity-vikas-surani-yh3bf", "/images/articles/behavior-follows-your-identity.jpg", "/documents/articles/behavior-follows-your-identity.pdf"],
  ["Showing Up", "2025-03-24", "Newsletter", "https://www.linkedin.com/pulse/showing-up-vikas-surani-yjj9f", "/images/articles/showing-up.jpg", "/documents/articles/showing-up.pdf"],
  ["The Power of Starting Before You're Ready vs. The Hell Yes Rule", "2025-04-02", "Newsletter", "https://www.linkedin.com/pulse/power-starting-before-youre-ready-vs-hell-yes-rule-vikas-surani-kr4uf", "/images/articles/the-power-of-starting-before-you-re-ready-vs-the-hell-yes-ru.jpg", "/documents/articles/the-power-of-starting-before-you-re-ready-vs-the-hell-yes-ru.pdf"],
  ["Is Your Company a Team or a Family?", "2025-06-01", "Newsletter", "https://www.linkedin.com/pulse/your-company-team-family-vikas-surani-wp3zf", "/images/articles/is-your-company-a-team-or-a-family.jpg", "/documents/articles/is-your-company-a-team-or-a-family.pdf"],
  ["The Question That Gets Everyone to Say Yes", "2025-06-08", "Newsletter", "https://www.linkedin.com/pulse/question-gets-everyone-say-yes-vikas-surani-1ojqf", "/images/articles/the-question-that-gets-everyone-to-say-yes.jpg", "/documents/articles/the-question-that-gets-everyone-to-say-yes.pdf"],
  ["The First Leader I Ever Knew", "2025-06-15", "Newsletter", "https://www.linkedin.com/pulse/first-leader-i-ever-knew-vikas-surani-rkq1f", "/images/articles/the-first-leader-i-ever-knew.jpg", "/documents/articles/the-first-leader-i-ever-knew.pdf"],
  ["I See Things Others Don't!", "2025-06-21", "Newsletter", "https://www.linkedin.com/pulse/i-see-things-others-dont-vikas-surani-2owlf", "/images/articles/i-see-things-others-don-t.jpg", "/documents/articles/i-see-things-others-don-t.pdf"],
  ["Boss Is Always Right? (Nah, Not Always)", "2025-07-06", "Newsletter", "https://www.linkedin.com/pulse/boss-always-right-nah-vikas-surani-fwucf", "/images/articles/boss-is-always-right-nah-not-always.jpg", "/documents/articles/boss-is-always-right-nah-not-always.pdf"],
  ["The Lifelong Learner's Edge", "2025-07-14", "Newsletter", "https://www.linkedin.com/pulse/lifelong-learners-edge-vikas-surani-2p4if", "/images/articles/the-lifelong-learner-s-edge.jpg", "/documents/articles/the-lifelong-learner-s-edge.pdf"],
  ["Gratitude Is an Attitude", "2025-07-21", "Newsletter", "https://www.linkedin.com/pulse/gratitude-attitude-vikas-surani-2v1vf", "/images/articles/gratitude-is-an-attitude.jpg", "/documents/articles/gratitude-is-an-attitude.pdf"],
  ["The Future of Work: Disruption or Realignment?", "2025-07-28", "Newsletter", "https://www.linkedin.com/pulse/future-work-disruption-realignment-vikas-surani-kkccf", "/images/articles/the-future-of-work-disruption-or-realignment.jpg", "/documents/articles/the-future-of-work-disruption-or-realignment.pdf"],
  ["Turning 40, Living Now", "2025-08-18", "Newsletter", "https://www.linkedin.com/pulse/turning-40-living-now-vikas-surani-4orif", "/images/articles/turning-40-living-now.jpg", "/documents/articles/turning-40-living-now.pdf"],
  ["Lead with AI", "2025-08-31", "Newsletter", "https://www.linkedin.com/pulse/lead-ai-vikas-surani-rmoyf", "/images/articles/lead-with-ai.jpg", "/documents/articles/lead-with-ai.pdf"],
  ["The AI-First Shift: Turning Curiosity into Capability", "2025-09-07", "Newsletter", "https://www.linkedin.com/pulse/ai-first-shift-turning-curiosity-capability-vikas-surani-rzfff", "/images/articles/the-ai-first-shift-turning-curiosity-into-capability.jpg", "/documents/articles/the-ai-first-shift-turning-curiosity-into-capability.pdf"],
  ["The Uncomfortable Path to Growth", "2025-09-22", "Newsletter", "https://www.linkedin.com/pulse/uncomfortable-path-growth-vikas-surani-pggsf", "/images/articles/the-uncomfortable-path-to-growth.jpg", "/documents/articles/the-uncomfortable-path-to-growth.pdf"],
  ["From Intent to Impact: Innovation, Sustainability & Social Impact", "2025-11-05", "Newsletter", "https://www.linkedin.com/pulse/from-intent-impact-innovation-sustainability-social-vikas-surani-ric1f", "/images/articles/from-intent-to-impact-innovation-sustainability-social-impac.jpg", "/documents/articles/from-intent-to-impact-innovation-sustainability-social-impac.pdf"],
  ["The Joy of Learning (Back to Campus Edition)", "2025-12-01", "Newsletter", "https://www.linkedin.com/pulse/joy-learning-back-campus-edition-vikas-surani-u3t3f", "/images/articles/the-joy-of-learning-back-to-campus-edition.jpg", "/documents/articles/the-joy-of-learning-back-to-campus-edition.pdf"],
  ["This Story Was Waiting for a Red Dot", "2025-12-22", "Newsletter", "https://www.linkedin.com/pulse/story-waiting-red-dot-vikas-surani-9tbjc", "/images/articles/this-story-was-waiting-for-a-red-dot.jpg", "/documents/articles/this-story-was-waiting-for-a-red-dot.pdf"],
  ["2025 Reflections", "2026-01-01", "Newsletter", "https://www.linkedin.com/pulse/2025-reflections-vikas-surani-9aeqf", "/images/articles/2025-reflections.jpg", "/documents/articles/2025-reflections.pdf"],
  ["The Edition I Almost Didn't Write", "2026-07-12", "Newsletter", "https://www.linkedin.com/pulse/edition-i-almost-didnt-write-vikas-surani-inpzf", "/images/articles/the-edition-i-almost-didnt-write.jpg", ""],
  ["The Beginner's Luck", "2026-07-20", "Newsletter", "https://www.linkedin.com/pulse/beginners-luck-vikas-surani-ylm8f", "/images/articles/the-beginners-luck.jpg", ""],
  ["The Empty Boat Mindset", "2026-08-02", "Newsletter", "https://www.linkedin.com/pulse/empty-boat-mindset-vikas-surani-rka4f", "/images/articles/the-empty-boat-mindset.jpg", ""],
  ["Give One Hour a Week to Your Idea", "2026-08-30", "Newsletter", "https://www.linkedin.com/pulse/give-one-hour-week-your-idea-vikas-surani-5texe", "/images/articles/give-one-hour-a-week-to-your-idea.jpg", ""],
  ["3,000+ Reasons to Stay Curious", "2026-09-14", "Newsletter", "https://www.linkedin.com/pulse/3000-reasons-stay-curious-vikas-surani-lumxf", "/images/articles/3000-reasons-to-stay-curious.jpg", ""],
  ["What Oracle E-Business Suite 12.1 Customers Need to Know", "2021-05-14", "Mastek Perspectives", "https://blog.mastek.com/what-oracle-ebs-customers-need-to-know", "/images/articles/what-oracle-e-business-suite-12-1-customers-need-to-know.jpg", "/documents/articles/what-oracle-e-business-suite-12-1-customers-need-to-know.pdf"],
  ["PeopleSoft to Cloud Transformation - It's Not Just Hot Air", "2022-08-08", "Mastek Perspectives", "https://blog.mastek.com/peoplesoft-to-cloud-migration", "/images/articles/peoplesoft-to-cloud-transformation-it-s-not-just-hot-air.jpg", ""],
  ["The Trust of Expertise Behind Value and Velocity in Digital Transformation", "2024-04-22", "Mastek Perspectives", "https://blog.mastek.com/trust-of-expertise-behind-value-and-velocity-in-digital-transformation/", "/images/articles/the-trust-of-expertise-behind-value-and-velocity-in-digital-.jpg", ""],
  ["AI in ERP: Smarter Systems, Better Business Decisions", "", "Mastek Perspectives", "https://blog.mastek.com/ai-in-erp-smarter-systems-better-business-decisions", "/images/articles/ai-in-erp-smarter-systems-better-business-decisions.jpg", ""],
] as const;

export const articles: Article[] = articleRows
  .map(([title, date, tag, href, image, offlineCopy]) => ({
    title,
    description: tag === "Newsletter" ? "Being Curious Newsletter" : "Published on the Mastek blog",
    tag,
    date,
    meta: date ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Mastek Website",
    href,
    image: image || BRANDED_FALLBACK_IMAGE,
    offlineCopy: offlineCopy || undefined,
  }))
  .sort((a, b) => b.date.localeCompare(a.date))
  // Always the 3 most recently published editions, so this stays correct as
  // new rows are added above instead of needing a hand-updated index range.
  .map((article, index) => ({ ...article, homeFeatured: index < 3 }));

// -------------------------------------------------------------- Contact

export const contact = {
  hero: {
    badge: "Open for 2026",
    replyNote: "Replies within 48 hours",
    headline: ["Let's start a", "conversation"],
    body: "A keynote, a panel, an advisory hour, a student session, or a question you can't place anywhere else. Tell me what you have in mind — I read every message myself.",
    photoCard: {
      title: "One reply, from me — not a form response",
      body: "If the timing or the fit isn't right, I'll say so plainly rather than leave you waiting on a maybe.",
    },
  },
  categoryLabels: ["Keynotes", "Panels & fireside", "Advisory hours", "Campus sessions"],
  reasons: {
    eyebrow: "Start here",
    title: "Four reasons people usually write",
    items: [
      {
        icon: "mic",
        title: "Book a keynote",
        body: "Conference, summit or internal leadership event. Share the audience, date and format.",
        link: { label: "Speaker page", href: "/speaker" },
      },
      {
        icon: "coffee",
        title: "Advisory hour",
        body: "45 minutes on a decision you're weighing up. The contribution is donated in full.",
        link: { label: "Advisory page", href: "/advisory" },
      },
      {
        icon: "cap",
        title: "Campus & students",
        body: "College sessions, mentorship and career conversations — always room for these.",
        note: "Use the form below",
      },
      {
        icon: "chat",
        title: "Media & podcasts",
        body: "Interviews, quotes and commentary on AI, transformation and the future of work.",
        note: "Use the form below",
      },
    ],
  },
  formSection: {
    eyebrow: "Write to me",
    headline: ["Tell me what", "you have in mind"],
    body: "The more context the better — audience, date, format, and what you'd want people to walk away with. Every talk is built for the room rather than reused.",
    photoCaption: "Learn · Share · Inspire",
  },
  trustNotes: [
    "Replies within 48 hours, personally",
    "Student and non-profit requests never carry a fee",
    "Formal engagements routed through Mastek",
  ],
  form: {
    topics: ["Keynote", "Panel or fireside", "Advisory hour", "Campus session", "Media", "Something else"],
    note: "Share the event, audience size and date — I tailor every keynote to the room.",
  },
  footerTeaser: {
    eyebrow: "Learn · Share · Inspire",
    title: ["Bring an idea", "to the room"],
    body: "Keynotes, panels, advisory hours and campus sessions. Every message is read personally — usually answered within 48 hours.",
  },
};

// ----------------------------------------------------------------- Footer

export const footer = {
  bio: "Global Vice President at Mastek, TEDx speaker and industry voice on AI-led transformation, leadership and innovation.",
  badges: ["TEDx Speaker", "Ahmedabad, India"],
  bottomNote: "Personal views, independently shared.",
  navigate: [
    { label: "Being Leader", href: "/about" },
    { label: "Being Speaker", href: "/speaker" },
    { label: "Being Learner", href: "/write" },
    { label: "Being Writer", href: "/advisory" },
    { label: "Contact", href: "/contact" },
  ],
};
