import SectionListPage from "@/components/SectionListPage";
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
      sections={[
        { id: "flight-booking", title: "Flight Booking", desc: "Domestic and international flights, sourced and managed by our travel desk." },
        { id: "charter-flights", title: "Charter Flights", desc: "Private and group charters direct into the Mara, coastal airstrips, and remote reserves." },
        { id: "airport-transfers", title: "Airport Transfers", desc: "Reliable, vetted ground transport from touchdown to your first night's stay." },
        { id: "vip-meet-greet", title: "VIP Meet & Greet", desc: "Fast-track arrivals and departures with a dedicated MoreFlex representative." },
      ]}
    />
  );
}
