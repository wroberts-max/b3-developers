"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

import { PROJECT_TYPES, PROPERTY_SIZES, TIMELINES, slugToLabel } from "@/lib/options"

// ✅ Your Google Form ID from the URL you sent
const GOOGLE_FORM_ID =
  "1FAIpQLSeybTR9EFUW3wqqfb3OrE4-_Hmd2vKVxkcvRaM-XUJx1WhtdA"
const GOOGLE_FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`

// 🚧 Fill these entry IDs in after you generate a pre-filled link (steps below)
const GOOGLE_ENTRY_MAP = {
  name: "entry.246772063",
  email: "entry.60774704",
  phone: "entry.753972317",
  projectType: "entry.2023449770",   // Dropdown / Multiple choice
  propertySize: "entry.1380776546",  // Dropdown / Multiple choice
  timeline: "entry.1922210403",      // Dropdown / Multiple choice
  message: "entry.1463457382",
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    propertySize: "",
    timeline: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setError(null)

    try {
      const formEl = e.currentTarget
      // honeypot (optional)
      const gotcha = (formEl.querySelector('input[name="_gotcha"]') as HTMLInputElement | null)?.value || ""
      if (gotcha) {
        setIsSubmitted(true)
        return
      }

      // Build Google Forms payload
      const payload = new URLSearchParams()
      payload.set(GOOGLE_ENTRY_MAP.name, formData.name)
      payload.set(GOOGLE_ENTRY_MAP.email, formData.email)
      payload.set(GOOGLE_ENTRY_MAP.phone, formData.phone)

      // Convert slugs -> labels so they EXACTLY match Google’s dropdown text
      payload.set(GOOGLE_ENTRY_MAP.projectType,  slugToLabel(formData.projectType,  PROJECT_TYPES))
      payload.set(GOOGLE_ENTRY_MAP.propertySize, slugToLabel(formData.propertySize, PROPERTY_SIZES))
      payload.set(GOOGLE_ENTRY_MAP.timeline,     slugToLabel(formData.timeline,     TIMELINES))

      payload.set(GOOGLE_ENTRY_MAP.message, formData.message)

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: payload.toString(),
      })

      formEl.reset()
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        propertySize: "",
        timeline: "",
        message: "",
      })
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again or call us.")
    } finally {
      setIsSending(false)
    }
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
              <p className="text-muted-foreground"><strong>What happens next:</strong></p>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-start gap-2"><div className="rounded-full bg-primary/10 p-1 mt-1"><div className="h-2 w-2 bg-primary rounded-full" /></div><span className="text-sm text-muted-foreground">We'll call you within 24 hours to discuss your project</span></li>
                <li className="flex items-start gap-2"><div className="rounded-full bg-primary/10 p-1 mt-1"><div className="h-2 w-2 bg-primary rounded-full" /></div><span className="text-sm text-muted-foreground">Schedule a free on-site consultation</span></li>
                <li className="flex items-start gap-2"><div className="rounded-full bg-primary/10 p-1 mt-1"><div className="h-2 w-2 bg-primary rounded-full" /></div><span className="text-sm text-muted-foreground">Provide a detailed, transparent quote</span></li>
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
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">Get Started</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Ready to Transform Your Property?</h1>
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
                <CardHeader><CardTitle>Project Information</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot anti-spam */}
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" type="text" required
                          value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required
                          value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required
                        value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(601) 966-1960" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger id="projectType"><SelectValue placeholder="Select project type" /></SelectTrigger>
                          <SelectContent>
                            {PROJECT_TYPES.map(opt => (
                              <SelectItem key={opt.slug} value={opt.slug}>{opt.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="propertySize">Property Size</Label>
                        <Select onValueChange={(value) => handleInputChange("propertySize", value)}>
                          <SelectTrigger id="propertySize"><SelectValue placeholder="Approximate size" /></SelectTrigger>
                          <SelectContent>
                            {PROPERTY_SIZES.map(opt => (
                              <SelectItem key={opt.slug} value={opt.slug}>{opt.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger id="timeline"><SelectValue placeholder="When do you need this completed?" /></SelectTrigger>
                        <SelectContent>
                          {TIMELINES.map(opt => (
                            <SelectItem key={opt.slug} value={opt.slug}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea id="message" name="message" rows={4}
                        value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project, property conditions, specific requirements, or any questions you have..." />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSending}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSending ? "Sending..." : "Get Free Quote"}
                    </Button>

                    {error && <p className="text-sm text-red-600">{error}</p>}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information (unchanged) */}
            <div className="space-y-8">
              {/* ... your cards (Phone/Email/Service Area/Hours) ... */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Our Response Promise</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /><span className="text-sm text-muted-foreground"><strong>24-hour response</strong> to all quote requests</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /><span className="text-sm text-muted-foreground"><strong>Free on-site consultation</strong> within 48 hours</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /><span className="text-sm text-muted-foreground"><strong>Detailed written quote</strong> within 3 business days</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /><span className="text-sm text-muted-foreground"><strong>No hidden fees</strong> - transparent, upfront pricing</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section ... unchanged */}
    </div>
  )
}