"use client"

import { useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "Build Stunning Web Experiences",
    description:
      "Custom web development solutions that engage users and drive conversions",
    cta: "Discover Web Development",
    href: "/services#web-development",
  },
  {
    title: "Transform Your Business with Digital Marketing",
    description:
      "Drive growth with data-driven digital marketing strategies that deliver real results",
    cta: "Explore Digital Marketing",
    href: "/services#digital-marketing",
  },

]

export function HeroCarousel() {
  const apiRef = useRef<CarouselApi | null>(null)

  // Auto-slide
  useEffect(() => {
    if (!apiRef.current) return

    const interval = setInterval(() => {
      apiRef.current?.scrollNext()
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900 -mt-16.25">
      {/* Background Video (STATIC) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="/bg-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
      </div>

      {/* Carousel Content */}
      <div className="relative h-full mx-auto flex items-center">
        <Carousel
          // setApi={(api) => (apiRef.current = api)}
          opts={{ loop: true }}
          className="w-full"
          plugins={[
            // @ts-ignore
            Autoplay({
              stopOnInteraction: false,
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="container mx-auto space-y-6 animate-fade-in text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-7xl mx-auto">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    {slide.description}
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange text-white hover:bg-brand-orange-light"
                  >
                    <Link href={slide.href}>
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          {/* <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 text-white" />
          <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 text-white" /> */}
        </Carousel>
      </div>
    </section>
  )
}
