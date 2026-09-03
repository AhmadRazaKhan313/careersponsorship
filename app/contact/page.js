import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "Contact Us, We're Here to Help",
  description: "Get in touch with Career Sponsorship. Call +44 7782 268213, email hr@decibels.dev, or message us on WhatsApp. Based in London, serving clients across 40+ countries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" eyebrow="Get In Touch" title="We're here to help" sub="Reach out anytime, our team is ready to assist you with your career journey." image={PAGE_HEROES.contact} />

      <section className="section"><div className="wrap">
        <div className="ct-grid">
          <Reveal><a className="ct-card" href={`tel:${SITE.phoneHref}`}>
            <div className="ci"><Icon name="phone" size={24} sw={1.7} /></div>
            <h4>Call Us</h4><div className="v">{SITE.phone}</div><div className="sub">Mon–Fri, 9AM–6PM</div>
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
            <h4>Visit Us</h4><div className="v">London, W1W 7LT</div><div className="sub">85 Great Portland Street</div>
          </div></Reveal>
        </div>

        <Reveal><ContactForm /></Reveal>
      </div></section>
    </>
  );
}
