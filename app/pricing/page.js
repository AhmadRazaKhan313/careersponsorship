import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import CTASection from "@/components/CTASection";
import { PACKAGES, COMPARISON, SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "Pricing, Simple, Transparent Career Service Packages",
  description: "Transparent pricing for Career Sponsorship: Launch (£159), Accelerator (£499) and Elite Placement (£899). Compare features and choose the package that fits your goals. NHS support from £50.",
  alternates: { canonical: "/pricing" },
};

const PRICING_FAQS = [
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal and bank transfers. Payment plans are available for the Elite package on request." },
  { q: "Is there a refund policy?", a: "If you're not satisfied with your initial documents, we offer unlimited revisions until you're happy." },
  { q: "Can I upgrade my package later?", a: "Absolutely, upgrade from Launch to Accelerator or Elite at any time by paying the difference." },
  { q: "Do you offer discounts for students?", a: "Yes! Our Career Sponsorship program supports deserving students. Contact us to learn about eligibility." },
];

function Tick({ on }) {
  return on
    ? <span className="tick"><Icon name="check" size={10} sw={2.4} /></span>
    : <span className="tick no"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M2 2l4 4M6 2L2 6"/></svg></span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero crumb="Pricing" eyebrow="Investment" title="Simple, transparent pricing" sub="Choose the package that fits your career goals. No hidden fees, no surprises, just results." image={PAGE_HEROES.pricing} />

      <section className="section"><div className="wrap">
        <div className="pgrid">
          {PACKAGES.map((p) => (
            <Reveal key={p.name}>
              <Link href="/contact" className={`plan plan-link ${p.popular ? "pop" : ""}`}>
                <div className="ph">
                  {p.popular && <div className="popb">Most Popular</div>}
                  <div className="tier">{p.tier}</div>
                  <h3>{p.name}</h3>
                  <div className="pr">{p.price} <small>/ one-time</small></div>
                </div>
                <ul>
                  {p.features.map(([f, on], i) => (
                    <li key={i} className={on ? "" : "off"}><Tick on={on} /> {f}</li>
                  ))}
                </ul>
                <div className="pf">
                  <span className={`btn plan-btn ${p.popular ? "plan-btn-primary" : "plan-btn-outline"}`}>Get Started &rarr;</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="note"><b>Need financial support?</b> We offer career sponsorship programs for deserving students facing economic challenges. <Link href="/services/career-sponsorship">Learn more &rarr;</Link></p>
      </div></section>

      <section className="section cream"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">Compare</div><h2 className="sec-title">Feature Comparison</h2><div className="sec-rule" /></Reveal>
        <Reveal style={{ overflowX: "auto" }}>
          <table className="ctable">
            <thead><tr><th>Feature</th>{COMPARISON.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
            <tbody>
              {COMPARISON.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  {row.slice(1).map((cell, j) => (
                    <td key={j}>
                      {cell === true ? <span className="yes">✓</span>
                        : cell === false ? <span className="no">✕</span>
                        : <span className="yes">✓<span className="tx">{cell}</span></span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div></section>

      <section className="section"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">Questions</div><h2 className="sec-title">Frequently Asked</h2><div className="sec-rule" /></Reveal>
        <Reveal><FAQ items={PRICING_FAQS} /></Reveal>
      </div></section>

      <CTASection
        title="Have a Custom Requirement?"
        text="We're happy to build a custom package around your goals and the level of support you need."
        primaryLabel="Talk to Us"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref={SITE.whatsapp}
        secondaryBlank
      />
    </>
  );
}
