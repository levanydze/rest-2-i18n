import { useTranslations } from "next-intl";
import { companyName } from "@/Manager/info";
import styles from "./ComponentFour.module.css";
import Image, { StaticImageData } from "next/image";

useTranslations;
export default function ComponentFour({
  images,
}: {
  images: StaticImageData[];
}) {
  const t = useTranslations("homePage.componentFive");

  return (
    <section className="section no-padding-x no-padding-y bg-color1">
      <div className={styles.wrapper}>
        <h5 className="heading4 color4">{t("title")}</h5>
        <h3 className="heading2 color4">Instagram</h3>
        <div className={styles.imageDiv}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={companyName + t("title")}
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
