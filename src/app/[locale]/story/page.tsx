import Hero from "@/src/components/Hero/Hero";
import ComponentThree from "@/src/components/Home/componentThree/ComponentThree";
import ComponentEight from "@/src/components/Story/ComponentEight/ComponentEight";
import ComponentSeven from "@/src/components/Story/ComponentSeven/ComponentSeven";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("storyPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function StoryPage() {
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <Hero homePage={false} />
      <ComponentSeven />
      <ComponentEight />
      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
      <ComponentThree />
    </div>
  );
}
