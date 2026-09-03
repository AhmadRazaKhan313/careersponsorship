import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import { SITE, NAV, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer"><div className="wrap">
      <div className="fgrid">
        <div className="fcol fabout">
          <Link href="/" className="logo" style={{ marginBottom: 18 }}>
            <Image src="/logo.png" alt={`${SITE.name} logo`} width={46} height={46} className="logo-img" />
            <div><div className="lt" style={{ color: "#fff" }}>{SITE.name}</div><div className="ls">{SITE.tagline}</div></div>
          </Link>
          <p>A premium British career services company dedicated to transforming your professional identity and landing you the opportunities you deserve.</p>
          <div className="fsoc">
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l16 16M4 20L20 4"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
          <p className="fquote">&ldquo;{SITE.slogan}&rdquo;</p>
        </div>
        <div className="fcol">
          <h5>Quick Links</h5>
          <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div className="fcol">
          <h5>Our Services</h5>
          <ul>{SERVICES.slice(0, 4).map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}
            <li><Link href="/hcpc-registration">HCPC Registration</Link></li>
            <li><Link href="/oet-preparation">OET Preparation</Link></li>
            <li><Link href="/ielts-preparation">IELTS Preparation</Link></li>
            <li><Link href="/cas-preparation">CAS Preparation</Link></li>
            <li><Link href="/nhs-jobs">NHS Jobs Support</Link></li>
          </ul>
        </div>
        <div className="fcol">
          <h5>Get in Touch</h5>
          <div className="fcontact-item"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 18 18"><path d="M9 1a6 6 0 016 6c0 4-6 10-6 10S3 11 3 7a6 6 0 016-6z"/><circle cx="9" cy="7" r="2"/></svg><span>85 Great Portland Street,<br/>First Floor, W1W 7LT,<br/>London, United Kingdom</span></div>
          <div className="fcontact-item"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 18 18"><path d="M3 3h3l1.5 4-2 1.5a9 9 0 004 4l1.5-2 4 1.5v3a1.5 1.5 0 01-1.5 1.5C7 16.5 1.5 11 1.5 4.5A1.5 1.5 0 013 3z"/></svg><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></div>
          <div className="fcontact-item"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 18 18"><path d="M2 4h14v10H2z"/><path d="M2 4l7 5 7-5"/></svg><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        </div>
      </div>
      <div className="fnews">
        <div><h5>Subscribe to Our Newsletter</h5><p>Get the latest career tips and exclusive offers.</p></div>
        <NewsletterForm />
      </div>
      <div className="fbot">
        <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved. Registered in England &amp; Wales.</span>
      </div>
    </div></footer>
  );
}
