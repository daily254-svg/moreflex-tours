import SectionListPage from "@/components/SectionListPage";
import { Compass, Leaf, Users, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MoreFlex Travel",
};

export default function AboutPage() {
  return (
    <SectionListPage
      eyebrow="About Us"
      title="Explore Beyond the Journey"
      intro="MoreFlex Travel is a MoreFlex Aviation company — we simplify travel by connecting people with the beauty, culture, and adventure of Africa through personalized safaris, holidays, and aviation-backed logistics."
      heroImg="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1920&auto=format&fit=crop"
      heroAlt="Golden hour over the Maasai Mara"
      sections={[
        {
          id: "our-story",
          title: "Our Story",
          desc: "Built on the reliability and precision of MoreFlex Aviation, extended into concierge-level travel planning.",
          icon: Compass,
          img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "sustainability",
          title: "Sustainability",
          desc: "We partner with local guides and communities, and support wildlife conservation across the destinations we operate in.",
          icon: Leaf,
          img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=900&auto=format&fit=crop",
        },
        {
          id: "team",
          title: "Meet the Team",
          desc: "Dedicated travel consultants, each with regional specialties and direct WhatsApp access.",
          icon: Users,
        },
        {
          id: "testimonials",
          title: "Testimonials",
          desc: "Real traveler stories from honeymoons, family safaris, and corporate retreats.",
          icon: Quote,
        },
      ]}
    />
  );
}
