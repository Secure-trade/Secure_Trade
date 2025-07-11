import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secure Trade",
  description: "SecureTrade is Nigeria's trusted escrow platform, ensuring safe online transactions for buyers and sellers. Protect your money and goods with our secure, transparent escrow service.",
  keywords: [
    "escrow service Nigeria",
    "secure online transactions",
    "buyer protection",
    "seller protection",
    "peer-to-peer transactions",
    "SecureTrade Nigeria",
    "online payment safety",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
