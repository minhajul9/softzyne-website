import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white px-2">
      <div className=" container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 col-span-2 md:col-span-1 text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/images/logo-fb-dp-removebg-preview.png"
                alt="Softzyne"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-semibold text-lg">Softzyne</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional web development and digital marketing solutions to grow your business.
            </p>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <a
                href="https://www.facebook.com/softzyne"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/softzyne-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/softzyne/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Blogs", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">Web Development</li>
              <li className="text-sm text-gray-400">Digital Marketing</li>
              <li className="text-sm text-gray-400">E-commerce Website</li>
              <li className="text-sm text-gray-400">WordPress Website</li>
              <li className="text-sm text-gray-400">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4 text-center md:text-start">Contact Us</h3>
            <ul className="space-y-3 px-10 md:px-0">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+880 1886-557070</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@softzyne.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>A.R. Garden, Amanat Ullah Road, Pahartali, Chittagong, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Softzyne Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
