import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MenuItemProps } from "../menuTypes"; // Assuming MenuItemProps is defined correctly
import { dynamicPageRoute } from "@/Manager/navigation";
import { useLocale } from "next-intl";
import {menuCarPlaceHoldImg} from "@/Manager/navigation";


export default function ServerCard({
  id,
  image,
  names,
  name, // Fallback single name
  descriptions,
  description, // Fallback single description
  price,
  option1,
  option2,
  option3,
}: MenuItemProps) {
  // Get current locale
  const locale = useLocale();

  // Safely handle the display of names and descriptions with fallbacks
  const displayName = names?.[locale] || name || "Unnamed Item"; // Try multilingual names, fallback to single name
  const displayDescription =
    descriptions?.[locale] || description || "No description available"; // Multilingual descriptions, fallback to single description

  return (
    <div className={styles.cardWrapper}>
      <Link href={`/${locale}/${dynamicPageRoute}/${id}`}>
        <Image
          src={image || menuCarPlaceHoldImg }
          width={600}
          height={600}
          alt={displayName}
          loading="lazy"
        />
      </Link>
      <div className={styles.cardInfoDiv}>
        <h2 className="heading4 color2">{displayName}</h2>
        <h3 className="paragraph font1 textMedium">
          {displayDescription.length > 110
            ? `${displayDescription.substring(0, 110)}...`
            : displayDescription}
        </h3>
        <h6>{price} SEK</h6>
        <div className={styles.details}>
          {option1 && <p className={`menuTags ${styles.vegan}`}>VEGAN</p>}
          {option2 && <p className={`menuTags ${styles.newItem}`}>NEW</p>}
          {option3 && <p className={`menuTags ${styles.favorite}`}>FAVORITE</p>}
        </div>
      </div>
    </div>
  );
}
