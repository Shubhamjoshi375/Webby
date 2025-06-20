"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

const navItems = [
  { label: "Home", href: "/" },         // Homepage
  { label: "About", href: "/about" },   // Redirect to separate About page
  { label: "Services", href: "#services" },  // Scroll to section (still on same page)
  { label: "Contact", href: "#contact" },
]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-2xl text-primary">Logo</Link>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-gray-700 hover:text-primary transition">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="block py-2 border-b text-gray-700">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
