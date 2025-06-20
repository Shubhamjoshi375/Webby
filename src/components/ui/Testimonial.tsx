"use client"
import React from "react"

const testimonials = [
  {
    name: "Aman Singh",
    feedback: "This platform completely changed our business for the better!",
  },
  {
    name: "Sneha Patel",
    feedback: "Incredible features and super easy to use. Highly recommend!",
  },
]

export default function Testimonial() {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="mb-2">"{t.feedback}"</p>
            <p className="text-right font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}