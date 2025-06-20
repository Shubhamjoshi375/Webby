"use client"

import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias. Molestiae labore quam animi explicabo.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Lorem ipsum dolor sit</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor</li>
          </ul>
          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Read More
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/bike.jpeg"
            alt="About Bike"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
