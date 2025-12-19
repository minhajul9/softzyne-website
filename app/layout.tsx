import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Softzyne Digital Solutions - Web Development & Digital Marketing",
  description:
    "Professional web development and digital marketing services. We create innovative digital solutions for your business.",
  generator: "v0.app",
  keywords: ["web development", "digital marketing", "software solutions", "SEO", "web design"],
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
