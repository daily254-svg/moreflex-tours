import { Quote } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

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

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <blockquote className="relative h-full rounded-2xl bg-sand p-8">
            <Quote className="absolute right-6 top-6 text-deep/10" size={48} />
            <p className="relative font-serif text-xl leading-relaxed text-deep text-balance">
              &ldquo;We celebrated our honeymoon under the stars in Amboseli.
              MoreFlex handled our flights, the lodge, and even arranged a
              surprise dinner in the bush. It felt like they were traveling
              with us, not just for us.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-muted">
              — Sarah &amp; James, London
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.12}>
          <blockquote className="relative h-full rounded-2xl bg-sand p-8">
            <Quote className="absolute right-6 top-6 text-deep/10" size={48} />
            <p className="relative font-serif text-xl leading-relaxed text-deep text-balance">
              &ldquo;Booked a corporate retreat for 40 people — flights, venue,
              transfers, everything coordinated from one point of contact. No
              local operator has offered us that before.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-muted">
              — Corporate Travel Client, Nairobi
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
