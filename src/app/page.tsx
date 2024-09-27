import { useLocale } from "next-intl";
import { redirect } from "next/navigation";
const locale = useLocale;

export default function RootPage() {
  return <div className="button"></div>;
}
