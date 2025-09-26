import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Zap } from "lucide-react"

// NEW — for service area popup
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
export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              Professional Services
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Comprehensive Land Development Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              From initial clearing to final site preparation, we provide the complete range of services needed to
              transform your property into a development-ready asset.
            </p>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Efficient Process</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Right-sized equipment and proven methods for faster project completion
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Environmental Care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Selective clearing that preserves valuable trees and minimizes environmental impact
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Reliable Timeline</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Professional project management ensures on-time completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Land Clearing & Mulching */}
          <div id="mulching" className="mb-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <Badge variant="outline" className="mb-4">
                  Core Service
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Land Clearing & Forestry Mulching
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Transform overgrown, unusable land into clean, accessible space with our professional forestry
                  mulching services. We use specialized equipment to selectively clear vegetation while preserving
                  valuable trees and preventing soil erosion.
                </p>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">
                        Selective vegetation removal with minimal soil disturbance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Forestry mulching that creates natural ground cover</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Preservation of desirable trees and vegetation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Erosion control and soil stabilization</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:pl-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Perfect For:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Residential Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Clearing lots for new home construction while maintaining natural beauty
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Commercial Projects</h4>
                      <p className="text-sm text-muted-foreground">
                        Site preparation for commercial buildings and parking areas
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Property Maintenance</h4>
                      <p className="text-sm text-muted-foreground">Ongoing vegetation management and fire prevention</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Dirt Work & Excavation */}
          <div id="dirtwork" className="mb-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="lg:order-2">
                <Badge variant="outline" className="mb-4">
                  Foundation Service
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Dirt Work & Site Preparation
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Professional excavation and grading services that create the perfect foundation for your development
                  project. From basic site preparation to complex grading projects, we ensure proper drainage and
                  structural integrity.
                </p>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Services Include:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Site excavation and rough grading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Drainage solutions and water management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Foundation preparation and pad creation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Utility trenching and backfill</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:order-1 lg:pr-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Applications:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Building Foundations</h4>
                      <p className="text-sm text-muted-foreground">
                        Precise excavation and grading for residential and commercial foundations
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Parking Areas</h4>
                      <p className="text-sm text-muted-foreground">
                        Site preparation for paved parking lots and access areas
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Drainage Systems</h4>
                      <p className="text-sm text-muted-foreground">
                        Installation of proper drainage to prevent water issues
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Gravel Driveways */}
          <div id="driveways" className="mb-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <Badge variant="outline" className="mb-4">
                  Access Solution
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Gravel Driveways & Access Roads
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Durable, well-constructed gravel driveways and access roads that provide reliable year-round access to
                  your property. We use proper base preparation and quality materials to ensure long-lasting
                  performance.
                </p>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Construction Process:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Proper base preparation and compaction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Quality gravel selection and installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Proper drainage and crown formation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Final grading and compaction</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:pl-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Benefits:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">All-Weather Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Reliable access in all weather conditions with proper drainage
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Cost-Effective</h4>
                      <p className="text-sm text-muted-foreground">
                        More affordable than paved surfaces with excellent durability
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="font-semibold mb-2">Low Maintenance</h4>
                      <p className="text-sm text-muted-foreground">
                        Easy to maintain and repair with minimal ongoing costs
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From initial consultation to project completion, we ensure a smooth, professional experience
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Site Assessment</h3>
              <p className="text-sm text-muted-foreground">Free on-site evaluation and detailed project planning</p>
            </div>
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Quote</h3>
              <p className="text-sm text-muted-foreground">Transparent pricing with no hidden costs or surprises</p>
            </div>
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Work</h3>
              <p className="text-sm text-muted-foreground">
                Efficient execution with right-sized equipment and expertise
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Walkthrough</h3>
              <p className="text-sm text-muted-foreground">Quality assurance and customer satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Work with Local Experts?</h2>
            <p className="mt-6 text-lg">
              Experience the difference that local expertise and professional service make. Contact us today for a free
              consultation and see how we can transform your property.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link
                  href="/projects"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  See Our Work
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
                    href="tel:+16019661960"
                    className="select-text underline decoration-dotted underline-offset-4"
                  >
                    (601) 966-1960
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
