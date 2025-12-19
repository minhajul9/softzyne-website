"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, FileText, Briefcase, Users, Handshake, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setAuthenticated } from "@/lib/mock-auth"
import Image from "next/image"

export function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/services", label: "Services", icon: Briefcase },
    { href: "/admin/clients", label: "Clients", icon: Users },
    { href: "/admin/partners", label: "Digital Partners", icon: Handshake },
    { href: "/admin/blogs", label: "Blogs", icon: FileText },
    { href: "/admin/users", label: "Users", icon: Settings },
  ]

  const handleLogout = () => {
    setAuthenticated(false)
    router.push("/admin/login")
  }

  return (
    <aside className="w-64 bg-brand-blue text-white min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <Image src="/images/logo-fb-dp-removebg-preview.png" alt="Softzyne" width={48} height={48} className="mb-3" />
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <p className="text-sm text-white/80">Softzyne Digital</p>
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-white text-brand-blue" : "text-white/80 hover:bg-white/10"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="pt-4 border-t border-white/20">
        <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10" onClick={handleLogout}>
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
