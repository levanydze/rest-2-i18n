import { unstable_setRequestLocale } from "next-intl/server";
interface Params {
  locale: string; // Add other params if necessary
}
export default async function HomePage({ params }: { params: Params }) {
  unstable_setRequestLocale(params.locale);

  return <div></div>;
}
