import Link from "next/link";

const personas = [
  { emoji: "🐘", label: "Wildlife", slug: "wildlife" },
  { emoji: "🏖", label: "Beach", slug: "beach" },
  { emoji: "💍", label: "Honeymoon", slug: "honeymoon" },
  { emoji: "👨‍👩‍👧", label: "Family", slug: "family" },
  { emoji: "🥾", label: "Adventure", slug: "adventure" },
  { emoji: "💼", label: "Business", slug: "business" },
  { emoji: "❤️", label: "Luxury", slug: "luxury" },
  { emoji: "🎒", label: "Budget", slug: "budget" },
];

export default function DiscoveryFlow() {
  return (
    <section className="relative -mt-16 z-20 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-2xl border border-sand bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-10">
        <div className="mb-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-deep sm:text-3xl">
            What kind of adventure are you looking for?
          </h2>
          <p className="mt-2 text-sm text-muted">
            Tell us your style — we&rsquo;ll design the journey around it.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {personas.map((p) => (
            <Link
              key={p.slug}
              href={`/trip-planner?persona=${p.slug}`}
              className="group flex flex-col items-center gap-2 rounded-xl border border-sand bg-cream/60 px-3 py-5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:bg-sand"
            >
              <span className="text-3xl transition-transform group-hover:scale-110">
                {p.emoji}
              </span>
              <span className="text-sm font-medium text-deep">{p.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
