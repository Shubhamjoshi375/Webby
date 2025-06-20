"use client"
import React from "react"

export default function QuoteForm() {
  return (
    <section className="p-8 bg-white" id="quote">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded px-4 py-2"
          />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
    