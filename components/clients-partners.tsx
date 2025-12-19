"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const clients = [
  { name: "Tech Corp", logo: "/tech-company-logo.jpg" },
  { name: "Digital Agency", logo: "/digital-agency-logo.png" },
  { name: "E-commerce Store", logo: "/ecommerce-brand-logo.png" },
  { name: "Startup Inc", logo: "/startup-logo.png" },
  { name: "Restaurant Chain", logo: "/generic-restaurant-logo.png" },
  { name: "Education Platform", logo: "/education-platform-logo.png" },
]

const partners = [
  { name: "Google Partner", logo: "/google-partner-badge.jpg" },
  { name: "Meta Business", logo: "/meta-business-partner.jpg" },
  { name: "AWS", logo: "/aws-partner-logo.jpg" },
  { name: "Vercel", logo: "/vercel-partner-logo.jpg" },
]

export function ClientsPartners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Our Clients */}
        <div className="mb-16">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Clients</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trusted by leading businesses across various industries
            </p>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Digital Partnerships */}
        <div>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Digital Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Partnered with industry leaders to deliver excellence
            </p>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                style={{ animationDelay: `${(clients.length + index) * 50}ms` }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
