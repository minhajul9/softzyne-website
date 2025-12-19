// Mock data for blogs - Replace with database queries when PostgreSQL is connected

export interface Blog {
  id: string
  title: string
  slug: string
  description: string
  content: string
  thumbnail: string
  createdAt: string
  updatedAt: string
}

export const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "10 Essential SEO Strategies for 2025",
    slug: "10-essential-seo-strategies-2025",
    description:
      "Discover the latest SEO techniques that will help your website rank higher in search results and drive organic traffic.",
    content: `
      <h2>Introduction</h2>
      <p>Search Engine Optimization (SEO) continues to evolve rapidly. In 2025, staying ahead means adapting to new algorithms, user behaviors, and technological advancements. Here are the essential strategies you need to implement.</p>

      <h2>1. Focus on User Experience (UX)</h2>
      <p>Google's algorithms increasingly prioritize websites that provide excellent user experiences. This means fast loading times, mobile responsiveness, intuitive navigation, and engaging content that keeps visitors on your site.</p>

      <h2>2. Optimize for Core Web Vitals</h2>
      <p>Core Web Vitals are now critical ranking factors. Focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to ensure your site meets Google's performance standards.</p>

      <h2>3. Create High-Quality, In-Depth Content</h2>
      <p>Gone are the days of thin content. Today's SEO demands comprehensive, well-researched articles that thoroughly answer user queries. Aim for content that provides real value and establishes your authority.</p>

      <h2>4. Implement Structured Data</h2>
      <p>Schema markup helps search engines understand your content better, leading to rich snippets in search results. Implement structured data for articles, products, reviews, and local business information.</p>

      <h2>5. Optimize for Voice Search</h2>
      <p>With the rise of smart speakers and voice assistants, optimizing for conversational queries is essential. Focus on natural language, question-based content, and local SEO.</p>

      <h2>Conclusion</h2>
      <p>SEO success in 2025 requires a holistic approach that combines technical optimization, quality content, and excellent user experience. Stay updated with the latest trends and continuously adapt your strategy.</p>
    `,
    thumbnail: "/seo-strategies-blog-header.jpg",
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "The Future of Web Development: Trends to Watch",
    slug: "future-web-development-trends",
    description:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development in the coming years.",
    content: `
      <h2>Introduction</h2>
      <p>Web development is constantly evolving, with new frameworks, tools, and best practices emerging regularly. Let's explore the trends that will define the future of web development.</p>

      <h2>1. AI-Powered Development</h2>
      <p>Artificial Intelligence is revolutionizing how we build websites. From code generation tools to AI-powered design systems, developers can now create more sophisticated applications faster than ever before.</p>

      <h2>2. Serverless Architecture</h2>
      <p>Serverless computing continues to gain traction, allowing developers to focus on code rather than infrastructure. This approach offers better scalability, reduced costs, and faster deployment times.</p>

      <h2>3. Progressive Web Apps (PWAs)</h2>
      <p>PWAs bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences directly in the browser.</p>

      <h2>4. WebAssembly (Wasm)</h2>
      <p>WebAssembly enables high-performance applications in the browser by allowing code written in languages like C++, Rust, and Go to run at near-native speed.</p>

      <h2>5. Edge Computing</h2>
      <p>Processing data closer to users through edge computing reduces latency and improves performance, especially for globally distributed applications.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. Staying current with these trends will help you build better, faster, and more capable web applications.</p>
    `,
    thumbnail: "/nextjs-15-features-blog.png",
    createdAt: "2025-01-10T14:30:00Z",
    updatedAt: "2025-01-10T14:30:00Z",
  },
  {
    id: "3",
    title: "Social Media Marketing: Best Practices for 2025",
    slug: "social-media-marketing-best-practices-2025",
    description:
      "Learn how to leverage social media platforms effectively to grow your brand, engage your audience, and drive conversions.",
    content: `
      <h2>Introduction</h2>
      <p>Social media marketing remains one of the most powerful tools for businesses to connect with their audience. Here's how to make the most of it in 2025.</p>

      <h2>1. Embrace Short-Form Video Content</h2>
      <p>Platforms like TikTok, Instagram Reels, and YouTube Shorts dominate user attention. Create engaging, authentic short-form videos that showcase your brand personality.</p>

      <h2>2. Build Community, Not Just Followers</h2>
      <p>Focus on creating genuine connections with your audience. Respond to comments, host live sessions, and create content that encourages interaction and discussion.</p>

      <h2>3. Leverage User-Generated Content</h2>
      <p>Encourage customers to create content featuring your products or services. User-generated content builds trust and authenticity more effectively than traditional advertising.</p>

      <h2>4. Personalize Your Approach</h2>
      <p>Use data analytics to understand your audience's preferences and tailor content to specific segments. Personalization increases engagement and conversion rates.</p>

      <h2>5. Invest in Social Commerce</h2>
      <p>With integrated shopping features on most platforms, make it easy for customers to purchase directly through social media. Streamline the buying process to reduce friction.</p>

      <h2>Conclusion</h2>
      <p>Successful social media marketing in 2025 requires authenticity, engagement, and strategic use of platform features. Focus on building relationships rather than just broadcasting messages.</p>
    `,
    thumbnail: "/social-media-trends-2025.jpg",
    createdAt: "2025-01-05T09:00:00Z",
    updatedAt: "2025-01-05T09:00:00Z",
  },
  {
    id: "4",
    title: "Building Scalable Web Applications with Next.js",
    slug: "building-scalable-web-apps-nextjs",
    description:
      "A comprehensive guide to architecting and building scalable, performant web applications using Next.js and modern best practices.",
    content: `
      <h2>Introduction</h2>
      <p>Next.js has become the go-to framework for building modern web applications. Learn how to leverage its features to create scalable, high-performance apps.</p>

      <h2>1. Understanding Next.js App Router</h2>
      <p>The App Router introduces a new paradigm for building Next.js applications with improved performance, better developer experience, and more intuitive routing.</p>

      <h2>2. Server Components vs Client Components</h2>
      <p>Understanding when to use Server Components and Client Components is crucial for optimal performance. Server Components reduce client-side JavaScript and improve initial load times.</p>

      <h2>3. Data Fetching Strategies</h2>
      <p>Next.js offers multiple data fetching approaches: server-side rendering, static site generation, and incremental static regeneration. Choose the right strategy based on your needs.</p>

      <h2>4. Optimizing Performance</h2>
      <p>Utilize Next.js built-in optimizations like automatic code splitting, image optimization, and font optimization to ensure your application loads fast.</p>

      <h2>5. Deployment and Scaling</h2>
      <p>Deploy your Next.js application on platforms like Vercel for seamless scaling, edge functions, and automatic optimizations. Monitor performance and adjust as needed.</p>

      <h2>Conclusion</h2>
      <p>Next.js provides a powerful foundation for building scalable web applications. By following best practices and leveraging its features, you can create fast, reliable, and maintainable applications.</p>
    `,
    thumbnail: "/scalable-web-applications.png",
    createdAt: "2024-12-28T11:00:00Z",
    updatedAt: "2024-12-28T11:00:00Z",
  },
  {
    id: "5",
    title: "Content Marketing Strategy: A Complete Guide",
    slug: "content-marketing-strategy-complete-guide",
    description:
      "Master the art of content marketing with this comprehensive guide covering strategy, creation, distribution, and measurement.",
    content: `
      <h2>Introduction</h2>
      <p>Content marketing is essential for building brand authority, attracting organic traffic, and nurturing customer relationships. Here's how to develop an effective strategy.</p>

      <h2>1. Define Your Goals and Audience</h2>
      <p>Start by clearly defining what you want to achieve and who you're trying to reach. Create detailed buyer personas to guide your content creation.</p>

      <h2>2. Conduct Content Audits</h2>
      <p>Analyze your existing content to identify gaps, opportunities, and what's performing well. Use these insights to inform your content strategy.</p>

      <h2>3. Create a Content Calendar</h2>
      <p>Plan your content in advance with a comprehensive calendar that aligns with business goals, seasonal trends, and audience interests.</p>

      <h2>4. Diversify Content Formats</h2>
      <p>Don't limit yourself to blog posts. Experiment with videos, infographics, podcasts, ebooks, and interactive content to reach different audience segments.</p>

      <h2>5. Measure and Optimize</h2>
      <p>Track key metrics like traffic, engagement, conversions, and ROI. Use data to continuously refine your strategy and improve results.</p>

      <h2>Conclusion</h2>
      <p>A well-executed content marketing strategy builds trust, drives traffic, and converts visitors into customers. Focus on providing genuine value and consistently delivering quality content.</p>
    `,
    thumbnail: "/content-marketing-strategy.jpg",
    createdAt: "2024-12-20T13:00:00Z",
    updatedAt: "2024-12-20T13:00:00Z",
  },
  {
    id: "6",
    title: "TypeScript Best Practices for React Developers",
    slug: "typescript-best-practices-react-developers",
    description:
      "Essential TypeScript patterns and best practices to write type-safe, maintainable React applications.",
    content: `
      <h2>Introduction</h2>
      <p>TypeScript has become the standard for building robust React applications. Learn the best practices that will make your code more reliable and maintainable.</p>

      <h2>1. Proper Type Definitions</h2>
      <p>Define clear, specific types for your components, props, and state. Avoid using 'any' type unless absolutely necessary, as it defeats the purpose of TypeScript.</p>

      <h2>2. Leverage Type Inference</h2>
      <p>TypeScript's type inference is powerful. Let it work for you instead of explicitly typing everything. This makes code cleaner and more maintainable.</p>

      <h2>3. Use Generics Effectively</h2>
      <p>Generics allow you to write reusable, type-safe components and functions. Master this concept to create flexible, well-typed utilities.</p>

      <h2>4. Strict Mode Configuration</h2>
      <p>Enable TypeScript's strict mode to catch more potential errors at compile time. This includes strictNullChecks, noImplicitAny, and other helpful checks.</p>

      <h2>5. Type Your API Responses</h2>
      <p>Create interfaces for API responses to ensure type safety throughout your data flow. Use tools like Zod for runtime validation.</p>

      <h2>Conclusion</h2>
      <p>TypeScript enhances React development by catching errors early and improving code documentation. Follow these practices to maximize its benefits.</p>
    `,
    thumbnail: "/typescript-react-best-practices.png",
    createdAt: "2024-12-15T15:30:00Z",
    updatedAt: "2024-12-15T15:30:00Z",
  },
]

// Helper functions for blog operations
export function getAllBlogs(): Blog[] {
  return mockBlogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return mockBlogs.find((blog) => blog.slug === slug)
}

export function getBlogById(id: string): Blog | undefined {
  return mockBlogs.find((blog) => blog.id === id)
}

export function searchBlogs(query: string): Blog[] {
  const lowercaseQuery = query.toLowerCase()
  return mockBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.description.toLowerCase().includes(lowercaseQuery) ||
      blog.content.toLowerCase().includes(lowercaseQuery),
  )
}
