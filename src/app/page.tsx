import { PlumbaryHero } from "@/components/home/PlumbaryHero";
import { Bereiche } from "@/components/home/Bereiche";
import { ProductKatalog } from "@/components/home/ProductKatalog";
import { Fakten } from "@/components/home/Fakten";
import { UeberUnsSnippet } from "@/components/home/UeberUnsSnippet";
import { BildDivider } from "@/components/home/BildDivider";
import { Werte } from "@/components/home/Werte";
import { KontaktCTA } from "@/components/home/KontaktCTA";

export default function HomePage() {
  return (
    <>
      <PlumbaryHero />
      <Bereiche />
      <ProductKatalog />
      <Fakten />
      <UeberUnsSnippet />
      <BildDivider
        src="/images/industrie-machine.png"
        alt="Industriemaschine in der Plumbary Fertigung"
        quote="Werkstoffkompetenz seit Grund auf."
        quoteSource="Plumbary GmbH"
      />
      <Werte />
      <KontaktCTA />
    </>
  );
}
