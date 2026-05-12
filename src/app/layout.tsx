import type { Metadata } from "next";
import { fontSans, fontSerif, fontMono } from "@/styles/fonts";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "OG Image Generator - Free Open Graph Image Maker",
  description:
    "Create beautiful social media preview images for free. Customize gradients, fonts, and layouts. Export high-quality 1200x630 PNG images instantly.",
  openGraph: {
    title: "OG Image Generator - Free Open Graph Image Maker",
    description:
      "Create beautiful social media preview images for free. Customize gradients, fonts, and layouts.",
    type: "website",
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
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <AdSenseScript />
        {children}
      </body>
    </html>
  );
}
