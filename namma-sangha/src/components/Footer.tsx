import Link from "next/link";

const supportLinks = [
  { label: "Volunteer handbook", href: "/our-work" },
  { label: "Community updates", href: "/events" },
  { label: "Photo stories", href: "/gallery" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-sand/70 bg-white/80 text-sm text-slate-600">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-base font-semibold text-brand-deep">Namma Sangha</p>
          <p className="mt-1 max-w-sm">
            A neighbourhood-led trust that keeps education, health, and hope within reach for
            everyone.
          </p>
          <a href="mailto:hello@nammasangha.org" className="mt-2 inline-flex items-center gap-2 text-brand-sky">
            hello@nammasangha.org
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4">
          {supportLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-slate-600 hover:text-brand-sky">
              {item.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Namma Sangha Trust. Built with community support.
        </p>
      </div>
    </footer>
  );
}
