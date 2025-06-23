"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/prospects", label: "Prospects" },
    { href: "/blog", label: "Blog" },
    { href: "/mock-draft", label: "Mock Draft" },
    { href: "/teams", label: "Teams" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.svg" alt="NFL Draft Database" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl text-brand-primary font-heading hidden sm:block">
              NFL Draft Database
            </span>
            <span className="font-bold text-lg text-brand-primary font-heading sm:hidden">NFLDD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:text-brand-primary">
              <Search className="h-4 w-4" />
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-brand-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
