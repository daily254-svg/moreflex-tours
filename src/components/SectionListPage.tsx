import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import type { LucideIcon } from "lucide-react";

type Section = {
  id: string;
  title: string;
  desc: string;
  img?: string;
  icon?: LucideIcon;
};

export default function SectionListPage({
  eyebrow,
  title,
  intro,
  heroImg,
  heroAlt,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroImg?: string;
  heroAlt?: string;
  sections: Section[];
}) {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        {heroImg ? (
          <section className="relative flex min-h-[380px] items-end sm:min-h-[50vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImg}
              alt={heroAlt ?? title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" />
            <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
                {eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-4xl font-semibold text-cream">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-cream/85">{intro}</p>
            </Reveal>
          </section>
        ) : (
          <section className="mx-auto max-w-7xl px-6 py-12 pt-28 lg:px-10">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-4xl font-semibold text-deep">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-muted">{intro}</p>
            </Reveal>
          </section>
        )}

        <RevealGroup
          className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:px-10"
          stagger={0.08}
        >
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.id}>
                <div
                  id={s.id}
                  className="group h-full overflow-hidden rounded-2xl border border-sand bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {s.img && (
                    <div className="h-48 w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    {Icon && (
                      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                    )}
                    <h2 className="font-serif text-xl font-semibold text-deep">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{s.desc}</p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
