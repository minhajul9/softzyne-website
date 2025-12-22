import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js. We create responsive, fast, and scalable solutions that deliver exceptional user experiences.",
    image: "/web-development-service.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, social media marketing, content marketing, and PPC campaigns. We help you reach your target audience and achieve measurable results that grow your business.",
    image: "/digital-marketing-service.png",
    imagePosition: "right" as const,
  },
  {
    title: "E-commerce Website",
    description:
      "Full-featured online stores with secure payment integration, inventory management, and user-friendly shopping experiences. We build e-commerce solutions that convert visitors into customers and drive sales.",
    image: "/ecommerce-website-service.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "WordPress Website",
    description:
      "Professional WordPress websites with custom themes, plugins, and optimized performance. Perfect for blogs, business sites, and content-heavy platforms that need easy content management capabilities.",
    image: "/wordpress-website-service.jpg",
    imagePosition: "right" as const,
  },
  {
    title: "WordPress to Code",
    description:
      "Convert your WordPress site to modern, lightweight code using React, Next.js, or other frameworks. Improve performance, security, and maintainability while keeping your content and design intact.",
    image: "/wordpress-to-code-service.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Web Hosting",
    description:
      "Reliable and secure web hosting solutions with 99.9% uptime guarantee, SSL certificates, automated backups, and 24/7 support. We ensure your website stays fast, secure, and always accessible.",
    image: "/web-hosting-service.jpg",
    imagePosition: "right" as const,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with your users in mind. We create engaging designs that enhance user satisfaction, improve usability, and drive conversions through thoughtful user experience.",
    image: "/ui-ux-design-service.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing website maintenance, updates, security monitoring, and technical support. We keep your website running smoothly with regular updates, bug fixes, and performance optimization to ensure peace of mind.",
    image: "/maintenance-support-service.png",
    imagePosition: "right" as const,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Our <span className="text-brand-blue">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Comprehensive digital solutions designed to help your business succeed in the online world
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  service.imagePosition === "right" ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg ${
                    service.imagePosition === "right" ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${service.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-balance">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange-light">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Let's discuss how we can help you achieve your digital goals. Contact us for a free consultation.
              </p>
              <Button asChild size="lg" className="bg-brand-blue text-white hover:bg-brand-blue-dark">
                <Link href="/contact">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
