import { PlumbaryHero } from "@/components/home/PlumbaryHero";
import { Bereiche } from "@/components/home/Bereiche";
import { ProductKatalog } from "@/components/home/ProductKatalog";
import { Fakten } from "@/components/home/Fakten";
import { UeberUnsSnippet } from "@/components/home/UeberUnsSnippet";
import { Zertifizierungen } from "@/components/home/Zertifizierungen";
import { Werte } from "@/components/home/Werte";
import { KontaktCTA } from "@/components/home/KontaktCTA";

export default function HomePage() {
  return (
    <>
      <PlumbaryHero />
      <ProductKatalog />
      <Bereiche />
      <Zertifizierungen />
      <Fakten />
      <UeberUnsSnippet />
      <Werte />
      <KontaktCTA />
    </>
  );
}
