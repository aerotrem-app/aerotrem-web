import type { Metadata } from "next";
import "@/app/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
      <body className="antialiased bg-black text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}