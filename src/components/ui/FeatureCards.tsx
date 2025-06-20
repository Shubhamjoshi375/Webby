"use client"
import React from "react"

const features = [
  { title: "Speed", desc: "Fast performance across the board." },
  { title: "Security", desc: "Top-notch protection for your data." },
  { title: "Support", desc: "24/7 customer support included." },
]

export default function FeatureCards() {
  return (
    <section className="p-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}