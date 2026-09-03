import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { Reveal } from "@/components/Motion";
import { SERVICES, PROCESS, SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "Our Services, Career Solutions That Put You First",
  description: "ATS resume writing, cover letters, LinkedIn revamping, interview coaching, job application support, academic writing, career sponsorship and elite coaching, explore all Career Sponsorship services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" eyebrow="Our Services" title="Career solutions that put you first" sub="From crafting the perfect resume to landing your dream role, end-to-end support tailored to your unique journey. Click any service for full details." image={PAGE_HEROES.services} />

      <section className="section"><div className="wrap">
        <div className="g3">
          {SERVICES.map((s) => (
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
      </div></section>

      <section className="section cream"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">How It Works</div><h2 className="sec-title">Your Journey With Us</h2><div className="sec-rule" /></Reveal>
        <div className="steps">
          {PROCESS.map((p) => (
            <Reveal key={p.n}><div className="step"><div className="sn">{p.n}</div><h3>{p.title}</h3><p>{p.desc}</p></div></Reveal>
          ))}
        </div>
      </div></section>

      <Testimonials count={3} />

      <CTASection
        title="Not Sure Which Service You Need?"
        text="Book a free consultation and we'll recommend the right path for your career goals."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref={SITE.whatsapp}
        secondaryBlank
      />
    </>
  );
}
