import Link from "next/link";

const columns = [
  {
    title: "Destinations",
    links: [
      { label: "Kenya", href: "/destinations#kenya" },
      { label: "Tanzania", href: "/destinations#tanzania" },
      { label: "Uganda", href: "/destinations#uganda" },
      { label: "Rwanda", href: "/destinations#rwanda" },
      { label: "Zanzibar", href: "/destinations#zanzibar" },
    ],
  },
  {
    title: "Experiences",
    links: [
      { label: "Wildlife Safaris", href: "/experiences#wildlife-safaris" },
      { label: "Beach Holidays", href: "/experiences#beach-holidays" },
      { label: "Honeymoons", href: "/experiences#honeymoons" },
      { label: "Family Vacations", href: "/experiences#family-vacations" },
      { label: "Corporate Travel", href: "/experiences#corporate-travel" },
    ],
  },
  {
    title: "Aviation Services",
    links: [
      { label: "Flight Booking", href: "/aviation-services#flight-booking" },
      { label: "Charter Flights", href: "/aviation-services#charter-flights" },
      { label: "Airport Transfers", href: "/aviation-services#airport-transfers" },
      { label: "VIP Meet & Greet", href: "/aviation-services#vip-meet-greet" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Trip Planner", href: "/trip-planner" },
      { label: "Travel Resources", href: "/travel-resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="font-serif text-xl font-semibold">
              MoreFlex <span className="text-gold-light">Travel</span>
            </span>
            <p className="mt-3 text-sm text-cream/70">
              Explore Beyond the Journey. A MoreFlex Aviation Company.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-light">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} MoreFlex Travel. All rights reserved.</p>
          <p>Nairobi, Kenya · hello@moreflextravel.com</p>
        </div>
      </div>
    </footer>
  );
}
