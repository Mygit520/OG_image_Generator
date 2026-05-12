import { Inter, Noto_Serif, JetBrains_Mono } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
