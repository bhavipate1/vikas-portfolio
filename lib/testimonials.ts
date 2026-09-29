export type TestimonialPage = "curious" | "leader" | "speaker" | "writer" | "learner";

export type Testimonial = {
  id: string;
  page: TestimonialPage;
  name: string;
  role?: string;
  quote: string;
  photo?: string;
  postUrl?: string;
  approvedAt: string;
};

export const testimonialSections: Record<TestimonialPage, { eyebrow: string; title: string }> = {
  curious: { eyebrow: "From LinkedIn", title: "What people say about Being Curious" },
  leader: { eyebrow: "From LinkedIn", title: "People who worked alongside him" },
  speaker: { eyebrow: "From LinkedIn", title: "From the audience" },
  writer: { eyebrow: "From LinkedIn", title: "People he has advised" },
  learner: { eyebrow: "From LinkedIn", title: "What readers are saying" },
};

// Only approved testimonials belong here; the LinkedIn sync will replace this source.
// Pulled from real comments on Being Curious LinkedIn newsletter editions.
// Role/headline is left out where LinkedIn's profile-page block made it
// unverifiable (personal profile pages return an anonymous-bot block, unlike
// article pages, which still render a comment preview) — never guessed.
const approved: Testimonial[] = [
  {
    id: "kunal-harsora-1",
    page: "curious",
    name: "Kunal Harsora",
    quote: "Nice bro keep it up, I told my children to subscribe to your great curious thoughts!",
    photo: "/images/testimonials/kunal-harsora.jpg",
    postUrl: "https://www.linkedin.com/pulse/how-get-things-done-grow-thrive-vikas-surani-btlxf",
    approvedAt: "2026-09-29",
  },
  {
    id: "anurag-mehta-1",
    page: "curious",
    name: "Dr. Anurag Mehta",
    quote: "Excellent coverage of relevant areas and articulation. Loved it!",
    photo: "/images/testimonials/anurag-mehta.jpg",
    postUrl: "https://www.linkedin.com/pulse/how-get-things-done-grow-thrive-vikas-surani-btlxf",
    approvedAt: "2026-09-29",
  },
  {
    id: "yash-lalchandani-1",
    page: "curious",
    name: "Yash Lalchandani, CF APMP",
    quote: "Great points, Vikas. For this week I will pick up scheduling the task regularly 👍👍",
    photo: "/images/testimonials/yash-lalchandani.jpg",
    postUrl: "https://www.linkedin.com/pulse/how-get-things-done-grow-thrive-vikas-surani-btlxf",
    approvedAt: "2026-09-29",
  },
];

export function getTestimonials(page: TestimonialPage, limit = 5): Testimonial[] {
  return approved
    .filter((t) => t.page === page)
    .sort((a, b) => b.approvedAt.localeCompare(a.approvedAt))
    .slice(0, limit);
}
