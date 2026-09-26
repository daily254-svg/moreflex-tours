"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { recommendJourney, type Interest } from "@/lib/journeyData";

const travelers = [
  { id: "solo", label: "Solo" },
  { id: "couple", label: "Couple" },
  { id: "family", label: "Family" },
  { id: "friends", label: "Friends" },
  { id: "corporate", label: "Corporate" },
];

const budgets = [
  { id: "under-50k", label: "Under KES 50K" },
  { id: "50-100k", label: "KES 50K – 100K" },
  { id: "100-300k", label: "KES 100K – 300K" },
  { id: "luxury", label: "Luxury (300K+)" },
];

const interestOptions: { id: Interest; label: string }[] = [
  { id: "wildlife", label: "Wildlife" },
  { id: "beach", label: "Beach" },
  { id: "culture", label: "Culture" },
  { id: "adventure", label: "Adventure" },
  { id: "luxury", label: "Luxury" },
  { id: "photography", label: "Photography" },
];

const personaInterestMap: Record<string, Interest[]> = {
  wildlife: ["wildlife", "photography"],
  beach: ["beach"],
  honeymoon: ["luxury", "beach"],
  family: ["wildlife", "culture"],
  adventure: ["adventure", "photography"],
  business: ["luxury"],
  luxury: ["luxury"],
  budget: ["beach", "wildlife"],
};

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`relative rounded-xl border px-4 py-4 text-sm font-medium transition-colors ${
        active
          ? "border-gold bg-sand text-deep"
          : "border-sand text-muted hover:bg-sand/50"
      }`}
    >
      {children}
      <AnimatePresence>
        {active && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-deep"
          >
            <CheckCircle2 size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

const slideVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export default function TripPlanner() {
  const params = useSearchParams();
  const persona = params.get("persona");
  const destinationParam = params.get("destination");

  const [step, setStep] = useState(1);
  const [travelerType, setTravelerType] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState<Interest[]>(
    persona ? personaInterestMap[persona] ?? [] : []
  );
  const [month, setMonth] = useState("");
  const [result, setResult] = useState<ReturnType<typeof recommendJourney> | null>(
    null
  );

  const toggleInterest = (id: Interest) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    if (step === 1) return !!travelerType;
    if (step === 2) return !!budget;
    if (step === 3) return interests.length > 0;
    if (step === 4) return !!month;
    return true;
  };

  const generate = () => {
    setResult(recommendJourney(interests, budget));
    setStep(5);
  };

  if (step === 5 && result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl"
      >
        <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          <Sparkles size={16} />
          We designed this journey just for you
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-sand bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.img}
            alt={result.destination}
            className="h-64 w-full object-cover"
          />
          <div className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-deep">
              {result.hook}
            </h2>
            <p className="mt-1 text-muted">{result.destination}</p>

            <div className="mt-6 space-y-3">
              {result.itinerary.map((stepText, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-semibold text-deep">
                    {i + 1}
                  </span>
                  <p className="text-sm text-deep">{stepText}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-sand/60 p-4">
              <div>
                <p className="text-xs uppercase text-muted">
                  Estimated Cost
                </p>
                <p className="font-serif font-semibold text-deep">
                  {result.estimate}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-muted">Suggested Stay</p>
                <p className="font-serif font-semibold text-deep">
                  {result.nights} nights
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-deep transition-colors hover:bg-gold-light"
              >
                Request This Itinerary
              </Link>
              <button
                onClick={() => setStep(1)}
                className="rounded-full border border-sand px-7 py-3 text-sm font-semibold text-deep transition-colors hover:bg-sand"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {destinationParam && step === 1 && (
        <p className="mb-4 rounded-lg bg-sand/60 px-4 py-2 text-center text-sm text-deep">
          Building your journey around{" "}
          <span className="font-semibold">{destinationParam.replace("-", " ")}</span>
        </p>
      )}

      <div className="mb-8 flex items-center gap-2">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand">
            <motion.div
              className="h-full rounded-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: s <= step ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-sand bg-white p-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 1 && (
              <>
                <h2 className="font-serif text-xl font-semibold text-deep">
                  Who are you traveling with?
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {travelers.map((t) => (
                    <OptionButton
                      key={t.id}
                      active={travelerType === t.id}
                      onClick={() => setTravelerType(t.id)}
                    >
                      {t.label}
                    </OptionButton>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-serif text-xl font-semibold text-deep">
                  What&rsquo;s your budget per person?
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {budgets.map((b) => (
                    <OptionButton
                      key={b.id}
                      active={budget === b.id}
                      onClick={() => setBudget(b.id)}
                    >
                      {b.label}
                    </OptionButton>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-serif text-xl font-semibold text-deep">
                  What are you most excited about?
                </h2>
                <p className="mt-1 text-sm text-muted">Select all that apply.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {interestOptions.map((i) => (
                    <OptionButton
                      key={i.id}
                      active={interests.includes(i.id)}
                      onClick={() => toggleInterest(i.id)}
                    >
                      {i.label}
                    </OptionButton>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-serif text-xl font-semibold text-deep">
                  When are you thinking of traveling?
                </h2>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="mt-6 w-full rounded-xl border border-sand px-4 py-3 outline-none transition-colors focus:border-gold"
                >
                  <option value="">Select a month</option>
                  {[
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December",
                  ].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className={`flex items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-deep ${
              step === 1 ? "invisible" : ""
            }`}
          >
            <ArrowLeft size={15} />
            Back
          </button>
          {step < 4 ? (
            <motion.button
              disabled={!canProceed()}
              onClick={() => setStep((s) => s + 1)}
              whileHover={canProceed() ? { scale: 1.03 } : {}}
              whileTap={canProceed() ? { scale: 0.97 } : {}}
              className="flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <ArrowRight size={15} />
            </motion.button>
          ) : (
            <motion.button
              disabled={!canProceed()}
              onClick={generate}
              whileHover={canProceed() ? { scale: 1.03 } : {}}
              whileTap={canProceed() ? { scale: 0.97 } : {}}
              className="flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
            >
              Design My Journey
              <Sparkles size={15} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
