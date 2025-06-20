"use client"
import React from "react"

export default function AppPromo() {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
        <p className="mb-6">Get access on iOS and Android with all features included.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded">App Store</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Google Play</button>
        </div>
      </div>
    </section>
  )
}
