import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://jesubarba123.github.io"),
  title: "Jesús Gonzalo Barba García | AI Recruiter & Talent Intelligence",
  description:
    "Premium bilingual portfolio for Jesús Gonzalo Barba García, AI Recruiter, IT Talent Acquisition Specialist and Talent Data Analyst.",
  keywords: [
    "AI Recruiter",
    "IT Talent Acquisition",
    "Talent Intelligence",
    "People Analytics",
    "Business Automation",
    "Data Science",
    "Jesús Barba"
  ],
  authors: [{ name: "Jesús Gonzalo Barba García" }],
  creator: "Jesús Gonzalo Barba García",
  openGraph: {
    title: "Jesús Gonzalo Barba García | AI Recruiter & Talent Intelligence",
    description:
      "AI recruiting, IT talent acquisition, talent data analytics and business automation portfolio.",
    url: "https://jesubarba123.github.io",
    siteName: "Jesús Barba Portfolio",
    images: [
      {
        url: `${basePath}/images/jesus-formal.jpg`,
        width: 1448,
        height: 1086,
        alt: "Formal portrait of Jesús Gonzalo Barba García"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: `${basePath}/favicon.svg`
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
