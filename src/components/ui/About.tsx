"use client";

import Image from "next/image";
import { PhoneCall, ArrowRight } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-text">
          <p className="about-subtitle">Lorem ipsum dolor sit</p>
          <h2 className="about-heading">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
            Mi porttitor ut aliquam mattis maecenas eget integer in nam.
            Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>

          {/* 3 Info Items */}
          <div className="about-info-list">
            {[
              {
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
                src: "/images/about1.jpeg",
              },
              {
                text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
                src: "/images/about2.jpeg",
              },
              {
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
                src: "/images/about3.jpeg",
              },
            ].map((item, i) => (
              <div key={i} className="about-info-item">
                <Image src={item.src} alt="Info" width={80} height={80} className="about-img" />
                <p className="about-info-text">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about-cta">
            <button className="about-button">
              Loerum Ipsum <ArrowRight size={16} />
            </button>
            <div className="about-phone">
              <PhoneCall size={18} />
              <span>123456789</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <Image src="/images/about ri.jpeg" alt="Bikes" width={600} height={500} className="bike-img" />
        </div>
      </div>
    </section>
  );
}
