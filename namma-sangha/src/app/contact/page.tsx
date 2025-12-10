import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

const contactDetails = [
  { label: "Email", value: "hello@nammasangha.org" },
  { label: "Phone", value: "+91 98450 11111 (10 AM - 6 PM)" },
  { label: "Address", value: "Namma Sangha Trust, Basaveshwar Nagar, Bengaluru" },
];

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-12">
      <PageHero
        eyebrow="Contact"
        title="We&apos;d love to hear from you."
        description="Share a quick note and our volunteer desk will respond within one working day."
      />

      <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="card">
          <h2 className="text-xl font-semibold text-brand-deep">Quick details</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {contactDetails.map((item) => (
              <li key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
                  {item.label}
                </p>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-brand-sunrise/10 p-4 text-sm text-brand-sunrise">
            Prefer WhatsApp updates? Send us a hello and we&apos;ll add you to the community broadcast list.
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
