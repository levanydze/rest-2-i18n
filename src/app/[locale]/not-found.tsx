import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

// Use "getTranslations" for server-side translations for metadata
export async function generateMetadata() {
  const t = await getTranslations("errorPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// This component should be client-side since it uses "useTranslations"
export default function NotFoundPage() {
  const t = useTranslations("notFoundPage");

  return (
    <section className="section section-dark">
      <div className="container">
        <div
          style={{
            textAlign: "center",
            margin: "0 auto",
            padding: "50px 20px",
            maxWidth: "600px",
          }}
        >
          <h1 className="heading3">{t("notFoundTitle")}</h1>
          <p className="paragraph">{t("notFoundDescription")}</p>
          <Link href="/" className="button">
            {t("notFoundButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
