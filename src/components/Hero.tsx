"use client";

import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
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

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

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
      <AnimatePresence>
        {slides.map(
          (slide, i) =>
            i === active && (
              <motion.img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/30" />
      <div className="absolute inset-0 bg-deep/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10"
      >
        <motion.p
          variants={item}
          className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light"
        >
          <Compass size={16} className="shrink-0" />
          A MoreFlex Aviation Company
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-cream text-balance sm:text-5xl lg:text-6xl"
        >
          Africa Awaits. Your Journey Starts Here.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85"
        >
          From unforgettable safaris to seamless flights, luxury stays, and
          curated adventures — MoreFlex Travel brings every part of your
          African journey together.
        </motion.p>
        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/trip-planner"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-105 hover:bg-gold-light"
          >
            Start Planning Your Journey
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/destinations"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Explore Destinations
          </Link>
        </motion.div>
      </motion.div>

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
