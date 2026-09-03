"use client";
import { useState } from "react";
import { FLAGS, SITE } from "@/lib/data";

export function FlagsMarquee() {
  // Duplicate enough times so the track is always wider than any viewport,
  // removing the mid-loop gap. The keyframe scrolls by -50% so the second half
  // mirrors the first for a seamless loop.
  const REPEAT = 6;
  const half = Array.from({ length: REPEAT }, () => FLAGS).flat();
  const items = [...half, ...half]; // two identical halves => seamless -50% loop
  return (
    <div className="flags-bar">
      <span className="flags-label">Trusted by professionals across 40+ countries</span>
      <div className="flags-track-wrap">
        <div className="flags-track">
          {items.map((f, i) => (
            <div className="flag-item" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://flagcdn.com/w80/${f.code}.png`} srcSet={`https://flagcdn.com/w160/${f.code}.png 2x`} alt={`${f.name} flag`} width="48" height="32" loading="lazy" />
              <span className="fn">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="wa" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.2-.6-2-1.1-2.9-2.5-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5 0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3z"/></svg>
    </a>
  );
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {f.q}<span className="pl">+</span>
          </button>
          <div className="faq-a"><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  );
}
