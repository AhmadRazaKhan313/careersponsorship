"use client";

const TAGS = [
  "ATS Resumes", "Cover Letters", "LinkedIn Revamping", "Interview Coaching",
  "Job Applications", "NHS Jobs", "DataFlow Verification", "Mock Interviews", "Career Guidance", "Internship Certificates",
];

export default function ServicesStrip() {
  const items = [...TAGS, ...TAGS];
  return (
    <div className="sstrip" aria-label="Our services">
      <div className="sstrip-fade">
        <div className="sstrip-track">
          {items.map((t, i) => (
            <span className="sstrip-item" key={i} aria-hidden={i >= TAGS.length}>
              {t}
              <span className="sstrip-sep" aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
