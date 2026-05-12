import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Plumbary GmbH",
  description: "Datenschutzerklärung der Plumbary GmbH",
};

const name = "Plumbary GmbH";
const address = "Musterstraße 1\n12345 Musterstadt\nDeutschland";
const email = "info@plumbary.de";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-36 pb-20 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-white mb-2">
        Datenschutzerklärung
      </h1>
      <p className="text-sm text-white/40 mb-12">
        Informationen zum Umgang mit Ihren Daten
      </p>

      <div className="space-y-10 text-sm text-white/60 leading-relaxed">
        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2 whitespace-pre-line">{name}</p>
          <p className="mt-2 whitespace-pre-line">{address}</p>
          <p className="mt-2">
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
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Beim Aufruf unserer Website werden durch den Browser auf Ihrem
            Endgerät automatisch Informationen an den Server gesendet. Diese
            Informationen werden temporär in einem sogenannten Logfile
            gespeichert. Erfasst werden u. a. IP-Adresse, Datum und Uhrzeit
            des Zugriffs, Name und URL der abgerufenen Datei, übertragene
            Datenmenge sowie die anfragende Stelle (Referrer-URL). Die
            Verarbeitung erfolgt zur Gewährleistung eines reibungslosen
            Verbindungsaufbaus und zur Auswertung der Systemsicherheit.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            3. Cookies
          </h2>
          <p>
            Unsere Website kann Cookies verwenden. Cookies sind kleine
            Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen
            dazu, unser Angebot nutzerfreundlicher zu gestalten. Sie können
            Ihren Browser so einstellen, dass Sie über die Speicherung von
            Cookies informiert werden und diese einzeln erlauben oder ablehnen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
            ein Recht auf Datenübertragbarkeit. Sie haben ferner das Recht,
            sich bei einer Aufsichtsbehörde zu beschweren. Bei Fragen zum
            Datenschutz wenden Sie sich bitte an die oben genannte
            E-Mail-Adresse.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-4">
            5. Aktualität
          </h2>
          <p>
            Diese Datenschutzerklärung wird bei Bedarf an geänderte
            Rechtslagen oder unsere Angebote angepasst. Die jeweils aktuelle
            Version finden Sie auf dieser Seite.
          </p>
        </section>
      </div>
    </main>
  );
}
