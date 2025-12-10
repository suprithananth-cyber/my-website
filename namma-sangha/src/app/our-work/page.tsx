import { PageHero } from "@/components/PageHero";
import Link from "next/link";

const initiatives = [
  {
    title: "Education support",
    summary: "Bridge schooling gaps through community tuition, scholarships, and digital literacy.",
    highlights: ["After-school circles in 5 neighbourhoods", "210 students supported this term"],
  },
  {
    title: "Health & wellness",
    summary: "Regular health camps, sanitation drives, and caregiver support groups in rural taluks.",
    highlights: ["Mobile clinics with 12 volunteer doctors", "Nutrition support for 80 mothers"],
  },
  {
    title: "Women empowerment",
    summary: "Self-help groups, financial literacy, and market linkages for small businesses.",
    highlights: ["86 micro-entrepreneurs mentored", "Rotating seed fund for equipment"],
  },
  {
    title: "Rural development",
    summary: "Water stewardship, kitchen gardens, and skill building with farmer collectives.",
    highlights: ["Rainwater harvesting pilots in 3 villages", "20 climate champions trained"],
  },
  {
    title: "Youth leadership",
    summary: "Weekend sports, debate clubs, and civic projects that keep teens engaged.",
    highlights: ["6 coaches across futsal and athletics", "Student councils in 4 schools"],
  },
];

const supporterIdeas = [
  "Mentor students in English, math, career prep, or coding.",
  "Sponsor a monthly health camp or donate medical supplies.",
  "Offer pro-bono design, legal, or finance guidance.",
  "Host experiential workshops for women entrepreneurs.",
  "Bring your team for a rural immersion or volunteering day.",
];

export default function OurWorkPage() {
  return (
    <div className="space-y-10 pb-12">
      <PageHero
        eyebrow="Our work"
        title="Programmes that stay rooted in trust and transparency."
        description="Every initiative is community-led, data-backed, and shared openly with our supporters."
      />

      <section className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {initiatives.map((item) => (
            <article key={item.title} className="card h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-deep">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.summary}</p>
                </div>
                <span className="pill bg-brand-sunrise/10 text-xs uppercase tracking-widest text-brand-sunrise">
                  Active
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {item.highlights.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/90 px-6 py-10 md:px-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-deep">How you can plug in</h2>
          <p className="text-slate-600">
            All programmes are flexible and can be co-designed with your team. Choose what speaks to
            you or reach out so we can brainstorm together.
          </p>
          <ul className="grid gap-3 text-sm text-brand-deep md:grid-cols-2">
            {supporterIdeas.map((idea) => (
              <li key={idea} className="rounded-2xl border border-brand-sand/60 bg-white/70 px-4 py-3">
                {idea}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center text-sm font-semibold text-brand-sky"
          >
            Tell us how you&apos;d like to help
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
