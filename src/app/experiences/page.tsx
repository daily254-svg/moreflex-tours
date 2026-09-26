import SectionListPage from "@/components/SectionListPage";
import { PawPrint, Gem, Waves, HeartHandshake, Users, Mountain, Briefcase } from "lucide-react";
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
      heroImg="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920&auto=format&fit=crop"
      heroAlt="Lions resting in the Maasai Mara"
      sections={[
        {
          id: "wildlife-safaris",
          title: "Wildlife Safaris",
          desc: "Big Five safaris, fly-in safaris, and Great Migration tours across Kenya and beyond.",
          icon: PawPrint,
          img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "luxury-travel",
          title: "Luxury Travel",
          desc: "Private guides, boutique lodges, and bespoke itineraries for discerning travelers.",
          icon: Gem,
          img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "beach-holidays",
          title: "Beach Holidays",
          desc: "Diani, Watamu, Zanzibar, and Mombasa — sun, sand, and the Indian Ocean.",
          icon: Waves,
          img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "honeymoons",
          title: "Honeymoons",
          desc: "Romantic escapes combining safari, beach, and private candlelit dinners under the stars.",
          icon: HeartHandshake,
          img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "family-vacations",
          title: "Family Vacations",
          desc: "Kid-friendly lodges, wildlife education, and itineraries paced for every age.",
          icon: Users,
          img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "adventure-tours",
          title: "Adventure Tours",
          desc: "Mount Kenya hikes, hot air balloons, cycling, and diving.",
          icon: Mountain,
          img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "corporate-travel",
          title: "Corporate Travel",
          desc: "Conferences, retreats, and team-building — flights, venues, and logistics handled end to end.",
          icon: Briefcase,
          img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop",
        },
      ]}
    />
  );
}
