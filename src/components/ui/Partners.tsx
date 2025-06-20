"use client"
import React from "react"

const partners = ["Google", "Facebook", "Netflix", "Airbnb"]

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-lg font-semibold mb-8">Trusted by teams at</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-gray-500 text-lg font-medium opacity-80 hover:opacity-100 transition"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}