import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
})


export const metadata: Metadata = {
    title: "Softzyne Digital Solutions - Web Development & Digital Marketing",
    description:
        "Professional web development and digital marketing services. We create innovative digital solutions for your business.",
    keywords: ["web development", "digital marketing", "software solutions", "SEO", "web design"],
    icons: {
        icon: "/logo.png",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${poppins.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}