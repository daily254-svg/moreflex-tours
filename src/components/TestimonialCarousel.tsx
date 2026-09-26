"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

const AUTOPLAY_MS = 6000;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index, next]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  const t = testimonials[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto max-w-5xl"
    >
      <div className="relative overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="grid cursor-grab select-none active:cursor-grabbing sm:grid-cols-2"
          >
            <div className="relative h-56 sm:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.img}
                alt={t.trip}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/0 to-transparent sm:bg-gradient-to-r" />
              <span className="absolute bottom-4 left-4 rounded-full bg-deep/70 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
                {t.trip}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10">
              <Quote className="text-gold/20" size={40} />
              <div className="mt-3 flex gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 font-serif text-lg leading-relaxed text-deep text-balance sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep font-serif text-sm font-semibold text-gold-light">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-deep">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-deep shadow-md transition-transform hover:scale-110 sm:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-deep shadow-md transition-transform hover:scale-110 sm:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <div key={i} className="h-1 w-10 overflow-hidden rounded-full bg-sand">
            {i < index && <div className="h-full w-full rounded-full bg-gold" />}
            {i === index && (
              <div
                key={`${index}-${paused}`}
                className="h-full rounded-full bg-gold"
                style={{
                  animation: `story-fill ${AUTOPLAY_MS}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Show testimonial from ${item.name}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full font-serif text-xs font-semibold transition-all ${
              i === index
                ? "scale-110 bg-deep text-gold-light ring-2 ring-gold ring-offset-2 ring-offset-cream"
                : "bg-sand text-deep/60 hover:bg-deep/10"
            }`}
          >
            {item.initials}
          </button>
        ))}
      </div>
    </div>
  );
}
