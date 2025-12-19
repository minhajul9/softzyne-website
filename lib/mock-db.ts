// Mock database for services, clients, partners, and blogs
// In production, replace with Prisma + PostgreSQL

import { blogPosts, type BlogPost } from "./blog-data"

export interface Service {
  id: string
  title: string
  description: string
  image: string
  order: number
  createdAt: string
  updatedAt: string
}

export interface Client {
  id: string
  name: string
  logo: string
  website?: string
  createdAt: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
  createdAt: string
}

// Mock data storage (in production, this would be database)
let services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Custom websites and web applications",
    image: "/web-development-service.jpg",
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies",
    image: "/digital-marketing-service.jpg",
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

let clients: Client[] = [
  { id: "1", name: "Tech Corp", logo: "/tech-company-logo.jpg", createdAt: new Date().toISOString() },
  { id: "2", name: "Digital Agency", logo: "/digital-agency-logo.png", createdAt: new Date().toISOString() },
]

let partners: Partner[] = [
  { id: "1", name: "Google Partner", logo: "/google-partner-badge.jpg", createdAt: new Date().toISOString() },
  { id: "2", name: "Meta Business", logo: "/meta-business-partner.jpg", createdAt: new Date().toISOString() },
]

let blogs: BlogPost[] = [...blogPosts]

// Services CRUD
export const servicesDB = {
  getAll: () => services,
  getById: (id: string) => services.find((s) => s.id === id),
  create: (data: Omit<Service, "id" | "createdAt" | "updatedAt">) => {
    const newService: Service = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    services.push(newService)
    return newService
  },
  update: (id: string, data: Partial<Service>) => {
    const index = services.findIndex((s) => s.id === id)
    if (index !== -1) {
      services[index] = { ...services[index], ...data, updatedAt: new Date().toISOString() }
      return services[index]
    }
    return null
  },
  delete: (id: string) => {
    services = services.filter((s) => s.id !== id)
    return true
  },
}

// Clients CRUD
export const clientsDB = {
  getAll: () => clients,
  getById: (id: string) => clients.find((c) => c.id === id),
  create: (data: Omit<Client, "id" | "createdAt">) => {
    const newClient: Client = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }
    clients.push(newClient)
    return newClient
  },
  update: (id: string, data: Partial<Client>) => {
    const index = clients.findIndex((c) => c.id === id)
    if (index !== -1) {
      clients[index] = { ...clients[index], ...data }
      return clients[index]
    }
    return null
  },
  delete: (id: string) => {
    clients = clients.filter((c) => c.id !== id)
    return true
  },
}

// Partners CRUD
export const partnersDB = {
  getAll: () => partners,
  getById: (id: string) => partners.find((p) => p.id === id),
  create: (data: Omit<Partner, "id" | "createdAt">) => {
    const newPartner: Partner = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }
    partners.push(newPartner)
    return newPartner
  },
  update: (id: string, data: Partial<Partner>) => {
    const index = partners.findIndex((p) => p.id === id)
    if (index !== -1) {
      partners[index] = { ...partners[index], ...data }
      return partners[index]
    }
    return null
  },
  delete: (id: string) => {
    partners = partners.filter((p) => p.id !== id)
    return true
  },
}

// Blogs CRUD
export const blogsDB = {
  getAll: () => blogs,
  getById: (id: string) => blogs.find((b) => b.id === id),
  create: (data: Omit<BlogPost, "id">) => {
    const newBlog: BlogPost = {
      ...data,
      id: Date.now().toString(),
    }
    blogs.push(newBlog)
    return newBlog
  },
  update: (id: string, data: Partial<BlogPost>) => {
    const index = blogs.findIndex((b) => b.id === id)
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...data }
      return blogs[index]
    }
    return null
  },
  delete: (id: string) => {
    blogs = blogs.filter((b) => b.id !== id)
    return true
  },
}
