import Link from "next/link";
import { PlaneTakeoff, PawPrint, Moon, Wallet } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maasai Mara Safari | MoreFlex Travel",
  description:
    "Wake up to lions. Plan a Maasai Mara safari with MoreFlex Travel — the best time to visit, wildlife calendar, suggested itineraries, and where to stay.",
};

const facts = [
  { label: "Fly time from Nairobi", value: "45 min", icon: PlaneTakeoff },
  { label: "Best for", value: "Big Five & Migration", icon: PawPrint },
  { label: "Ideal stay", value: "3–4 nights", icon: Moon },
  { label: "From", value: "KES 85,000 pp", icon: Wallet },
];

const calendar = [
  { period: "Jul – Oct", highlight: "Great Migration & river crossings", tag: "Peak" },
  { period: "Nov – Dec", highlight: "Short rains, lush scenery, fewer crowds", tag: "Green" },
  { period: "Jan – Mar", highlight: "Calving season, big cat action", tag: "Great" },
  { period: "Apr – Jun", highlight: "Long rains, best value season", tag: "Value" },
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival & Sundowner Game Drive",
    desc: "Fly-in from Nairobi (45 min) or road transfer. Settle into your lodge, then an evening game drive as the plains turn gold.",
  },
  {
    day: "Day 2",
    title: "Full-Day Migration Safari",
    desc: "Morning and afternoon game drives tracking the Big Five, with a bush breakfast overlooking the Mara River.",
  },
  {
    day: "Day 3",
    title: "Hot Air Balloon & Maasai Village",
    desc: "Sunrise balloon safari followed by a champagne breakfast, then an afternoon cultural visit to a local Maasai community.",
  },
  {
    day: "Day 4",
    title: "Departure",
    desc: "Final morning game drive before your flight back to Nairobi or onward to the coast.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=900&auto=format&fit=crop",
];

export default function MaasaiMaraPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <section className="relative flex h-[70vh] min-h-[480px] items-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1920&auto=format&fit=crop"
            alt="Lion in the Maasai Mara at golden hour"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
          <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              Kenya · Wildlife Safari
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Maasai Mara: Wake Up to Lions
            </h1>
            <p className="mt-3 max-w-xl text-cream/85">
              Home to the Great Migration and the highest concentration of
              big cats in Africa — this is the safari people imagine when
              they close their eyes.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <RevealGroup className="grid gap-4 sm:grid-cols-4" stagger={0.08}>
            {facts.map((f) => (
              <RevealItem key={f.label}>
                <div className="group rounded-xl border border-sand bg-white p-5 transition-shadow hover:shadow-md">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                    <f.icon size={18} strokeWidth={1.75} />
                  </span>
                  <p className="mt-3 text-xs uppercase tracking-wide text-muted">
                    {f.label}
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold text-deep">
                    {f.value}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-deep sm:text-3xl">
              Wildlife Calendar
            </h2>
            <p className="mt-2 max-w-2xl text-muted">
              The Mara rewards travel almost any time of year — here&rsquo;s
              what to expect by season.
            </p>
          </Reveal>
          <RevealGroup
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {calendar.map((c) => (
              <RevealItem key={c.period}>
                <div className="h-full rounded-xl border border-sand bg-sand/60 p-5 transition-shadow hover:shadow-md">
                  <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-deep">
                    {c.tag}
                  </span>
                  <p className="mt-3 font-serif font-semibold text-deep">
                    {c.period}
                  </p>
                  <p className="mt-1 text-sm text-muted">{c.highlight}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="bg-sand/50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-deep sm:text-3xl">
                Suggested Itinerary
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 space-y-6" stagger={0.1}>
              {itinerary.map((day) => (
                <RevealItem key={day.day}>
                  <div className="flex flex-col gap-4 rounded-xl border border-sand bg-white p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-start">
                    <div className="shrink-0 font-serif text-lg font-semibold text-gold">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep">{day.title}</h3>
                      <p className="mt-1 text-sm text-muted">{day.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <p className="mt-6 text-sm text-muted">
              This itinerary is a starting point — every MoreFlex journey is
              customized to your dates, budget, and interests.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-deep sm:text-3xl">
              Gallery
            </h2>
          </Reveal>
          <RevealGroup
            className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
            stagger={0.08}
          >
            {gallery.map((src) => (
              <RevealItem key={src}>
                <div className="h-48 w-full overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Maasai Mara safari scene"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-deep to-deep-light px-8 py-14 text-center text-cream sm:px-16">
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                Ready to Wake Up to Lions?
              </h2>
              <p className="max-w-xl text-cream/80">
                Let our travel consultants build your Maasai Mara journey —
                flights, lodge, and every detail handled.
              </p>
              <Link
                href="/trip-planner?destination=maasai-mara"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-105 hover:bg-gold-light"
              >
                Design My Maasai Mara Trip
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
