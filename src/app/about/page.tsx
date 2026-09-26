import SectionListPage from "@/components/SectionListPage";
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
      sections={[
        { id: "our-story", title: "Our Story", desc: "Built on the reliability and precision of MoreFlex Aviation, extended into concierge-level travel planning." },
        { id: "sustainability", title: "Sustainability", desc: "We partner with local guides and communities, and support wildlife conservation across the destinations we operate in." },
        { id: "team", title: "Meet the Team", desc: "Dedicated travel consultants, each with regional specialties and direct WhatsApp access." },
        { id: "testimonials", title: "Testimonials", desc: "Real traveler stories from honeymoons, family safaris, and corporate retreats." },
      ]}
    />
  );
}
