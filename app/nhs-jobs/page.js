import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import CTASection from "@/components/CTASection";
import NhsPackages from "@/components/NhsPackages";
import { NHS, SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "NHS Jobs Recruitment Support, Find & Apply for NHS Roles",
  description: "Specialist NHS Jobs recruitment support: we search TRAC Jobs and the NHS Jobs portal, tailor your CV to NHS standards, write supporting statements aligned with NHS values, and support your application from £50.",
  alternates: { canonical: "/nhs-jobs" },
};

export default function NhsPage() {
  return (
    <>
      <PageHero crumb="NHS Jobs" eyebrow="NHS Specialist Service" title="NHS Jobs Recruitment Support" sub="Dedicated support for professionals seeking NHS roles, from finding genuine vacancies to submitting applications that meet NHS standards." image={PAGE_HEROES.nhsJobs} />

      {/* WHITE INFO SECTION */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Your NHS Journey</div>
          <h2 className="sec-title">Everything You Need to Join the NHS</h2>
          <div className="sec-rule" />
          <p className="sec-intro">The NHS is one of the world&apos;s largest employers, offering stable, rewarding careers with excellent benefits. Here is how we help you get there.</p>
        </Reveal>

        <div className="g2" style={{ marginTop: 8 }}>
          <Reveal><div className="svc">
            <div className="ic"><Icon name="list" size={24} /></div>
            <h3 style={{ marginTop: 14 }}>NHS Career Pathway</h3>
            <p>From entry-level Band 2 roles to senior Band 8 positions, the NHS offers clear progression. We help you identify the right band for your skills and map out your route to advancement.</p>
          </div></Reveal>
          <Reveal><div className="svc">
            <div className="ic"><Icon name="check" size={24} /></div>
            <h3 style={{ marginTop: 14 }}>NHS Recruitment Process</h3>
            <p>NHS applications run through TRAC Jobs and the NHS Jobs portal, with structured person specifications and supporting statements. We guide you through every stage so nothing is missed.</p>
          </div></Reveal>
          <Reveal><div className="svc">
            <div className="ic"><Icon name="chart" size={24} /></div>
            <h3 style={{ marginTop: 14 }}>Why Work for the NHS?</h3>
            <p>Competitive salaries, an excellent pension, generous annual leave, structured training and genuine job security make the NHS one of the most rewarding employers in the UK.</p>
          </div></Reveal>
          <Reveal><div className="svc">
            <div className="ic"><Icon name="star2" size={24} /></div>
            <h3 style={{ marginTop: 14 }}>Our Success Record</h3>
            <p>We have supported hundreds of healthcare professionals into NHS roles across England, with CVs and supporting statements built specifically around NHS values and criteria.</p>
          </div></Reveal>
        </div>

        <div className="nhs-stats">
          <div className="nhs-stat"><strong>1.3M+</strong><span>NHS employees in England</span></div>
          <div className="nhs-stat"><strong>350+</strong><span>NHS Trusts &amp; organisations</span></div>
          <div className="nhs-stat"><strong>Band 2&ndash;8</strong><span>Roles we support</span></div>
          <div className="nhs-stat"><strong>24&ndash;48h</strong><span>Typical CV turnaround</span></div>
        </div>
      </div></section>

      <section className="section nhs"><div className="wrap">
        <div className="nhs-grid">
          <Reveal>
            <div className="sec-tag" style={{ textAlign: "left", color: "#55CFC5" }}>How We Help</div>
            <h2 className="serif" style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "#fff", margin: "12px 0 18px" }}>End-to-end NHS application support</h2>
            <ul className="nhs-list">
              {NHS.help.map((h, i) => (
                <li key={i}><span className="nck"><Icon name="check" size={13} sw={2.4} /></span>{h}</li>
              ))}
            </ul>
            <div className="nhs-platforms">
              <span className="pf"><Icon name="search" size={16} sw={1.8} /> TRAC Jobs</span>
              <span className="pf"><Icon name="list" size={16} sw={1.8} /> NHS Jobs Portal</span>
              <span className="pf"><Icon name="star2" size={16} sw={1.8} /> Genuine &amp; up-to-date</span>
            </div>
            <p className="lead" style={{ fontSize: 14, marginTop: 22, color: "#9FB8D4" }}>{NHS.specialties}</p>
          </Reveal>

          <Reveal className="nhs-card-wrap">
            <NhsPackages />
          </Reveal>
        </div>
      </div></section>

      <CTASection
        title="Start Your NHS Application Today"
        text="Send us your CV, preferred location, target band level and specialty, we'll take it from there."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref={SITE.whatsapp}
        secondaryBlank
      />
    </>
  );
}
