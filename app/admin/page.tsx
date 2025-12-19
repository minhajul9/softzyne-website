"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-data"
import { servicesDB, clientsDB, partnersDB } from "@/lib/mock-db"
import { FileText, Briefcase, Users, Handshake, MailOpen, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const services = servicesDB.getAll()
  const clients = clientsDB.getAll()
  const partners = partnersDB.getAll()

  const stats = [
    {
      title: "Total Blog Posts",
      value: blogPosts.length,
      icon: FileText,
      change: "+2 this month",
    },
    {
      title: "Services",
      value: services.length,
      icon: Briefcase,
      change: "Active services",
    },
    {
      title: "Clients",
      value: clients.length,
      icon: Users,
      change: "Total clients",
    },
    {
      title: "Digital Partners",
      value: partners.length,
      icon: Handshake,
      change: "Active partnerships",
    },
    {
      title: "Contact Submissions",
      value: "24",
      icon: MailOpen,
      change: "+5 this week",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: TrendingUp,
      change: "+0.5% this month",
    },
  ]

  const recentPosts = blogPosts.slice(0, 5)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your content management system.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Content */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{post.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                    {post.category}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Info */}
        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="pb-4 border-b border-border">
                <p className="text-sm font-medium mb-1">Database Status</p>
                <p className="text-sm text-muted-foreground">Mock data (upgrade to PostgreSQL for production)</p>
              </div>
              <div className="pb-4 border-b border-border">
                <p className="text-sm font-medium mb-1">Authentication</p>
                <p className="text-sm text-muted-foreground">Mock auth (upgrade to Auth.js for production)</p>
              </div>
              <div className="pb-4 border-b border-border">
                <p className="text-sm font-medium mb-1">Storage</p>
                <p className="text-sm text-muted-foreground">Local storage (upgrade to Vercel Blob for production)</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Last Updated</p>
                <p className="text-sm text-muted-foreground">{new Date().toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
