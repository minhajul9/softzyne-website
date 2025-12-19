# Upgrade to Production: PostgreSQL + Auth.js Migration Guide

This guide will help you migrate from the mock data system to a production-ready setup with PostgreSQL database and Auth.js authentication.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or hosted via Neon/Supabase/Vercel Postgres)
- Basic understanding of Prisma ORM

## Step 1: Install Dependencies

```bash
npm install prisma @prisma/client @auth/core @auth/nextjs bcryptjs
npm install -D @types/bcryptjs
```

## Step 2: Set Up Prisma

Initialize Prisma in your project:

```bash
npx prisma init
```

This creates:
- `prisma/schema.prisma` - Database schema file
- `.env` - Environment variables file

## Step 3: Configure Database Connection

Update your `.env` file with your PostgreSQL connection string:

```env
# PostgreSQL connection string
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

# For Neon:
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require"

# For local PostgreSQL:
DATABASE_URL="postgresql://postgres:password@localhost:5432/softzyne_db"

# Auth.js secret (generate with: openssl rand -base64 32)
AUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

## Step 4: Define Prisma Schema

Replace the content of `prisma/schema.prisma` with:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      String   @default("user")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  blogs     BlogPost[]
}

model Service {
  id          String   @id @default(cuid())
  title       String
  description String   @db.Text
  image       String
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Client {
  id        String   @id @default(cuid())
  name      String
  logo      String
  website   String?
  createdAt DateTime @default(now())
}

model Partner {
  id        String   @id @default(cuid())
  name      String
  logo      String
  website   String?
  createdAt DateTime @default(now())
}

model BlogPost {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  excerpt     String   @db.Text
  content     String   @db.Text
  category    String
  tags        String[]
  image       String
  readTime    String
  publishedAt String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
}

model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  message   String   @db.Text
  createdAt DateTime @default(now())
}
```

## Step 5: Run Prisma Migrations

Create and apply the database schema:

```bash
# Create migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```

## Step 6: Seed Initial Data

Create `prisma/seed.ts`:

```typescript
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@softzyne.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    },
  })

  // Create initial services
  await prisma.service.createMany({
    data: [
      {
        title: 'Web Development',
        description: 'Custom websites and web applications',
        image: '/web-development-service.jpg',
        order: 1,
      },
      {
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies',
        image: '/digital-marketing-service.jpg',
        order: 2,
      },
    ],
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

Add to `package.json`:

```json
{
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  }
}
```

Run seed:

```bash
npx prisma db seed
```

## Step 7: Set Up Auth.js (NextAuth v5)

Create `lib/auth.ts`:

```typescript
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })

        if (!user) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!passwordMatch) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login",
  }
})
```

Create API route `app/api/auth/[...nextauth]/route.ts`:

```typescript
import { handlers } from "@/lib/auth"

export const { GET, POST } = handlers
```

## Step 8: Create Middleware for Protected Routes

Create `middleware.ts` in the root:

```typescript
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")
  const isLoginPage = req.nextUrl.pathname === "/admin/login"

  if (isAdminRoute && !isLoginPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*"]
}
```

## Step 9: Update Admin Login Page

Replace `app/admin/login/page.tsx` with:

```typescript
"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
// ... rest of your login component
// Replace validateCredentials with signIn() from next-auth
```

## Step 10: Replace Mock Database Functions

Replace all `lib/mock-db.ts` imports with Prisma Client:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Example: Services CRUD
export const servicesDB = {
  getAll: () => prisma.service.findMany({ orderBy: { order: 'asc' } }),
  getById: (id: string) => prisma.service.findUnique({ where: { id } }),
  create: (data) => prisma.service.create({ data }),
  update: (id: string, data) => prisma.service.update({ where: { id }, data }),
  delete: (id: string) => prisma.service.delete({ where: { id } }),
}
```

## Step 11: Update Admin Components

Update all admin pages to use async server components or server actions instead of client-side state for CRUD operations.

## Step 12: Test the Migration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test admin login at `/admin/login`
3. Test CRUD operations in each admin section
4. Verify data persistence

## Step 13: Deploy to Production

1. Push to GitHub
2. Deploy to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `AUTH_SECRET`
   - `NEXTAUTH_URL`

## Troubleshooting

### Database Connection Issues
- Verify your DATABASE_URL is correct
- Check if your database allows external connections
- For Neon, ensure SSL mode is enabled

### Auth Issues
- Regenerate AUTH_SECRET if you get authentication errors
- Check NEXTAUTH_URL matches your deployment URL

### Migration Errors
- Run `npx prisma migrate reset` to reset database (WARNING: deletes all data)
- Use `npx prisma studio` to view database contents

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Auth.js Documentation](https://authjs.dev)
- [Neon Database Guide](https://neon.tech/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## Support

For issues specific to this migration, refer to the Softzyne documentation or contact the development team.
