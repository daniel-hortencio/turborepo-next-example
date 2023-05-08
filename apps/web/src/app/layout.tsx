"use client";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

import "../styles/globals.css";
import WebsiteLayout from "shared/components/layouts/WebsiteLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <WebsiteLayout>
          <main>{children}</main>
        </WebsiteLayout>
      </body>
    </html>
  );
}
