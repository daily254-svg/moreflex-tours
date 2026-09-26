import Link from "next/link";

const destinations = [
  {
    name: "Maasai Mara",
    hook: "Wake Up to Lions",
    href: "/destinations/maasai-mara",
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Amboseli",
    hook: "Breakfast with Elephants Beneath Kilimanjaro",
    href: "/destinations#amboseli",
    img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Diani Beach",
    hook: "Escape to Paradise",
    href: "/destinations#diani",
    img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Zanzibar",
    hook: "Where the Ocean Meets Serenity",
    href: "/destinations#zanzibar",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Destinations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Discover
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep sm:text-4xl">
            Every Journey Becomes an Experience
          </h2>
        </div>
        <Link
          href="/destinations"
          className="text-sm font-semibold text-deep underline decoration-gold decoration-2 underline-offset-4"
        >
          View all destinations →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <Link
            key={d.name}
            href={d.href}
            className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={d.img}
              alt={d.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/30 to-transparent" />
            <div className="relative z-10 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                {d.name}
              </p>
              <p className="mt-1 font-serif text-xl font-semibold text-cream">
                {d.hook}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
