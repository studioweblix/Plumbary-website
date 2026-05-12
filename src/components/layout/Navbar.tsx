"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PlumbaryLogo } from "@/components/ui/PlumbaryLogo";

const navLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/produkte", label: "Produkte" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070c14]/92 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo – left */}
          <Link href="/" aria-label="Plumbary GmbH – Startseite" className="shrink-0">
            <PlumbaryLogo variant="mark" markHeight={44} />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`relative py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-[var(--color-secondary)]" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[var(--color-secondary)]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/kontakt"
            className="hidden lg:flex items-center gap-2 border border-[var(--color-secondary)]/30 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)] transition-all duration-300 hover:bg-[var(--color-secondary)]/10 hover:border-[var(--color-secondary)]/60"
          >
            Anfrage stellen
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setMobileOpen(true)}
            className="p-2 text-white lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-In */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#08101a] shadow-2xl border-l border-white/[0.07] lg:hidden"
            >
              <div className="flex h-20 items-center justify-between px-6 border-b border-white/[0.07]">
                <PlumbaryLogo variant="mark" markHeight={38} />
                <button
                  type="button"
                  aria-label="Menü schließen"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="flex flex-col px-6 py-8 gap-1">
                {navLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`block py-3.5 text-sm font-semibold uppercase tracking-[0.18em] border-b border-white/[0.05] transition-colors ${
                        pathname === href
                          ? "text-[var(--color-secondary)]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pt-6">
                  <Link
                    href="/kontakt"
                    className="flex items-center justify-center gap-2 border border-[var(--color-secondary)]/40 px-4 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)]"
                  >
                    Anfrage stellen
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
