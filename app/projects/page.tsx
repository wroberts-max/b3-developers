import type { Metadata } from "next"
import ProjectsContent from "./ProjectsContent"

export const metadata: Metadata = {
  title: "Recent Projects | Land Clearing & Driveway Work by B3 Developers",
  description:
    "See before-and-after results of B3 Developers' land clearing, forestry mulching, and gravel driveway projects across Biloxi and the Gulf Coast.",
  alternates: { canonical: "https://b3devs.com/projects/" },
  openGraph: {
    title: "Recent Projects | Land Clearing & Driveway Work by B3 Developers",
    description:
      "Browse examples of completed land clearing, mulching, excavation, and driveway projects by B3 Developers.",
    url: "https://b3devs.com/projects/",
    siteName: "B3 Developers",
    images: [
      {
        url: "https://b3devs.com/images/projects.jpg",
        width: 1200,
        height: 630,
        alt: "Before and after land clearing project by B3 Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Page() {
  return <ProjectsContent />
}
