"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { HERO_SLIDES, SITE } from "@/lib/data";

export default function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const n = HERO_SLIDES.length;
  const go = useCallback((i) => setCur((i + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % n), 6500);
    return () => clearInterval(t);
  }, [n]);

  const s = HERO_SLIDES[cur];

  return (
    <section className="hero" id="home">
      <div className="slides">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === cur ? "on" : ""}`}
            style={{ backgroundImage: `url('${slide.src}')` }}
            role="img"
            aria-label={slide.eyebrow}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      {/* desktop-only hover arrows, no dots */}
      <button className="hero-arrow prev" onClick={() => go(cur - 1)} aria-label="Previous image">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button className="hero-arrow next" onClick={() => go(cur + 1)} aria-label="Next image">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      <div className="hero-inner"><div className="wrap">
        {/* key={cur} re-triggers the fade animation on every slide change */}
        <div className="hero-text" key={cur}>
          <span className="hero-eyebrow">{s.eyebrow}</span>
          <h1>{s.heading} <em>{s.em}</em></h1>
          <p className="sub">{s.sub}</p>
        </div>
        <div className="hero-actions">
          <Link className="btn bw" href="/services">Get Started &rarr;</Link>
          <Link className="btn bgl" href="/reviews">View Samples</Link>
        </div>
        <div className="hero-badges">
          <span className="hbadge"><strong>1000+</strong> CVs Delivered</span>
          <span className="hbadge"><strong>UK</strong> Career Experts</span>
          <span className="hbadge"><strong>40+</strong> Countries Served</span>
        </div>
      </div></div>
    </section>
  );
}
