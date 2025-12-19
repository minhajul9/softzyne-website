import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { PortfolioProject } from "@/lib/portfolio-data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
        >
          <Link href={`/portfolio/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
