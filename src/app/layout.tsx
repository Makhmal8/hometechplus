import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeTech+ | Technology Made Simple",
  description:
    "Friendly in-home computer and technology support across Toronto & North York.",
  keywords: [
    "Computer Repair Toronto",
    "Home Tech Support",
    "Wi-Fi Setup",
    "Printer Setup",
    "Computer Help",
    "North York",
  ],
  authors: [{ name: "HomeTech+" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}