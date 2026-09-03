import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "140px 0" }}>
      <div className="wrap">
        <div className="sec-tag">Error 404</div>
        <h1 className="serif" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,6vw,64px)", color: "var(--navy)", margin: "14px 0 16px" }}>Page not found</h1>
        <p style={{ color: "var(--muted)", maxWidth: 460, margin: "0 auto 28px" }}>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.</p>
        <Link className="btn bn" href="/">Back to Home</Link>
      </div>
    </section>
  );
}
