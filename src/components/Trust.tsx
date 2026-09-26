import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import TestimonialCarousel from "./TestimonialCarousel";

const stats = [
  { value: "500+", label: "Journeys Designed" },
  { value: "12", label: "Countries Served" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "< 1 hr", label: "Concierge Response Time" },
];

export default function Trust() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <RevealGroup
        className="grid gap-8 rounded-2xl border border-sand bg-white p-10 sm:grid-cols-4"
        stagger={0.08}
      >
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center">
            <p className="font-serif text-3xl font-semibold text-deep sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Traveler Stories
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-deep sm:text-4xl">
            What Our Travelers Say
          </h2>
        </div>
        <TestimonialCarousel />
      </Reveal>
    </section>
  );
}
