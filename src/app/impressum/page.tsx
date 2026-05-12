import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Plumbary GmbH",
  description: "Impressum und Angaben gemäß § 5 TMG",
};

const name = "Plumbary GmbH";
const address = "Musterstraße 1\n12345 Musterstadt\nDeutschland";
const phone = "+49 (0) 000 000 000";
const email = "info@plumbary.de";

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-36 pb-20 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-white mb-2">
        Impressum
      </h1>
      <p className="text-sm text-white/40 mb-12">
        Angaben gemäß § 5 TMG
      </p>

      <div className="space-y-10 text-sm text-white/60 leading-relaxed">
        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            Anbieter und verantwortlich für den Inhalt
          </h2>
          <p className="whitespace-pre-line">{name}</p>
          <p className="whitespace-pre-line mt-2">{address}</p>
          <p className="mt-3">
            Telefon:{" "}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-[var(--color-secondary)] hover:underline"
            >
              {phone}
            </a>
          </p>
          <p className="mt-1">
            E-Mail:{" "}
            <a
              href={`mailto:${email}`}
              className="text-[var(--color-secondary)] hover:underline"
            >
              {email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            Redaktionell verantwortlich
          </h2>
          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: {name}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
            wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich.
          </p>
          <p className="mt-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </main>
  );
}
