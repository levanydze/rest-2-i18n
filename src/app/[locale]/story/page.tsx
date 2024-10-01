import { chefImage, heroStory, chroisant2 } from "@/public/image";
import Hero from "@/src/components/Hero/Hero";
import ComponentThree from "@/src/components/componentThree/ComponentThree";
import ComponentEight from "@/src/components/ComponentEight/ComponentEight";
import ComponentSeven from "@/src/components/ComponentSeven/ComponentSeven";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("storyPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function StoryPage() {
  const t = useTranslations("");
  return (
    <div className="fadeOut">
      <Hero homePage={false} image={heroStory} />
      <ComponentSeven image={chefImage} />
      <ComponentEight image={chroisant2} />
      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title2")}
      />
      <ComponentThree image={heroStory} />
    </div>
  );
}
