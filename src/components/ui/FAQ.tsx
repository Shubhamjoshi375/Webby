"use client"

import React from "react"

const FAQ = () => {
  const questions = [
    {
      question: "What is WebbyWolf?",
      answer: "WebbyWolf is a platform that offers digital transformation services including design, development, and strategy."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we offer 24/7 support for all our customers and projects."
    },
    {
      question: "How can I contact you?",
      answer: "Use the contact form on the website or email us at support@webbywolf.com."
    }
  ]

  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ