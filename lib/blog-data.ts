export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential SEO Strategies for Small Businesses in 2024",
    slug: "seo-strategies-small-businesses-2024",
    excerpt:
      "Discover the most effective SEO strategies that small businesses can implement to improve their online visibility and attract more customers.",
    content: `
# 10 Essential SEO Strategies for Small Businesses in 2024

Search Engine Optimization (SEO) is crucial for small businesses looking to compete in the digital marketplace. Here are the top strategies you need to implement this year.

## 1. Focus on Local SEO

Local SEO is essential for small businesses serving specific geographic areas. Optimize your Google Business Profile, ensure your NAP (Name, Address, Phone) information is consistent across all platforms, and encourage customer reviews.

## 2. Mobile-First Optimization

With over 60% of searches happening on mobile devices, having a mobile-friendly website is no longer optional. Ensure your site loads quickly on mobile devices and provides an excellent user experience.

## 3. Quality Content Creation

Create valuable, informative content that addresses your audience's pain points. Focus on solving problems rather than just selling your services.

## 4. Voice Search Optimization

Optimize for conversational queries as voice search continues to grow. Use natural language and question-based keywords in your content.

## 5. Technical SEO

Ensure your website has proper site structure, XML sitemaps, fast loading speeds, and is free from technical errors that could harm your rankings.

## 6. Build Quality Backlinks

Focus on earning high-quality backlinks from reputable websites in your industry. Guest posting and creating shareable content are great strategies.

## 7. Optimize for Featured Snippets

Structure your content to answer common questions directly, increasing your chances of appearing in featured snippets at the top of search results.

## 8. Use Schema Markup

Implement structured data to help search engines better understand your content and potentially earn rich snippets in search results.

## 9. Video Content

Incorporate video content into your strategy. Videos can improve engagement and provide another avenue for ranking in search results.

## 10. Monitor and Analyze

Regularly track your SEO performance using tools like Google Analytics and Search Console. Use data to refine your strategy continuously.

## Conclusion

Implementing these SEO strategies takes time and effort, but the long-term benefits are worth it. Start with the basics and gradually implement more advanced techniques as you grow.
    `,
    author: {
      name: "Abdur Rahman Robin",
      role: "Digital Marketing Head",
      avatar: "/professional-male-portrait-marketing.jpg",
    },
    category: "Digital Marketing",
    tags: ["SEO", "Digital Marketing", "Small Business"],
    image: "/seo-strategies-blog-header.jpg",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Next.js 15: What's New and Why You Should Upgrade",
    slug: "nextjs-15-whats-new",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how they can improve your web development workflow and application performance.",
    content: `
# Next.js 15: What's New and Why You Should Upgrade

Next.js 15 brings exciting new features and improvements that make building modern web applications even better. Let's dive into the key updates.

## Major Features

### 1. Improved Performance

Next.js 15 includes significant performance improvements, with faster build times and optimized runtime performance.

### 2. Enhanced Server Components

Server Components have been refined with better streaming support and improved error handling, making them more reliable for production applications.

### 3. Better Developer Experience

The development experience has been enhanced with improved error messages, better TypeScript support, and faster hot module replacement.

## Turbopack Stability

Turbopack, the new bundler, is now stable and ready for production use, offering significantly faster build times compared to Webpack.

## Server Actions Improvements

Server Actions have been enhanced with better type safety and improved error handling, making it easier to build interactive features.

## Why Upgrade?

Upgrading to Next.js 15 provides immediate benefits in terms of performance, developer experience, and access to new features that make building modern web applications easier.

## Conclusion

Next.js 15 represents a significant step forward for the framework. If you're building production applications, the upgrade is well worth it.
    `,
    author: {
      name: "Amdadul Hoque",
      role: "Founder & COO",
      avatar: "/professional-male-portrait.png",
    },
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development"],
    image: "/nextjs-15-features-blog.png",
    publishedAt: "2024-12-10",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Social Media Marketing Trends to Watch in 2025",
    slug: "social-media-marketing-trends-2025",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends that will dominate 2025.",
    content: `
# Social Media Marketing Trends to Watch in 2025

The social media landscape is constantly evolving. Here are the trends that will shape social media marketing in 2025.

## 1. Short-Form Video Dominance

Short-form video content continues to dominate, with platforms prioritizing this format. Brands need to create engaging, bite-sized content.

## 2. AI-Powered Personalization

AI tools are making it easier to personalize content and target specific audience segments with unprecedented accuracy.

## 3. Social Commerce Growth

Shopping directly through social media platforms is becoming mainstream. Integrating e-commerce into your social strategy is essential.

## 4. Authentic User-Generated Content

Consumers trust user-generated content more than branded content. Encourage and showcase authentic customer experiences.

## 5. Micro-Influencer Partnerships

Micro-influencers with highly engaged niche audiences often provide better ROI than celebrity endorsements.

## 6. Community Building

Focus on building genuine communities rather than just accumulating followers. Engagement and loyalty matter more than vanity metrics.

## Conclusion

Staying ahead of these trends will help your brand remain relevant and competitive in the ever-changing social media landscape.
    `,
    author: {
      name: "Abdur Rahman Robin",
      role: "Digital Marketing Head",
      avatar: "/professional-male-portrait-marketing.jpg",
    },
    category: "Digital Marketing",
    tags: ["Social Media", "Marketing Trends", "Digital Strategy"],
    image: "/social-media-trends-2025.jpg",
    publishedAt: "2024-12-05",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Building Scalable Web Applications: Best Practices",
    slug: "scalable-web-applications-best-practices",
    excerpt:
      "Learn the essential architectural patterns and best practices for building web applications that can scale with your business.",
    content: `
# Building Scalable Web Applications: Best Practices

Scalability should be a consideration from day one of your project. Here's how to build applications that can grow with your business.

## Architecture Considerations

### Microservices vs Monolith

Choose the right architecture for your use case. Monoliths work well for smaller applications, while microservices offer better scalability for complex systems.

### Database Design

Design your database schema with scalability in mind. Use proper indexing, consider read replicas, and implement caching strategies.

## Performance Optimization

### Caching Strategies

Implement multi-layer caching using CDNs, application-level caching, and database query caching to reduce server load.

### Code Splitting

Use code splitting to reduce initial bundle sizes and improve load times, especially important for large applications.

## Infrastructure

### Cloud Deployment

Leverage cloud platforms that offer auto-scaling capabilities to handle traffic spikes automatically.

### Monitoring and Logging

Implement comprehensive monitoring and logging to identify bottlenecks before they become critical issues.

## Conclusion

Building scalable applications requires planning and discipline. Follow these best practices to ensure your application can grow with your business needs.
    `,
    author: {
      name: "Minhaj Ul Islam Chowdhury",
      role: "Co-Founder & CEO",
      avatar: "/professional-male-portrait-ceo.jpg",
    },
    category: "Web Development",
    tags: ["Scalability", "Architecture", "Best Practices"],
    image: "/scalable-web-applications.png",
    publishedAt: "2024-11-28",
    readTime: "10 min read",
  },
  {
    id: "5",
    title: "Content Marketing Strategy: From Planning to Execution",
    slug: "content-marketing-strategy-guide",
    excerpt:
      "A comprehensive guide to creating and implementing an effective content marketing strategy that drives results.",
    content: `
# Content Marketing Strategy: From Planning to Execution

Effective content marketing requires strategy, consistency, and measurement. Here's how to create a content marketing plan that works.

## Understanding Your Audience

Before creating content, deeply understand your target audience's pain points, interests, and behaviors. Create detailed buyer personas.

## Content Planning

### Content Calendar

Develop a content calendar that aligns with your business goals and seasonal trends. Plan content themes months in advance.

### Content Types

Diversify your content types including blog posts, videos, infographics, podcasts, and social media content.

## Content Creation

### Quality Over Quantity

Focus on creating high-quality, valuable content rather than publishing frequently with mediocre content.

### SEO Optimization

Optimize all content for search engines while maintaining readability and value for humans.

## Distribution Strategy

### Multi-Channel Approach

Distribute content across multiple channels including your website, social media, email, and guest posting opportunities.

### Repurposing Content

Maximize content value by repurposing it into different formats for different channels.

## Measuring Success

Track key metrics like engagement, conversions, and ROI. Use data to refine your content strategy continuously.

## Conclusion

A well-executed content marketing strategy can establish your brand as an industry authority and drive consistent business growth.
    `,
    author: {
      name: "Abdur Rahman Robin",
      role: "Digital Marketing Head",
      avatar: "/professional-male-portrait-marketing.jpg",
    },
    category: "Digital Marketing",
    tags: ["Content Marketing", "Strategy", "Digital Marketing"],
    image: "/content-marketing-strategy.jpg",
    publishedAt: "2024-11-20",
    readTime: "9 min read",
  },
  {
    id: "6",
    title: "TypeScript Best Practices for React Developers",
    slug: "typescript-best-practices-react",
    excerpt: "Master TypeScript in your React projects with these essential best practices and patterns.",
    content: `
# TypeScript Best Practices for React Developers

TypeScript adds type safety to React applications, but using it effectively requires understanding best practices.

## Component Typing

### Props Interfaces

Always define clear interfaces for component props. This improves developer experience and catches errors early.

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
\`\`\`

### Generic Components

Use generics for reusable components that work with different data types.

## State Management

### Typed State

Properly type all state, whether using useState, useReducer, or external state management libraries.

### Type Guards

Implement type guards for complex state shapes to ensure type safety throughout your application.

## API Integration

### Response Types

Define interfaces for API responses to catch data shape mismatches early in development.

### Error Handling

Type error states properly to handle different error scenarios gracefully.

## Configuration

### Strict Mode

Enable TypeScript strict mode for maximum type safety. Yes, it's more work upfront, but it prevents bugs.

### Path Aliases

Configure path aliases for cleaner imports and better code organization.

## Conclusion

These TypeScript practices will make your React applications more maintainable, bug-free, and enjoyable to work with.
    `,
    author: {
      name: "Amdadul Hoque",
      role: "Founder & COO",
      avatar: "/professional-male-portrait.png",
    },
    category: "Web Development",
    tags: ["TypeScript", "React", "Best Practices"],
    image: "/typescript-react-best-practices.png",
    publishedAt: "2024-11-15",
    readTime: "8 min read",
  },
]

export const blogCategories = ["All", "Web Development", "Digital Marketing"]
