import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import DiscoveryFlow from "@/components/DiscoveryFlow";
import Destinations from "@/components/Destinations";
import Aviation from "@/components/Aviation";
import Trust from "@/components/Trust";
import QuoteCta from "@/components/QuoteCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <DiscoveryFlow />
        <Destinations />
        <Aviation />
        <Trust />
        <QuoteCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
