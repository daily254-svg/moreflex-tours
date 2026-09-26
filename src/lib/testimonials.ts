export type Testimonial = {
  name: string;
  initials: string;
  location: string;
  trip: string;
  rating: number;
  quote: string;
  img: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah & James",
    initials: "SJ",
    location: "London, UK",
    trip: "Honeymoon in Amboseli",
    rating: 5,
    quote:
      "We celebrated our honeymoon under the stars in Amboseli. MoreFlex handled our flights, the lodge, and even arranged a surprise dinner in the bush. It felt like they were traveling with us, not just for us.",
    img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kevin Otieno",
    initials: "KO",
    location: "Corporate Travel, Nairobi",
    trip: "40-Person Corporate Retreat",
    rating: 5,
    quote:
      "Booked a corporate retreat for 40 people — flights, venue, transfers, everything coordinated from one point of contact. No local operator has offered us that before.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "The Mwangi Family",
    initials: "MF",
    location: "Nairobi, Kenya",
    trip: "Family Safari, Maasai Mara",
    rating: 5,
    quote:
      "Our kids saw their first lion pride on day one. The lodge was perfect for young children, and our guide made every game drive feel like an adventure movie.",
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Grace Wanjiru",
    initials: "GW",
    location: "Diaspora, returning from Atlanta",
    trip: "December Homecoming, Diani",
    rating: 5,
    quote:
      "I come home every December, and MoreFlex has made it effortless — airport pickup, family visits, and a beach week in Diani sorted before I even land.",
    img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Daniel Kiptoo",
    initials: "DK",
    location: "Solo Traveler, Berlin",
    trip: "Hot Air Balloon Safari",
    rating: 5,
    quote:
      "Floating over the Mara at sunrise, watching wildebeest herds from above — I've traveled a lot, and nothing compares. MoreFlex made a solo trip feel completely taken care of.",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Amara & Noah",
    initials: "AN",
    location: "Cape Town, South Africa",
    trip: "Luxury Escape, Zanzibar",
    rating: 5,
    quote:
      "Private villa, a sunset dhow cruise, spice tours — every detail was curated. This wasn't a package holiday, it felt entirely our own.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
  },
];
