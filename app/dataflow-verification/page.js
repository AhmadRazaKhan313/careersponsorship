import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import {
  SITE,
  PAGE_HEROES,
  DATAFLOW_CHECKLIST,
  DATAFLOW_NEED,
  DATAFLOW_PROCESS,
  DATAFLOW_GUIDANCE,
  DATAFLOW_WHY_CHOOSE,
  DATAFLOW_PACKAGES,
  DATAFLOW_FAQS,
} from "@/lib/data";

export const metadata = {
  title: "DataFlow Verification 2026, GCC Healthcare Primary Source Verification (PSV)",
  description:
    "Expert DataFlow Verification support for healthcare professionals applying to DOH, DHA, MOH, SCFHS, QCHP and NHRA. Document checklists, case tracking, objection handling and credential assessment support from Career Sponsorship.",
  alternates: { canonical: "/dataflow-verification" },
  openGraph: {
    title: "DataFlow Verification | Career Sponsorship",
    description:
      "Primary Source Verification (PSV) support for healthcare professionals seeking to practise across the GCC, document checks, case tracking and credential assessment guidance.",
    url: `${SITE.url}/dataflow-verification`,
  },
};

const whatsappHref = (msg) => `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const MORE_MSG = "Hi Career Sponsorship, I would like to know more about DataFlow Verification.";

export default function DataflowVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DataFlow Verification Support",
    serviceType: "GCC Healthcare Primary Source Verification (PSV)",
    description:
      "DataFlow Verification support for healthcare professionals, covering document checklists, case submission, tracking and objection handling.",
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    url: `${SITE.url}/dataflow-verification`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DATAFLOW_FAQS.map((f) => ({
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
        crumb="DataFlow Verification"
        eyebrow="DataFlow Verification 2026"
        title="Get Your DataFlow Report Cleared, First Time, For Your GCC Healthcare Licence"
        sub="From your document checklist to your final cleared report, Career Sponsorship guides healthcare professionals through every stage of DataFlow Primary Source Verification for DOH, DHA, MOH, SCFHS, QCHP and NHRA."
        image={PAGE_HEROES.dataflow}
        primaryCta={{ label: "Start Your DataFlow Verification", href: whatsappHref("Hi Career Sponsorship, I would like to start my DataFlow Verification.") }}
        secondaryCta={{ label: "Book Free Consultation", href: "#contact" }}
      />

      {/* CHECKLIST */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Before You Submit Your Case</div>
          <h2 className="sec-title">Your DataFlow Document Checklist</h2>
          <div className="sec-rule" />
          <p className="sec-intro">GCC health authorities check a specific set of documents before your DataFlow report can clear. Here&apos;s everything you need in place.</p>
        </Reveal>
        <div className="g4">
          {DATAFLOW_CHECKLIST.map((p) => (
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

      {/* WHAT IS DATAFLOW / WHY IT MATTERS */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Why It Matters</div>
          <h2 className="sec-title">What Is DataFlow, and Why You Need It</h2>
          <div className="sec-rule" />
          <p className="sec-intro">DataFlow is the Primary Source Verification (PSV) process used by GCC healthcare authorities, and it is the foundation of your healthcare licence application.</p>
        </Reveal>
        <div className="g4">
          {DATAFLOW_NEED.map((v) => (
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
          <h2 className="sec-title">Our DataFlow Verification Process</h2>
          <div className="sec-rule" />
          <p className="sec-intro">A clear, six-stage process, from your first document review through to a cleared report ready for your regulator.</p>
        </Reveal>
        <div className="steps">
          {DATAFLOW_PROCESS.map((p) => (
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
          <p className="sec-intro">From document review to final submission, we provide complete DataFlow assistance for healthcare professionals.</p>
        </Reveal>
        <div className="g3">
          {DATAFLOW_GUIDANCE.map((g) => (
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
          <p className="sec-intro">Healthcare-focused consultants who have successfully completed 5000+ DataFlow cases across the GCC.</p>
        </Reveal>
        <div className="g3">
          {DATAFLOW_WHY_CHOOSE.map((w) => (
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
        <Reveal className="shead"><div className="sec-tag">Investment</div><h2 className="sec-title">Choose Your DataFlow Package</h2><div className="sec-rule" /></Reveal>
        <div className="pgrid">
          {DATAFLOW_PACKAGES.map((p) => (
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
          <p className="sec-intro">Answers to the most common questions about DataFlow Verification for the GCC.</p>
        </Reveal>
        <Reveal><FAQ items={DATAFLOW_FAQS} /></Reveal>
      </div></section>

      {/* CONTACT */}
      <section className="section cream" id="contact"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Get In Touch</div>
          <h2 className="sec-title">Need Help With Your DataFlow?</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Speak with our DataFlow and healthcare licensing consultants today.</p>
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
          <h2 className="sec-title" style={{ color: "var(--navy)" }}>Start Your DataFlow Verification Today</h2>
          <div className="sec-rule" />
          <p style={{ color: "var(--navy)", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>
            Whatever stage you are at, our DataFlow consultants are ready to help. Message us on WhatsApp and let&apos;s get your case moving.
          </p>
          <a className="btn btn-cta-primary" href={whatsappHref("Hi Career Sponsorship, I would like to start my DataFlow Verification.")} target="_blank" rel="noreferrer">
            Chat on WhatsApp &rarr;
          </a>
        </Reveal>
      </div></section>
    </>
  );
}
