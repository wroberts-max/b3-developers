"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Shovel, TreePine, Route } from "lucide-react"

// ...any other imports you already had (dialogs, ServiceAreaMap, etc.)

export default function HomeContent() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"             // file must exist in /public/hero.jpg
            alt="Forestry mulching hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/15" />

        {/* Content — ensure there's visible height */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 min-h-[55vh]">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              Professional Land Development
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Land with <span className="text-accent">Expert Precision</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              From overgrown lots to development-ready sites, B3 DEVELOPERS delivers efficient land clearing, mulching,
              and site preparation with right equipment and local expertise.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="inverted" size="lg" asChild>
                <Link href="/services">
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ...keep the rest of your sections/components here... */}
    </div>
  )
}
