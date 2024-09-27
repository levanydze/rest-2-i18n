"use client";
import React from "react";
import ErrorDiv from "@/src/components/Error-NotFound/error/ErrorComponent";
// import { getMetadata } from "@/Control/seo";
// import { defaultLanguage } from "@/Control/navigation";
// import { Metadata } from "next";
// export async function generateMetadata({
//   params,
// }: {
//   params?: { lang?: string };
// }): Promise<Metadata> {
//   const lang = params?.lang || defaultLanguage;
//   return getMetadata("error", lang);
// }

function error() {
  return <ErrorDiv />;
}

export default error;

//must fix
