import SectionListPage from "@/components/SectionListPage";
import { ListChecks, FileCheck, Newspaper } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Resources | MoreFlex Travel",
};

export default function TravelResourcesPage() {
  return (
    <SectionListPage
      eyebrow="Travel Resources"
      title="Plan With Confidence"
      intro="Guides, tips, and practical information to prepare for your African journey. Full destination guides and blog content launch soon."
      heroImg="https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1920&auto=format&fit=crop"
      heroAlt="Giraffes crossing the plains at golden hour"
      sections={[
        {
          id: "travel-tips",
          title: "Travel Tips",
          desc: "What to pack, when to go, and how to make the most of your trip.",
          icon: ListChecks,
        },
        {
          id: "visa-information",
          title: "Visa Information",
          desc: "Entry requirements, eVisa guidance, and yellow fever certification by country.",
          icon: FileCheck,
        },
        {
          id: "blog",
          title: "Blog",
          desc: "Destination deep-dives, wildlife calendars, and traveler stories from across East Africa.",
          icon: Newspaper,
        },
      ]}
    />
  );
}
