// components/ui/HeroSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
import "./HeroSection.css"; // Make sure to create this CSS file

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* ======== Navbar ======== */}
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="nav-links">
          <a href="#">Lorem Ipsum ▾</a>
          <a href="#">Lorem Ipsum ▾</a>
          <a href="#">Lorem Ipsum ▾</a>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>

      {/* ======== Background Image Clipped ======== */}
      <div className="clipped-image" />

      {/* ======== Hero Content ======== */}
      <div className="hero-content">
        <h1 className="hero-heading">
          Lorem ipsum dolor <br /> sit amet
        </h1>

        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
          Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
          Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
        </p>

        <div className="form-row">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="submit-btn">
            Submit <ArrowRight size={16} />
          </button>
        </div>

        <div className="info-text">
          <div className="check-icon">✔</div>
          No credit card required!
        </div>
      </div>
    </section>
  );
}
