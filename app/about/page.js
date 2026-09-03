import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { Reveal, CountUp } from "@/components/Motion";
import { VALUES, STATS, SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "About Us, Empowering Careers, Transforming Lives",
  description: "Career Sponsorship is a premium British career services company helping professionals across 40+ countries land jobs through honest, expert, results-driven support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About Us" title="Empowering careers, transforming lives" sub="We bridge the gap between talent and opportunity, helping professionals land dream jobs while supporting students through career sponsorship." image={PAGE_HEROES.about} />

      <section className="section"><div className="wrap">
        <div className="split">
          <Reveal className="split-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80" alt="Professional team collaborating in an office" />
            <div className="badge"><div className="bn2">40+</div><div className="bl">Countries served</div></div>
          </Reveal>
          <Reveal>
            <div className="sec-tag" style={{ textAlign: "left" }}>Our Promise</div>
            <h2 className="serif" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4vw,40px)", color: "var(--navy)", margin: "14px 0 18px", lineHeight: 1.18 }}>The Career Sponsorship motive</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>To provide quality career sponsorship and job placement support to students and professionals who face financial barriers due to rising inflation and economic uncertainty. We believe talent is universal, but opportunity shouldn&rsquo;t be.</p>
            <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>What began as a small initiative to help international students navigate the job market has grown into a full-service career consultancy serving thousands of professionals across more than forty countries.</p>
            <p style={{ fontSize: 16, lineHeight: 1.75 }}>We noticed a critical gap: talented people were held back not by a lack of skill, but by a lack of access, to recruiters, to optimized applications, and to affordable guidance. That is the gap we exist to close.</p>
          </Reveal>
        </div>
      </div></section>

      <section className="section navy-sec"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">Our Impact</div><h2 className="sec-title">Making a Difference</h2><div className="sec-rule" /></Reveal>
        <div className="statgrid">
          {STATS.map((s) => (
            <Reveal key={s.label}><div className="stat">
              <div className="snum"><CountUp n={s.n} suffix={s.suffix} /></div>
              <div className="slab">{s.label}</div><div className="sdes">{s.desc}</div>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">What We Stand For</div><h2 className="sec-title">Our Core Values</h2><div className="sec-rule" /></Reveal>
        <div className="g4">
          {VALUES.map((v) => (
            <Reveal key={v.title}><div className="val">
              <div className="ic"><Icon name={v.icon} size={26} /></div>
              <h3>{v.title}</h3><p>{v.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      <section className="section cream"><div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="sec-tag">Our Philosophy</div>
          <blockquote className="serif" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(22px,3vw,32px)", color: "var(--navy)", maxWidth: 760, margin: "20px auto 0", lineHeight: 1.4 }}>
            &ldquo;A person&rsquo;s potential should never be limited by their current financial situation. With the right guidance, a polished application, and genuine sponsorship, anyone can achieve their career dreams.&rdquo;
          </blockquote>
        </Reveal>
      </div></section>

      <CTASection
        title="Ready to Write Your Success Story?"
        text="Whether you're aiming for your next role or applying for sponsorship, we're ready to help."
        primaryLabel="Explore Services"
        primaryHref="/services"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
