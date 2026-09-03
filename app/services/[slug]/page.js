import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import CTASection from "@/components/CTASection";
import { SERVICES, SITE } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.title}, ${s.tag}`,
    description: `${s.short} ${s.hero}`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | Career Sponsorship`,
      description: s.short,
      url: `${SITE.url}/services/${s.slug}`,
    },
  };
}

export default function ServiceDetail({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.tag,
    description: s.short,
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    url: `${SITE.url}/services/${s.slug}`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero crumb={s.title} eyebrow={s.tag} title={s.title} sub={s.hero} image={s.image} />

      {s.pricingTiers && (
        <section className="section cream"><div className="wrap">
          <Reveal className="shead"><div className="sec-tag">Investment</div><h2 className="sec-title">Choose Your Package</h2><div className="sec-rule" /></Reveal>
          <div className="pgrid">
            {s.pricingTiers.map((p) => (
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
                    <div className="pr">{p.price} <small>/ one-time</small></div>
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
      )}

      <section className="section"><div className="wrap">
        <div className="detail-grid">
          <div className="detail-body">
            <Reveal>
              <h2>Overview</h2>
              <p>{s.intro}</p>
            </Reveal>

            {s.whatIsQA && (
              <Reveal>
                <div className="qa-block">
                  {s.whatIsQA.map((item, i) => (
                    <div className="qa-item" key={i}>
                      <h3 className="qa-q">{item.q}</h3>
                      <p className="qa-a">{item.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal>
              <h2>What You Get</h2>
              <ul className="benefit-list">
                {s.benefits.map((b, i) => (
                  <li key={i}><span className="bk"><Icon name="check" size={12} sw={2.4} /></span>{b}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2>How It Works</h2>
              <div className="dsteps">
                {s.process.map((p, i) => (
                  <div className="dstep" key={i}>
                    <div className="dn">{String(i + 1).padStart(2, "0")}</div>
                    <h4>{p.t}</h4><p>{p.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2>Frequently Asked Questions</h2>
              <FAQ items={s.faqs} />
            </Reveal>
          </div>

          <aside className="sidebar-wrap">
            <div className="sidebar">
              <h3>Get Started Today</h3>
              <p>Ready to move forward with {s.title.toLowerCase()}? Reach out for a free, no-obligation consultation.</p>
              <a className="btn bp" style={{ width: "100%", justifyContent: "center", marginBottom: 18 }} href={SITE.whatsapp} target="_blank" rel="noreferrer">Message Us on WhatsApp</a>
              <div className="si"><Icon name="phone" size={18} sw={1.7} /><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></div>
              <div className="si"><Icon name="mail" size={18} sw={1.7} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            </div>

            <div className="sidebar-other">
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "var(--navy)", marginBottom: 6 }}>Other Services</h3>
              <div className="other-svc">
                {others.map((o) => (
                  <Link key={o.slug} href={`/services/${o.slug}`}>{o.title}<span>&rarr;</span></Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div></section>

      <CTASection
        title="Ready to Get Started?"
        text="Let's build the application that gets you hired. Book your free consultation today."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
