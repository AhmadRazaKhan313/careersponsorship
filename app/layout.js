import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";
import { SITE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["600", "700", "800"] });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Career Sponsorship | ATS Resume Writing, LinkedIn & NHS Jobs Support UK",
    template: "%s | Career Sponsorship",
  },
  description: SITE.description,
  keywords: [
    "CV writing service UK", "professional CV writers", "ATS resume writing",
    "CV writing services", "resume writing service", "LinkedIn profile writing",
    "LinkedIn optimisation", "interview coaching UK", "career coaching",
    "NHS jobs", "NHS application support", "NHS CV writing", "TRAC jobs help",
    "cover letter writing service", "job application help", "how to get a job UK",
    "career sponsorship", "job search support", "best CV writing service UK",
    "graduate CV writing", "career advice UK", "get more interviews",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: "Career Sponsorship | Premium British Career Services",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Sponsorship | Premium British Career Services",
    description: SITE.description,
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Career Services",
};

export const viewport = {
  themeColor: "#1BA5B5",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Great Portland Street, First Floor",
    addressLocality: "London",
    postalCode: "W1W 7LT",
    addressCountry: "GB",
  },
  areaServed: "Worldwide",
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "26",
    bestRating: "5",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <span id="top" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <BackToTop />
      </body>
    </html>
  );
}
