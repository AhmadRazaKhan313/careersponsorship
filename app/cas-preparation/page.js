import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import {
  SITE,
  PAGE_HEROES,
  CAS_CHECKLIST,
  CAS_NEED,
  CAS_PROCESS,
  CAS_GUIDANCE,
  CAS_WHY_CHOOSE,
  CAS_PACKAGES,
  CAS_FAQS,
} from "@/lib/data";

export const metadata = {
  title: "CAS Preparation 2026, UK Student Visa CAS & Document Support",
  description:
    "Expert CAS preparation for UK Student visa applicants. Document checklists, 28-day financial rule guidance, university liaison and visa application support from Career Sponsorship.",
  alternates: { canonical: "/cas-preparation" },
  openGraph: {
    title: "CAS Preparation | Career Sponsorship",
    description:
      "Confirmation of Acceptance for Studies (CAS) and UK Student visa preparation support, document checks and financial evidence guidance.",
    url: `${SITE.url}/cas-preparation`,
  },
};

const whatsappHref = (msg) => `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const MORE_MSG = "Hi Career Sponsorship, I would like to know more about CAS Preparation.";

export default function CasPreparationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CAS Preparation Support",
    serviceType: "UK Student Visa CAS Preparation",
    description:
      "CAS and UK Student visa preparation support, covering document checklists, financial evidence and university liaison.",
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    url: `${SITE.url}/cas-preparation`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CAS_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero
        crumb="CAS Preparation"
        eyebrow="CAS Preparation 2026"
        title="Get Your CAS Right, First Time, for Your UK Student Visa"
        sub="From document checklists to the 28-day financial rule, Career Sponsorship guides you through every stage of getting your Confirmation of Acceptance for Studies and preparing a strong, refusal-proof UK Student visa application."
        image={PAGE_HEROES.cas}
        primaryCta={{ label: "Start Your CAS Preparation", href: whatsappHref("Hi Career Sponsorship, I would like to start my CAS Preparation.") }}
        secondaryCta={{ label: "Book Free Consultation", href: "#contact" }}
      />

      {/* PROFESSIONS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Before Your CAS Is Issued</div>
          <h2 className="sec-title">Your CAS Document Checklist</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Universities check a specific set of documents before issuing your CAS. Here&apos;s everything you need in place.</p>
        </Reveal>
        <div className="g4">
          {CAS_CHECKLIST.map((p) => (
            <Reveal key={p.title}>
              <a href="#contact" className="svc">
                <div className="ic"><Icon name={p.icon} size={26} /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="more">Learn More &rarr;</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* WHY YOU NEED OET */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Why It Matters</div>
          <h2 className="sec-title">Why You Need a Valid CAS</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Your CAS is the foundation of your UK Student visa application, and small mistakes on it are one of the most common causes of refusal.</p>
        </Reveal>
        <div className="g4">
          {CAS_NEED.map((v) => (
            <Reveal key={v.title}>
              <div className="val">
                <div className="ic"><Icon name={v.icon} size={26} /></div>
                <h3>{v.title}</h3><p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* PROCESS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">How It Works</div>
          <h2 className="sec-title">Our CAS Preparation Process</h2>
          <div className="sec-rule" />
          <p className="sec-intro">A clear, six-stage process, from accepting your offer through to a submitted, refusal-proof Student visa application.</p>
        </Reveal>
        <div className="steps">
          {CAS_PROCESS.map((p) => (
            <Reveal key={p.n}><div className="step">
              <div className="sn">{p.n}</div><h3>{p.title}</h3><p>{p.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* GUIDANCE */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Our Support</div>
          <h2 className="sec-title">How Career Sponsorship Helps You</h2>
          <div className="sec-rule" />
          <p className="sec-intro">From your offer letter to your visa decision, we guide you through every stage of CAS and visa preparation.</p>
        </Reveal>
        <div className="g3">
          {CAS_GUIDANCE.map((g) => (
            <Reveal key={g.title}><div className="svc">
              <div className="ic"><Icon name={g.icon} size={26} /></div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* WHY CHOOSE */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Why Us</div>
          <h2 className="sec-title">Why Choose Career Sponsorship</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Immigration-aware consultants dedicated to getting your CAS and visa application right, the first time.</p>
        </Reveal>
        <div className="g3">
          {CAS_WHY_CHOOSE.map((w) => (
            <Reveal key={w.title}><div className="svc">
              <div className="ic"><Icon name={w.icon} size={26} /></div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <a className="more" href={whatsappHref(MORE_MSG)} target="_blank" rel="noreferrer">More &rarr;</a>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* PACKAGES */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">Investment</div><h2 className="sec-title">Choose Your CAS Package</h2><div className="sec-rule" /></Reveal>
        <div className="pgrid">
          {CAS_PACKAGES.map((p) => (
            <Reveal key={p.name}>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(p.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className={`plan plan-link ${p.popular ? "pop" : ""}`}
              >
                <div className="ph">
                  {p.popular && <div className="popb">Most Popular</div>}
                  <div className="tier">{p.name}</div>
                  <h3>{p.tag}</h3>
                  <div className="pr">{p.price} <small>/ package</small></div>
                  <div className="svc-plan-meta">
                    <span>{p.delivery}</span><span>&middot;</span><span>{p.revisions}</span>
                  </div>
                </div>
                <ul>
                  {p.features.map(([f, on], i) => (
                    <li key={i} className={on ? "" : "off"}>
                      <span className={`tick ${on ? "" : "no"}`}>
                        {on
                          ? <Icon name="check" size={10} sw={2.4} />
                          : <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M2 2l4 4M6 2L2 6" /></svg>}
                      </span> {f}
                    </li>
                  ))}
                </ul>
                <div className="pf">
                  <span className={`btn plan-btn ${p.popular ? "plan-btn-primary" : "plan-btn-outline"}`}>Message Us on WhatsApp &rarr;</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* FAQ */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Questions</div>
          <h2 className="sec-title">Frequently Asked Questions</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Answers to the most common questions about CAS and the UK Student visa application process.</p>
        </Reveal>
        <Reveal><FAQ items={CAS_FAQS} /></Reveal>
      </div></section>

      {/* CONTACT */}
      <section className="section cream" id="contact"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Get In Touch</div>
          <h2 className="sec-title">Need Help With CAS Preparation?</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Speak with our CAS and visa consultants today.</p>
        </Reveal>
        <div className="ct-grid">
          <Reveal><a className="ct-card" href={`tel:${SITE.phoneHref}`}>
            <div className="ci"><Icon name="phone" size={24} sw={1.7} /></div>
            <h4>Call Us</h4><div className="v">{SITE.phone}</div><div className="sub">Mon&ndash;Fri, 9AM&ndash;6PM</div>
          </a></Reveal>
          <Reveal><a className="ct-card" href={`mailto:${SITE.email}`}>
            <div className="ci"><Icon name="mail" size={24} sw={1.7} /></div>
            <h4>Email Us</h4><div className="v">{SITE.email}</div><div className="sub">Response within 24h</div>
          </a></Reveal>
          <Reveal><a className="ct-card" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <div className="ci"><Icon name="chat" size={24} sw={1.7} /></div>
            <h4>WhatsApp</h4><div className="v">{SITE.phone}</div><div className="sub">Quickest response</div>
          </a></Reveal>
          <Reveal><div className="ct-card">
            <div className="ci"><Icon name="pin" size={24} sw={1.7} /></div>
            <h4>Visit Us</h4><div className="v">London, W1W 7LT</div><div className="sub">Great Portland Street</div>
          </div></Reveal>
        </div>
        <Reveal><ContactForm /></Reveal>
      </div></section>

      {/* CTA */}
      <section className="section cta-band"><div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <h2 className="sec-title" style={{ color: "var(--navy)" }}>Start Your CAS &amp; Visa Journey Today</h2>
          <div className="sec-rule" />
          <p style={{ color: "var(--navy)", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>
            Whatever stage you are at, our CAS consultants are ready to help. Message us on WhatsApp and let&apos;s get your visa application moving.
          </p>
          <a className="btn btn-cta-primary" href={whatsappHref("Hi Career Sponsorship, I would like to start my CAS and visa journey.")} target="_blank" rel="noreferrer">
            Chat on WhatsApp &rarr;
          </a>
        </Reveal>
      </div></section>
    </>
  );
}
