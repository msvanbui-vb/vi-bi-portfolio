import type { Metadata } from "next";
import { DM_Sans, Raleway } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Van Bui | ${site.title}`,
  description: site.heroSummary,
  icons: { icon: "/assets/vb-mark.svg" },
  openGraph: {
    title: `Van Bui | ${site.title}`,
    description: site.heroSummary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Van Bui | ${site.title}`,
    description: site.heroSummary,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
