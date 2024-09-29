import Image from "next/image";
import styles from "./ComponentNine.module.css";
import { useTranslations } from "next-intl";
import ReservationContactForm from "@/src/components/ComponentNine/ReservationContactForm/ReservationContactForm";

export default function ComponentNine() {
  const t = useTranslations("");
  return (
    <section className={` section noPadding-x section-medium  `}>
      <div className="relative">
        <div className={styles.background}></div>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.titlesWrapper}>
                <h2 className="heading2 color4">
                  {t("reservationPage.componentNine.title")}
                </h2>
              </div>
              <div className={styles.lowerTextWrap}>
                <p className="paragraph gray3">
                  {t("reservationPage.componentNine.text")}
                </p>
              </div>
            </div>
            <ReservationContactForm
              name={t("homePage.componentSix.name")}
              email={t("homePage.componentSix.email")}
              phone={t("homePage.componentSix.phone")}
              date={t("homePage.componentSix.date")}
              time={t("homePage.componentSix.time")}
              quantity={t("homePage.componentSix.quantity")}
              message={t("homePage.componentSix.message")}
              send={t("homePage.componentSix.send")}
              thankYou={t("homePage.componentSix.thankYou")}
              comfirmation={t("homePage.componentSix.comfirmation")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
