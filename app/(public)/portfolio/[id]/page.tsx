import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioProjects } from "@/lib/portfolio-data"
import { ArrowLeft, ExternalLink, Calendar, User, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = portfolioProjects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Back Button */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto">
            <Button asChild variant="ghost">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <Badge className="bg-primary text-primary-foreground mb-4">{project.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{project.title}</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold text-lg">Project Info</h3>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <User className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Client</p>
                            <p className="text-sm text-muted-foreground">{project.clientName}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Completed</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(project.completionDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      {project.projectUrl && (
                        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold">Interested in a similar project?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Contact us to discuss how we can help your business succeed.
                      </p>
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">More Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioProjects
                  .filter((p) => p.id !== project.id && p.category === project.category)
                  .slice(0, 2)
                  .map((relatedProject) => (
                    <Card key={relatedProject.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                          {relatedProject.description}
                        </p>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href={`/portfolio/${relatedProject.id}`}>View Project</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
