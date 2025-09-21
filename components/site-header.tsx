"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Briefcase, Code, Mail, FileText, Download } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  const links = [
    { href: "#about", label: "Sobre Mí", icon: User },
    { href: "#experience", label: "Experiencia", icon: Briefcase },
    { href: "#projects", label: "Proyectos", icon: Code },
    { href: "#skills", label: "Habilidades", icon: FileText },
    { href: "#contact", label: "Contacto", icon: Mail },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full overflow-hidden">
              <Image
                src="/images/oscar-profile.jpg"
                alt="Oscar Antayhua"
                width={20}
                height={20}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold tracking-wide text-white">Oscar Antayhua</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-lime-300 transition-colors"
                onClick={(e) => handleSmoothScroll(e, l.href)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - Removed to reduce saturation */}
          <div className="hidden md:flex">
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-lg px-6 py-2.5"
            >
              <a href="/cv-oscar-antayhua.pdf" className="hover:text-lime-300 transition-colors" download>

                Descargar CV
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <div className="h-6 w-6 rounded-full overflow-hidden">
                    <Image
                      src="/images/oscar-profile.jpg"
                      alt="Oscar Antayhua"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold tracking-wide text-white text-lg">Oscar Antayhua</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                      onClick={(e) => handleSmoothScroll(e, l.href)}
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom - Changed to CV download to reduce contact saturation */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent rounded-lg px-6 py-2.5"
                  >
                    <a href="/cv-oscar-antayhua.pdf" className="hover:text-lime-300 transition-colors" download>

                      Descargar CV
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
