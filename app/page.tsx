import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ClientsPartners } from "@/components/clients-partners"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-1">
        <HeroCarousel />
        <div className="container mx-auto">
          <ServicesPreview />
          <WhyChooseUs />
          <ClientsPartners />
        </div>
      </main>
      <Footer />
    </div>
  )
}
