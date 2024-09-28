import Image from "next/image";
import styles from "./Hero.module.css";
import { companyName } from "@/Manager/info";
import heroImage from "@//public/images/homePage/hero.jpg";
import { useTranslations } from "next-intl";

export default function Hero({ homePage }: { homePage?: boolean }) {
  const t = useTranslations("homePage.hero");

  return (
    <section
      className={`${styles.heroWrapper} ${!homePage ? styles.noHomepage : ""}`}
    >
      <div className={styles.heroWrapper}>
        <Image
          className={styles.heroImage}
          src={heroImage}
          height={1500}
          width={3500}
          alt={`restraurant hero image ${companyName}`}
          priority
        />
        <div className={styles.overlay}></div>
        <div className={`caption color1 ${styles.textWrapper}`}>
          <div className="section">
            {homePage && (
              <div className="container">
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
    </section>
  );
}
