import Link from "next/link";
import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function QuoteCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-deep to-deep-light px-8 py-14 text-center text-cream sm:px-16">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-light/15 text-gold-light">
            <Sparkles size={22} />
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Instant Quotation
          </p>
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Get Your Personalized Quote in 60 Seconds
          </h2>
          <p className="max-w-xl text-cream/80">
            Tell us your dates, travelers, and interests. Receive a
            professional itinerary and quotation by email or WhatsApp —
            crafted by a dedicated travel consultant, not a script.
          </p>
          <Link
            href="/trip-planner"
            className="mt-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-105 hover:bg-gold-light"
          >
            Let Us Design Your Journey
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
