import { MetadataRoute } from "next";
import { companyDomain } from "@/Manager/info";
import { supportedLocales } from "@/Manager/navigation"; // Import the supported languages

export default function robots(): MetadataRoute.Robots {
  // Generate sitemaps for each supported language
  const sitemaps = supportedLocales.map(
    (locale) => `${companyDomain}/${locale}/sitemap.xml`
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // Allow everything unless explicitly disallowed
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: sitemaps, // List of sitemaps for different languages
  };
}
