export type Interest =
  | "wildlife"
  | "beach"
  | "culture"
  | "adventure"
  | "luxury"
  | "photography";

export type Journey = {
  slug: string;
  destination: string;
  hook: string;
  matches: Interest[];
  minBudget: "under-50k" | "50-100k" | "100-300k" | "luxury";
  nights: number;
  img: string;
  itinerary: string[];
  estimate: string;
};

export const journeys: Journey[] = [
  {
    slug: "maasai-mara",
    destination: "Maasai Mara, Kenya",
    hook: "Wake Up to Lions",
    matches: ["wildlife", "photography", "adventure"],
    minBudget: "50-100k",
    nights: 3,
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=900&auto=format&fit=crop",
    itinerary: [
      "Fly-in from Nairobi + evening game drive",
      "Full-day Big Five safari with bush breakfast",
      "Sunrise hot air balloon + Maasai village visit",
      "Final game drive + departure",
    ],
    estimate: "KES 85,000 – 140,000 per person",
  },
  {
    slug: "amboseli",
    destination: "Amboseli, Kenya",
    hook: "Breakfast with Elephants Beneath Kilimanjaro",
    matches: ["wildlife", "photography", "luxury"],
    minBudget: "50-100k",
    nights: 2,
    img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=900&auto=format&fit=crop",
    itinerary: [
      "Road transfer from Nairobi + afternoon game drive",
      "Full day with Kilimanjaro views and elephant herds",
      "Sunrise photography drive + departure",
    ],
    estimate: "KES 60,000 – 110,000 per person",
  },
  {
    slug: "diani",
    destination: "Diani Beach, Kenya",
    hook: "Escape to Paradise",
    matches: ["beach", "luxury"],
    minBudget: "under-50k",
    nights: 4,
    img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=900&auto=format&fit=crop",
    itinerary: [
      "Arrival + beachfront relaxation",
      "Dolphin excursion & snorkeling at Kisite-Mpunguti",
      "Free day: spa, water sports, or a Swahili cooking class",
      "Sunset dhow cruise + departure",
    ],
    estimate: "KES 35,000 – 90,000 per person",
  },
  {
    slug: "zanzibar",
    destination: "Zanzibar, Tanzania",
    hook: "Where the Ocean Meets Serenity",
    matches: ["beach", "culture", "luxury"],
    minBudget: "100-300k",
    nights: 4,
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=900&auto=format&fit=crop",
    itinerary: [
      "Arrival + Stone Town cultural walk",
      "Spice farm tour + local lunch",
      "Beach day in Nungwi or Kendwa",
      "Sunset cruise + departure",
    ],
    estimate: "KES 120,000 – 220,000 per person",
  },
];

export function recommendJourney(interests: Interest[], budget: string) {
  const scored = journeys
    .map((j) => ({
      journey: j,
      score: j.matches.filter((m) => interests.includes(m)).length,
    }))
    .sort((a, b) => b.score - a.score);

  const withBudget = scored.find(
    (s) => s.journey.minBudget === budget && s.score > 0
  );

  return withBudget?.journey ?? scored[0]?.journey ?? journeys[0];
}
