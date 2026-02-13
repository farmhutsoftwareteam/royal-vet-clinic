import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal Veterinary Clinic | Cape Town",
  description:
    "Veterinary care rooted in compassion. Two clinics in Diep River and N1 City, Cape Town. Diagnostics, dental, surgery, wellness — book online.",
  keywords: [
    "vet Cape Town",
    "veterinary clinic Diep River",
    "vet N1 City",
    "pet care Cape Town",
    "animal hospital Cape Town",
  ],
  openGraph: {
    title: "Royal Veterinary Clinic | Cape Town",
    description:
      "Veterinary care rooted in compassion. Two clinics in Diep River and N1 City.",
    siteName: "Royal Veterinary Clinic",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
