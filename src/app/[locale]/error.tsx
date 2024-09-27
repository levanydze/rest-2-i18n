"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Static metadata
export const generateMetadata = async () => {
  return {
    title: "404 - Not Found",
    description: "The page you are looking for does not exist.",
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
