"use client"

import { useState } from "react"
import Link from "next/link"

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
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: "#004aad"}}>
              <span className="text-white font-bold text-sm">ND</span>
            </div>
            <span className="font-bold text-xl font-heading hidden sm:block" style={{color: "#004aad"}}>
              NFL Draft Database
            </span>
            <span className="font-bold text-lg font-heading sm:hidden" style={{color: "#004aad"}}>NFLDD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 font-medium transition-colors hover:text-blue-600"
                style={{"--hover-color": "#004aad"} as React.CSSProperties}
                onMouseOver={(e) => e.currentTarget.style.color = "#004aad"}
                onMouseOut={(e) => e.currentTarget.style.color = "#6b7280"}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors" onMouseOver={(e) => e.currentTarget.style.color = "#004aad"} onMouseOut={(e) => e.currentTarget.style.color = "#6b7280"}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
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
                  className="block px-3 py-2 text-gray-600 font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                  onMouseOver={(e) => e.currentTarget.style.color = "#004aad"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#6b7280"}
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
