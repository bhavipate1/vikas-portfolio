import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const sora   = Sora({   variable: "--font-head",  subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "About — Vikas Surani",
  description: "An engineer who stayed curious. Two decades turning AI ambition into transformation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
