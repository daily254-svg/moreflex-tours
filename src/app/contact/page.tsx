import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MoreFlex Travel",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-deep">
              Meet Your Travel Expert
            </h1>
            <p className="mt-3 max-w-md text-muted">
              Tell us about your trip and a dedicated MoreFlex consultant
              will respond within one hour during business hours.
            </p>

            <div className="mt-8 space-y-3 text-sm text-deep">
              <p>
                <span className="font-semibold">Phone / WhatsApp:</span>{" "}
                +254 700 000 000
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                hello@moreflextravel.com
              </p>
              <p>
                <span className="font-semibold">Office:</span> Nairobi, Kenya
              </p>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
