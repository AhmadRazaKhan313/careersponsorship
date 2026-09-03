"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!email || busy) return;
    setBusy(true);

    try {
      if (SITE.formspree) {
        await fetch(SITE.formspree, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ email, _subject: "Newsletter signup" }),
        });
      }
    } catch (err) {
      // ignore network errors, still confirm to the user
    } finally {
      setBusy(false);
      setDone(true);
      setEmail("");
      setTimeout(() => setDone(false), 5000);
    }
  };

  return (
    <form className="fnews-form" onSubmit={submit} noValidate>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        aria-label="Email address"
      />
      <button type="submit" disabled={busy}>{busy ? "..." : "Subscribe"}</button>
      {done && <p className="fnews-note">Thank you for subscribing. We will be in touch.</p>}
    </form>
  );
}
