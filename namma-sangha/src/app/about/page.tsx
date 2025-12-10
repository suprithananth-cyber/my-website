import Image from "next/image";
import { PageHero } from "@/components/PageHero";

const values = [
  {
    title: "People over projects",
    detail: "We listen to neighbours before designing any intervention.",
  },
  {
    title: "Transparency always",
    detail: "Program budgets, partner MoUs, and reports are shared openly.",
  },
  {
    title: "Joyful volunteering",
    detail: "Weekend meetups, mentoring, and skill-shares keep us energised.",
  },
];

const timeline = [
  { year: "2017", event: "Started informal tuition circles in Govindraj Nagar." },
  {
    year: "2019",
    event: "Registered as a public charitable trust and expanded to basic health camps.",
  },
  { year: "2021", event: "Launched women entrepreneur seed fund with 15 SHGs." },
  { year: "2023", event: "Scaled rural programmes across three districts with local partners." },
];

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-12">
      <PageHero
        eyebrow="About us"
        title="A neighbourhood trust shaped by volunteers and local leaders."
        description="Namma Sangha began as a tiny after-school circle and has grown into a statewide community network powered by teachers, health workers, and friends like you."
      />

      <section className="grid gap-8 rounded-3xl bg-white/80 px-6 py-10 md:grid-cols-[1.3fr_1fr] md:px-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-deep">How we work</h2>
          <p className="text-slate-600">
            We co-create programmes with communities so that they remain relevant and rooted. Each
            initiative is paired with a local steward who tracks attendance, budgets, and feedback.
          </p>
          <ul className="space-y-3 text-slate-600">
            <li>• Listening walks and community mapping each quarter.</li>
            <li>• Shared dashboards for donors, volunteers, and partner schools.</li>
            <li>• Rapid response funds for medical emergencies and disaster relief.</li>
          </ul>
          <div className="rounded-2xl bg-brand-sunrise/10 p-4 text-sm text-brand-sunrise">
            &ldquo;When someone says &lsquo;Yaaru helbeku?&rsquo;, we want the answer to be &lsquo;Call Namma Sangha!&rsquo;&rdquo;
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
            alt="Volunteers discussing a neighbourhood plan"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="card">
          <h3 className="text-xl font-semibold text-brand-deep">Our guiding values</h3>
          <div className="mt-4 space-y-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-brand-sand/70 p-4">
                <h4 className="text-base font-semibold text-brand-deep">{value.title}</h4>
                <p className="text-sm text-slate-600">{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-brand-deep">Milestones</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {timeline.map((item) => (
              <li key={item.year} className="border-l-2 border-brand-sky/50 pl-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-sky">
                  {item.year}
                </p>
                <p>{item.event}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
