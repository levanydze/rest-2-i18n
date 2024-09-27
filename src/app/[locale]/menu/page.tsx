import Menu from "./menuComponents/menu";
import { Metadata } from "next";
import Hero from "@/src/components/Hero/Hero";

// export async function generateMetadata({
//   params,
// }: {
//   params?: { lang?: string };
// }): Promise<Metadata> {
//   const lang = params?.lang || defaultLanguage;
//   return getMetadata("menu", lang);
// }

export const metadata = {
  title: "Menu - My Restaurant",
  description:
    "Discover the delicious dishes offered by My Restaurant, from appetizers to desserts.",
  openGraph: {
    title: "Menu - My Restaurant",
    description:
      "Explore the full menu of My Restaurant with our wide variety of dishes.",
    url: "https://myrestaurant.com/menu",
    images: [
      {
        url: "/images/menu-og-image.jpg", // Image for social media sharing
        width: 800,
        height: 600,
        alt: "Menu image for My Restaurant",
      },
    ],
  },
};

// Dynamic server-side rendering function that accepts params
export default function LangPage() {
  return (
    <div className="fadeOut">
      <Hero homePage={false} />
      <Menu menuTitle="menu" />
    </div>
  );
}
