import { companyDomain, companyName } from "@/Manager/info";
import ComponentFour from "@/src/components/componentFour/ComponentFour";
import ComponentSex from "@/src/components/componentSex/ComponentSex";
import ComponentThree from "@/src/components/componentThree/ComponentThree";
import ComponentTwo from "@/src/components/componentTwo/ComponentTwo";
import Hero from "@/src/components/Hero/Hero";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("homePage.metadata");
  return {
    metadataBase: new URL(companyDomain),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: companyName,
      description: t("description"),
      url: companyDomain,
      images: [
        {
          // url: "@/public/images/opengraph-image.jpg", MUST
          width: 800,
          height: 600,
          alt: `${companyName} ${companyDomain}`,
        },
      ],
    },
  };
}

export default async function Home() {
  const t = await getTranslations("homePage");

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
