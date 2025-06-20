// components/ui/HeroSection.tsx
"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white">
      {/* Left */}
      <div className="w-full md:w-1/2 p-10 space-y-6 z-10">
        <h1 className="text-5xl font-bold text-black">Lorem ipsum dolor<br />sit amet</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 px-4 border border-gray-300 rounded-md"
          />
          <button className="h-12 px-6 bg-blue-600 text-white rounded-md flex items-center gap-2">
            Submit <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block relative w-1/2 h-full">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
