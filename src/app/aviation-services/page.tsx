import SectionListPage from "@/components/SectionListPage";
import { Plane, PlaneTakeoff, Car, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation Services | MoreFlex Travel",
};

export default function AviationServicesPage() {
  return (
    <SectionListPage
      eyebrow="Aviation Services"
      title="Travel Powered by Aviation"
      intro="As a MoreFlex Aviation company, we bring flight and logistics expertise into every journey we plan."
      heroImg="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
      heroAlt="Small aircraft on a runway at sunrise"
      sections={[
        {
          id: "flight-booking",
          title: "Flight Booking",
          desc: "Domestic and international flights, sourced and managed by our travel desk.",
          icon: Plane,
        },
        {
          id: "charter-flights",
          title: "Charter Flights",
          desc: "Private and group charters direct into the Mara, coastal airstrips, and remote reserves.",
          icon: PlaneTakeoff,
        },
        {
          id: "airport-transfers",
          title: "Airport Transfers",
          desc: "Reliable, vetted ground transport from touchdown to your first night's stay.",
          icon: Car,
        },
        {
          id: "vip-meet-greet",
          title: "VIP Meet & Greet",
          desc: "Fast-track arrivals and departures with a dedicated MoreFlex representative.",
          icon: UserCheck,
        },
      ]}
    />
  );
}
