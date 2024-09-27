import Hero from "@/src/components/Hero/Hero";
import ComponentNine from "@/src/components/Reservation/ComponentNine/ComponentNine";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("reservationPage.metadata");
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
      <ComponentNine />
      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
