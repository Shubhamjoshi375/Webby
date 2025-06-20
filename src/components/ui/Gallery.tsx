"use client"
import React from "react"

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"]

export default function Gallery() {
  return (
    <section className="p-8" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-6">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} className="rounded shadow" />
        ))}
      </div>
    </section>
  )
}