import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/main.scss";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Googlestore",
  description: "Googlestore",
};

const roboto = localFont({
  src: "../public/fonts/Roboto-Regular.ttf",
  variable: "--roboto-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
