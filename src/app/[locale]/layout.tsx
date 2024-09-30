import "@/src/app/globals.css";
import { getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

// SEO Metadata
import { companyDomain, companyName } from "@/Manager/info";
export async function generateMetadata() {
  const t = await getTranslations("homePage.metadata");
  return {
    metadataBase: new URL(companyDomain),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    openGraph: {
      title: companyName,
      description: t("description"),
      url: companyDomain,
      images: [
        {
          // url: "@/public/images/opengraph-image.jpg",
          width: 800,
          height: 600,
          alt: companyName + companyDomain,
        },
      ],
    },
  };
}

//fonts
import { Paytone_One, Mulish, Roboto } from "next/font/google";
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font1",
});
const paytone = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

//components

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import LowerFoot from "@/src/components/FooterLow/LowerFoot";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function LangLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body
        className={`${mulish.className} ${roboto.variable} ${paytone.variable}`}
      >
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
          <Header />
          <div>{children}</div>
          <Analytics />
          <Footer />
          <LowerFoot />
        </div>
      </body>
    </html>
  );
}
