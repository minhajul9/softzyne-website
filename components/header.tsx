"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname()
  const isHome = pathname === "/"

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    // { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isFooterVisible = footerRect.top < window.innerHeight
        setIsVisible(!isFooterVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-100 w-full border-b border-border/40 bg-background/95   transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"} px-2 ${isHome && !isScrolled
        ? "bg-transparent border-transparent"
        : "bg-background backdrop-blur border-b border-border/40"}`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-fb-dp-removebg-preview.png"
            alt="Softzyne Digital Solutions"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className={`font-semibold text-lg hidden sm:inline-block transition-colors duration-500 ease-in-out ${isHome && !isScrolled
            ? "text-white"
            : "text-foreground"}`}>
            Softzyne Digital Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-md font-medium hover:text-foreground transition-colors ${pathname == link.href ? "text-brand-orange" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md font-medium hover:text-foreground transition-colors ${pathname == link.href ? "text-brand-orange" : "text-muted-foreground"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
