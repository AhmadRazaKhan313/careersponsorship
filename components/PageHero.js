import Link from "next/link";

export default function PageHero({ eyebrow, title, sub, crumb, image, primaryCta, secondaryCta }) {
  return (
    <section className="phero">
      {image && (
        <div className="phero-bg" style={{ backgroundImage: `url('${image}')` }} role="img" aria-label={title} />
      )}
      <div className="phero-overlay" />
      <div className="wrap">
        {crumb && (
          <div className="crumbs"><Link href="/">Home</Link> &nbsp;/&nbsp; <span>{crumb}</span></div>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="serif">{title}</h1>
        {sub && <p>{sub}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="hero-actions" style={{ marginTop: "var(--s4)" }}>
            {primaryCta && (
              primaryCta.href.startsWith("/")
                ? <Link className="btn bn" href={primaryCta.href}>{primaryCta.label} &rarr;</Link>
                : <a className="btn bn" href={primaryCta.href} target="_blank" rel="noreferrer">{primaryCta.label} &rarr;</a>
            )}
            {secondaryCta && (
              secondaryCta.href.startsWith("/")
                ? <Link className="btn bgl" href={secondaryCta.href}>{secondaryCta.label}</Link>
                : <a className="btn bgl" href={secondaryCta.href}>{secondaryCta.label}</a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
