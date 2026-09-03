import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const sora   = Sora({   variable: "--font-head",  subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vikas Surani — Vice President, Mastek. TEDx Speaker.",
  description: "Vikas Surani — Vice President at Mastek, TEDx speaker on AI-led transformation, leadership and the rise of Bharat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
