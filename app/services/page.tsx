// app/services/page.tsx
import type { Metadata } from "next"
import ServicesContent from "./ServicesContent"

export const metadata: Metadata = {
  title: "Land Clearing, Excavation & Driveway Services | B3 Developers Biloxi",
  description:
    "Explore B3 Developers' services: forestry mulching, land clearing, dirt work, excavation, gravel driveways, and drainage solutions across Biloxi and the Gulf Coast.",
  alternates: { canonical: "https://b3devs.com/services/" },
  openGraph: {
    title: "Land Clearing, Excavation & Driveway Services | B3 Developers Biloxi",
    description:
      "Professional services including forestry mulching, excavation, gravel driveways, and site prep in Biloxi, MS.",
    url: "https://b3devs.com/services/",
    siteName: "B3 Developers",
    images: [
      {
        url: "https://b3devs.com/images/services.jpg",
        width: 1200,
        height: 630,
        alt: "Forestry mulching and land clearing service in Biloxi MS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Page() {
  return <ServicesContent />
}
