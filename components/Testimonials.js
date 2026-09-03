"use client";
import { REVIEWS } from "@/lib/data";
import { Reveal } from "@/components/Motion";

const ini = (name) => name.split(" ").map((w) => w[0]).join("");
const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

const CITIES = ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"];

export default function Testimonials({ count = 3 }) {
  const list = REVIEWS.slice(0, count);
  return (
    <section className="section"><div className="wrap">
      <Reveal className="shead">
        <div className="sec-tag">Client Success</div>
        <h2 className="sec-title">What Our UK Clients Say</h2>
        <div className="sec-rule" />
        <div className="trust-row">
          <span className="trust-pill">UK Verified Clients</span>
          <span className="trust-pill">500+ CVs Delivered in the UK Market</span>
          <span className="trust-pill">Rated 4.9 / 5</span>
        </div>
      </Reveal>
      <div className="revgrid">
        {list.map((r, i) => (
          <Reveal key={i}>
            <div className="rev">
              <div className="stars">{stars(r.s)}</div>
              <p>&ldquo;{r.t}&rdquo;</p>
              <div className="who">
                <div className="av">{ini(r.n)}</div>
                <div>
                  <div className="nm">{r.n}</div>
                  <div className="lc">
                    {r.c && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="rev-flag" src={`https://flagcdn.com/w20/${r.c}.png`} alt="" width="16" height="11" loading="lazy" />
                    )}
                    {r.l}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="cities-row">
          <span className="cities-label">Trusted by clients across the UK:</span>
          {CITIES.map((c) => <span className="city-chip" key={c}>{c}</span>)}
        </div>
      </Reveal>
    </div></section>
  );
}
