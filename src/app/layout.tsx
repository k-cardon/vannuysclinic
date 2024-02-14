import type { Metadata } from "next";
import { Arsenal } from 'next/font/google';
import "./globals.css";

export const arsenal = Arsenal({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Van Nuys Abortion Clinic",
  description: "Reproductive Health Services in Van Nuys, Los Angeles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arsenal.className}>{children}</body>
    </html>
  );
}
