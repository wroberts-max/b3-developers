// app/about/page.tsx  (SERVER COMPONENT — no "use client")
import type { Metadata } from "next"
import AboutContent from "./AboutContent"

export const metadata: Metadata = {
  title: "About B3 Developers | Land Clearing in Biloxi MS",
  description:
    "Learn about B3 Developers, your trusted land clearing and site preparation experts with 8+ years of experience serving Biloxi, Gulfport, and the Mississippi Gulf Coast.",
  alternates: { canonical: "https://b3devs.com/about/" },
  openGraph: {
    title: "About B3 Developers | Land Clearing in Biloxi MS",
    description:
      "Local land clearing and site prep experts with the right equipment, local knowledge, and professional service.",
    url: "https://b3devs.com/about/",
    siteName: "B3 Developers",
    images: [
      {
        url: "https://b3devs.com/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "About B3 Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Page() {
  return <AboutContent />
}
