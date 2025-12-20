"use client"

import { Target, Lightbulb, Users, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "We focus on delivering measurable outcomes that align with your business objectives",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Cutting-edge technologies and creative strategies to keep you ahead of the competition",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in web development and digital marketing",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully delivered projects for diverse clients across multiple industries",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
