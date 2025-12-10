import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Namma Sangha | Community Trust",
  description:
    "Namma Sangha is a community-led trust supporting education, health, women empowerment, rural development, and youth initiatives across Karnataka.",
  keywords: [
    "non profit",
    "community trust",
    "education support",
    "health camps",
    "women empowerment",
    "rural development",
    "youth activities",
  ],
  openGraph: {
    title: "Namma Sangha Community Trust",
    description:
      "Simple, friendly initiatives that keep our communities learning, thriving, and hopeful.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-brand-cream text-brand-ink antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl space-y-10">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
