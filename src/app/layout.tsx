/* eslint-disable @next/next/no-page-custom-font */
import NoSsr from "@/utils/NoSsr";
import type { Metadata } from "next";
import "../index.scss";
import { I18nProvider } from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";
import { Providers } from "./MainProvider";

export const metadata: Metadata = {
  title: "Fuso",
  description: "themes.pixelstrap.com",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lng = await detectLanguage();
  return (
    <I18nProvider language={lng}>
      <html lang={lng}>
        <head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link href='https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        </head>
        <body>
          <NoSsr>
            <Providers>{children}</Providers>
          </NoSsr>
        </body>
      </html>
    </I18nProvider>
  );
}
