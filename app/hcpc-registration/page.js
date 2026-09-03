import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import {
  SITE,
  PAGE_HEROES,
  HCPC_PROFESSIONS,
  HCPC_NEED,
  HCPC_PROCESS,
  HCPC_GUIDANCE,
  HCPC_WHY_CHOOSE,
  HCPC_FAQS,
} from "@/lib/data";

export const metadata = {
  title: "HCPC Registration UK, Support for International Healthcare Professionals",
  description:
    "Expert HCPC Registration help for biomedical scientists, physiotherapists, radiographers, occupational therapists and other international healthcare professionals. Get HCPC application support from Career Sponsorship and start your UK healthcare career.",
  alternates: { canonical: "/hcpc-registration" },
  openGraph: {
    title: "HCPC Registration UK | Career Sponsorship",
    description:
      "Professional HCPC Registration support for international healthcare professionals seeking UK healthcare jobs.",
    url: `${SITE.url}/hcpc-registration`,
  },
};

const whatsappHref = (msg) => `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const MORE_MSG = "Hi Career Sponsorship, I would like to know more about HCPC Registration.";

export default function HcpcRegistrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HCPC Registration Support",
    serviceType: "HCPC Registration Assistance",
    description:
      "Professional HCPC Registration support for international healthcare professionals seeking to practise in the UK.",
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    url: `${SITE.url}/hcpc-registration`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HCPC_FAQS.map((f) => ({
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
        crumb="HCPC Registration"
        eyebrow="HCPC Registration UK"
        title="Professional HCPC Registration Support for International Healthcare Professionals"
        sub="Get HCPC registered and start your UK healthcare career with confidence. From eligibility checks to final submission, Career Sponsorship guides international biomedical scientists, physiotherapists, radiographers and other healthcare professionals through every step of HCPC registration."
        image={PAGE_HEROES.hcpc}
        primaryCta={{ label: "Start Your HCPC Registration", href: whatsappHref("Hi Career Sponsorship, I would like to start my HCPC Registration.") }}
        secondaryCta={{ label: "Book Free Consultation", href: "#contact" }}
      />

      {/* PROFESSION CARDS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">HCPC Regulated Professions</div>
          <h2 className="sec-title">Choose Your Profession</h2>
          <div className="sec-rule" />
          <p className="sec-intro">HCPC Registration is required across a wide range of healthcare professions. Find your profession below to see how we support your HCPC application.</p>
        </Reveal>
        <div className="g4">
          {HCPC_PROFESSIONS.map((p) => (
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

      {/* WHY YOU NEED HCPC REGISTRATION */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Why It Matters</div>
          <h2 className="sec-title">Why You Need HCPC Registration</h2>
          <div className="sec-rule" />
          <p className="sec-intro">HCPC Registration is a legal requirement for practising in a regulated healthcare profession in the UK, and the foundation of a successful UK healthcare career.</p>
        </Reveal>
        <div className="g4">
          {HCPC_NEED.map((v) => (
            <Reveal key={v.title}>
              <div className="val">
                <div className="ic"><Icon name={v.icon} size={26} /></div>
                <h3>{v.title}</h3><p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* HCPC REGISTRATION PROCESS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">How It Works</div>
          <h2 className="sec-title">HCPC Registration Process</h2>
          <div className="sec-rule" />
          <p className="sec-intro">A clear, six-stage HCPC application process, from eligibility assessment through to registration and career guidance.</p>
        </Reveal>
        <div className="steps">
          {HCPC_PROCESS.map((p) => (
            <Reveal key={p.n}><div className="step">
              <div className="sn">{p.n}</div><h3>{p.title}</h3><p>{p.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* CAREER SPONSORSHIP GUIDANCE */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Our Support</div>
          <h2 className="sec-title">How Career Sponsorship Helps You</h2>
          <div className="sec-rule" />
          <p className="sec-intro">From your first document to your first UK shift, we guide you through HCPC registration and beyond.</p>
        </Reveal>
        <div className="g3">
          {HCPC_GUIDANCE.map((g) => (
            <Reveal key={g.title}><div className="svc">
              <div className="ic"><Icon name={g.icon} size={26} /></div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* WHY CHOOSE CAREER SPONSORSHIP */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Why Us</div>
          <h2 className="sec-title">Why Choose Career Sponsorship</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Experienced HCPC consultants dedicated to getting your registration and UK healthcare career right, the first time.</p>
        </Reveal>
        <div className="g3">
          {HCPC_WHY_CHOOSE.map((w) => (
            <Reveal key={w.title}><div className="svc">
              <div className="ic"><Icon name={w.icon} size={26} /></div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <a className="more" href={whatsappHref(MORE_MSG)} target="_blank" rel="noreferrer">More &rarr;</a>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* FAQ */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Questions</div>
          <h2 className="sec-title">Frequently Asked Questions</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Answers to the most common questions about HCPC Registration for international healthcare professionals.</p>
        </Reveal>
        <Reveal><FAQ items={HCPC_FAQS} /></Reveal>
      </div></section>

      {/* CONTACT */}
      <section className="section" id="contact"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Get In Touch</div>
          <h2 className="sec-title">Need Help With HCPC Registration?</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Speak with our HCPC experts today.</p>
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
          <h2 className="sec-title" style={{ color: "var(--navy)" }}>Start Your HCPC Registration Journey Today</h2>
          <div className="sec-rule" />
          <p style={{ color: "var(--navy)", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>
            Whatever stage you are at, our HCPC consultants are ready to help. Message us on WhatsApp and let&apos;s get your registration moving.
          </p>
          <a className="btn btn-cta-primary" href={whatsappHref("Hi Career Sponsorship, I would like to start my HCPC Registration journey.")} target="_blank" rel="noreferrer">
            Chat on WhatsApp &rarr;
          </a>
        </Reveal>
      </div></section>
    </>
  );
}
