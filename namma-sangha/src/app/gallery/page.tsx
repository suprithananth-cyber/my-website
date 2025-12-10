import Image from "next/image";
import { PageHero } from "@/components/PageHero";

const galleryItems = [
  {
    title: "Library under a tree",
    description: "Weekend story clubs double up as lending libraries.",
    src: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Village clinic day",
    description: "Volunteer nurses run vitals and tele-consults.",
    src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Makerspace hour",
    description: "Girls learning circuits with cardboard prototypes.",
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Kitchen garden harvest",
    description: "Households share produce as part of nutrition drives.",
    src: "https://images.unsplash.com/photo-1437750769465-301382bfd4ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Youth civic lab",
    description: "Students mapping safe walking routes to school.",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Women entrepreneurs market",
    description: "Locally made snacks, crafts, and textiles on display.",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-10 pb-12">
      <PageHero
        eyebrow="Gallery"
        title="Snapshots from our community visits."
        description="Photos are representative and sourced from Unsplash to illustrate the warmth we experience on field."
      />

      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-3xl border border-brand-sand/60 bg-white/70">
              <Image
                src={item.src}
                alt={item.title}
                width={900}
                height={700}
                className="h-72 w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="p-4">
                <p className="text-lg font-semibold text-brand-deep">{item.title}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
