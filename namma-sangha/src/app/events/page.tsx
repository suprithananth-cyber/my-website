import { PageHero } from "@/components/PageHero";
import Link from "next/link";

const upcomingEvents = [
  {
    title: "Community health camp",
    date: "18 January 2026",
    location: "Maddur Primary School",
    description: "Screenings for diabetes, anaemia, dental care, and mental health counselling.",
  },
  {
    title: "Rural youth civic lab",
    date: "1 February 2026",
    location: "Channapatna Taluk Office",
    description: "One-day sprint where teens prototype solutions for waste management and transport.",
  },
  {
    title: "Women entrepreneurs market day",
    date: "22 February 2026",
    location: "Basaveshwar Nagar Grounds",
    description: "Pop-up stalls, pricing clinics, and branding support for SHG-led businesses.",
  },
];

const pastHighlights = [
  {
    title: "Green steps marathon",
    impact: "450 runners funded 300 saplings and soil testing kits.",
  },
  {
    title: "Village tech drive",
    impact: "30 refurbished laptops set up community learning kiosks.",
  },
  {
    title: "Mothers collective retreat",
    impact: "Wellness weekend for 60 caregivers with yoga and nutrition coaching.",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-10 pb-12">
      <PageHero
        eyebrow="Events"
        title="Gatherings that keep conversation and collaboration alive."
        description="Join an upcoming event or write to us to host your own volunteering day."
      >
        <Link href="/contact" className="pill bg-brand-sky text-white">
          Host an event
        </Link>
      </PageHero>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-deep">Upcoming gatherings</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <article key={event.title} className="card h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
                {event.date}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-brand-deep">{event.title}</h3>
              <p className="text-sm text-slate-600">{event.description}</p>
              <p className="mt-3 text-sm text-brand-sunrise">{event.location}</p>
              <Link href="/contact" className="mt-4 inline-flex items-center text-sm text-brand-sky">
                Volunteer / RSVP
                <span className="ml-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/90 px-6 py-10 md:px-10">
        <h2 className="text-2xl font-semibold text-brand-deep">Recent highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pastHighlights.map((highlight) => (
            <article key={highlight.title} className="rounded-2xl border border-brand-sand/70 bg-white/70 p-4">
              <h3 className="text-lg font-semibold text-brand-deep">{highlight.title}</h3>
              <p className="text-sm text-slate-600">{highlight.impact}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
