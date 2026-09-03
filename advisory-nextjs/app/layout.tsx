import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const sora   = Sora({   variable: "--font-head",  subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Advisory — Vikas Surani",
  description: "Book a conversation. Every rupee of your contribution goes to a social cause.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
