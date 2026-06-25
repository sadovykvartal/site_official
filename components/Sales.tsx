"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { sales, site } from "@/lib/content";
import { gtmEvent } from "@/lib/gtm";

type Status = "idle" | "sending" | "sent" | "error";

export default function Sales() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a0e648e9-eff7-4253-ad47-9c76ade9b580",
          subject: "Нова заявка з сайту — Садовий квартал",
          from_name: "ЖК Садовий квартал",
          name,
          phone,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "submit failed");
      setStatus("sent");
      gtmEvent("generate_lead", { form: "consultation", location: "sales" });
    } catch {
      setStatus("error");
    }
  };

  const submitLabel =
    status === "sent"
      ? "Дякуємо! Ми зателефонуємо"
      : status === "sending"
        ? "Надсилаємо…"
        : sales.form.submit;

  return (
    <section id="sales" className="container-sk py-[var(--spacing-section)]">
      <div className="bg-beige-card p-8 sm:p-12">
        <SectionHead index="10" badge="Відділ продажу" title={sales.title} subtitle={sales.subtitle} />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* інфо */}
        <Reveal>
          <ul className="space-y-2">
            {sales.hours.map((h) => (
              <li key={h} className="text-sm text-ink/85">{h}</li>
            ))}
          </ul>

          <div className="mt-8 space-y-2 text-sm">
            <p className="text-muted">{site.salesAddress}</p>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtmEvent("map_click", { location: "sales" })}
              className="inline-flex items-center gap-1.5 font-semibold text-gold hover:opacity-80"
            >
              {sales.mapCta}
              <span aria-hidden>→</span>
            </a>
            <a
              href={site.phoneHref}
              onClick={() => gtmEvent("phone_click", { location: "sales" })}
              className="block pt-2 font-bold text-ink hover:text-gold"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={() => gtmEvent("email_click", { location: "sales" })}
              className="block text-ink/85 hover:text-gold"
            >
              {site.email}
            </a>
          </div>
        </Reveal>

        {/* форма */}
        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="border border-line bg-white p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="sk-name" className="mb-1.5 block text-sm font-medium text-ink">
                  {sales.form.nameLabel}
                </label>
                <input
                  id="sk-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="sk-phone" className="mb-1.5 block text-sm font-medium text-ink">
                  {sales.form.phoneLabel}
                </label>
                <input
                  id="sk-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+380"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-solid w-full justify-center disabled:opacity-70"
              >
                {submitLabel}
              </button>
              {status === "error" && (
                <p className="text-xs leading-relaxed text-red-600">
                  Не вдалося надіслати. Зателефонуйте, будь ласка: {site.phone}
                </p>
              )}
              <p className="text-xs leading-relaxed text-muted-2">{sales.form.consent}</p>
            </div>
          </form>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
