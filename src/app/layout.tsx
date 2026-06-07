import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Bhatia — Entrepreneur · Operator · Investor · Transformation Leader",
  description:
    "Helping entrepreneurs, executives, investors, and families build wealth, improve profitability, and make better decisions through business, real estate, leadership, and AI.",
  openGraph: {
    title: "Naveen Bhatia",
    description: "Building Growth With Clarity & Purpose",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
