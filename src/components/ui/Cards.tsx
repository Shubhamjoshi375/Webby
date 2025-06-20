"use client"
import React from "react"
import { Rocket, Code, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-blue-600" />,
    title: "Launch Fast",
    description: "Get your MVP live in days, not weeks."
  },
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Clean Code",
    description: "We write scalable, maintainable modern code."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: "Growth Focused",
    description: "Built with marketing and growth in mind."
  }
]

export default function Cards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="p-6 border rounded-xl shadow-sm text-center">
            <div className="mb-4 flex justify-center">{icon}</div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}