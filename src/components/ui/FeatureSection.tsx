"use client"
import { Rocket, ShieldCheck, Zap } from "lucide-react"

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Fast Performance",
    desc: "Experience lightning-fast load times and seamless browsing."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure by Default",
    desc: "Your data is protected with top-grade security measures."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Built for Scale",
    desc: "Easily handle growth and scale your platform smoothly."
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Powerful Features Built for You
        </h2>
        <p className="text-gray-600 mb-10">
          We provide best-in-class tools to empower your business and drive results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
