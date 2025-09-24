import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              Professional Land Development
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Land with <span className="text-accent">Expert Precision</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              From overgrown lots to development-ready sites, B3 DEVELOPERS delivers efficient land clearing, mulching,
              and site preparation with right-sized equipment and local expertise.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose B3 DEVELOPERS?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Local expertise meets professional results</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Right-Sized Equipment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Efficient machinery that gets the job done without unnecessary damage or delays
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Local Expertise</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Deep understanding of local terrain, regulations, and environmental considerations
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Professional Results</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clean, efficient work that prepares your land for the next phase of development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive land development solutions for every project
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-6 w-6 bg-primary rounded" />
                  </div>
                  <h3 className="text-xl font-semibold">Land Clearing & Mulching</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Professional forestry mulching and selective clearing that preserves valuable trees while creating
                  usable space.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services#mulching">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-6 w-6 bg-primary rounded" />
                  </div>
                  <h3 className="text-xl font-semibold">Dirt Work & Excavation</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Site preparation, grading, and excavation services that create the perfect foundation for your
                  development project.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services#dirtwork">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-6 w-6 bg-primary rounded" />
                  </div>
                  <h3 className="text-xl font-semibold">Gravel Driveways</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Durable access roads and driveways built to last, providing reliable access to your property
                  year-round.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services#driveways">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Stuck with an Unusable Property?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Overgrown lots, uneven terrain, and poor access can turn your development dreams into expensive
                headaches. Without proper land preparation, you're facing:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-destructive rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Delayed project timelines and increased costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-destructive rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Difficulty accessing your property</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-destructive rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Environmental compliance challenges</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                We Make Land Development Simple
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                B3 DEVELOPERS transforms challenging properties into development-ready sites with efficient,
                professional land clearing and preparation services.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground">
                    Fast, efficient clearing with minimal environmental impact
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground">Professional site preparation and grading</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground">Reliable access roads and driveways</span>
                </li>
              </ul>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Property?</h2>
            <p className="mt-6 text-lg">
              Get a free consultation and quote for your land development project. We'll assess your property and
              provide a detailed plan for success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(601) 966-1960</span>
              </div>
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
                Professional land clearing and development services with local expertise and right-sized equipment for
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
                  <Phone className="h-4 w-4" />
                  <span>(602) 966-1960</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>wroberts@b3devs.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving the Mississippi Gulf Coast</span>
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
