"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PawPrint,
  Waves,
  HeartHandshake,
  Users,
  Mountain,
  Briefcase,
  Gem,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { RevealGroup, RevealItem } from "./Reveal";

const personas: { icon: LucideIcon; label: string; slug: string }[] = [
  { icon: PawPrint, label: "Wildlife", slug: "wildlife" },
  { icon: Waves, label: "Beach", slug: "beach" },
  { icon: HeartHandshake, label: "Honeymoon", slug: "honeymoon" },
  { icon: Users, label: "Family", slug: "family" },
  { icon: Mountain, label: "Adventure", slug: "adventure" },
  { icon: Briefcase, label: "Business", slug: "business" },
  { icon: Gem, label: "Luxury", slug: "luxury" },
  { icon: Wallet, label: "Budget", slug: "budget" },
];

export default function DiscoveryFlow() {
  return (
    <section className="relative -mt-8 z-20 px-6 sm:-mt-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl rounded-2xl border border-sand bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-10"
      >
        <div className="mb-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-deep sm:text-3xl">
            What kind of adventure are you looking for?
          </h2>
          <p className="mt-2 text-sm text-muted">
            Tell us your style — we&rsquo;ll design the journey around it.
          </p>
        </div>
        <RevealGroup
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
          stagger={0.06}
        >
          {personas.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/trip-planner?persona=${p.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-sand bg-cream/60 px-3 py-5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:bg-sand hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep/5 text-deep transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold/20 group-hover:text-gold">
                  <p.icon size={20} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-deep">{p.label}</span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </motion.div>
    </section>
  );
}
