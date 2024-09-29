import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MenuItemProps } from "../menuTypes"; // Assuming MenuItemProps is defined correctly
import { dynamicPageRoute } from "@/Manager/navigation";
import { useLocale } from "next-intl";
import { menuCarPlaceHoldImg } from "@/Manager/navigation";
import { FaHeart } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";
import { newItem } from "@/public/image";

export default function ServerCard({
  id,
  image,
  names,
  descriptions,
  price,
  option1,
  option2,
  option3,
}: MenuItemProps) {
  // Get current locale
  const locale = useLocale();

  // Safely handle the display of names and descriptions with fallbacks
  const displayName = names?.[locale] || "Unnamed Item"; // Try multilingual names, fallback to single name
  const displayDescription =
    descriptions?.[locale] || "No description available"; // Multilingual descriptions, fallback to single description

  return (
    <div className={`shadow-black-s ${styles.cardWrapper}`}>
      <Link href={`/${locale}/${dynamicPageRoute}/${id}`}>
        <Image
          src={image || menuCarPlaceHoldImg}
          width={600}
          height={600}
          alt={displayName}
          loading="lazy"
        />
      </Link>
      <div className={styles.cardInfoDiv}>
        <div>
          <h2 className="heading4 color2">
            {displayName.length > 40
              ? `${displayName.substring(0, 40)}...`
              : displayName}
          </h2>
          <h3 className="paragraph white">
            {displayDescription.length > 60
              ? `${displayDescription.substring(0, 60)}...`
              : displayDescription}
          </h3>
        </div>

        <div className={` ${styles.tagsPriceWrap}`}>
          <div className={styles.details}>
            {option2 && (
              <div className={styles.new}>
                <Image
                  className={styles.eachItem}
                  src={newItem}
                  width={50}
                  height={40}
                  alt="svgNew"
                />
              </div>
            )}
            {option3 && (
              <div className={styles.heart}>
                <FaHeart className={styles.eachItem} />
              </div>
            )}
            {option1 && (
              <div className={styles.vegan}>
                <LuVegan className={styles.eachItem} />
              </div>
            )}
          </div>

          <div className={styles.priceWrap}>
            <p className={styles.price}>{price} </p>
            <span>CHF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
/* Group 98 */
/* Rectangle 30 */
