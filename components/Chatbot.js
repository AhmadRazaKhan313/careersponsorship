"use client";
import { useState, useRef, useEffect } from "react";
import { SITE, SERVICES, PACKAGES, NHS } from "@/lib/data";

// Build a one-line, human readable summary of a package's included features.
function featureSummary(pkg) {
  const included = pkg.features.filter(([, on]) => on).map(([f]) => f);
  return included.join(", ");
}

// Knowledge base, matches keywords to answers built from site content.
function answer(text) {
  const q = text.toLowerCase();
  const has = (...words) => words.some((w) => q.includes(w));

  // Payment methods / how to pay, checked before the general pricing handler
  // so specific "cards" questions get a focused, accurate answer.
  if (has("card", "cards", "credit card", "debit card", "visa", "mastercard", "paypal", "bank transfer", "installment", "instalment", "payment plan", "emi", "how do i pay", "how can i pay", "pay online")) {
    return `We accept all major credit/debit cards (Visa, Mastercard), PayPal, and direct bank transfers, paid securely online or via invoice. All our packages (${PACKAGES.map((p) => p.name).join(", ")}) are one-time payments; a payment plan is available for the Elite Placement package on request. Once payment is confirmed we start work right away. Want the Contact page link to proceed?`;
  }

  // Specific package name lookups, e.g. "what's in the Accelerator package?"
  const namedPackage = PACKAGES.find((p) =>
    q.includes(p.name.toLowerCase()) || q.includes(p.name.split(" ")[0].toLowerCase())
  );
  if (namedPackage) {
    return `${namedPackage.name} (${namedPackage.tier}) is ${namedPackage.price}, one-time payment. It includes: ${featureSummary(namedPackage)}. Payment is accepted by card, PayPal or bank transfer.`;
  }
  if (has("nhs basic")) {
    const p = NHS.packages[0];
    return `NHS ${p.name} is ${p.price}: ${p.desc} Payment by card, PayPal or bank transfer.`;
  }
  if (has("nhs standard")) {
    const p = NHS.packages[1];
    return `NHS ${p.name} is ${p.price}: ${p.desc} Payment by card, PayPal or bank transfer.`;
  }
  if (has("nhs premium")) {
    const p = NHS.packages[2];
    return `NHS ${p.name} is ${p.price}: ${p.desc} Payment by card, PayPal or bank transfer.`;
  }
  if (has("upgrade")) {
    return "You can upgrade anytime, from Launch to Accelerator or Elite, by simply paying the difference in price. Just get in touch and we'll handle the switch.";
  }
  if (has("discount", "student discount", "sponsorship discount")) {
    return "Our Career Sponsorship program offers subsidized pricing for deserving students facing financial hardship. Contact us to check eligibility, we don't want funds to limit talent.";
  }

  if (has("price", "cost", "package", "fee", "how much", "charge", "pay", "payment")) {
    return `We offer three core packages: ${PACKAGES.map((p) => `${p.name} (${p.price})`).join(", ")}. NHS Jobs support starts at ${NHS.packages[0].price}. We accept major cards, PayPal and bank transfers, and offer unlimited revisions until you're happy. See the Pricing page for full details, or ask me about a specific package (e.g. "what's in Accelerator?") or "payment methods".`;
  }
  if (has("hcpc", "health and care professions council", "biomedical scientist", "physiotherapist", "radiographer", "occupational therapist", "operating department practitioner", "clinical scientist", "speech and language therapist", "practitioner psychologist")) {
    return `We offer dedicated HCPC Registration support for international healthcare professionals, biomedical scientists, physiotherapists, radiographers, occupational therapists, ODPs, clinical scientists, speech & language therapists and practitioner psychologists. We help with eligibility assessment, document verification, application preparation, HCPC submission, and career guidance once you're registered. Visit our HCPC Registration page for full details, or message us on WhatsApp (${SITE.phone}) to get started.`;
  }
  if (has("nhs", "trac", "band", "healthcare job", "nurse")) {
    return `Our NHS Jobs Recruitment Support helps you find genuine NHS vacancies (via TRAC Jobs and the NHS Jobs portal), tailor your CV to NHS standards, address person-specification criteria, and write supporting statements aligned with NHS values. Packages: ${NHS.packages.map((p) => `${p.name} ${p.price}`).join(", ")}. We also guide on HCPC registration, ask me about "HCPC registration" for details.`;
  }
  if (has("cv", "resume", "ats", "curriculum")) {
    return "Our ATS Resume / CV Writing service builds keyword-optimized CVs that pass Applicant Tracking Systems and reach real recruiters. You get achievement-focused content, clean ATS-safe formatting, editable Word + PDF versions, and unlimited revisions. Most CVs are delivered within 48 hours.";
  }
  if (has("internship", "intern", "placement cert", "certificate")) {
    return "We support internship applications and can provide internship certificates where required (included in our Accelerator and Elite packages). We help you find, tailor and submit applications for internships and entry-level roles that match your goals.";
  }
  if (has("career guidance", "guidance", "advice", "counsel", "not sure", "which service", "help me choose", "confused")) {
    return "Our Career Guidance helps you choose the right direction, we assess your goals, experience and target roles, then recommend a clear plan (CV, LinkedIn, interview prep or full application support). Tell me your field and goal and I can point you to the best service.";
  }
  if (has("linkedin")) {
    return "LinkedIn Revamping gives your profile a complete overhaul, keyword-rich headline and summary, optimized experience, skills strategy and SEO, so recruiters can actually find you. It's one of our most popular services.";
  }
  if (has("interview", "coaching", "mock")) {
    return "Interview Coaching includes realistic one-on-one mock interviews, STAR-method behavioural prep, role-specific questions, and honest feedback to build your confidence. Sessions are delivered online. Elite clients get unlimited mock interviews.";
  }
  if (has("cover letter")) {
    return "Our Cover Letter Crafting service writes compelling, role-specific letters tailored to each application, aligned with your CV for a consistent personal brand.";
  }
  if (has("academic", "sop", "statement of purpose", "personal statement", "university", "scholarship", "research proposal")) {
    return "Our Academic Writing service helps with personal statements, Statements of Purpose (SOP) and research proposals, original, plagiarism-free, and structured to the standards top institutions expect.";
  }
  if (has("sponsor", "financial", "student", "discount", "afford", "hardship")) {
    return "Our Career Sponsorship program supports deserving students facing financial barriers with subsidized or sponsored services. Contact us to check eligibility, talent shouldn't be limited by funds.";
  }
  if (has("job application", "apply for me", "submit application", "find jobs", "job search")) {
    return "Job Application Support is end-to-end: we search daily for roles matched to your goals, tailor each application to the job description, submit on your behalf, and track everything. Available in Accelerator and Elite packages.";
  }
  if (has("service", "what do you", "help with", "offer", "do you provide")) {
    return `We offer: ${SERVICES.slice(0, 6).map((s) => s.title).join(", ")}, plus NHS Jobs support and Career Sponsorship. Which one would you like to know more about?`;
  }
  if (has("register", "sign up", "get started", "start", "join", "book", "consultation")) {
    return `Great! To get started, visit our Contact page (the Register button in the menu) or message us on WhatsApp. Share your CV and goals, and we'll recommend the right service and book your free consultation.`;
  }
  if (has("contact", "reach", "talk", "call", "phone", "email", "number", "address", "location", "where")) {
    return `You can reach us by phone or WhatsApp at ${SITE.phone}, or email ${SITE.email}. We're based at ${SITE.address}. Hours: ${SITE.hours}. The Contact page also has a quick form.`;
  }
  if (has("time", "long", "turnaround", "delivery", "how fast", "when")) {
    return "Most documents, CV, cover letter, LinkedIn, are delivered within 48 hours. Coaching and application support are ongoing based on your needs.";
  }
  if (has("refund", "guarantee", "satisfied", "revision")) {
    return "We stand by our quality. If you're not satisfied with your initial documents, we offer unlimited revisions until you're happy.";
  }
  if (has("country", "countries", "international", "overseas", "outside uk")) {
    return "We support professionals across more than 40 countries worldwide, including the UK, USA, Canada, Australia, Germany and France. Wherever you're applying, we tailor your application to that market.";
  }
  if (has("hello", "hi", "hey", "salam", "assalam", "good morning", "good evening")) {
    return "Hello! I'm the Career Sponsorship assistant. I can help with CVs, NHS jobs, internships, career guidance, pricing, registration or contact details. What would you like to know?";
  }
  if (has("thank", "thanks", "shukria", "great", "awesome")) {
    return "You're welcome! Is there anything else I can help you with?";
  }
  return `I can help with CVs and resumes, NHS jobs, internships, career guidance, pricing, getting started, or contact details. For anything specific, reach us at ${SITE.email} or on WhatsApp. What would you like to know?`;
}

const QUICK = ["CV / Resume", "NHS Jobs", "HCPC Registration", "Internships", "Career guidance", "Pricing", "Contact"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState([
    { from: "bot", text: "Hi, welcome to Career Sponsorship. How can I help you today?" },
  ]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, open]);

  const send = (text) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: answer(t) }]);
    }, 350);
  };

  return (
    <>
      <button className="cbtn" onClick={() => setOpen(!open)} aria-label={open ? "Close chat" : "Open chat support"}>
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
        )}
      </button>

      {open && (
        <div className="cwin" role="dialog" aria-label="Support chat">
          <div className="chead">
            <div className="cav">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
            </div>
            <div>
              <div className="ct">Career Assistant</div>
              <div className="cs">Online now</div>
            </div>
            <button className="cx" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>

          <div className="cbody" ref={bodyRef}>
            {msgs.map((m, i) => <div key={i} className={`msg ${m.from}`}>{m.text}</div>)}
          </div>

          <div className="cquick">
            {QUICK.map((qq) => <button key={qq} onClick={() => send(qq)}>{qq}</button>)}
          </div>

          <form className="cfoot" onSubmit={(e) => { e.preventDefault(); send(); }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." aria-label="Message" />
            <button type="submit" aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
