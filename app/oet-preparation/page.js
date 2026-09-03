import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import {
  SITE,
  PAGE_HEROES,
  OET_PROFESSIONS,
  OET_NEED,
  OET_PROCESS,
  OET_GUIDANCE,
  OET_WHY_CHOOSE,
  OET_PACKAGES,
  OET_FAQS,
} from "@/lib/data";

export const metadata = {
  title: "OET Preparation, Occupational English Test Coaching for Healthcare Professionals",
  description:
    "Expert OET preparation for nurses, doctors, dentists, pharmacists and other healthcare professionals. Profession-specific coaching, mock exams and a score improvement guarantee from Career Sponsorship.",
  alternates: { canonical: "/oet-preparation" },
  openGraph: {
    title: "OET Preparation | Career Sponsorship",
    description:
      "Profession-specific OET coaching, mock exams and score improvement guarantee for international healthcare professionals.",
    url: `${SITE.url}/oet-preparation`,
  },
};

const whatsappHref = (msg) => `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const MORE_MSG = "Hi Career Sponsorship, I would like to know more about OET Preparation.";

export default function OetPreparationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OET Preparation Coaching",
    serviceType: "Occupational English Test Preparation",
    description:
      "Profession-specific OET preparation for international healthcare professionals, covering Listening, Reading, Writing and Speaking.",
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    url: `${SITE.url}/oet-preparation`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OET_FAQS.map((f) => ({
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
        crumb="OET Preparation"
        eyebrow="OET Preparation 2026"
        title="Profession-Specific OET Coaching for Healthcare Professionals"
        sub="Reach Grade B with confidence. Career Sponsorship helps nurses, doctors, dentists, pharmacists and other healthcare professionals prepare for the Occupational English Test with real clinical materials, examiner-style feedback and a structured score improvement plan."
        image={PAGE_HEROES.oet}
        primaryCta={{ label: "Start Your OET Preparation", href: whatsappHref("Hi Career Sponsorship, I would like to start my OET Preparation.") }}
        secondaryCta={{ label: "Book Free Consultation", href: "#contact" }}
      />

      {/* PROFESSIONS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">OET Recognised Professions</div>
          <h2 className="sec-title">Choose Your Profession</h2>
          <div className="sec-rule" />
          <p className="sec-intro">OET is tailored to 12 healthcare professions, each with its own writing and speaking sub-tests. Find your profession below to see how our coaching is built around your exact registration pathway.</p>
        </Reveal>
        <div className="g4">
          {OET_PROFESSIONS.map((p) => (
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
          <h2 className="sec-title">Why You Need OET</h2>
          <div className="sec-rule" />
          <p className="sec-intro">OET is the English test built specifically for healthcare, and the preferred choice of regulators around the world.</p>
        </Reveal>
        <div className="g4">
          {OET_NEED.map((v) => (
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
          <h2 className="sec-title">Our OET Preparation Process</h2>
          <div className="sec-rule" />
          <p className="sec-intro">A clear, six-stage coaching process, from your first diagnostic test through to your target Grade B.</p>
        </Reveal>
        <div className="steps">
          {OET_PROCESS.map((p) => (
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
          <p className="sec-intro">From your first mock test to exam day, we guide you through every sub-test of OET.</p>
        </Reveal>
        <div className="g3">
          {OET_GUIDANCE.map((g) => (
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
          <p className="sec-intro">Ex-examiner-led coaching dedicated to getting you to Grade B, the first time.</p>
        </Reveal>
        <div className="g3">
          {OET_WHY_CHOOSE.map((w) => (
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
        <Reveal className="shead"><div className="sec-tag">Investment</div><h2 className="sec-title">Choose Your OET Package</h2><div className="sec-rule" /></Reveal>
        <div className="pgrid">
          {OET_PACKAGES.map((p) => (
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
          <p className="sec-intro">Answers to the most common questions about OET preparation for healthcare professionals.</p>
        </Reveal>
        <Reveal><FAQ items={OET_FAQS} /></Reveal>
      </div></section>

      {/* CONTACT */}
      <section className="section cream" id="contact"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Get In Touch</div>
          <h2 className="sec-title">Need Help With OET Preparation?</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Speak with our OET coaches today.</p>
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
          <h2 className="sec-title" style={{ color: "var(--navy)" }}>Start Your OET Journey Today</h2>
          <div className="sec-rule" />
          <p style={{ color: "var(--navy)", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>
            Whatever stage you are at, our OET coaches are ready to help. Message us on WhatsApp and let&apos;s get your Grade B moving.
          </p>
          <a className="btn btn-cta-primary" href={whatsappHref("Hi Career Sponsorship, I would like to start my OET journey.")} target="_blank" rel="noreferrer">
            Chat on WhatsApp &rarr;
          </a>
        </Reveal>
      </div></section>
    </>
  );
}
