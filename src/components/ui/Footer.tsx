"use client"

import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2025 WebbyWolf. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#services" className="hover:underline">Services</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
