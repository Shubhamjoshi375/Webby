"use client";

import Image from "next/image";
import "./InfoSection.css";

export default function InfoSection() {
  return (
    <section className="info-section">
      {/* Top Gradient Line */}
      <div className="gradient-line" />

      <div className="info-container">
        {/* Left Text Section */}
        <div className="info-left">
          <p className="info-subtitle">Lorem ipsum dolor sit amet</p>
          <h2 className="info-heading">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </h2>
          <p className="info-description">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
            condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
            pharetra erat lacus suspendisse ornare.
          </p>

          {/* Bullet Points */}
          <div className="info-list">
            {[1, 2, 3].map((item, i) => (
              <div className="info-item" key={i}>
                <Image
                  src="/images/secton logo.jpeg"
                  alt="icon"
                  width={24}
                  height={24}
                  className="bullet-icon"
                />
                <div>
                  <h4 className="info-item-heading">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                  </h4>
                  <p className="info-item-text">
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                    viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                    vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="info-right">
          <Image
            src="/images/section.jpeg"
            alt="Team"
            width={500}
            height={400}
            className="info-image"
          />
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="gradient-line" />
    </section>
  );
}
