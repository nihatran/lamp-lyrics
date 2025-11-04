import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lyrics From Lamp",
  description: "Lyrics from the Japanese band Lamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.className} antialiased`}>{children}</body>
    </html>
  );
}
