import { Phone, Mail, MapPin } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MoreFlex Travel",
};

const contactDetails = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+254 700 000 000" },
  { icon: Mail, label: "Email", value: "hello@moreflextravel.com" },
  { icon: MapPin, label: "Office", value: "Nairobi, Kenya" },
];

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <section className="relative flex min-h-[280px] items-end sm:min-h-[38vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1920&auto=format&fit=crop"
            alt="Beach at golden hour on the Kenyan coast"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" />
          <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              Contact
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-cream">
              Meet Your Travel Expert
            </h1>
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <p className="max-w-md text-muted">
              Tell us about your trip and a dedicated MoreFlex consultant
              will respond within one hour during business hours.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <c.icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">
                      {c.label}
                    </p>
                    <p className="font-medium text-deep">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
