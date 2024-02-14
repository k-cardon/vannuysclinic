import type { Metadata } from "next";
import { arsenal } from '@/app/fonts';
import "./globals.css";

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
