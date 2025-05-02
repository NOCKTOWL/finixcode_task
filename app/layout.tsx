import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const fontSatoshi = localFont({
  src: "assets/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "FinixCode Test",
  description: "FinixCode Test",
  icons: {
    icon: "Logo.svg",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSatoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
