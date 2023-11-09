import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

import { Nanum_Gothic, Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "제품 사이트",
  description: "제품을 판매하는 곳이다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gothic.className}>
        <header className={styles.header}>
          <h1 className={sans.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
