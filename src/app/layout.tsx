import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thau-Luis Research Group | AI & Machine Learning",
  description: "Thau-Luis Research Group - Leading research in artificial intelligence, machine learning, and computational linguistics at UPM.",
  keywords: "AI Research, Machine Learning, Computational Linguistics, Research Group, UPM, Luis Fernando D Haro",
  authors: [{ name: "Thau-Luis Research Group" }],
  creator: "Thau-Luis Research Group",
  openGraph: {
    title: "Thau-Luis Research Group - AI & ML Research",
    description: "Leading research in artificial intelligence, machine learning, and computational linguistics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thau-Luis Research Group",
    description: "Leading AI and ML research at UPM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
