import Image from "next/image";
import styles from "./ComponentNine.module.css";
import image from "@/public/images/storyPage/sushiChef.png";
import svg from "@/public/assets/svg/sushiChefSvg.png"; // If this is a png, keep it as is
import { useTranslations } from "next-intl";
import ReservationContactForm from "@/src/components/Reservation/ComponentNine/ReservationContactForm/ReservationContactForm";

export default function ComponentNine() {
  const t = useTranslations("");
  return (
    <section className="section section-medium no-padding-x">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.svgWrapper}>
              <Image src={svg} alt=""></Image>
            </div>
            <div className={styles.titlesWrapper}>
              <h2 className="heading2 color4">
                {t("reservationPage.componentNine.title")}
              </h2>
            </div>
            <div className={styles.lowerTextWrap}>
              <p className="paragraph color2">
                {t("reservationPage.componentNine.text")}
              </p>
            </div>
          </div>
          <div className={styles.chefContainer}>
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
