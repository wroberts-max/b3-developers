// app/contact/page.tsx  (SERVER COMPONENT — no "use client")
import type { Metadata } from "next"
import ContactContent from "./ContactContent"

export const metadata: Metadata = {
  title: "Contact B3 Developers | Free Estimate in Biloxi MS",
  description:
    "Get in touch with B3 Developers for land clearing, forestry mulching, excavation, and driveway services. Serving Biloxi, Gulfport, Ocean Springs, and the Mississippi Gulf Coast.",
  alternates: { canonical: "https://b3devs.com/contact/" },
  openGraph: {
    title: "Contact B3 Developers | Free Estimate in Biloxi MS",
    description:
      "Request a free estimate for land clearing, mulching, excavation, or driveway projects from B3 Developers.",
    url: "https://b3devs.com/contact/",
    siteName: "B3 Developers",
    images: [
      {
        url: "https://b3devs.com/images/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact B3 Developers for a free land clearing estimate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Page() {
  return <ContactContent />
}
