import { redirect } from "next/navigation";
import { defaultLocale, supportedLocales } from "@/Manager/navigation";
import { useLocale } from "next-intl";

export default function LangPage() {
  const locale = useLocale();

  // If the lang is not one of the supported languages, redirect to the default language
  if (!supportedLocales.includes(locale)) {
    redirect(`/${defaultLocale}`);
  }

  // If the language is valid, redirect to the language-specific page
  redirect(`/${locale}`);

  // No need to return anything, as the code won't reach this point
}
