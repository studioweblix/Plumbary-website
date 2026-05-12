import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { PlumbaryLogo, LogoSubBrands } from "@/components/ui/PlumbaryLogo";

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const navLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/produkte", label: "Produkte" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#05090f] text-white border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Top: Brand + Divider */}
        <div className="mb-12 pb-10 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <PlumbaryLogo variant="stacked" markHeight={60} />
            <LogoSubBrands />
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed font-light">
            Medizinische &amp; industrielle Bleiprodukte — präzise gefertigt,
            zuverlässig geliefert.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Adresse */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-4">
              <MapPin className="h-3.5 w-3.5" />
              Adresse
            </h3>
            <div className="space-y-1 text-sm text-white/50 leading-relaxed font-light">
              <p>Plumbary GmbH</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-4">
              Kontakt
            </h3>
            <div className="space-y-2.5 text-sm text-white/50 font-light">
              <a
                href="tel:+490000000000"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--color-secondary)]/60 group-hover:text-[var(--color-secondary)] transition-colors" />
                +49 (0) 000 000 000
              </a>
              <a
                href="mailto:info@plumbary.de"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="h-3.5 w-3.5 text-[var(--color-secondary)]/60 group-hover:text-[var(--color-secondary)] transition-colors" />
                info@plumbary.de
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Linkedin className="h-3.5 w-3.5 text-[var(--color-secondary)]/60 group-hover:text-[var(--color-secondary)] transition-colors" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bereiche */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-4">
              Bereiche
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produkte#medizin"
                  className="text-sm text-white/50 hover:text-white transition-colors font-light"
                >
                  Medizinische Produkte
                </Link>
              </li>
              <li>
                <Link
                  href="/produkte#industrie"
                  className="text-sm text-white/50 hover:text-white transition-colors font-light"
                >
                  Industrielle Produkte
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-white/30">
              &copy; {year} Plumbary GmbH. Alle Rechte vorbehalten.
            </span>
            <div className="flex items-center gap-4">
              {legalLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-white/20">Website by StudioWeblix</p>
        </div>
      </div>
    </footer>
  );
}
