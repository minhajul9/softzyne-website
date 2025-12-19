import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div>
          <Badge className="bg-primary text-primary-foreground mb-3">{post.category}</Badge>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Image
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{post.author.name}</p>
            <p className="text-xs text-muted-foreground truncate">{post.author.role}</p>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
        >
          <Link href={`/blog/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
