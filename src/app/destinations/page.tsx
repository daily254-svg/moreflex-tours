import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | MoreFlex Travel",
  description:
    "Explore Kenya, Tanzania, Uganda, Rwanda, and Zanzibar with MoreFlex Travel.",
};

const countries = [
  {
    id: "kenya",
    name: "Kenya",
    desc: "The Maasai Mara, Amboseli, Diani Beach, and the birthplace of the safari.",
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
    href: "/destinations/maasai-mara",
    cta: "Explore Maasai Mara",
  },
  {
    id: "tanzania",
    name: "Tanzania",
    desc: "Serengeti, Ngorongoro Crater, Zanzibar's beaches, and Kilimanjaro.",
    img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "uganda",
    name: "Uganda",
    desc: "Gorilla trekking in Bwindi and the source of the Nile.",
    img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "rwanda",
    name: "Rwanda",
    desc: "Volcanoes National Park and the Land of a Thousand Hills.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    desc: "Spice tours, Stone Town, and turquoise Indian Ocean waters.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Destinations
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-deep">
            Where Will Your Journey Take You?
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            Starting in Kenya, expanding across East Africa. Every
            destination guide is built as an experience, not a brochure.
          </p>
        </section>

        <div className="mx-auto max-w-7xl space-y-12 px-6 pb-24 lg:px-10">
          {countries.map((c) => (
            <div
              key={c.id}
              id={c.id}
              className="grid gap-6 overflow-hidden rounded-2xl border border-sand bg-white sm:grid-cols-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.name}
                className="h-64 w-full object-cover sm:h-full"
              />
              <div className="flex flex-col justify-center p-8">
                <h2 className="font-serif text-2xl font-semibold text-deep">
                  {c.name}
                </h2>
                <p className="mt-2 text-muted">{c.desc}</p>
                {c.href ? (
                  <Link
                    href={c.href}
                    className="mt-4 inline-block w-fit rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold-light"
                  >
                    {c.cta}
                  </Link>
                ) : (
                  <span className="mt-4 inline-block w-fit rounded-full border border-sand px-5 py-2.5 text-sm font-semibold text-muted">
                    Full guide coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
