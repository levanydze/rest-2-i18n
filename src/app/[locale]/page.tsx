import ComponentFour from "@/src/components/componentFour/ComponentFour";
import ComponentSex from "@/src/components/componentSex/ComponentSex";
import ComponentThree from "@/src/components/componentThree/ComponentThree";

import ComponentTwo from "@/src/components/componentTwo/ComponentTwo";
import Hero from "@/src/components/Hero/Hero";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { useTranslations } from "next-intl";

// export const metadata = {
//   title: "Home - My Website",
//   description:
//     "Welcome to the homepage of My Website, the best place to find amazing content.",
//   openGraph: {
//     title: "My Website Homepage",
//     description: "This is the homepage of My Website.",
//     url: "https://mywebsite.com",
//     images: [
//       {
//         url: "/images/og-image.jpg",
//         width: 800,
//         height: 600,
//         alt: "Og Image Alt",
//       },
//     ],
//   },
// };

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentTwo />
      <Testimonials
        title1={t("testimonials.title1")}
        title2={t("testimonials.title2")}
      />
      <ComponentThree />
      <ComponentSex />
      <ComponentFour />
    </div>
  );
}
