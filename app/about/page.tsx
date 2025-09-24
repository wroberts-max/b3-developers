import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Award, Users, MapPin, Clock, Shield, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              About B3 DEVELOPERS
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Local Expertise, Professional Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              We're more than just a land clearing company. We're your partners in transforming challenging properties
              into valuable, development-ready assets with the right equipment, local knowledge, and professional
              approach.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Story</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                B3 DEVELOPERS was founded on a simple principle: every property has potential, and with the right
                expertise and equipment, that potential can be unlocked efficiently and professionally.
              </p>
              <p className="mt-4 text-muted-foreground">
                We've seen too many land development projects delayed or over budget because of inadequate site
                preparation. That's why we focus on doing things right the first time, using right-sized equipment that
                gets the job done without unnecessary damage or delays.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our deep understanding of local ground, environmental regulations, and development requirements means
                we can anticipate challenges and provide solutions that keep your project on track and on budget.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="rounded-full bg-primary/10 p-3 mx-auto mb-4 w-fit">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="rounded-full bg-primary/10 p-3 mx-auto mb-4 w-fit">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="rounded-full bg-primary/10 p-3 mx-auto mb-4 w-fit">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Local Focus</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="rounded-full bg-primary/10 p-3 mx-auto mb-4 w-fit">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Drives Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our core values guide every project and client interaction
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-primary/10 p-4 mx-auto mb-6 w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Integrity</h3>
                <p className="text-muted-foreground">
                  We do what we say we'll do, when we say we'll do it. Transparent pricing, clear communication, and
                  reliable results you can count on.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-primary/10 p-4 mx-auto mb-6 w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Efficient Solutions</h3>
                <p className="text-muted-foreground">
                  Right-sized equipment and proven methods mean faster completion times without compromising quality or
                  environmental responsibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-primary/10 p-4 mx-auto mb-6 w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of local ground, regulations, and environmental considerations ensures compliant,
                  successful projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Property Owners Choose B3 DEVELOPERS
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We understand the challenges of land development and provide solutions that work
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">The Problem with Other Approaches</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-destructive rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Oversized Equipment</h4>
                    <p className="text-sm text-muted-foreground">
                      Large contractors often use equipment that's too big, causing unnecessary damage and higher costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-destructive rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Lack of Local Knowledge</h4>
                    <p className="text-sm text-muted-foreground">
                      Out-of-area contractors don't understand local soil conditions and regulations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-destructive rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Poor Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Many contractors don't keep clients informed, leading to surprises and delays
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">The B3 DEVELOPERS Difference</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Right-Sized Equipment</h4>
                    <p className="text-sm text-muted-foreground">
                      We use equipment that's perfectly sized for your project, maximizing efficiency while minimizing
                      impact
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Local Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Years of experience with local conditions means we anticipate challenges and provide solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Clear Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular updates, transparent pricing, and clear timelines keep you informed every step of the way
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Serving Your Local Area</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Focused on providing exceptional service to our local community
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Primary Service Areas</h3>
                    <p className="text-muted-foreground mb-6">
                      We focus our services in the local area where we have the deepest knowledge of terrain,
                      regulations, and environmental considerations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">City and surrounding counties</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">Rural and suburban properties</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">Commercial and residential projects</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Why Local Matters</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-1">
                          <div className="h-2 w-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Understanding of local soil and terrain conditions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-1">
                          <div className="h-2 w-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Knowledge of local regulations and permit requirements
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-1">
                          <div className="h-2 w-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-sm text-muted-foreground">Faster response times and ongoing support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="/projects"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
