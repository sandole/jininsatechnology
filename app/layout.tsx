import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jininsa.com"),
  title: {
    default:
      "JININSA TECHNOLOGY | Enterprise Software Engineering, AI & Cloud-Native Systems",
    template: "%s | JININSA TECHNOLOGY",
  },
  description:
    "JININSA TECHNOLOGY is a Canadian IT consulting and enterprise software engineering firm delivering production AI and agentic systems, cloud-native architecture, and data pipeline orchestration for public sector and enterprise clients. CanadaBuys registered supplier based in British Columbia.",
  keywords: [
    "JININSA TECHNOLOGY",
    "Canadian IT Consulting",
    "Enterprise Software Engineering",
    "AI Consulting Canada",
    "Agentic AI Development",
    "LLM Application Development",
    "Cloud-Native Architecture",
    "AI Agentic Infrastructure",
    "Data Pipeline Orchestration",
    "CanadaBuys Supplier",
    "Government IT Procurement Canada",
    "British Columbia Software Company",
  ],
  authors: [{ name: "JININSA TECHNOLOGY" }],
  creator: "JININSA TECHNOLOGY",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://jininsa.com",
    siteName: "JININSA TECHNOLOGY",
    title:
      "JININSA TECHNOLOGY | Enterprise Software Engineering, AI & Cloud-Native Systems",
    description:
      "Canadian-owned technology firm specializing in enterprise software, production AI & agentic workflows, cloud-native infrastructure, and data engineering for public and enterprise sectors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JININSA TECHNOLOGY | Enterprise Software & AI Engineering",
    description:
      "Canadian IT consulting firm — AI & agentic infrastructure, cloud-native systems, and data engineering for public and enterprise sectors.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
