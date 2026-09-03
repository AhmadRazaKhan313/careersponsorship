import Link from "next/link";
import Icon from "@/components/Icon";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesStrip from "@/components/ServicesStrip";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { FlagsMarquee, FAQ } from "@/components/Widgets";
import { Reveal, CountUp } from "@/components/Motion";
import { SERVICES, VALUES, STATS, INDUSTRIES, PROCESS, FAQS_HOME, SITE } from "@/lib/data";

export const metadata = {
  title: "CV Writing, LinkedIn & NHS Jobs Support UK | Career Sponsorship",
  description: "Land your dream job faster with the UK's premium career service. Expert ATS CV writing, LinkedIn optimisation, interview coaching and NHS jobs support. Trusted across 40+ countries. Get more interviews, book a free consultation.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <ServicesStrip />

      <FlagsMarquee />

      {/* INTRO */}
      <section className="section"><div className="wrap">
        <div className="split">
          <Reveal className="split-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80" alt="Career consultation between adviser and client" />
            <div className="badge"><div className="bn2">8K+</div><div className="bl">Careers transformed worldwide</div></div>
          </Reveal>
          <Reveal>
            <div className="sec-tag" style={{ textAlign: "left" }}>Who We Are</div>
            <h2 className="serif" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,42px)", color: "var(--navy)", lineHeight: 1.15, margin: "14px 0 20px" }}>A British career house built to get you hired</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>Career Sponsorship helps professionals and students present themselves at their best, with ATS-optimized resumes, revamped LinkedIn profiles, expert interview coaching, and full job application support. We also offer dedicated NHS Jobs recruitment support and a sponsorship program for those facing financial barriers.</p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>Our philosophy is simple: your skills are rarely the problem, your presentation is. We fix the presentation so the right doors finally open.</p>
            <Link className="btn bn" href="/about">Learn About Us &rarr;</Link>
          </Reveal>
        </div>
      </div></section>

      {/* SERVICES */}
      <section className="section cream" id="services"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">What We Offer</div>
          <h2 className="sec-title">Our Premium Services</h2>
          <div className="sec-rule" />
          <p className="sec-intro">Professional, end-to-end career support, tailored to your goals and built to get you hired. Click any service to learn more.</p>
        </Reveal>
        <div className="g3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug}>
              <Link href={`/services/${s.slug}`} className="svc">
                <div className="ic"><Icon name={s.icon} size={26} /></div>
                <div className="tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="more">Learn more &rarr;</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link className="btn bo" href="/services">View All Services</Link>
        </div>
      </div></section>

      {/* VALUES */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">What We Stand For</div>
          <h2 className="sec-title">Our Core Values</h2>
          <div className="sec-rule" />
        </Reveal>
        <div className="g4">
          {VALUES.map((v) => (
            <Reveal key={v.title}>
              <div className="val">
                <div className="ic"><Icon name={v.icon} size={26} /></div>
                <h3>{v.title}</h3><p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* STATS */}
      <section className="section navy-sec"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Our Track Record</div>
          <h2 className="sec-title">Results That Speak</h2>
          <div className="sec-rule" />
        </Reveal>
        <div className="statgrid">
          {STATS.map((s) => (
            <Reveal key={s.label}><div className="stat">
              <div className="snum"><CountUp n={s.n} suffix={s.suffix} /></div>
              <div className="slab">{s.label}</div>
              <div className="sdes">{s.desc}</div>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* PROCESS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">How It Works</div>
          <h2 className="sec-title">Your Journey With Us</h2>
          <div className="sec-rule" />
        </Reveal>
        <div className="steps">
          {PROCESS.map((p) => (
            <Reveal key={p.n}><div className="step">
              <div className="sn">{p.n}</div><h3>{p.title}</h3><p>{p.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* NHS teaser */}
      <section className="section nhs"><div className="wrap">
        <Reveal className="shead" style={{ marginBottom: 0, textAlign: "center" }}>
          <span className="nhs-badge"><span className="pulse" /> NHS Specialist Service</span>
          <h2 className="serif" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,42px)", margin: "18px 0 14px" }}>NHS Jobs Recruitment Support</h2>
          <p className="lead" style={{ maxWidth: 640, margin: "0 auto 26px" }}>Dedicated support for professionals seeking NHS roles, from finding genuine vacancies on TRAC Jobs and the NHS Jobs portal to submitting applications that meet NHS standards.</p>
          <Link className="btn bp" href="/nhs-jobs">Explore NHS Support &rarr;</Link>
        </Reveal>
      </div></section>

      {/* INDUSTRIES */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Where Our Clients Work</div>
          <h2 className="sec-title">Industries We Serve</h2>
          <div className="sec-rule" />
        </Reveal>
        <Reveal><div className="chips">
          {INDUSTRIES.map((c) => (
            <div className="chip" key={c.name}><Icon name={c.icon} size={18} sw={1.7} />{c.name}</div>
          ))}
        </div></Reveal>
      </div></section>

      {/* TESTIMONIALS */}
      <Testimonials count={3} />

      {/* FAQ */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Questions</div>
          <h2 className="sec-title">Frequently Asked Questions</h2>
          <div className="sec-rule" />
        </Reveal>
        <Reveal><FAQ items={FAQS_HOME} /></Reveal>
      </div></section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
