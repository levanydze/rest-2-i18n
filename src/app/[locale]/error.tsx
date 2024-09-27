"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Static metadata
export const generateMetadata = async () => {
  const t = useTranslations("errorPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
};

export default function ErrorPage() {
  const t = useTranslations("errorPage");

  return (
    <section className={`section section-dark`}>
      <div className="container">
        <div
          style={{
            textAlign: "center",
            margin: "0 auto",
            padding: "50px 20px",
            maxWidth: "600px",
          }}
        >
          <h1 className="heading2">404</h1>
          <h2 className="heading3">{t("errorTitle")}</h2>
          <p className="paragraph">{t("errorDescription")}</p>
          <Link href="/" className={`button`}>
            {t("errorButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
