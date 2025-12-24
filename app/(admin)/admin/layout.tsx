"use client"

import type React from "react"

import { AdminNav } from "@/components/admin-nav"
import { AdminGuard } from "@/components/admin-guard"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <div className="flex min-h-screen">
        <AdminNav />
        <main className="flex-1 bg-background">{children}</main>
      </div>
    </AdminGuard>
  )
}
