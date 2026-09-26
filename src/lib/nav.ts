export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Kenya", href: "/destinations#kenya" },
      { label: "Tanzania", href: "/destinations#tanzania" },
      { label: "Uganda", href: "/destinations#uganda" },
      { label: "Rwanda", href: "/destinations#rwanda" },
      { label: "Zanzibar", href: "/destinations#zanzibar" },
    ],
  },
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      { label: "Wildlife Safaris", href: "/experiences#wildlife-safaris" },
      { label: "Luxury Travel", href: "/experiences#luxury-travel" },
      { label: "Beach Holidays", href: "/experiences#beach-holidays" },
      { label: "Honeymoons", href: "/experiences#honeymoons" },
      { label: "Family Vacations", href: "/experiences#family-vacations" },
      { label: "Adventure Tours", href: "/experiences#adventure-tours" },
      { label: "Corporate Travel", href: "/experiences#corporate-travel" },
    ],
  },
  {
    label: "Aviation Services",
    href: "/aviation-services",
    children: [
      { label: "Flight Booking", href: "/aviation-services#flight-booking" },
      { label: "Charter Flights", href: "/aviation-services#charter-flights" },
      { label: "Airport Transfers", href: "/aviation-services#airport-transfers" },
      { label: "VIP Meet & Greet", href: "/aviation-services#vip-meet-greet" },
    ],
  },
  { label: "Trip Planner", href: "/trip-planner" },
  {
    label: "Travel Resources",
    href: "/travel-resources",
    children: [
      { label: "Destination Guides", href: "/destinations" },
      { label: "Travel Tips", href: "/travel-resources#travel-tips" },
      { label: "Visa Information", href: "/travel-resources#visa-information" },
      { label: "Blog", href: "/travel-resources#blog" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
