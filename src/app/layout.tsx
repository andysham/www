import type { Metadata } from "next";
import { STIX_Two_Text, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// New Computer Modern 7.0.2 (GUST Font License), subset to Latin.
// Knuth's Computer Modern as maintained by Antonis Tsolomitis.
const computerModern = localFont({
  variable: "--font-cm",
  display: "swap",
  src: [
    { path: "./fonts/serif-10-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/serif-10-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/serif-10-bold.woff2", weight: "700", style: "normal" },
  ],
});

const computerModernMono = localFont({
  variable: "--font-cm-mono",
  display: "swap",
  src: "./fonts/mono-10-regular.woff2",
});

const serif = STIX_Two_Text({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Andrew Shamis",
  description:
    "Applied ML research engineer in London, working on drug design at Isomorphic Labs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${computerModern.variable} ${computerModernMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
