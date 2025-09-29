// app/page.tsx
import type { Metadata } from "next"
import HomeContent from "./HomeContent"

export const metadata: Metadata = {
  title: "Land Clearing & Forestry Mulching in Biloxi MS | B3 Developers",
  description:
    "B3 Developers provides professional land clearing, forestry mulching, excavation, gravel driveways, and site prep across Biloxi and the Mississippi Gulf Coast. Free estimates.",
  alternates: { canonical: "https://b3devs.com/" },
  openGraph: {
    title: "Land Clearing & Forestry Mulching in Biloxi MS | B3 Developers",
    description:
      "Local land clearing and site prep experts serving Biloxi, Gulfport, Ocean Springs, and surrounding areas.",
    url: "https://b3devs.com/",
    siteName: "B3 Developers",
    images: [
      {
        url: "https://b3devs.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Land clearing equipment at work in Biloxi MS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Page() {
  return <HomeContent />
}
