import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTOBOKE NANUK",
  description: "OTOBOKE NANUK",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "/bnr.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "otobokenanuk.vercel.app",
    "og:image": "/logo.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
