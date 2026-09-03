import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { SITE } from "@/lib/data";

// One consistent CTA block used across every page.
// Gold background, navy text, navy primary + white secondary buttons.
export default function CTASection({
  title = "Ready to Land Your Dream Job?",
  text = "A professionally crafted resume, an optimized LinkedIn profile, and expert interview coaching, all tailored to your career goals.",
  primaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryLabel = "Call Us Now",
  secondaryHref = null, // defaults to tel: below
  secondaryBlank = false,
}) {
  const secHref = secondaryHref || `tel:${SITE.phoneHref}`;
  const isInternal = (h) => typeof h === "string" && h.startsWith("/");
  return (
    <section className="section cta-band"><div className="wrap" style={{ textAlign: "center" }}>
      <Reveal>
        <h2 className="sec-title" style={{ color: "var(--navy)" }}>{title}</h2>
        <div className="sec-rule" />
        <p style={{ color: "var(--navy)", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>{text}</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {isInternal(primaryHref)
            ? <Link className="btn btn-cta-primary" href={primaryHref}>{primaryLabel} &rarr;</Link>
            : <a className="btn btn-cta-primary" href={primaryHref}>{primaryLabel} &rarr;</a>}
          {isInternal(secHref)
            ? <Link className="btn btn-cta-secondary" href={secHref}>{secondaryLabel}</Link>
            : <a className="btn btn-cta-secondary" href={secHref} {...(secondaryBlank ? { target: "_blank", rel: "noreferrer" } : {})}>{secondaryLabel}</a>}
        </div>
      </Reveal>
    </div></section>
  );
}
