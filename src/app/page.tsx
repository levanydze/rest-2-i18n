import { defaultLocale } from "@/Manager/navigation";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/", "/", { locale: defaultLocale });
      }}
    ></div>
  );
}
