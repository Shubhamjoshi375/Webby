"use client"

import { useState } from "react"

export default function CTASection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Email submitted: ${email}`)
    setEmail("")
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s build something amazing
        </h2>
        <p className="mb-8 text-lg">
          We’re here to help you turn your vision into reality. Let’s talk.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full text-gray-800 w-full sm:w-auto flex-1"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium"
          >
            Let’s Talk
          </button>
        </form>
      </div>
    </section>
  )
}
