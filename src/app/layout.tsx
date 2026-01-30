import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aerotrem | Autonomous Aerospace Systems",
  description:
    "Engineering the future of autonomous aerospace emergency response. Precision. Reliability. Innovation.",
  keywords: [
    "aerospace",
    "drones",
    "autonomous",
    "emergency response",
    "VTOL",
    "Montreal",
    "McGill",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
