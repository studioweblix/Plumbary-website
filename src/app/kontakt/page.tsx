"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Note: metadata must be in a Server Component – move to a separate file if needed
// export const metadata: Metadata = { title: "Kontakt – Plumbary GmbH" };

const contactInfo = [
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Telefon",
    value: "+49 (0) 000 000 000",
    href: "tel:+490000000000",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: "E-Mail",
    value: "info@plumbary.de",
    href: "mailto:info@plumbary.de",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Adresse",
    value: "Musterstraße 1, 12345 Musterstadt",
    href: null,
  },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  bereich: string;
  message: string;
};

export default function KontaktPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    bereich: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Placeholder – connect to backend / email service
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      {/* Page header */}
      <div className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1a3a5a]/20 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #8fafc4 1px, transparent 1px),
                linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Kontakt
              </span>
            </div>
            <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-bold uppercase tracking-tight text-white leading-none">
              Anfrage stellen
            </h1>
            <p className="mt-6 max-w-xl text-sm text-white/50 leading-relaxed font-light">
              Schildern Sie uns Ihr Vorhaben — wir melden uns schnellstmöglich
              mit einer qualifizierten Einschätzung und einem Angebot zurück.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/15 to-transparent" />
      </div>

      {/* Content grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Contact info sidebar */}
          <AnimatedSection animation="slideRight" className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center border border-[var(--color-secondary)]/20 text-[var(--color-secondary)]/70">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]/60 mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-white/60 hover:text-white transition-colors font-light"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/60 font-light">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-white/[0.06]">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]/60 mb-3">
                  Erreichbarkeit
                </div>
                <div className="space-y-1.5 text-sm text-white/45 font-light">
                  <p>Montag – Freitag</p>
                  <p>08:00 – 17:00 Uhr</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection animation="slideLeft" delay={0.1} className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 border border-white/[0.07] bg-[var(--color-dark-card)]">
                <CheckCircle className="h-12 w-12 text-[var(--color-secondary)] mb-5" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-3">
                  Anfrage gesendet
                </h3>
                <p className="text-sm text-white/50 font-light max-w-sm">
                  Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns
                  in Kürze bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="w-full bg-[var(--color-dark-card)] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Ihr Unternehmen"
                      className="w-full bg-[var(--color-dark-card)] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className="w-full bg-[var(--color-dark-card)] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      className="w-full bg-[var(--color-dark-card)] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-2">
                    Bereich *
                  </label>
                  <select
                    name="bereich"
                    required
                    value={form.bereich}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-dark-card)] border border-white/[0.08] px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors appearance-none"
                  >
                    <option value="" disabled className="text-white/30">
                      Bitte wählen …
                    </option>
                    <option value="medizin">Medizinische Produkte</option>
                    <option value="industrie">Industrielle Produkte</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-2">
                    Ihre Anfrage *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Vorhaben, die benötigten Produkte oder Stückzahlen …"
                    className="w-full bg-[var(--color-dark-card)] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-white/25 font-light">
                    * Pflichtfelder
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center gap-3 bg-[var(--color-secondary)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#070c14] transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Wird gesendet …"
                    ) : (
                      <>
                        Anfrage absenden
                        <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
