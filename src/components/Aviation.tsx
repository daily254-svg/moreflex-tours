import Link from "next/link";
import { Plane, PlaneTakeoff, UserCheck, Briefcase, ArrowRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    desc: "Domestic and international flights secured through our aviation network.",
  },
  {
    icon: PlaneTakeoff,
    title: "Private Charter",
    desc: "Skip the queues — fly directly into the reserves and coastlines you're visiting.",
  },
  {
    icon: UserCheck,
    title: "VIP Meet & Greet",
    desc: "Fast-track arrivals with a dedicated MoreFlex representative at the airport.",
  },
  {
    icon: Briefcase,
    title: "Business Aviation",
    desc: "Executive travel logistics for corporate teams, conferences, and retreats.",
  },
];

export default function Aviation() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-cream">
      <div className="absolute inset-0 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
          alt="Small aircraft on a runway at sunrise"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Travel Powered by Aviation
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold text-balance sm:text-4xl">
            From Takeoff to Safari. One Trusted Partner.
          </h2>
          <p className="mt-4 max-w-xl text-cream/80">
            As a MoreFlex Aviation company, we plan your journey with the same
            precision, safety standards, and logistics expertise that power our
            flight operations — so nothing is left to chance.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {services.map((s) => (
            <RevealItem key={s.title}>
              <div className="group h-full rounded-xl border border-cream/15 bg-cream/5 p-6 transition-all hover:-translate-y-1 hover:border-gold-light/60 hover:bg-cream/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-light/15 text-gold-light transition-transform duration-300 group-hover:scale-110">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-gold-light">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {s.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Link
            href="/aviation-services"
            className="group mt-10 inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Explore Aviation Services
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
