import { SITE, SERVICES } from "@/lib/data";

export default function sitemap() {
  const base = SITE.url;
  const now = new Date();
  const staticPages = ["", "/about", "/services", "/hcpc-registration", "/dataflow-verification", "/oet-preparation", "/ielts-preparation", "/cas-preparation", "/jobs", "/nhs-jobs", "/pricing", "/reviews", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticPages, ...servicePages];
}
