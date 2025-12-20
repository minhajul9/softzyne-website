"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Megaphone, ShoppingCart, Palette } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns designed to grow your online presence and drive measurable business results.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    description: "Full-featured online stores with secure payment processing and inventory management systems.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user satisfaction and drive engagement with your brand.",
  },
]

export function ServicesPreview() {
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
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-border hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg" className="bg-brand-blue text-white hover:bg-brand-blue-dark">
            <Link href="/services">See More Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
