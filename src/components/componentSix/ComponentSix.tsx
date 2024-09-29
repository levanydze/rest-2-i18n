import Image, { StaticImageData } from "next/image";
import styles from "./ComponentSix.module.css";
import { useTranslations } from "next-intl";
import ReservationContactForm from "./ReservationContactForm/ReservationContactForm";

export default function ComponentSix({ image }: { image: StaticImageData }) {
  const t = useTranslations("homePage.componentSix");
  return (
    <section className="section section-light">
      <div className="container">
        <div className={styles.threeWrapper}>
          <div className={styles.firstDiv}>
            <Image
              className="shadow-black-m"
              src={image}
              alt=""
              height={400}
              width={400}
            />
            <div className={styles.emptyDiv}></div>
          </div>

          <div className={styles.secondDiv}>
            <div className={styles.titleDiv}>
              <h3 className="heading2 color4">{t("title")}</h3>
            </div>
            <ReservationContactForm
              name={t("name")}
              email={t("email")}
              phone={t("phone")}
              date={t("date")}
              time={t("time")}
              quantity={t("quantity")}
              message={t("message")}
              send={t("send")}
              thankYou={t("thankYou")}
              comfirmation={t("comfirmation")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
