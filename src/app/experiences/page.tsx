import SectionListPage from "@/components/SectionListPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences | MoreFlex Travel",
};

export default function ExperiencesPage() {
  return (
    <SectionListPage
      eyebrow="Experiences"
      title="Every Traveler, One Journey Designer"
      intro="From safaris to boardrooms, we design the experience around who you're traveling with."
      sections={[
        { id: "wildlife-safaris", title: "Wildlife Safaris", desc: "Big Five safaris, fly-in safaris, and Great Migration tours across Kenya and beyond." },
        { id: "luxury-travel", title: "Luxury Travel", desc: "Private guides, boutique lodges, and bespoke itineraries for discerning travelers." },
        { id: "beach-holidays", title: "Beach Holidays", desc: "Diani, Watamu, Zanzibar, and Mombasa — sun, sand, and the Indian Ocean." },
        { id: "honeymoons", title: "Honeymoons", desc: "Romantic escapes combining safari, beach, and private candlelit dinners under the stars." },
        { id: "family-vacations", title: "Family Vacations", desc: "Kid-friendly lodges, wildlife education, and itineraries paced for every age." },
        { id: "adventure-tours", title: "Adventure Tours", desc: "Mount Kenya hikes, hot air balloons, cycling, and diving." },
        { id: "corporate-travel", title: "Corporate Travel", desc: "Conferences, retreats, and team-building — flights, venues, and logistics handled end to end." },
      ]}
    />
  );
}
