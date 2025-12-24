import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ClientsPartners } from "@/components/clients-partners"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className=" flex-1">
        <HeroCarousel />
        <div className="container mx-auto">
          <ServicesPreview />
        </div>
        <WhyChooseUs />
        <ClientsPartners />
      </main>
      
    </div>
  )
}
