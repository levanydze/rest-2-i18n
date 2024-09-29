import { heroMenu } from "@/public/image";
import Menu from "./menuComponents/menu";
import Hero from "@/src/components/Hero/Hero";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("menuPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function MenuPage() {
  return (
    <div className="fadeOut">
      <Hero homePage={false} image={heroMenu} />
      <Menu />
    </div>
  );
}
