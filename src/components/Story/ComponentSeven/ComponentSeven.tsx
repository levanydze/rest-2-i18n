import Image from "next/image";
import styles from "./ComponentSeven.module.css";
import image from "@/public/images/storyPage/sushiChef.png";
import svg from "@/public/assets/svg/56degree cut.svg";
import { useTranslations } from "next-intl";

export default function ComponentSeven() {
  const t = useTranslations("storyPage.componentSeven");

  return (
    <section className="section section-medium ">
      <div className={styles.svgWrapper}>
        <div className="container">
          <Image className={styles.svg} src={svg} alt="background SVG" />
          <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.titlesWrapper}>
                <h2 className="heading2 color4">{t("title")}</h2>
                <p className="heading4 white">{t("caption")}</p>
              </div>
              <div className={styles.lowerTextWrap}>
                <p className="paragraph color2">{t("text")}</p>
              </div>
            </div>
            <div className={styles.chefContainer}>
              <Image
                className={styles.chefPng}
                src={image}
                width={500}
                height={700}
                alt="sushi chef"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
