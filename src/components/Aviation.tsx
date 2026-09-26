import Link from "next/link";

const services = [
  {
    title: "Flight Booking",
    desc: "Domestic and international flights secured through our aviation network.",
  },
  {
    title: "Private Charter",
    desc: "Skip the queues — fly directly into the reserves and coastlines you're visiting.",
  },
  {
    title: "VIP Meet & Greet",
    desc: "Fast-track arrivals with a dedicated MoreFlex representative at the airport.",
  },
  {
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
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-gold-light/60"
            >
              <h3 className="font-serif text-lg font-semibold text-gold-light">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/aviation-services"
          className="mt-10 inline-block rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          Explore Aviation Services
        </Link>
      </div>
    </section>
  );
}
