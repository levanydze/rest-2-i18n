import ComponentFour from "@/src/components/componentFour/ComponentFour";
import ComponentSix from "@/src/components/componentSix/ComponentSix";
import ComponentThree from "@/src/components/componentThree/ComponentThree";
import ComponentTwo from "@/src/components/componentTwo/ComponentTwo";
import Hero from "@/src/components/Hero/Hero";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { useTranslations } from "next-intl";

import {
  heroMain,
  croisant,
  pizza,
  pizza2,
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  pizza4,
} from "@/public/image";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero homePage={true} image={heroMain} />
      <ComponentTwo image={pizza} />
      <Testimonials
        title1={t("testimonials.title1")}
        title2={t("testimonials.title2")}
      />
      <ComponentThree image={pizza4} />
      <ComponentSix image={pizza2} />
      <ComponentFour
        images={[instagram1, instagram2, instagram4, instagram3]}
      />
    </div>
  );
}
