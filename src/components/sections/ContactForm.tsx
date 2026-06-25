"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const labels = {
    mn: {
      name: "Нэр",
      email: "Имэйл",
      phone: "Утас",
      message: "Мессеж",
      submit: "Илгээх",
      success: "Баярлалаа! Бид тантай удахгүй холбогдоно.",
    },
    en: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
      success: "Thank you! We will contact you soon.",
    },
  };

  const t = labels[locale as keyof typeof labels] ?? labels.en;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium">{t.name}</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">{t.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium">{t.phone}</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-ring"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium">{t.message}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-ring"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {t.submit}
        </button>
        {status === "success" && (
          <p className="text-sm text-success">{t.success}</p>
        )}
      </form>
    </FadeIn>
  );
}
