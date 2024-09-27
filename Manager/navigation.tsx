export const supportedLocales = ["en", "fr", "de", "it"];
export const defaultLocale = "en";
export const dynamicPageRoute = "menu"; // [slug]
export const fireBaseRoute = "chachaab"; //firebase route
export const menuCarPlaceHoldImg =
  "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true";

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
}

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Home", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "Our Story", url: "/story" },
    { title: "Reservation", url: "/reservation" },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "À propos", url: "/story" },
    { title: "Réservation", url: "/reservation" },
  ],
  de: [
    { title: "Startseite", url: "/" },
    { title: "Speisekarte", url: "/menu" },
    { title: "Über uns", url: "/story" },
    { title: "Reservierung", url: "/reservation" },
  ],
  it: [
    { title: "Home", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "Chi siamo", url: "/story" },
    { title: "Prenotazione", url: "/reservation" },
  ],
};
