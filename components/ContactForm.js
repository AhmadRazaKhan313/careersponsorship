"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) {
      setToast({ ok: false, msg: "Please fill in your name, email and message." });
      return;
    }

    // If a Formspree endpoint is configured, send a real email; else just confirm.
    if (SITE.formspree) {
      try {
        setSending(true);
        const res = await fetch(SITE.formspree, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name: f.name,
            email: f.email,
            subject: f.subject || "New enquiry from website",
            message: f.message,
          }),
        });
        setSending(false);
        if (!res.ok) throw new Error("send failed");
      } catch {
        setSending(false);
        setToast({ ok: false, msg: "Sorry, something went wrong. Please email us directly at " + SITE.email + "." });
        return;
      }
    }

    setToast({ ok: true, msg: `Thank you, ${f.name.split(" ")[0]}. Your message has been sent, we will reply within 24 hours.` });
    setF({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setToast(null), 6000);
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="frow">
        <div className="field"><label htmlFor="cn">Your Name *</label><input id="cn" value={f.name} onChange={set("name")} placeholder="John Smith" /></div>
        <div className="field"><label htmlFor="ce">Email Address *</label><input id="ce" type="email" value={f.email} onChange={set("email")} placeholder="you@email.com" /></div>
      </div>
      <div className="field"><label htmlFor="cs">Subject</label><input id="cs" value={f.subject} onChange={set("subject")} placeholder="How can we help you?" /></div>
      <div className="field"><label htmlFor="cm">Message *</label><textarea id="cm" rows={5} value={f.message} onChange={set("message")} placeholder="Tell us about your career goals, questions, or how we can assist you..." /></div>
      <button type="submit" className="btn bn" style={{ width: "100%", justifyContent: "center" }} disabled={sending}>
        {sending ? "Sending..." : "Send Message \u2192"}
      </button>
      {toast && (
        <div className="toast" style={!toast.ok ? { background: "rgba(232,98,26,.12)", borderColor: "#E8621A", color: "#8a6614" } : undefined}>
          {toast.msg}
        </div>
      )}
    </form>
  );
}
