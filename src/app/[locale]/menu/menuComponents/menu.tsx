import React from "react";
import styles from "./menu.module.css";
import ServerCard from "./card/ServerCard";
import { fetchCategories } from "../fetchingData";
import { useLocale } from "next-intl";
import { MenuItemProps } from "./menuTypes";
import { defaultLocale } from "@/Manager/navigation";
import { getTranslations } from "next-intl/server";

export const revalidate = 86400; // Revalidate once a day

export default async function Menu() {
  const locale = useLocale(); // Get current locale
  const categories = await fetchCategories(); // Fetch categories
  const t = await getTranslations("menuPage.menu");

  if (!categories) {
    return (
      <div>
        <p>Error fetching menu data or categories missing</p>
      </div>
    );
  }

  // Sort categories based on priority
  const sortedCategories = categories.sort((a, b) => a.priority - b.priority);

  return (
    <div className={styles.cardWrapper}>
      <section className="section section-medium">
        <div className={` container ${styles.container}`}>
          {sortedCategories.map((category) => {
            // Access category translations for the current locale, fallback to 'en'
            const categoryName =
              category.translations?.[locale] ||
              category.translations?.[defaultLocale] ||
              "Unnamed Category";

            // Sort items by their priority before rendering them
            const sortedItems = Object.values(category.items).sort(
              (a: MenuItemProps, b: MenuItemProps) => a.priority - b.priority
            );

            return (
              <div key={category.id} className={styles.menuWrapper}>
                <div className={styles.menuTitles}>
                  <h3 className="font2 color4 heading2">{categoryName}</h3>
                  <span className="heading3 white">{t("underCategory")}</span>
                </div>
                <div className={styles.itemContainer}>
                  {sortedItems.map((item: MenuItemProps) => (
                    <ServerCard
                      key={item.id} // Remove the curly braces here, it's an actual value
                      id={item.id}
                      image={item.image}
                      names={item.names}
                      descriptions={item.descriptions}
                      price={item.price}
                      option1={item.option1 || false}
                      option2={item.option2 || false}
                      option3={item.option3 || false}
                      priority={item.priority}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
