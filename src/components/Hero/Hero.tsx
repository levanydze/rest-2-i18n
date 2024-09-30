import Image from "next/image";
import styles from "./Hero.module.css";
import { companyName } from "@/Manager/info";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { logo } from "@/public/image";
import Link from "next/link";

export default function Hero({
  homePage,
  image,
}: {
  homePage: boolean;
  image: StaticImageData;
}) {
  const t = useTranslations("homePage.hero");

  return (
    <section
      className={`${styles.heroWrapper} ${!homePage ? styles.noHomepage : ""}`}
    >
      <div className={styles.heroWrapper}>
        <Image
          className={styles.heroImage}
          src={image}
          height={1500}
          width={3500}
          alt={`restraurant hero image ${companyName}`}
          priority
        />
        <div className={styles.overlay}></div>
        <div className={`caption color1 ${styles.textWrapper}`}>
          <div className={`section container`}>
            <div className={styles.innerWrapper}>
              <Link href="/">
                <Image
                  src={logo}
                  alt={`${companyName} logo`}
                  width={50}
                  height={30}
                />
              </Link>
              {homePage && (
                <div className={styles.lowerDiv}>
                  <p>
                    <span>{t("days")}</span>
                    <br />
                    <span>{t("hours")}</span>
                  </p>
                  <p>
                    <span>{t("address1")}</span>
                    <br />
                    <span>{t("address2")}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
