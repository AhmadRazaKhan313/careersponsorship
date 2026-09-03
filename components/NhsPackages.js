"use client";
import { useState } from "react";
import { NHS, SITE } from "@/lib/data";

export default function NhsPackages() {
  const [selected, setSelected] = useState(NHS.packages.findIndex((p) => p.feat) >= 0 ? NHS.packages.findIndex((p) => p.feat) : 0);
  const pkg = NHS.packages[selected];

  const waLink = () => {
    const msg = `Hello, I am interested in the ${pkg.name} NHS Support Package (${pkg.price}). ${pkg.desc} I would like assistance with NHS job applications. Please review my CV and contact me.`;
    const num = SITE.whatsapp.replace(/[^0-9]/g, "");
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="nhs-card">
      <h3>NHS Support Packages</h3>
      <div className="sub">Select a package, then share your CV on WhatsApp, we&apos;ll include the details for you.</div>
      <div className="nhs-pack">
        {NHS.packages.map((p, i) => (
          <button
            type="button"
            className={`npack npack-btn ${p.feat ? "feat" : ""} ${i === selected ? "sel" : ""}`}
            key={p.name}
            onClick={() => setSelected(i)}
            aria-pressed={i === selected}
          >
            <div>
              <div className="nl">
                <span className="npack-radio" aria-hidden="true" />
                {p.name}{p.feat && <span className="ntag">Full Support</span>}
              </div>
              <div className="nd">{p.desc}</div>
            </div>
            <div className="npr">{p.price}</div>
          </button>
        ))}
      </div>
      <div className="nhs-custom"><b>Need something tailored?</b> {NHS.custom}</div>
      <div className="nhs-cta">
        <a className="btn bp" style={{ width: "100%", justifyContent: "center" }} href={waLink()} target="_blank" rel="noreferrer">
          Share CV via WhatsApp ({pkg.name}) &rarr;
        </a>
      </div>
    </div>
  );
}
