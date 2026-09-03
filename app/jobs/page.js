import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { FAQ } from "@/components/Widgets";
import CTASection from "@/components/CTASection";
import { INDUSTRIES, SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "Jobs, How We Help You Land the Right Role",
  description: "Discover how Career Sponsorship helps you find and secure jobs: targeted job search, tailored applications, recruiter-ready CVs and interview support across 40+ countries and every industry.",
  alternates: { canonical: "/jobs" },
};

const HOW = [
  { icon: "search", t: "We find the right roles", d: "We search for genuine vacancies that match your skills, experience and career goals, across job boards, company sites and our network." },
  { icon: "doc", t: "We tailor every application", d: "Each application is customized to the specific role and company, with an ATS-optimized CV and a targeted cover letter that gets noticed." },
  { icon: "send", t: "We apply on your behalf", d: "We submit applications for you and keep a clear record of where you've applied and the status of each one, saving you hours." },
  { icon: "chat", t: "We prepare you to win", d: "Mock interviews, behavioural question prep and honest feedback get you ready to convert interviews into offers." },
];

const TYPES = [
  { t: "Graduate & Entry-Level", d: "First roles, internships and placements with the support to stand out from a crowded field." },
  { t: "Professional & Mid-Career", d: "Targeted moves to better roles, higher pay and the right company for your next step." },
  { t: "Healthcare & NHS", d: "Specialist NHS recruitment support, see our dedicated NHS Jobs service for full details." },
  { t: "International Applicants", d: "Support for candidates applying across the UK, USA, Canada, Australia, Europe and beyond." },
];

const JOBS_FAQS = [
  { q: "Do you guarantee a job?", a: "No honest service can guarantee a job, outcomes depend on your profile, the market and the roles available. What we guarantee is a stronger application, more interviews on average, and expert support at every step." },
  { q: "What kinds of jobs do you help with?", a: "We support roles across most industries and levels, from graduate and entry-level positions to professional and senior roles, including specialist NHS recruitment." },
  { q: "Do you apply to jobs for me?", a: "Yes. With our application support packages, we find suitable roles, tailor each application, and submit on your behalf, then keep you updated on progress." },
  { q: "Which countries do you cover?", a: "We support professionals across more than 40 countries, including the UK, USA, Canada, Australia, Germany and France." },
];

export default function JobsPage() {
  return (
    <>
      <PageHero crumb="Jobs" eyebrow="Find Your Next Role" title="How we help you land the right job" sub="From finding genuine vacancies to preparing you for the interview, we support your entire job search, so you spend less time applying and more time getting hired." image={PAGE_HEROES.jobs} />

      {/* HOW IT WORKS */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Our Approach</div>
          <h2 className="sec-title">How You Get Hired With Us</h2>
          <div className="sec-rule" />
          <p className="sec-intro">A clear, proven process that turns a frustrating job hunt into a focused, supported journey.</p>
        </Reveal>
        <div className="g4">
          {HOW.map((h) => (
            <Reveal key={h.t}><div className="val">
              <div className="ic"><Icon name={h.icon} size={26} /></div>
              <h3>{h.t}</h3><p>{h.d}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* WHO WE HELP */}
      <section className="section cream"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Who We Help</div>
          <h2 className="sec-title">Jobs for Every Stage</h2>
          <div className="sec-rule" />
        </Reveal>
        <div className="g2">
          {TYPES.map((t) => (
            <Reveal key={t.t}><div className="svc">
              <h3 style={{ marginTop: 0 }}>{t.t}</h3>
              <p>{t.d}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* INDUSTRIES */}
      <section className="section"><div className="wrap">
        <Reveal className="shead">
          <div className="sec-tag">Where Our Clients Work</div>
          <h2 className="sec-title">Industries We Cover</h2>
          <div className="sec-rule" />
        </Reveal>
        <Reveal><div className="chips">
          {INDUSTRIES.map((c) => (
            <div className="chip" key={c.name}><Icon name={c.icon} size={18} sw={1.7} />{c.name}</div>
          ))}
        </div></Reveal>
      </div></section>

      {/* NHS callout */}
      <section className="section navy-sec"><div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="sec-tag" style={{ color: "var(--gold2)" }}>Specialist Support</div>
          <h2 className="sec-title" style={{ color: "#fff" }}>Looking for NHS Roles?</h2>
          <div className="sec-rule" />
          <p style={{ color: "#D5DEEA", maxWidth: 560, margin: "20px auto 28px", fontSize: 17 }}>We offer dedicated NHS Jobs recruitment support, from finding genuine vacancies on TRAC Jobs and the NHS Jobs portal to supporting statements that meet NHS standards.</p>
          <Link className="btn bn" href="/nhs-jobs">Explore NHS Jobs Support &rarr;</Link>
        </Reveal>
      </div></section>

      {/* FAQ */}
      <section className="section"><div className="wrap">
        <Reveal className="shead"><div className="sec-tag">Questions</div><h2 className="sec-title">Job Search FAQs</h2><div className="sec-rule" /></Reveal>
        <Reveal><FAQ items={JOBS_FAQS} /></Reveal>
      </div></section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Job Search?"
        text="Tell us your goals and let our team do the heavy lifting, finding, tailoring and submitting applications that get results."
        primaryLabel="Get Started"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref={SITE.whatsapp}
        secondaryBlank
      />
    </>
  );
}
