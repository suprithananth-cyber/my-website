import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="w-full rounded-3xl bg-gradient-to-br from-brand-cream to-white px-6 py-12 shadow-lg shadow-white/50">
      {eyebrow && (
        <p className="pill mb-4 bg-brand-sunrise/10 text-sm uppercase tracking-widest text-brand-sunrise">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold leading-tight text-brand-deep md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{description}</p>
      {children && <div className="mt-6 flex flex-wrap gap-4">{children}</div>}
    </section>
  );
}
