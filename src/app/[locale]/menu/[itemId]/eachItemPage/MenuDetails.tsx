import styles from "./MenuDetails.module.css";
import Image from "next/image";
import NotFoundComponent from "@/src/components/Error-NotFound/notFound/NotFoundComponent";
import { useLocale } from "next-intl";
import { menuCarPlaceHoldImg } from "@/Manager/navigation";

interface MenuDetailsProps {
  item: {
    id: string;
    names: { [key: string]: string };
    descriptions: { [key: string]: string };
    price: number;
    image?: string;
    option1?: boolean;
    option2?: boolean;
    option3?: boolean;
  };
}

export default function MenuDetails({ item }: MenuDetailsProps) {
  const locale = useLocale(); // Use locale directly from next-intl

  if (!item) {
    return <NotFoundComponent />;
  }

  const itemName = item.names[locale] || item.names["en"] || "Unnamed Item";
  const itemDescription =
    item.descriptions[locale] ||
    item.descriptions["en"] ||
    "No description available";

  return (
    <article className={styles.menuDetailsWrapper}>
      <section className={styles.imgWrapper}>
        <Image
          priority
          src={item.image || menuCarPlaceHoldImg}
          alt={itemName}
          height={1000}
          width={1000}
          className={styles.image}
        />
      </section>
      <section className={styles.infoWrapper}>
        <h2 className={`heading3 font1 color1 ${styles.title}`}>{itemName}</h2>
        <p className={`paragraph ${styles.description}`}>{itemDescription}</p>

        <div className={styles.specifications}>
          {item.option1 && (
            <p className={`${styles.tag} ${styles.vegan}`}>VEGAN</p>
          )}
          {item.option2 && (
            <p className={`${styles.tag} ${styles.newItem}`}>NEW</p>
          )}
          {item.option3 && (
            <p className={`${styles.tag} ${styles.favorite}`}>FAVORITE</p>
          )}
        </div>

        <div className={styles.priceWrapper}>
          <h4 className={`font1 white heading4 ${styles.price}`}>
            Price: {item.price} SEK
          </h4>
        </div>
      </section>
    </article>
  );
}
