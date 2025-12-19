export interface PortfolioProject {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  clientName: string
  completionDate: string
  projectUrl?: string
  features: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online shopping platform with payment integration and inventory management",
    longDescription:
      "Built a comprehensive e-commerce solution with real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of products and processes hundreds of orders daily.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
    clientName: "RetailCo Bangladesh",
    completionDate: "2024-11",
    projectUrl: "https://example.com",
    features: [
      "Secure payment processing with Stripe",
      "Real-time inventory management",
      "Advanced product filtering and search",
      "Customer reviews and ratings system",
      "Mobile-responsive design",
    ],
  },
  {
    id: "corporate-website",
    title: "Corporate Business Website",
    category: "Web Development",
    description: "Professional corporate website with CMS integration and SEO optimization",
    longDescription:
      "Developed a modern corporate website with a custom content management system, allowing the client to easily update content. Implemented comprehensive SEO strategies resulting in 150% increase in organic traffic.",
    image: "/professional-corporate-website.png",
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Vercel"],
    clientName: "TechCorp International",
    completionDate: "2024-09",
    features: [
      "Custom content management system",
      "SEO optimized structure",
      "Multi-language support",
      "Blog and news section",
      "Contact form integration",
    ],
  },
  {
    id: "social-media-campaign",
    title: "Social Media Growth Campaign",
    category: "Digital Marketing",
    description: "Comprehensive social media marketing campaign across multiple platforms",
    longDescription:
      "Executed a 6-month social media marketing campaign that increased follower count by 300% and engagement rate by 250%. Created targeted content strategies for Facebook, Instagram, and LinkedIn.",
    image: "/social-media-marketing-campaign-dashboard.jpg",
    technologies: ["Facebook Ads", "Instagram", "LinkedIn", "Canva", "Analytics"],
    clientName: "Fashion Brand BD",
    completionDate: "2024-10",
    features: [
      "Content calendar development",
      "Paid advertising campaigns",
      "Influencer partnerships",
      "Analytics and reporting",
      "Community management",
    ],
  },
  {
    id: "restaurant-booking",
    title: "Restaurant Booking System",
    category: "Web Development",
    description: "Online reservation system with table management and customer notifications",
    longDescription:
      "Created a sophisticated booking system that allows customers to reserve tables online, view menu items, and receive automated confirmations. The system includes a backend dashboard for restaurant staff to manage reservations and table availability.",
    image: "/restaurant-booking-website-interface.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Twilio", "Tailwind CSS"],
    clientName: "Spice House Restaurant",
    completionDate: "2024-08",
    features: [
      "Real-time table availability",
      "SMS and email notifications",
      "Menu display with images",
      "Customer review system",
      "Staff management dashboard",
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization & Growth",
    category: "Digital Marketing",
    description: "Complete SEO overhaul resulting in 200% increase in organic traffic",
    longDescription:
      "Conducted comprehensive SEO audit and implemented technical improvements, content optimization, and link building strategies. Achieved first-page rankings for 25+ target keywords within 4 months.",
    image: "/seo-analytics-dashboard.png",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Search Console"],
    clientName: "Healthcare Clinic",
    completionDate: "2024-07",
    features: [
      "Technical SEO improvements",
      "Content optimization",
      "Local SEO strategy",
      "Link building campaign",
      "Monthly performance reports",
    ],
  },
  {
    id: "educational-platform",
    title: "Online Learning Platform",
    category: "Web Development",
    description: "Interactive e-learning platform with video courses and progress tracking",
    longDescription:
      "Developed a complete learning management system with video hosting, quiz functionality, student progress tracking, and certificate generation. The platform supports multiple instructors and course categories.",
    image: "/online-learning-platform.png",
    technologies: ["Next.js", "PostgreSQL", "AWS S3", "Stripe", "React"],
    clientName: "EduTech Bangladesh",
    completionDate: "2024-06",
    features: [
      "Video course hosting",
      "Interactive quizzes",
      "Student progress tracking",
      "Certificate generation",
      "Payment integration for courses",
    ],
  },
]

export const categories = ["All", "Web Development", "Digital Marketing"]
