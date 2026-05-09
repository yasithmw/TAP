import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "The Artist Platform - Where Musicians & Opportunity Meet",
  description:
    "A gate-kept network for serious artists and the venues, labels and managers looking for them.",
  icons: {
    icon: [
      { url: "/Primary.svg", type: "image/svg+xml" },
      { url: "/3.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="G-Q63T7WWE65" />
    </html>
  );
}
