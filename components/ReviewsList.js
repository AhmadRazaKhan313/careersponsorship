"use client";
import { useState } from "react";
import { REVIEWS } from "@/lib/data";

const ini = (name) => name.split(" ").map((w) => w[0]).join("");
const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

export default function ReviewsList() {
  const [filter, setFilter] = useState("all");
  const list = REVIEWS.filter((r) => filter === "all" || r.s === Number(filter));
  return (
    <>
      <div className="filters">
        {[["all", "All Reviews"], ["5", "5 Stars Only"], ["4", "4 Stars Only"]].map(([v, l]) => (
          <button key={v} className={filter === v ? "on" : ""} onClick={() => setFilter(v)}>{l}</button>
        ))}
      </div>
      <div className="revgrid">
        {list.map((r, i) => (
          <div className="rev" key={i}>
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
        ))}
      </div>
    </>
  );
}
