import { Suspense } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TripPlanner from "@/components/TripPlanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Planner | MoreFlex Travel",
  description:
    "Answer a few questions and let MoreFlex Travel design your personalized African journey.",
};

export default function TripPlannerPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 bg-cream pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Journey Designer
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-deep">
            Let&rsquo;s Design Your Journey
          </h1>
          <p className="mt-3 text-muted">
            A few quick questions, and we&rsquo;ll recommend an experience
            built around how you actually want to travel.
          </p>
        </div>

        <div className="mx-auto mt-12 px-6">
          <Suspense fallback={null}>
            <TripPlanner />
          </Suspense>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
