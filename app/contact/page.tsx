"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    propertySize: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="flex-1 flex items-center justify-center py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="rounded-full bg-primary/10 p-4 mx-auto mb-6 w-fit">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Thank You for Your Interest!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your project inquiry and will contact you within 24 hours to discuss your land development
              needs. Our team is excited to help transform your property.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>What happens next:</strong>
              </p>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    We'll call you within 24 hours to discuss your project
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">Schedule a free on-site consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">Provide a detailed, transparent quote</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              Get Started
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to Transform Your Property?
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Contact us today for a free consultation and detailed quote. We'll assess your property and provide a
              comprehensive plan tailored to your specific land development needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get Your Free Quote</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="land-clearing">Land Clearing & Mulching</SelectItem>
                            <SelectItem value="dirt-work">Dirt Work & Excavation</SelectItem>
                            <SelectItem value="gravel-driveway">Gravel Driveway</SelectItem>
                            <SelectItem value="site-preparation">Site Preparation</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="propertySize">Property Size</Label>
                        <Select onValueChange={(value) => handleInputChange("propertySize", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Approximate size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1-acre">Under 1 acre</SelectItem>
                            <SelectItem value="1-5-acres">1-5 acres</SelectItem>
                            <SelectItem value="5-10-acres">5-10 acres</SelectItem>
                            <SelectItem value="10-25-acres">10-25 acres</SelectItem>
                            <SelectItem value="over-25-acres">Over 25 acres</SelectItem>
                            <SelectItem value="unknown">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project, property conditions, specific requirements, or any questions you have..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <p className="text-muted-foreground mb-2">(601) 966-1960</p>
                          <p className="text-sm text-muted-foreground">
                            Call us directly for immediate assistance or urgent project needs
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <p className="text-muted-foreground mb-2">wroberts@b3devs.com</p>
                          <p className="text-sm text-muted-foreground">
                            Send us detailed project information or photos of your property
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                          <p className="text-muted-foreground mb-2">Local Region & Surrounding Counties</p>
                          <p className="text-sm text-muted-foreground">
                            We focus on our local area to provide the best service and fastest response times
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                            <p>Saturday: 8:00 AM - 4:00 PM</p>
                            <p>Sunday: Emergency calls only</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Response Time Promise */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Our Response Promise</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong>24-hour response</strong> to all quote requests
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong>Free on-site consultation</strong> within 48 hours
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong>Detailed written quote</strong> within 3 business days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong>No hidden fees</strong> - transparent, upfront pricing
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Quick answers to common questions about our services</p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How quickly can you start my project?</h3>
                <p className="text-muted-foreground">
                  Most projects can begin within 1-2 weeks of contract signing, depending on weather conditions and our
                  current schedule. Emergency projects can often be accommodated sooner.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you handle permits and regulations?</h3>
                <p className="text-muted-foreground">
                  We're familiar with local regulations and can advise on permit requirements. While property owners are
                  typically responsible for permits, we'll guide you through the process and provide necessary
                  documentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What makes your equipment "right-sized"?</h3>
                <p className="text-muted-foreground">
                  We use equipment that's appropriately sized for each specific project - large enough to be efficient,
                  but not so large that it causes unnecessary damage or access issues. This approach saves time and
                  money.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you provide free estimates?</h3>
                <p className="text-muted-foreground">
                  Yes! We provide free on-site consultations and detailed written quotes for all projects. There's no
                  obligation, and we believe in transparent, upfront pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
