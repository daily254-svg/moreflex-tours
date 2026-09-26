import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type Section = { id: string; title: string; desc: string };

export default function SectionListPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-deep">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">{intro}</p>
        </section>

        <div className="mx-auto max-w-7xl grid gap-6 px-6 pb-24 sm:grid-cols-2 lg:px-10">
          {sections.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="rounded-2xl border border-sand bg-white p-8"
            >
              <h2 className="font-serif text-xl font-semibold text-deep">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
