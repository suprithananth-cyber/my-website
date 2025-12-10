"use client";

import { useState } from "react";

type FormFields = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

const topics = [
  "Education support",
  "Health camps",
  "Women empowerment",
  "Rural development",
  "Youth activities",
  "General enquiry",
];

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Please tell us your name.";
    if (!fields.email.trim()) {
      nextErrors.email = "Email helps us follow up quickly.";
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/.test(fields.email)) {
      nextErrors.email = "That email looks incorrect.";
    }
    if (!fields.topic.trim()) nextErrors.topic = "Select the area you are writing about.";
    if (fields.message.trim().length < 10)
      nextErrors.message = "Share at least a couple of sentences so we can help.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setFields(initialFields);
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    resetForm();
  };

  const handleChange = (field: keyof FormFields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus("idle");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card space-y-4 rounded-3xl border-none bg-white/70 p-6 md:p-8"
    >
      <div>
        <label className="block text-sm font-medium text-slate-600" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          name="name"
          value={fields.name}
          onChange={handleChange("name")}
          placeholder="Ananya Rao"
          className="mt-2 w-full rounded-2xl border border-brand-sand/70 bg-white/70 px-4 py-3 text-base text-brand-ink outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/30"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-brand-sunrise">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange("email")}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-2xl border border-brand-sand/70 bg-white/70 px-4 py-3 text-base text-brand-ink outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/30"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-brand-sunrise">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600" htmlFor="topic">
          I&apos;m writing about
        </label>
        <select
          id="topic"
          name="topic"
          value={fields.topic}
          onChange={handleChange("topic")}
          className="mt-2 w-full rounded-2xl border border-brand-sand/70 bg-white/70 px-4 py-3 text-base text-brand-ink outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/30"
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "topic-error" : undefined}
        >
          <option value="">Choose an area</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="topic-error" className="mt-1 text-sm text-brand-sunrise">
            {errors.topic}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={handleChange("message")}
          placeholder="Share a quick background, timelines, or links."
          className="mt-2 w-full rounded-2xl border border-brand-sand/70 bg-white/70 px-4 py-3 text-base text-brand-ink outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/30"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-brand-sunrise">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-brand-sky to-brand-sunrise px-4 py-3 text-base font-semibold text-white shadow-md shadow-brand-sky/30 transition hover:opacity-90"
      >
        Send message
      </button>

      {status === "success" && (
        <p className="text-sm text-brand-sky">
          Thank you for reaching out. Our community volunteer will respond within one working day.
        </p>
      )}
    </form>
  );
}
