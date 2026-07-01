"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { sales, site } from "@/lib/content";
import { gtmEvent } from "@/lib/gtm";
import {
  AsYouType,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  validatePhoneNumberLength,
} from "libphonenumber-js";

type Status = "idle" | "sending" | "sent" | "error";

/* Країни, номери яких не приймаємо. */
const BLOCKED_COUNTRIES = ["RU", "BY"];

/* Валідне імʼя: лише літери/пробіл/дефіс/апостроф, без цифр, посилань і @, ≥2 символи. */
function isValidName(value: string): boolean {
  const v = value.trim();
  if (v.length < 2) return false;
  if (/\d/.test(v)) return false;
  if (/(https?:|www\.|<|>|@)/i.test(v)) return false;
  return /^[\p{L}][\p{L}\s'’.\-]*$/u.test(v);
}

/* Перевірка телефону: повертає текст помилки або null (якщо ок). */
function validatePhone(value: string): string | null {
  const parsed = parsePhoneNumberFromString(value, "UA");
  if (parsed?.country && BLOCKED_COUNTRIES.includes(parsed.country)) {
    return "На жаль, номери цих операторів не приймаються";
  }
  if (!isValidPhoneNumber(value, "UA")) {
    return "Вкажіть коректний номер телефону з кодом країни";
  }
  return null;
}

export default function Sales() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const loadedAt = useRef(0);

  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;

    // анти-спам: honeypot заповнений або надто швидка відправка (бот) →
    // тихо імітуємо успіх, нічого не надсилаємо
    if (website.trim() !== "" || Date.now() - loadedAt.current < 2000) {
      setStatus("sent");
      return;
    }

    if (!isValidName(name)) {
      setNameError("Вкажіть коректне ім'я (лише літери, без цифр)");
      return;
    }
    const phoneErr = validatePhone(phone);
    if (phoneErr) {
      setPhoneError(phoneErr);
      return;
    }
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
            {/* honeypot проти ботів — приховане поле, реальні люди його не бачать */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
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
                  maxLength={60}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value.replace(/[0-9]/g, ""));
                    if (nameError) setNameError(null);
                  }}
                  aria-invalid={nameError ? true : undefined}
                  className={`w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-gold ${
                    nameError ? "border-red-500" : "border-line"
                  }`}
                />
                {nameError && <p className="mt-1.5 text-xs text-red-600">{nameError}</p>}
              </div>
              <div>
                <label htmlFor="sk-phone" className="mb-1.5 block text-sm font-medium text-ink">
                  {sales.form.phoneLabel}
                </label>
                <input
                  id="sk-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  maxLength={22}
                  placeholder="+380 63 123 45 67"
                  value={phone}
                  onFocus={() => {
                    if (!phone) setPhone("+380 ");
                  }}
                  onChange={(e) => {
                    // завжди міжнародний формат: "+" + цифри (максимум 15 за E.164)
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 15);
                    const candidate = digits ? "+" + digits : "";
                    // не даємо ввести більше цифр, ніж дозволено для цієї країни
                    if (candidate && validatePhoneNumberLength(candidate) === "TOO_LONG") return;
                    setPhone(candidate ? new AsYouType().input(candidate) : "");
                    if (phoneError) setPhoneError(null);
                  }}
                  onBlur={() => {
                    if (phone && phone.trim() !== "+380") setPhoneError(validatePhone(phone));
                  }}
                  aria-invalid={phoneError ? true : undefined}
                  className={`w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-gold ${
                    phoneError ? "border-red-500" : "border-line"
                  }`}
                />
                {phoneError ? (
                  <p className="mt-1.5 text-xs text-red-600">{phoneError}</p>
                ) : (
                  <p className="mt-1.5 text-xs text-muted-2">
                    Інша країна? Введіть свій код (напр. +48, +421, +36)
                  </p>
                )}
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
