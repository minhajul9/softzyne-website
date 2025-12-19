"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "Transform Your Business with Digital Marketing",
    description: "Drive growth with data-driven digital marketing strategies that deliver real results",
    cta: "Explore Digital Marketing",
    href: "/services#digital-marketing",
    video: "https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-team-working-together-4889-large.mp4",
  },
  {
    title: "Build Stunning Web Experiences",
    description: "Custom web development solutions that engage users and drive conversions",
    cta: "Discover Web Development",
    href: "/services#web-development",
    video: "https://assets.mixkit.co/videos/preview/mixkit-programmer-working-on-code-4883-large.mp4",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video key={currentSlide} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
          <source src={slides[currentSlide].video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-balance leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 text-pretty max-w-2xl">{slides[currentSlide].description}</p>
          <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange-light">
            <Link href={slides[currentSlide].href}>
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-brand-orange w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
