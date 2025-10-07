"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, Calendar, MapPin, Clock, CheckCircle } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import ServiceAreaMap from "@/components/ServiceAreaMap"

function ServiceAreaDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="select-text underline decoration-dotted underline-offset-4 hover:text-accent transition-colors"
        >
          {children}
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Service Area — Mississippi Gulf Coast</DialogTitle>
          <DialogDescription>
            We primarily serve Harrison, Jackson, Hancock, and Stone counties. Nearby jobs by request.
          </DialogDescription>
        </DialogHeader>

        {/* MapLibre-based shaded polygons from /public/service-area.geojson */}
        <ServiceAreaMap heightClass="h-[420px]" />
      </DialogContent>
    </Dialog>
  )
}

const projects = [
  {
    id: 1,
    title: "Residential Development Site Preparation",
    location: "Suburban Development",
    duration: "3 weeks",
    date: "Fall 2024",
    services: ["Land Clearing", "Site Preparation", "Access Road"],
    description:
      "Transformed a 15-acre overgrown lot into a development-ready site for a new residential subdivision.",
    challenge:
      "Dense vegetation and poor drainage required careful planning to preserve valuable trees while creating buildable lots.",
    solution:
      "Used selective forestry mulching to clear undergrowth while preserving mature trees, followed by strategic grading for proper drainage.",
    results: [
      "15 acres cleared and prepared on schedule",
      "Preserved 80% of mature trees",
      "Created proper drainage system",
      "Enabled on-time construction start",
    ],
    beforeImage: "/projects/overgrown-wooded-lot-before-clearing.jpg",
    afterImage: "/projects/cleared-development-site-with-preserved-trees.jpg",
  },
  {
    id: 2,
    title: "Commercial Property Access Improvement",
    location: "Industrial District",
    duration: "2 weeks",
    date: "Summer 2024",
    services: ["Excavation", "Gravel Driveway", "Drainage"],
    description:
      "Created reliable all-weather access for a commercial warehouse facility with heavy truck traffic requirements.",
    challenge:
      "Existing access was inadequate for large delivery trucks and became impassable during wet weather.",
    solution:
      "Excavated and installed proper base with engineered drainage, then constructed heavy-duty gravel access road.",
    results: [
      "All-weather access for 40-ton trucks",
      "Eliminated delivery delays",
      "Improved site drainage",
      "Reduced maintenance costs",
    ],
    beforeImage: "/projects/muddy-1.jpg", // avoid spaces in filenames
    afterImage: "/projects/professional-gravel-access-road-commercial.jpg",
  },
  {
    id: 3,
    title: "Homeowner Lot Clearing & Landscaping Prep",
    location: "Rural Property",
    duration: "1 week",
    date: "Spring 2024",
    services: ["Forestry Mulching", "Selective Clearing"],
    description:
      "Cleared overgrown areas around existing home to create usable yard space and reduce fire hazard.",
    challenge:
      "Heavy undergrowth and invasive species while maintaining privacy screening and mature shade trees.",
    solution:
      "Selective mulching to remove undergrowth and invasive plants while preserving desirable vegetation for privacy and shade.",
    results: [
      "Created 2 acres of usable yard space",
      "Reduced fire hazard significantly",
      "Maintained privacy screening",
      "Prepared area for landscaping",
    ],
    beforeImage: "/projects/lot-before.jpg",
    afterImage: "/projects/lot-after.jpg",
  },
  {
    id: 4,
    title: "Agricultural Land Reclamation",
    location: "Farm Property",
    duration: "4 weeks",
    date: "Winter 2024",
    services: ["Land Clearing", "Dirt Work", "Drainage"],
    description:
      "Reclaimed abandoned farmland for return to agricultural use, including drainage improvements.",
    challenge:
      "Years of neglect had resulted in invasive species takeover and poor drainage affecting soil quality.",
    solution:
      "Comprehensive clearing followed by soil preparation and installation of agricultural drainage system.",
    results: [
      "Reclaimed 25 acres for farming",
      "Installed tile drainage system",
      "Removed invasive species",
      "Improved soil conditions",
    ],
    beforeImage: "/projects/abandoned-overgrown-farmland.jpg",
    afterImage: "/projects/cleared-agricultural-field-ready-for-farming.jpg",
  },
]

export default function ProjectsContent() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              Our Work
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Transforming Properties, Delivering Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              See how we've helped property owners across the region transform challenging sites into valuable,
              development-ready assets with professional land clearing and site preparation services.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Safety Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">On-Time Completion</div>
            </div>
            <div className="text-center">
              {/* FIXED: closed div properly */}
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Example Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              B3 Developers is ready to deliver the following:
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className="mx-auto max-w-6xl">
                <Card className="overflow-hidden">
                  <div
                    className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Project Images */}
                    <div className={`space-y-4 p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">Before</h4>
                          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                            <img
                              src={project.beforeImage || "/placeholder.svg"}
                              alt={`${project.title} - Before`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">After</h4>
                          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                            <img
                              src={project.afterImage || "/placeholder.svg"}
                              alt={`${project.title} - After`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service) => (
                          <Badge key={service} variant="outline">
                            {service}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Results</h4>
                          <ul className="space-y-2">
                            {project.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Project Types We Handle</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From small residential lots to large commercial developments
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-4 w-4 bg-primary rounded" />
                  </div>
                  Residential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Home site preparation</li>
                  <li>• Lot clearing and landscaping prep</li>
                  <li>• Driveway installation</li>
                  <li>• Property maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-4 w-4 bg-primary rounded" />
                  </div>
                  Commercial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Site development</li>
                  <li>• Parking lot preparation</li>
                  <li>• Access road construction</li>
                  <li>• Industrial site clearing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-4 w-4 bg-primary rounded" />
                  </div>
                  Agricultural
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Land reclamation</li>
                  <li>• Pasture improvement</li>
                  <li>• Farm access roads</li>
                  <li>• Drainage solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-6 text-lg">
              Join the hundreds of satisfied property owners who've transformed their land with B3 DEVELOPERS. Contact
              us today for a free consultation and detailed project quote.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link
                  href="/about"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">B3 DEVELOPERS</h3>
              <p className="text-secondary-foreground/80 text-sm">
                Professional land clearing and development services with local expertise and right equipment for
                efficient results.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Land Clearing & Mulching
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Dirt Work & Excavation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Gravel Driveways
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 select-none" />
                  <a
                    href="tel:+16013855773"
                    className="select-text underline decoration-dotted underline-offset-4"
                  >
                    (601) 385-5773
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 select-none" />
                  <a
                    href="mailto:wroberts@b3devs.com"
                    className="select-text underline decoration-dotted underline-offset-4 break-all"
                  >
                    wroberts@b3devs.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 select-none" />
                  <ServiceAreaDialog>Serving the Mississippi Gulf Coast</ServiceAreaDialog>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; 2025 B3 DEVELOPERS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
