"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const clients = [
  { name: "Industry Insider", logo: "/industry-insider.png" },
  { name: "Techvibe Global", logo: "/techvibe.jpg" },
  { name: "Science Workshop", logo: "/science.png" },
  { name: "ASB Link", logo: "/ASBLINK.webp" },
  { name: "QRF Security Services", logo: "/QRF-LOGO.png" },
]

export function ClientsPartners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Our Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across various industries
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            // @ts-ignore
            Autoplay({
              delay: 2500,
              stopOnInteraction: true,
            }),
          ]}
          className={`w-full ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <CarouselContent className="-ml-4">
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="
                  
                  basis-1/2
                  sm:basis-1/3
                  md:basis-1/4
                  lg:basis-1/5
                "
              >
                <div className="flex items-center justify-center p-3
                                rounded-lg
                                bg-muted/30 hover:bg-muted/50
                                transition">
                  <div className="relative w-32 h-32 bg-muted/30 hover:bg-muted/50">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      title={client.name}
                      fill
                      className="object-contain
                                 opacity-60 hover:opacity-100
                                 grayscale hover:grayscale-0
                                 transition"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
