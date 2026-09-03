import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import {
  SITE,
  PAGE_HEROES,
  IELTS_TYPES,
  IELTS_NEED,
  IELTS_PROCESS,
  IELTS_GUIDANCE,
  IELTS_WHY_CHOOSE,
  IELTS_PACKAGES,
  IELTS_FAQS,
} from "@/lib/data";

export const metadata = {
  title: "IELTS Preparation 2026, Academic, General Training & UKVI Coaching",
  description:
    "Expert IELTS preparation for university, work and UK visa applications. Section-wise coaching, writing correction, speaking mock interviews and a band score improvement guarantee from Career Sponsorship.",
  alternates: { canonical: "/ielts-preparation" },
  openGraph: {
    title: "IELTS Preparation | Career Sponsorship",
    description:
      "Academic, General Training and IELTS for UKVI coaching, mock tests and band score improvement guarantee.",
    url: `${SITE.url}/ielts-preparation`,
  },
};

const whatsappHref = (msg) => `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const MORE_MSG = "Hi Career Sponsorship, I would like to know more about IELTS Preparation.";

export default function IeltsPreparationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IELTS Preparation Coaching",
    serviceType: "IELTS Test Preparation",
    description:
      "IELTS preparation covering Academic, General Training and IELTS for UKVI, across Listening, Reading, Writing and Speaking.",
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    url: `${SITE.url}/ielts-preparation`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: IELTS_FAQS.map((f) => ({
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
        crumb="IELTS Preparation"
        eyebrow="IELTS Preparation 2026"
        title="Reach Your Target Band With Structured IELTS Coaching"
        sub="Whether you need IELTS Academic, General Training or IELTS for UKVI, Career Sponsorship helps you prepare with section-wise strategy, examiner-style writing feedback, live speaking practice and full mock exams built around your target band."
        image={PAGE_HEROES.ielts}
        primaryCta={{ label: "Start Your IELTS Preparation", href: whatsappHref("Hi Career Sponsorship, I would like to start my IELTS Preparation.") }}
        secondaryCta={{ label: "Book Free Consultation", href: "#contact" }}
      />

      {/* PROFESSIONS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Which IELTS Do You Need?</div>
          <h2 className="sec-title">Types of IELTS</h2>
          <div className="sec-rule" />
          <p className="sec-intro">IELTS comes in a few different formats, each built for a different goal. We&apos;ll help you choose the right one and prepare for it properly.</p>
        </Reveal>
        <div className="g4">
          {IELTS_TYPES.map((p) => (
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
          <h2 className="sec-title">Why You Need IELTS</h2>
          <div className="sec-rule" />
          <p className="sec-intro">IELTS is the world&apos;s most widely accepted English test for study, work and migration, and the standard requirement for most UK visa routes.</p>
        </Reveal>
        <div className="g4">
          {IELTS_NEED.map((v) => (
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
          <h2 className="sec-title">Our IELTS Preparation Process</h2>
          <div className="sec-rule" />
          <p className="sec-intro">A clear, six-stage coaching process, from your first diagnostic test through to your target band score.</p>
        </Reveal>
        <div className="steps">
          {IELTS_PROCESS.map((p) => (
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
          <p className="sec-intro">From your first mock test to exam day, we guide you through every module of IELTS.</p>
        </Reveal>
        <div className="g3">
          {IELTS_GUIDANCE.map((g) => (
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
          <p className="sec-intro">Certified IELTS coaching dedicated to getting you to your target band, the first time.</p>
        </Reveal>
        <div className="g3">
          {IELTS_WHY_CHOOSE.map((w) => (
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
        <Reveal className="shead"><div className="sec-tag">Investment</div><h2 className="sec-title">Choose Your IELTS Package</h2><div className="sec-rule" /></Reveal>
        <div className="pgrid">
          {IELTS_PACKAGES.map((p) => (
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
          <p className="sec-intro">Answers to the most common questions about IELTS preparation for study, work and UK visa applications.</p>
        </Reveal>
        <Reveal><FAQ items={IELTS_FAQS} /></Reveal>
      </div></section>

      {/* CONTACT */}
      <section className="section cream" id="contact"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Get In Touch</div>
          <h2 className="sec-title">Need Help With IELTS Preparation?</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Speak with our IELTS coaches today.</p>
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
          <h2 className="sec-title" style={{ color: "var(--navy)" }}>Start Your IELTS Journey Today</h2>
          <div className="sec-rule" />
          <p style={{ color: "var(--navy)", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>
            Whatever stage you are at, our IELTS coaches are ready to help. Message us on WhatsApp and let&apos;s get your target band moving.
          </p>
          <a className="btn btn-cta-primary" href={whatsappHref("Hi Career Sponsorship, I would like to start my IELTS journey.")} target="_blank" rel="noreferrer">
            Chat on WhatsApp &rarr;
          </a>
        </Reveal>
      </div></section>
    </>
  );
}
