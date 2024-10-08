import ComponentNine from "@/src/components/ComponentNine/ComponentNine";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import Hero from "@/src/components/Hero/Hero";
import { heroReservation } from "@/public/image";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("reservationPage.metadata");
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
      <Hero homePage={false} image={heroReservation} />
      <ComponentNine />
      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
