# Softzyne Digital Solutions Website

A modern, full-stack company website built with Next.js 15, featuring a complete admin panel for content management.

## Features

- **Public Website**
  - Animated hero carousel with background videos
  - Services showcase (8 services)
  - About page with founding team information
  - Blog system with categories and search
  - Contact form
  - Fully responsive design

- **Admin Panel**
  - Secure authentication
  - Dashboard with analytics
  - Full CRUD operations for:
    - Services
    - Clients
    - Digital Partners
    - Blog Posts
    - Users
  - Contact form submissions management

## Current Setup (Development/Demo)

The project currently uses **mock data** stored in memory for demonstration purposes:
- Mock authentication (`admin@softzyne.com` / `admin123`)
- Mock database operations
- All data resets on server restart

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui components
- **Mock Data:** In-memory storage (development only)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

4. Access admin panel at [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
   - Email: `admin@softzyne.com`
   - Password: `admin123`

## Upgrading to Production

To use this project in production with real data persistence:

1. **Add PostgreSQL Database** (Neon, Supabase, or Vercel Postgres)
2. **Implement Auth.js** (NextAuth v5) for secure authentication
3. **Set up Prisma ORM** for database operations
4. **Configure image uploads** (Vercel Blob or similar)

See [UPGRADE-TO-PRODUCTION.md](./UPGRADE-TO-PRODUCTION.md) for detailed migration instructions.

## Project Structure

```
app/
├── (public pages)
│   ├── page.tsx              # Home page
│   ├── about/                # About page
│   ├── services/             # Services page
│   ├── blog/                 # Blog listing & posts
│   └── contact/              # Contact page
├── admin/                    # Admin panel
│   ├── login/                # Admin login
│   ├── services/             # Services management
│   ├── clients/              # Clients management
│   ├── partners/             # Partners management
│   ├── blogs/                # Blogs management
│   └── users/                # Users management
components/
├── ui/                       # shadcn/ui components
├── header.tsx                # Site header
├── footer.tsx                # Site footer
├── admin-nav.tsx             # Admin navigation
└── admin-guard.tsx           # Route protection
lib/
├── mock-auth.ts              # Mock authentication (replace with Auth.js)
├── mock-db.ts                # Mock database (replace with Prisma)
├── blog-data.ts              # Blog posts data
└── utils.ts                  # Utility functions
```

## Environment Variables (Production)

Create `.env` file with:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
AUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"

# Optional: Image uploads
BLOB_READ_WRITE_TOKEN="your-token"
```

## Features Roadmap

- [x] Public website with animations
- [x] Blog system
- [x] Admin panel with mock data
- [ ] PostgreSQL + Prisma integration
- [ ] Auth.js authentication
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] SEO optimization

## Company Information

**Softzyne Digital Solutions** is a digital agency specializing in web development and digital marketing.

### Founding Members

1. **Amdadul Hoque** - Founder & COO
   - BSc in CSE from IIUC

2. **Minhaj Ul Islam Chowdhury** - Co-Founder & CEO
   - BSc in CSE from PCIU
   - Former IT Executive in Oriental Oil Company Limited

3. **Abdur Rahman Robin** - Associate Founder & Digital Marketing Dept. Head
   - BSc in CSE from IIUC

## License

Copyright © 2025 Softzyne Digital Solutions. All rights reserved.

## Support

For technical support or inquiries:
- Email: info@softzyne.com
- Website: Coming soon
