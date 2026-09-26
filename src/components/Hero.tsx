"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920&auto=format&fit=crop",
    alt: "Lions resting at sunrise in the Maasai Mara",
  },
  {
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1920&auto=format&fit=crop",
    alt: "Hot air balloon safari at dawn over the savannah",
  },
  {
    src: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1920&auto=format&fit=crop",
    alt: "Turquoise waters of a white sand beach on the Kenyan coast",
  },
  {
    src: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1920&auto=format&fit=crop",
    alt: "Giraffes crossing the plains at golden hour",
  },
  {
    src: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1920&auto=format&fit=crop",
    alt: "Elephants walking beneath Mount Kilimanjaro in Amboseli",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-[92vh] min-h-[640px] w-full items-center overflow-hidden bg-deep">
      {slides.map((slide, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/30" />
      <div className="absolute inset-0 bg-deep/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
          A MoreFlex Aviation Company
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-cream text-balance sm:text-5xl lg:text-6xl">
          Africa Awaits. Your Journey Starts Here.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
          From unforgettable safaris to seamless flights, luxury stays, and
          curated adventures — MoreFlex Travel brings every part of your
          African journey together.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/trip-planner"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-105 hover:bg-gold-light"
          >
            Start Planning Your Journey
          </Link>
          <Link
            href="/destinations"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Explore Destinations
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-gold-light" : "w-4 bg-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
