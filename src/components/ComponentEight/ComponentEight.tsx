import Image, { StaticImageData } from "next/image";
import styles from "./ComponentEight.module.css";
import { useTranslations } from "next-intl";

export default function ComponentEight({ image }: { image: StaticImageData }) {
  const t = useTranslations("storyPage.componentEight");
  return (
    <section className="section section-dark">
      <div className="container">
        <div className={styles.componentTwoWrapper}>
          <div className={styles.textWrapper}>
            <h2 className="heading2 color2">{t("title")}</h2>
            <p className="paragraph gray3">{t("text")}</p>
          </div>
          <div>
            <Image
              className="shadow-black-l"
              src={image}
              height={800}
              width={800}
              alt="not sure yet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
