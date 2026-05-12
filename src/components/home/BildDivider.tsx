import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface BildDividerProps {
  /** URL of the image (from /public) */
  src: string;
  alt: string;
  /** Optional quote or label displayed over the image */
  quote?: string;
  quoteSource?: string;
}

export function BildDivider({
  src,
  alt,
  quote,
  quoteSource,
}: BildDividerProps) {
  return (
    <div className="relative h-[420px] lg:h-[520px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050c15]/80 via-[#050c15]/60 to-[#050c15]/75" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8fafc4]/30 to-transparent" />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8fafc4]/30 to-transparent" />

      {/* Optional quote */}
      {quote && (
        <AnimatedSection className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <span className="block text-[40px] text-[#8fafc4]/30 font-serif leading-none mb-3">
              „
            </span>
            <blockquote className="font-heading text-[clamp(1.2rem,3vw,2rem)] font-bold uppercase tracking-tight text-white leading-tight">
              {quote}
            </blockquote>
            {quoteSource && (
              <cite className="not-italic block mt-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8fafc4]/60">
                — {quoteSource}
              </cite>
            )}
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
