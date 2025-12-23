"use client"

import {  Lightbulb, Users,  Award, ShieldCheck, Globe, Lock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We are committed to delivering high-quality software solutions by maintaining strong engineering standards, attention to detail, and reliable delivery practices.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We embrace emerging technologies, modern frameworks, and agile methodologies to build future-ready digital solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    description:
      "We foster transparent, ethical, and accountable relationships with our clients, partners, and team members.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "We define our success through our clients’ growth, focusing on understanding business goals and delivering solutions that create measurable impact.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "We prioritize data protection, system reliability, and compliance to ensure safe and dependable digital environments.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description:
      "We serve clients across the globe with professionalism, cultural awareness, and consistent service quality.",
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Softzyne</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your trusted partner for digital transformation and online success
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex gap-4 p-6 rounded-lg bg-background border border-border hover:shadow-md transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-brand-blue" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
