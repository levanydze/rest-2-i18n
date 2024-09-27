import Image from "next/image";
import styles from "./ComponentEight.module.css";
import { useTranslations } from "next-intl";
import image from "@/public/images/homePage/ComponentTwo.jpg";

export default function ComponentEight() {
  const t = useTranslations("storyPage.ComponentEight");
  return (
    <section className="section section-dark">
      <div className="container">
        <div className={styles.componentTwoWrapper}>
          <div className={styles.textWrapper}>
            <h2 className="heading2 color2">{t("title")}</h2>
            <p className="paragraph white">{t("text")}</p>
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
