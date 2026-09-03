import PageHero from "@/components/PageHero";
import ReviewsList from "@/components/ReviewsList";
import CTASection from "@/components/CTASection";
import { Reveal } from "@/components/Motion";
import { SITE, PAGE_HEROES } from "@/lib/data";

export const metadata = {
  title: "Reviews, What Our Clients Say",
  description: "Read genuine reviews from Career Sponsorship clients. Rated 4.9 from 26+ five-star reviews for ATS resumes, LinkedIn revamping, interview coaching and job application support.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero crumb="Reviews" eyebrow="Happy Clients" title="What our clients say" sub="Real stories from real people who transformed their careers with our help. Rated 4.9 from 26+ five-star reviews." image={PAGE_HEROES.reviews} />

      <section className="section"><div className="wrap">
        <ReviewsList />
      </div></section>

      <CTASection
        title="Join Thousands of Success Stories"
        text="Your career transformation could be the next review on this page."
        primaryLabel="Get Started"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref={SITE.whatsapp}
        secondaryBlank
      />
    </>
  );
}
