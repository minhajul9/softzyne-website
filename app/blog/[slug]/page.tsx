import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Back Button */}
        <section className="py-6 border-b border-border">
          <div className="container">
            <Button asChild variant="ghost">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
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

              {/* Author */}
              <div className="flex items-center gap-4 pt-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-3 prose prose-lg max-w-none">
                  <div
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.content
                        .replace(/#{1,6}\s/g, (match) => {
                          const level = match.trim().length
                          return `<h${level} class="font-bold mt-8 mb-4 text-foreground">`
                        })
                        .replace(/\n\n/g, "</p><p class='mb-4 leading-relaxed'>")
                        .replace(/^(.+)$/gm, "<p class='mb-4 leading-relaxed'>$1</p>")
                        .replace(/<p class='mb-4 leading-relaxed'><h/g, "<h")
                        .replace(/<\/h(\d)><\/p>/g, "</h$1>"),
                    }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-6">
                  <Card className="sticky top-24">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share Article
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" className="justify-start bg-transparent">
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start bg-transparent">
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start bg-transparent">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 space-y-3">
                        <Badge className="bg-primary text-primary-foreground">{relatedPost.category}</Badge>
                        <h3 className="text-lg font-semibold line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <Button asChild variant="outline" className="w-full mt-2 bg-transparent">
                          <Link href={`/blog/${relatedPost.slug}`}>Read Article</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
