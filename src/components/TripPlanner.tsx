"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
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
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold">
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
              {result.itinerary.map((step, i) => (
                <div key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-semibold text-deep">
                    {i + 1}
                  </span>
                  <p className="text-sm text-deep">{step}</p>
                </div>
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
      </div>
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
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full ${
              s <= step ? "bg-gold" : "bg-sand"
            }`}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-sand bg-white p-8">
        {step === 1 && (
          <>
            <h2 className="font-serif text-xl font-semibold text-deep">
              Who are you traveling with?
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {travelers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTravelerType(t.id)}
                  className={`rounded-xl border px-4 py-4 text-sm font-medium transition-colors ${
                    travelerType === t.id
                      ? "border-gold bg-sand text-deep"
                      : "border-sand text-muted hover:bg-sand/50"
                  }`}
                >
                  {t.label}
                </button>
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
                <button
                  key={b.id}
                  onClick={() => setBudget(b.id)}
                  className={`rounded-xl border px-4 py-4 text-sm font-medium transition-colors ${
                    budget === b.id
                      ? "border-gold bg-sand text-deep"
                      : "border-sand text-muted hover:bg-sand/50"
                  }`}
                >
                  {b.label}
                </button>
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
                <button
                  key={i.id}
                  onClick={() => toggleInterest(i.id)}
                  className={`rounded-xl border px-4 py-4 text-sm font-medium transition-colors ${
                    interests.includes(i.id)
                      ? "border-gold bg-sand text-deep"
                      : "border-sand text-muted hover:bg-sand/50"
                  }`}
                >
                  {i.label}
                </button>
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
              className="mt-6 w-full rounded-xl border border-sand px-4 py-3 outline-none focus:border-gold"
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

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className={`text-sm font-semibold text-muted ${step === 1 ? "invisible" : ""}`}
          >
            ← Back
          </button>
          {step < 4 ? (
            <button
              disabled={!canProceed()}
              onClick={() => setStep((s) => s + 1)}
              className="rounded-full bg-gold px-7 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          ) : (
            <button
              disabled={!canProceed()}
              onClick={generate}
              className="rounded-full bg-gold px-7 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
            >
              Design My Journey
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
