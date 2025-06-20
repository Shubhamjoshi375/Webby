"use client"

export default function TrustedSection() {
  const companies = [
    "/logo1.svg",
    "/logo2.svg",
    "/logo3.svg",
    "/logo4.svg",
    "/logo5.svg",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-600 mb-8">
          Companies around the globe use our platform to scale faster.
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companies.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Company ${idx + 1}`}
              className="h-10 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
