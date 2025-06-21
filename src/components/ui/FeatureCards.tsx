// components/ui/FeatureCards.tsx
"use client";

import Image from "next/image";
import "./FeatureCards.css";

const features = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur faucibus ultrices. Nisi. Nunc montes molestie et vitae suscipit neque. Phasellus in pulvinar vel vitae. Et velit lectus nec. Et. Liber laucuis diam nam mauris at eget. Com enim rhoncus enim venenatis bibendum.",
    image: "/images/feature1.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur faucibus ultrices. Nisi. Nunc montes molestie et vitae suscipit neque. Phasellus in pulvinar vel vitae. Et velit lectus nec. Et. Liber laucuis diam nam mauris at eget. Com enim rhoncus enim venenatis bibendum.",
    image: "/images/feature2.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur faucibus ultrices. Nisi. Nunc montes molestie et vitae suscipit neque. Phasellus in pulvinar vel vitae. Et velit lectus nec. Et. Liber laucuis diam nam mauris at eget. Com enim rhoncus enim venenatis bibendum.",
    image: "/images/feature3.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur faucibus ultrices. Nisi. Nunc montes molestie et vitae suscipit neque. Phasellus in pulvinar vel vitae. Et velit lectus nec. Et. Liber laucuis diam nam mauris at eget. Com enim rhoncus enim venenatis bibendum.",
    image: "/images/feature4.jpeg",
  },
];

export default function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        {/* Headings */}
        <p className="feature-cards-subtitle">Lorem ipsum dolor sit amet</p>
        <h2 className="feature-cards-title">LOREM IPSUM DOLOR SIT</h2>
        <p className="feature-cards-description">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
          Mi porttitor ut aliquam mattis maecenas eget integer in nam.
          Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>

        {/* Grid */}
        <div className="feature-cards-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <Image
                src={feature.image}
                alt="Feature"
                width={600}
                height={300}
              />
              <div className="feature-card-content">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-text">{feature.desc}</p>
                <a href="#" className="feature-card-link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
