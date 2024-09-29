import Image, { StaticImageData } from "next/image";
import styles from "./ComponentSeven.module.css";
import { useTranslations } from "next-intl";

export default function ComponentSeven({ image }: { image: StaticImageData }) {
  const t = useTranslations("storyPage.componentSeven");

  return (
    <section className="section section-medium noPadding-x ">
      <div className="relative">
        <div className={styles.background}></div>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.titlesWrapper}>
                <h2 className="heading2 color4">{t("title")}</h2>
                <p className="heading3 color2">{t("caption")}</p>
              </div>
              <div className={styles.lowerTextWrap}>
                <p className="paragraph gray3">{t("text")}</p>
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
