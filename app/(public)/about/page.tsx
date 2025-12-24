import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, UsersIcon } from "lucide-react"
import Link from "next/link"
import { ClientsPartners } from "@/components/clients-partners"

const teamMembers = [
  {
    name: "Amdadul Hoque",
    role: "Founder & COO",
    education: "BSc in CSE from IIUC",
  },
  {
    name: "Minhaj Ul Islam Chowdhury",
    role: "Co-Founder & CEO",
    education: "BSc in CSE from PCIU",
    experience: "Former IT Executive in Oriental Oil Company Limited",
  },
  {
    name: "Abdur Rahman Robin",
    role: "Associate Founder",
    education: "BSc in CSE from IIUC",
  },
]

const clients = [
  "TechCorp Solutions",
  "Digital Ventures Ltd",
  "E-Shop Bangladesh",
  "Green Food Restaurant",
  "EduLearn Platform",
  "HealthCare Plus",
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                About <span className="text-brand-blue">Softzyne</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                A passionate team dedicated to delivering exceptional digital solutions that drive business growth
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <UsersIcon className="h-6 w-6 text-brand-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Softzyne Digital Solutions is a dynamic digital agency founded by three passionate technology
                professionals with a shared vision of transforming businesses through innovative digital solutions. We
                combine expertise in web development and digital marketing to deliver comprehensive services that help
                our clients succeed in the digital landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team brings together years of experience in software engineering, IT management, and digital
                marketing to provide holistic solutions that drive measurable results. We pride ourselves on staying at
                the forefront of technology trends while maintaining a strong focus on client satisfaction and business
                outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-brand-blue" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Softzyne Digital Solutions, our mission is to design and develop secure, scalable, and high-performance software solutions that help businesses worldwide establish, manage, and grow their digital presence through e-commerce platforms, corporate websites, ERP systems, and custom applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-brand-orange" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our vision is to become a leading global software development company, enabling digital transformation through innovation, technology excellence, and customer-driven solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Our Founding Members</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries behind Softzyne Digital Solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange mx-auto flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm font-medium text-brand-blue">{member.role}</p>
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto">
            

            <ClientsPartners />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Ready to take your business to the next level? Contact us today to discuss your project requirements.
              </p>
              <Button asChild size="lg" className="bg-brand-blue text-white hover:bg-brand-blue-dark">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
