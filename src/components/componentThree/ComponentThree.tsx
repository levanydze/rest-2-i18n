import Image from "next/image";
import styles from "./ComponentThree.module.css";
import image from "@/public/images/homePage/ComponentThree.jpg";
import { useTranslations } from "next-intl";

export default function ComponentThree() {
  const t = useTranslations("homePage.componentThree");

  return (
    <section className="section section-dark no-padding-x no-padding-y">
      <div className="">
        <div className={` ${styles.componentThreeWrapper}`}>
          <div>
            <Image
              src={image}
              height={1000}
              width={1000}
              alt="not sure yet"
            ></Image>
          </div>
          <div className={styles.textWrapper}>
            <h2 className="heading2 color2">{t("title")}</h2>
            <p className="paragraph white">{t("text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
