import createMiddleware from "next-intl/middleware";
import { supportedLocales, defaultLocale } from "@/Manager/navigation";

export default createMiddleware({
  locales: supportedLocales,
  defaultLocale: defaultLocale,
});

export const config = {
  matcher: ["/", "/(de|en|fr|it)/:path*"],
};

//must fix
