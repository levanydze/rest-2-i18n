import { useTranslations } from "next-intl";
import image1 from "@/public/images/homePage/comFiveImages/ComponentFive1.jpg";
import image2 from "@/public/images/homePage/comFiveImages/ComponentFive2.jpg";
import image3 from "@/public/images/homePage/comFiveImages/ComponentFive3.jpg";
import image4 from "@/public/images/homePage/comFiveImages/ComponentFive4.jpg";
import { companyName } from "@/Manager/info";
import styles from "./ComponentFour.module.css";
import Image from "next/image";

useTranslations;
export default function ComponentFour() {
  const t = useTranslations("homePage.componentFive");

  return (
    <section className="section no-padding-x no-padding-y bg-color1">
      <div className={styles.wrapper}>
        <h5 className="heading4 color4">{t("title")}</h5>
        <h3 className="heading2 color4">Instagram</h3>
        <div className={styles.imageDiv}>
          <Image
            src={image1}
            alt={companyName + t("title")}
            width={500}
            height={500}
          />
          <Image
            src={image2}
            alt={companyName + t("title")}
            width={500}
            height={500}
          />
          <Image
            src={image3}
            alt={companyName + t("title")}
            width={500}
            height={500}
          />
          <Image
            src={image4}
            alt={companyName + t("title")}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
