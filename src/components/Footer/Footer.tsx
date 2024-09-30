import styles from "./Footer.module.css";
import { navItems } from "@/Manager/navigation";
import { NavItemProps } from "@/Manager/navigation";
import Link from "next/link";
import {
  email,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  phoneNumber,
  companyName,
} from "@/Manager/info";
import Image from "next/image";
import { useLocale } from "next-intl";
import { logoDark } from "@/public/image";
import LowerFoot from "../FooterLow/LowerFoot";

export default function Footer() {
  // Get the navigation items for the current language, default to English
  const locale = useLocale(); // Get the current locale
  const items: NavItemProps[] = navItems[locale]; // Get items for the current locale
  const socialMediaLinks = [
    { name: "Facebook", url: facebookUrl },
    { name: "Instagram", url: instagramUrl },
    { name: "LinkedIn", url: linkedinUrl },
  ];

  return (
    <footer className="section section-light">
      <div className="container">
        <div className={styles.logoDiv}>
          <Image src={logoDark} alt={companyName} width={200} height={80} />
        </div>
        <div className={`heading4 color4 ${styles.middleDiv}`}>
          {/* Navigation */}
          <ul className={styles.navigationDiv}>
            {items.map((item: NavItemProps) => {
              const localizedUrl =
                item.url === "/" ? `/${locale}` : `/${locale}${item.url}`;
              return (
                <li key={localizedUrl}>
                  <Link href={localizedUrl}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          {/* Social Media Links */}
          <ul className={styles.socialMediaDiv}>
            {socialMediaLinks.map(({ name, url }) => (
              <li key={name}>
                <Link target="_blank" href={url}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.BottomDiv}>
          <div className={`paragraph ${styles.contactInfo}`}>
            <Link href={`mailto:${email}`}>{email}</Link>
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </div>

          <h3 className="heading3 color4">© 2024</h3>
        </div>
      </div>
    </footer>
  );
}
