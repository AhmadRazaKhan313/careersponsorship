"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/data";
import Icon from "@/components/Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLabel, setOpenLabel] = useState(null);
  const [mobOpenLabel, setMobOpenLabel] = useState(null);
  const path = usePathname();
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const nlinksRef = useRef(null);
  const closeTimer = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        burgerRef.current && !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!openLabel) return;
    const handler = (e) => {
      if (nlinksRef.current && !nlinksRef.current.contains(e.target)) setOpenLabel(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openLabel]);

  // Close on route change
  useEffect(() => { setOpen(false); setOpenLabel(null); setMobOpenLabel(null); }, [path]);

  // A nav link is active only if it's the *most specific* match for the
  // current path — e.g. on /services/ats-resume-writing, "ATS CV" (which
  // matches that exact href) wins over "Services" (which is just a prefix).
  const matches = (href) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));
  const flatHrefs = NAV.flatMap((n) => (n.dropdown ? [n.href, ...n.dropdown.map((d) => d.href)] : [n.href]));
  const bestMatchHref = flatHrefs.filter(matches).sort((a, b) => b.length - a.length)[0];
  const isActive = (href) => href === bestMatchHref;
  const isParentActive = (n) => n.dropdown ? n.dropdown.some((d) => d.href === bestMatchHref) || n.href === bestMatchHref : isActive(n.href);

  const openDrop = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenLabel(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenLabel(null), 140);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap navi">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt={`${SITE.name} logo`} width={46} height={46} className="logo-img" priority />
            <div><div className="lt">{SITE.name}</div><div className="ls">{SITE.tagline}</div></div>
          </Link>

          {/* Desktop links */}
          <div className="nlinks" ref={nlinksRef}>
            {NAV.map((n) =>
              n.dropdown ? (
                <div
                  key={n.label}
                  className="nav-drop-wrap"
                  onMouseEnter={() => openDrop(n.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className={`lnk lnk-drop ${isParentActive(n) ? "active" : ""} ${openLabel === n.label ? "open" : ""}`}
                    onClick={() => setOpenLabel((v) => (v === n.label ? null : n.label))}
                    aria-haspopup="true"
                    aria-expanded={openLabel === n.label}
                  >
                    {n.label}
                    <svg className="drop-caret" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3.5l3 3 3-3" />
                    </svg>
                  </button>
                  <div className={`nav-dropdown ${openLabel === n.label ? "nav-dropdown-open" : ""}`}>
                    {n.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className={`nav-drop-item ${isActive(d.href) ? "nav-drop-item-active" : ""}`}
                        onClick={() => setOpenLabel(null)}
                      >
                        <span className="ndi-ic"><Icon name={d.icon} size={18} sw={1.7} /></span>
                        <span>
                          <span className="ndi-title">{d.label}</span>
                          <span className="ndi-desc">{d.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={n.href} className={`lnk ${isActive(n.href) ? "active" : ""}`}>{n.label}</Link>
              )
            )}
          </div>

          <div className="nav-right">
            <a className="btn bp nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">Register</a>
            <button
              ref={burgerRef}
              className={`burger ${open ? "burger-open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay backdrop */}
      <div className={`mob-backdrop ${open ? "mob-backdrop-open" : ""}`} aria-hidden="true" />

      {/* Mobile menu */}
      <div ref={menuRef} className={`mob-menu ${open ? "mob-menu-open" : ""}`} aria-hidden={!open}>
        <div className="mob-menu-inner">
          <div className="mob-links">
            {NAV.map((n, i) =>
              n.dropdown ? (
                <div key={n.label} className="mob-drop-group" style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}>
                  <button
                    type="button"
                    className={`mob-lnk mob-lnk-toggle ${isParentActive(n) ? "mob-lnk-active" : ""}`}
                    onClick={() => setMobOpenLabel((v) => (v === n.label ? null : n.label))}
                    aria-expanded={mobOpenLabel === n.label}
                  >
                    <span>{n.label}</span>
                    <svg className={`mob-caret ${mobOpenLabel === n.label ? "mob-caret-open" : ""}`} width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3.5l3 3 3-3" />
                    </svg>
                  </button>
                  <div className={`mob-sublist ${mobOpenLabel === n.label ? "mob-sublist-open" : ""}`}>
                    {n.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className={`mob-sublnk ${isActive(d.href) ? "mob-sublnk-active" : ""}`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="ndi-ic"><Icon name={d.icon} size={16} sw={1.7} /></span>
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`mob-lnk ${isActive(n.href) ? "mob-lnk-active" : ""}`}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <span>{n.label}</span>
                  {isActive(n.href) && <span className="mob-dot" />}
                </Link>
              )
            )}
          </div>
          <div className="mob-footer">
            <a
              className="btn bp"
              style={{ width: "100%", justifyContent: "center" }}
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Register via WhatsApp &rarr;
            </a>
            <div className="mob-contact">
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              <span>&middot;</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
