import { companyDomain } from "@/Manager/info";
import { fetchCategoriesIfUpdated } from "@/src/app/[locale]/menu/fetchingData";
import {
  fireBaseRoute,
  navItems,
  supportedLocales,
} from "@/Manager/navigation";

export default async function sitemap() {
  try {
    const categories = await fetchCategoriesIfUpdated(fireBaseRoute);
    const slugUrls =
      categories?.flatMap((category) => {
        if (!category.items) {
          return []; // No items in this category
        }
        return Object.values(category.items).flatMap((item) => {
          return supportedLocales.map((locale) => ({
            url: `${companyDomain}/${locale}/${fireBaseRoute}/${item.id}`, // Generate URL for each item
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.7,
          }));
        });
      }) || [];

    const navUrls = supportedLocales.flatMap((locale) => {
      return (
        navItems[locale]?.map((navItem) => ({
          url: `${companyDomain}/${locale}${navItem.url}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.6,
        })) || []
      );
    });

    const allUrls = [...slugUrls, ...navUrls];

    return allUrls;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
