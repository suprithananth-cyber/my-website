import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    title: "Education support",
    description: "Bridge tuition, school supplies, and digital literacy for first-generation learners.",
  },
  {
    title: "Health camps",
    description: "Monthly camps bring doctors, screenings, and medication to neighbourhood layouts.",
  },
  {
    title: "Women empowerment",
    description: "Self-help circles, leadership workshops, and seed funding keep local businesses alive.",
  },
  {
    title: "Rural development",
    description: "Water, hygiene, and farm-support projects help villages stay resilient to climate change.",
  },
  {
    title: "Youth activities",
    description: "Sports mentoring and civic labs help teenagers speak up and stay in school.",
  },
];

const milestones = [
  { label: "Study scholarships", value: "210+", detail: "students funded this academic year" },
  { label: "Health screenings", value: "34", detail: "villages reached with mobile clinics" },
  { label: "Women entrepreneurs", value: "86", detail: "micro-businesses incubated since 2022" },
];

const updates = [
  {
    title: "STEM play labs in rural schools",
    detail: "A travelling kit helps Class 6-8 students learn robotics basics.",
    tag: "Education",
  },
  {
    title: "Wellness days for caregivers",
    detail: "Yoga, nutrition checks, and helpline support for women caregivers.",
    tag: "Health",
  },
  {
    title: "Weekend sports circles",
    detail: "Youth clubs now run regular futsal meets and debate circles.",
    tag: "Youth",
  },
];

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <section className="grid gap-8 rounded-3xl bg-white/90 px-6 py-12 shadow-xl shadow-brand-sand/60 md:grid-cols-2 md:px-10">
        <div className="space-y-6">
          <p className="pill bg-brand-sunrise/10 text-brand-sunrise">Community-first trust</p>
          <h1 className="text-4xl font-semibold leading-tight text-brand-deep md:text-5xl">
            Namma Sangha keeps opportunity within walking distance.
          </h1>
          <p className="text-lg text-slate-600">
            We are a volunteer-driven trust from Karnataka rallying neighbours, teachers, and health
            workers to support education, wellness, women-led livelihoods, and joyful youth spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="pill bg-brand-sky text-white shadow-lg shadow-brand-sky/40"
            >
              Partner with us
            </Link>
            <Link href="/our-work" className="pill border border-brand-sand/80 text-brand-deep">
              Explore initiatives
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {milestones.map((milestone) => (
              <div key={milestone.label} className="rounded-2xl border border-brand-sand/70 p-4">
                <p className="text-2xl font-semibold text-brand-deep">{milestone.value}</p>
                <p className="text-sm font-semibold text-brand-sky/80">{milestone.label}</p>
                <p className="text-xs text-slate-500">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-sky/20 to-brand-sunrise/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
              alt="Volunteers facilitating an outdoor study circle"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 max-w-2xl">
          <p className="pill bg-white text-brand-sky">What we focus on</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-deep">Neighbourhood care, real impact</h2>
          <p className="mt-3 text-slate-600">
            Every rupee goes into grassroots programmes co-created with schools, PHCs, and self-help
            groups. Here is a quick look at the work your support fuels.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article key={area.title} className="card h-full">
              <h3 className="text-xl font-semibold text-brand-deep">{area.title}</h3>
              <p className="mt-2 text-slate-600">{area.description}</p>
              <Link href="/our-work" className="mt-4 inline-flex items-center text-sm font-semibold text-brand-sky">
                Learn more
                <span className="ml-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white/80 px-6 py-10 md:grid-cols-2 md:px-10">
        <div className="space-y-4">
          <p className="pill bg-brand-sky/10 text-brand-sky">From the field</p>
          <h2 className="text-3xl font-semibold text-brand-deep">Hopeful stories every week</h2>
          <p className="text-slate-600">
            Volunteers document every rupee spent and every person supported. Our reports are open,
            transparent, and community-reviewed.
          </p>
          <div className="space-y-4">
            {updates.map((update) => (
              <article key={update.title} className="rounded-2xl border border-brand-sand/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-sky">{update.tag}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-deep">{update.title}</h3>
                <p className="text-sm text-slate-600">{update.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
              label: "Village reading corner",
            },
            {
              src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
              label: "Mobile health camp",
            },
            {
              src: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=80",
              label: "Women's skill circle",
            },
          ].map((photo) => (
            <figure key={photo.label} className="overflow-hidden rounded-3xl">
              <Image
                src={photo.src}
                alt={photo.label}
                width={900}
                height={500}
                className="h-48 w-full object-cover"
              />
              <figcaption className="px-2 py-2 text-sm text-slate-600">{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-brand-sky to-brand-sunrise px-6 py-10 text-white md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Volunteer or partner</p>
            <h2 className="mt-2 text-3xl font-semibold">Bring your skills, time, or ideas.</h2>
            <p className="mt-2 max-w-2xl text-white/90">
              We welcome mentors, doctors, designers, rural ambassadors, and young leaders. Together we
              can keep our communities supported all year long.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="pill bg-white/90 text-brand-deep">
              Write to us
            </Link>
            <Link
              href="/events"
              className="pill border border-white/70 text-white hover:bg-white/10"
            >
              Upcoming events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
