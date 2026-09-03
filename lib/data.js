// =====================================================
// CENTRAL SITE DATA, Career Sponsorship
// All content lives here for easy editing + SEO.
// =====================================================

export const SITE = {
  name: "Career Sponsorship",
  tagline: "Premium British Career Services",
  url: "https://www.careersponsorship.uk",
  phone: "+44 7782 268213",
  phoneHref: "+447782268213",
  whatsapp: "https://wa.me/447782268213",
  email: "recruiter@careersponsorship.co.uk",
  address: "85 Great Portland Street, First Floor, W1W 7LT, London, UK",
  addressShort: "Great Portland Street, London, W1W 7LT",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM (GMT)",
  // PASTE your Formspree form URL here (from formspree.io). Leave empty ("") to just
  // show a thank-you message without sending email. Example: "https://formspree.io/f/abcdwxyz"
  formspree: "https://formspree.io/f/mykavqyn",
  slogan: "Your skills are not the problem, your presentation is.",
  description:
    "Career Sponsorship is a premium British career services company helping professionals land jobs with ATS-optimized resumes, LinkedIn revamping, interview coaching, NHS job recruitment support, and end-to-end application management across 40+ countries.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Career Services", href: "/services", icon: "doc", desc: "CVs, LinkedIn, coaching, applications & more" },
      { label: "HCPC Registration", href: "/hcpc-registration", icon: "shield", desc: "UK healthcare professional registration" },
      { label: "DataFlow Verification", href: "/dataflow-verification", icon: "check", desc: "GCC Primary Source Verification (PSV)" },
      { label: "OET Preparation", href: "/oet-preparation", icon: "chat", desc: "Occupational English Test coaching" },
      { label: "IELTS Preparation", href: "/ielts-preparation", icon: "cap", desc: "Academic, General Training & UKVI IELTS" },
      { label: "CAS Preparation", href: "/cas-preparation", icon: "pin", desc: "UK student visa CAS & document support" },
    ],
  },
  { label: "ATS CV", href: "/services/ats-resume-writing" },
  {
    label: "Jobs",
    href: "/jobs",
    dropdown: [
      { label: "All Jobs", href: "/jobs", icon: "search", desc: "Browse open roles across industries" },
      { label: "NHS Jobs", href: "/nhs-jobs", icon: "health", desc: "NHS healthcare vacancies & placement support" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

// ---- PAGE HERO BACKGROUND IMAGES ----
// High-resolution, full-width background photos for each page's hero banner.
// Each image is topically matched to that page (e.g. the CV page uses a
// resume/document photo). To use your own photo instead, drop a file in
// `public/` and swap the src below for "/your-file.jpg".
export const PAGE_HEROES = {
  about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=webp&fit=crop&w=1920&q=75",
  services: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?fm=webp&fit=crop&w=1920&q=75",
  jobs: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=webp&fit=crop&w=1920&q=75",
  nhsJobs: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?fm=webp&fit=crop&w=1920&q=75",
  pricing: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?fm=webp&fit=crop&w=1920&q=75",
  reviews: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?fm=webp&fit=crop&w=1920&q=75",
  contact: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?fm=webp&fit=crop&w=1920&q=75",
  hcpc: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?fm=webp&fit=crop&w=1920&q=75",
  dataflow: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?fm=webp&fit=crop&w=1920&q=75",
  oet: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&fit=crop&w=1920&q=75",
  ielts: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=webp&fit=crop&w=1920&q=75",
  cas: "/hero-london.jpg",
};

// 6 flags only
export const FLAGS = [
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "USA" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
];

export const STATS = [
  { n: 8000, suffix: "+", label: "Careers Transformed", desc: "Across 40+ countries worldwide." },
  { n: 97, suffix: "%", label: "Client Satisfaction", desc: "Rated five stars for quality and results." },
  { n: 3, suffix: "x", label: "More Interviews", desc: "Optimized resumes triple callbacks." },
  { n: 48, suffix: "hr", label: "Turnaround Time", desc: "Most documents ready within two days." },
];

export const VALUES = [
  { title: "Honesty", icon: "shield", desc: "Complete transparency in everything we do. No false promises, no inflated claims, just genuine guidance you can trust." },
  { title: "Integrity", icon: "scale", desc: "We uphold the highest ethical standards. Every document is original, every strategy authentic, every interaction respectful." },
  { title: "Academic Excellence", icon: "cap", desc: "Rigorous research-backed writing that meets global academic standards, treated with scholarly precision." },
  { title: "Innovation", icon: "spark", desc: "We stay ahead of hiring trends, ATS algorithms and recruiter expectations so your application is always current." },
];

export const INDUSTRIES = [
  { name: "Tech & IT", icon: "monitor" },
  { name: "Finance", icon: "chart" },
  { name: "Healthcare", icon: "health" },
  { name: "Consulting", icon: "clock" },
  { name: "Legal", icon: "scale" },
  { name: "Engineering", icon: "gear" },
];

export const PROCESS = [
  { n: "01", title: "Discovery Call", desc: "We learn about your goals, experience and dream roles through a focused 30-minute consultation." },
  { n: "02", title: "Strategy & Planning", desc: "We create a personalized roadmap with clear milestones and timeline for your job search." },
  { n: "03", title: "Document Creation", desc: "ATS-optimized resume, cover letter and LinkedIn profile tailored to your target roles." },
  { n: "04", title: "Active Job Search", desc: "We find, match and apply to relevant opportunities on your behalf." },
  { n: "05", title: "Interview Preparation", desc: "Mock sessions, confidence building and insider techniques to ace every interview." },
  { n: "06", title: "Offer & Onboarding", desc: "Negotiation support and a smooth transition into your new role." },
];

// ---- SERVICES (each has a detail page) ----
export const SERVICES = [
  {
    slug: "ats-resume-writing",
    icon: "doc",
    tag: "ATS Resume & CV Writing",
    title: "ATS Resume & CV Writing",
    image: "https://images.unsplash.com/photo-1557321259-82601a9ebfef?fm=webp&fit=crop&w=1920&q=75",
    short: "A UK-standard CV and ATS-optimized resume that match employer expectations, pass Applicant Tracking Systems, and land on recruiters' desks every time.",
    hero: "A CV and resume that beats the bots and impresses recruiters.",
    intro: "Over 75% of resumes are rejected by Applicant Tracking Systems (ATS) before a human ever sees them, and international applicants often lose out simply because their CV isn't formatted to UK standards. We write and restructure your CV and resume from scratch so it passes ATS filters, matches what British and international employers expect, and reads as a compelling, achievement-led document once it reaches a human.",
    whatIsQA: [
      {
        q: "What is an ATS-optimized CV?",
        a: "An ATS-optimized resume (or ATS-friendly resume/CV) is formatted and tailored to be easily read, parsed, and ranked by Applicant Tracking Systems. These software programs automatically screen, filter, and score job applications before a human recruiter ever sees them.",
      },
      {
        q: "Why does it matter?",
        a: "When you apply for a job online, especially at large corporations or in competitive fields, your resume goes into a database. The ATS scans it to see if your experience matches the job requirements. If the system cannot read your formatting or fails to find the right keywords, it may automatically reject your application before a human ever reviews it.",
      },
    ],
    benefits: [
      "Keyword optimization mapped to your target job descriptions",
      "UK-standard CV structure and formatting for British employers",
      "Clean, ATS-readable layout that never breaks on parsing",
      "Achievement-focused bullet points with measurable impact",
      "Industry-specific language across healthcare, tech, finance, law, engineering and more",
      "Unlimited revisions until you are completely satisfied",
    ],
    pricingTiers: [
      {
        name: "Basic",
        tag: "Resume Writing Service",
        price: "£70",
        popular: false,
        delivery: "2-day delivery",
        revisions: "Unlimited Revisions",
        features: [
          ["Rewrite or Edit 1-2 Page ATS Optimized Resume for Any Industry, Under 48 Hours", true],
          ["Source file", true],
          ["Edit & rewrite", true],
          ["Custom design", true],
          ["Cover letter", false],
        ],
        whatsappMessage: "Hi! I'm interested in the Basic ATS Resume package (£70). Can you share more details?",
      },
      {
        name: "Pro",
        tag: "Resume + Cover Letter Service",
        price: "£92",
        popular: true,
        delivery: "2-day delivery",
        revisions: "Unlimited Revisions",
        features: [
          ["Rewrite or Edit 1-2 Page ATS Optimized Resume + Custom Cover Letter for Any Industry, Under 48 Hours", true],
          ["Source file", true],
          ["Edit & rewrite", true],
          ["Custom design", true],
          ["Cover letter", true],
        ],
        whatsappMessage: "Hi! I'm interested in the Pro Resume + Cover Letter package (£92). Can you share more details?",
      },
      {
        name: "Premium",
        tag: "Resume + Cover Letter + Interview Prep",
        price: "£150",
        popular: false,
        delivery: "24-hour priority delivery",
        revisions: "Unlimited Revisions",
        features: [
          ["Rewrite or Edit 1-2 Page ATS Optimized Resume + Custom Cover Letter for Any Industry, Priority 24-Hour Delivery", true],
          ["Source file", true],
          ["Edit & rewrite", true],
          ["Custom design", true],
          ["Cover letter", true],
          ["Interview prep guide + 30-day follow-up support", true],
        ],
        whatsappMessage: "Hi! I'm interested in the Premium Resume + Cover Letter + Interview Prep package (£150). Can you share more details?",
      },
    ],
    process: [
      { t: "Consultation", d: "We review your experience, goals and target roles." },
      { t: "Keyword Mapping", d: "We analyze job descriptions to extract the terms ATS systems score." },
      { t: "Drafting", d: "We write and structure your CV or resume for both ATS and human readers." },
      { t: "Refinement", d: "You review, we refine, until it is exactly right." },
    ],
    faqs: [
      { q: "How long does it take?", a: "Most ATS resumes and CVs are delivered within 48 hours of your consultation." },
      { q: "Do you guarantee interviews?", a: "We cannot guarantee interviews, but our clients see on average three times more callbacks after optimization." },
      { q: "What format do I receive?", a: "You receive editable Word and PDF versions, both fully ATS-compatible." },
      { q: "Do you write CVs for UK employers specifically?", a: "Yes, we format every CV to UK standards, structure, tone and length, while adapting to US, Canadian, Australian or European formats on request." },
    ],
  },
  {
    slug: "cover-letter-crafting",
    icon: "pen",
    tag: "Personalized Writing",
    title: "Cover Letter Crafting",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=webp&fit=crop&w=1920&q=75",
    short: "Compelling, role-specific cover letters that tell your story and make hiring managers want to meet you immediately.",
    hero: "A cover letter that earns the meeting.",
    intro: "A great cover letter does what a resume cannot, it tells your story, shows your motivation, and connects your experience directly to the role. We craft letters that hiring managers actually want to read.",
    benefits: [
      "Tailored to each specific role and company",
      "A narrative that connects your experience to their needs",
      "Confident, professional tone that reflects your voice",
      "Clear structure that holds a recruiter's attention",
      "Aligned with the resume for a consistent personal brand",
    ],
    process: [
      { t: "Brief", d: "We learn about the role and what excites you about it." },
      { t: "Positioning", d: "We identify the strongest angle for your candidacy." },
      { t: "Writing", d: "We craft a tailored, persuasive letter." },
      { t: "Polish", d: "We refine tone and detail until it shines." },
    ],
    faqs: [
      { q: "Can you write for multiple roles?", a: "Yes, we can create a master template plus tailored versions for specific applications." },
      { q: "Will it match my resume?", a: "Absolutely. We align both documents for a consistent, professional brand." },
    ],
  },
  {
    slug: "linkedin-revamping",
    icon: "link",
    tag: "Profile Optimization",
    title: "LinkedIn Revamping",
    image: "https://images.unsplash.com/photo-1762340281276-a0e1e3c60be7?fm=webp&fit=crop&w=1920&q=75",
    short: "Complete LinkedIn overhaul, headline, summary, experience, skills and SEO optimization for maximum recruiter visibility.",
    hero: "Get found by recruiters, not lost in the crowd.",
    intro: "Recruiters search LinkedIn every day to fill roles. If your profile is not optimized for their searches, you are invisible. We revamp every section so you rank higher and convert profile views into opportunities.",
    benefits: [
      "Keyword-rich headline and About section for LinkedIn SEO",
      "Compelling summary that positions you as a top candidate",
      "Optimized experience entries with quantified achievements",
      "Skills and endorsements strategy for higher search ranking",
      "Profile photo and banner guidance for a professional first impression",
    ],
    process: [
      { t: "Audit", d: "We review your current profile against recruiter search behavior." },
      { t: "Keyword Strategy", d: "We map the terms recruiters use to find people like you." },
      { t: "Rewrite", d: "We rewrite every section for impact and discoverability." },
      { t: "Launch", d: "We hand over an optimized profile ready to attract recruiters." },
    ],
    faqs: [
      { q: "Will more recruiters contact me?", a: "An optimized profile significantly increases recruiter visibility and inbound messages." },
      { q: "Do you update the profile for me?", a: "We provide the full optimized content and a step-by-step guide; we can also update it directly on request." },
    ],
  },
  {
    slug: "interview-coaching",
    icon: "chat",
    tag: "Mock Interviews",
    title: "Interview Coaching",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&fit=crop&w=1920&q=75",
    short: "One-on-one mock interviews with industry experts, behavioral question prep, and personalized feedback to build your confidence.",
    hero: "Walk into every interview prepared and confident.",
    intro: "Interviews are won through preparation. Our coaches run realistic mock interviews, teach proven frameworks for answering tough questions, and give you the honest feedback you need to perform at your best.",
    benefits: [
      "Realistic one-on-one mock interviews with expert coaches",
      "STAR-method training for behavioral questions",
      "Role-specific and competency-based question preparation",
      "Honest, actionable feedback after every session",
      "Confidence-building techniques to manage nerves",
    ],
    process: [
      { t: "Assessment", d: "We identify the roles and interview formats you are targeting." },
      { t: "Mock Interview", d: "We run a realistic session tailored to your target role." },
      { t: "Feedback", d: "You receive detailed, actionable feedback." },
      { t: "Practice", d: "We refine your answers and rehearse until you are confident." },
    ],
    faqs: [
      { q: "Are sessions online?", a: "Yes, all coaching is delivered online so you can prepare from anywhere." },
      { q: "How many sessions do I need?", a: "It depends on your goals; many clients find one to three sessions transformative." },
    ],
  },
  {
    slug: "job-application-support",
    icon: "send",
    tag: "Application Management",
    title: "Job Application Support",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=webp&fit=crop&w=1920&q=75",
    short: "End-to-end application management, we find, customize and submit applications to roles that match your career goals.",
    hero: "We handle the search, so you can focus on getting hired.",
    intro: "Job searching is a full-time job in itself. We take on the heavy lifting, finding relevant roles, tailoring each application, and submitting on your behalf, so you can focus on interviews and offers.",
    benefits: [
      "Daily search for roles matched to your goals and experience",
      "Each application tailored to the specific job description",
      "Applications submitted on your behalf to save you hours",
      "A clear tracker of where you have applied and the status",
      "Strategic targeting to maximize quality interviews",
    ],
    process: [
      { t: "Profile Setup", d: "We build a clear picture of your ideal roles and criteria." },
      { t: "Sourcing", d: "We find and shortlist relevant, genuine vacancies." },
      { t: "Tailoring", d: "We customize your application for each role." },
      { t: "Submission", d: "We apply on your behalf and track every application." },
    ],
    faqs: [
      { q: "How many applications do you submit?", a: "Volume depends on your package and the availability of suitable, genuine roles." },
      { q: "Do you apply to any job?", a: "No, we only apply to roles that genuinely match your goals and qualifications." },
    ],
  },
  {
    slug: "academic-writing",
    icon: "cap",
    tag: "SOP & Statements",
    title: "Academic Writing",
    image: "https://images.unsplash.com/photo-1636231945376-3d40fdcbc462?fm=webp&fit=crop&w=1920&q=75",
    short: "Professional academic documents, research proposals, personal statements and SOP writing with integrity and originality guaranteed.",
    hero: "Statements that open doors to top institutions.",
    intro: "Whether you are applying for a postgraduate program, scholarship, or research position, your written statement is decisive. We help you craft original, compelling academic documents that meet the highest standards.",
    benefits: [
      "Personal statements that tell a compelling, authentic story",
      "Statements of Purpose (SOP) tailored to each program",
      "Research proposals structured to academic standards",
      "Original, plagiarism-free writing every time",
      "Guidance on tone, structure and academic conventions",
    ],
    process: [
      { t: "Discovery", d: "We learn your background, goals and target programs." },
      { t: "Outline", d: "We structure a clear, persuasive narrative." },
      { t: "Drafting", d: "We write an original, polished document." },
      { t: "Review", d: "We refine until it meets the standard you need." },
    ],
    faqs: [
      { q: "Is the writing original?", a: "Yes, every document is written from scratch and is completely original." },
      { q: "Can you help with deadlines?", a: "We work to your timeline; share your deadline and we will plan around it." },
    ],
  },
  {
    slug: "career-sponsorship",
    icon: "heart",
    tag: "Financial Support",
    title: "Career Sponsorship",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fm=webp&fit=crop&w=1920&q=75",
    short: "Sponsored career services for deserving students facing economic challenges, because talent shouldn't be limited by funds.",
    hero: "Talent is universal. Opportunity should be too.",
    intro: "Rising costs have made education and job searching harder than ever. Our sponsorship program provides quality career services to deserving students facing financial barriers, so their potential is never limited by their circumstances.",
    benefits: [
      "Subsidized or sponsored access to our core services",
      "Support for students facing genuine financial hardship",
      "The same quality and care as every paying client",
      "A transparent, integrity-first sponsorship model",
      "A pathway to meaningful, sustainable employment",
    ],
    process: [
      { t: "Apply", d: "Reach out and tell us about your situation and goals." },
      { t: "Review", d: "We assess eligibility for the sponsorship program." },
      { t: "Support", d: "We deliver the services you need to move forward." },
      { t: "Placement", d: "We support you all the way to a meaningful role." },
    ],
    faqs: [
      { q: "Who is eligible?", a: "Deserving students and professionals facing genuine financial barriers. Contact us to discuss your situation." },
      { q: "What does it cost?", a: "Sponsorship is subsidized or fully sponsored depending on need and availability." },
    ],
  },
  {
    slug: "elite-career-coaching",
    icon: "spark",
    tag: "Premium Support",
    title: "Elite Career Coaching",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=webp&fit=crop&w=1920&q=75",
    short: "Comprehensive one-on-one coaching and ongoing support until you land your dream job.",
    hero: "Your dedicated partner, all the way to the offer.",
    intro: "Our premium coaching is a complete, ongoing partnership. From strategy to documents to interviews to negotiation, we support you at every step, and we stay with you until you land the role you want.",
    benefits: [
      "Dedicated one-on-one career coach",
      "Full document suite, resume, cover letter, LinkedIn",
      "Unlimited mock interviews and coaching sessions",
      "Salary negotiation and offer guidance",
      "Ongoing support until you are successfully placed",
    ],
    process: [
      { t: "Onboarding", d: "We build a complete strategy around your career goals." },
      { t: "Preparation", d: "We optimize every document and your online presence." },
      { t: "Active Support", d: "We coach you through applications and interviews." },
      { t: "Placement", d: "We support you through offers, negotiation and onboarding." },
    ],
    faqs: [
      { q: "How long does support last?", a: "Premium coaching continues until you are successfully placed in a suitable role." },
      { q: "Is this fully personalized?", a: "Yes, it is a one-on-one partnership tailored entirely to you." },
    ],
  },
];

// ---- PRICING (general career packages) ----
export const PACKAGES = [
  {
    name: "Launch Package",
    tier: "Starter Tier",
    price: "£159",
    popular: false,
    features: [
      ["ATS-Optimized CV", true],
      ["Tailored Cover Letter", true],
      ["Curated Job List (LinkedIn-based)", true],
      ["LinkedIn Revamping", false],
      ["Active Job Applications", false],
      ["Ongoing Support Until Job", false],
    ],
  },
  {
    name: "Accelerator Package",
    tier: "Most Popular",
    price: "£499",
    popular: true,
    features: [
      ["Everything in Launch", true],
      ["LinkedIn Revamping", true],
      ["Active Job Applications", true],
      ["Interview Scheduling Support", true],
      ["Mock Interview (one session)", true],
      ["Internship Certificate (if required)", true],
    ],
  },
  {
    name: "Elite Placement",
    tier: "Ultimate Success",
    price: "£899",
    popular: false,
    features: [
      ["Everything in Accelerator", true],
      ["Priority Daily Applications", true],
      ["Direct HR & Company References", true],
      ["Unlimited Mock Interviews", true],
      ["1-on-1 Interview Coaching", true],
      ["Ongoing Support Until Job", true],
    ],
  },
];

export const COMPARISON = {
  cols: ["Launch", "Accelerator", "Elite"],
  rows: [
    ["ATS-Optimized CV", true, true, true],
    ["Tailored Cover Letter", true, true, true],
    ["Curated Job List (LinkedIn-based)", true, true, true],
    ["LinkedIn Revamping", false, true, true],
    ["Active Job Applications", false, true, true],
    ["Interview Scheduling Support", false, true, true],
    ["Mock Interviews", false, "One session", "One session"],
    ["Internship Certificate", false, "If required", "If required"],
    ["Priority Daily Applications", false, false, true],
    ["Direct HR & Company References", false, false, true],
    ["Unlimited Mock Interviews", false, false, true],
    ["1-on-1 Interview Coaching", false, false, true],
    ["Confidence Building Sessions", false, false, true],
    ["Job Cracking Techniques", false, false, true],
    ["Ongoing Support Until Job", false, false, true],
  ],
};

// ---- NHS JOBS ----
export const NHS = {
  title: "NHS Jobs Recruitment Support",
  intro:
    "Dedicated support for professionals seeking NHS roles, from finding genuine vacancies to submitting applications that meet NHS standards.",
  help: [
    "Searching for relevant NHS roles matched to your qualifications and experience.",
    "Tailoring your CV and supporting information to NHS standards.",
    "Reviewing person specifications and ensuring your application addresses all essential criteria.",
    "Preparing supporting statements aligned with NHS values and the job requirements.",
    "Guidance on HCPC registration requirements (where applicable).",
  ],
  platforms: ["TRAC Jobs", "NHS Jobs Portal", "Genuine & up-to-date"],
  specialties: "We work across all laboratory specialties, Microbiology, Haematology, Histopathology, Blood Sciences and more, at every band level (Band 5, 6, 7 and above).",
  packages: [
    { name: "Basic", price: "£50", desc: "NHS job search and a curated list of suitable vacancies.", feat: false },
    { name: "Standard", price: "£100", desc: "Job search plus CV review and optimization for NHS applications.", feat: false },
    { name: "Premium", price: "£200", desc: "Job search, CV optimization, tailored supporting statements, and application submission support.", feat: true },
  ],
  custom: "Every client is different, we're happy to create a custom package based on your career goals and the level of support you require.",
  cta: "To begin, share your CV, preferred location, target band level, and laboratory specialty, and we'll identify suitable opportunities and strengthen your applications.",
};

// ---- REVIEWS ----
export const REVIEWS = [
  { n: "Emily Carter", l: "London, United Kingdom", c: "gb", d: "15 Mar 2025", s: 5, t: "My CV was getting ignored for months. After their ATS rewrite I had three interviews in two weeks. Absolutely worth it." },
  { n: "James Whitfield", l: "Manchester, United Kingdom", c: "gb", d: "8 Mar 2025", s: 5, t: "The LinkedIn revamp brought recruiters straight to my inbox. Landed a role with a great UK firm within a month." },
  { n: "Olivia Bennett", l: "Toronto, Canada", c: "ca", d: "2 Mar 2025", s: 5, t: "Professional, responsive and genuinely helpful. The interview coaching gave me the confidence I was missing." },
  { n: "Liam O'Connor", l: "Sydney, Australia", c: "au", d: "24 Feb 2025", s: 5, t: "They tailored every application for me and I finally stopped wasting time on the wrong roles. Brilliant service." },
  { n: "Sophie Müller", l: "Berlin, Germany", c: "de", d: "18 Feb 2025", s: 5, t: "Clear communication and a CV that actually reflects my experience. I had two offers within six weeks." },
  { n: "Lucas Moreau", l: "Paris, France", c: "fr", d: "12 Feb 2025", s: 4, t: "Very strong CV and cover letter work. Took a little time but the quality was excellent and well worth it." },
  { n: "Charlotte Hughes", l: "Birmingham, United Kingdom", c: "gb", d: "5 Feb 2025", s: 5, t: "The NHS application support was outstanding. They knew exactly how to address the person specification." },
  { n: "Noah Wilson", l: "Vancouver, Canada", c: "ca", d: "30 Jan 2025", s: 5, t: "Mock interviews were realistic and the feedback was honest. I walked into my interview genuinely prepared." },
  { n: "Isabella Schmidt", l: "Munich, Germany", c: "de", d: "24 Jan 2025", s: 5, t: "A polished, professional CV that finally got me noticed by the companies I actually wanted to work for." },
  { n: "Ethan Walker", l: "Melbourne, Australia", c: "au", d: "16 Jan 2025", s: 5, t: "End to end support that saved me hours every week. The team handled applications while I prepared for interviews." },
  { n: "Amelia Clarke", l: "Leeds, United Kingdom", c: "gb", d: "9 Jan 2025", s: 5, t: "Friendly, knowledgeable and results driven. My salary expectations were met thanks to their negotiation tips." },
  { n: "Chloé Laurent", l: "Lyon, France", c: "fr", d: "3 Jan 2025", s: 5, t: "Excellent guidance from start to finish. I felt supported at every step and secured a role I love." },
];

// =====================================================================
// HERO IMAGES, how to use YOUR OWN photos (NHS / ABET / buildings):
//   1. Put your image files in the `public` folder, e.g. public/hero1.jpg
//   2. Replace the `src` below with "/hero1.jpg" (note the leading slash)
//   Example:  { src: "/hero1.jpg", caption: "Your caption here" },
// The URLs below are free-licensed Unsplash placeholders (served as WebP).
// You can mix local and online images freely.
// =====================================================================
// Hero slides, each slide rotates its own SEO-optimized heading + subtitle.
// 5 city photos (your uploads) + 5 institutional images. The `em` part of the
// heading is highlighted in gold. Keywords target high-search career terms.
export const HERO_SLIDES = [
  {
    src: "/hero-london.jpg",
    eyebrow: "Premium British Career Services",
    heading: "Your skills are not the",
    em: "problem.",
    sub: "Your presentation is. We are a British company that helps you land jobs, craft your professional identity, and get your career sorted, elegantly and efficiently. A premium British career services company.",
  },
  {
    src: "/hero-usa.jpg",
    eyebrow: "ATS Resume & CV Writing Experts",
    heading: "Get past the bots,",
    em: "get hired.",
    sub: "Over 75% of CVs are rejected by Applicant Tracking Systems before a human sees them. We build ATS-optimised resumes that reach real recruiters, and win interviews.",
  },
  {
    src: "/hero-canada.jpg",
    eyebrow: "NHS Jobs Recruitment Support",
    heading: "Your NHS career",
    em: "starts here.",
    sub: "Specialist support to find genuine NHS vacancies, tailor your CV to NHS standards, and write supporting statements that meet the person specification.",
  },
  {
    src: "/hero-australia.jpg",
    eyebrow: "LinkedIn Profile Optimisation",
    heading: "Get found by",
    em: "recruiters.",
    sub: "A keyword-rich, fully optimised LinkedIn profile that ranks higher in recruiter searches and turns profile views into real job opportunities.",
  },
  {
    src: "/hero-paris.jpg",
    eyebrow: "Trusted Across 40+ Countries",
    heading: "Global careers,",
    em: "expert support.",
    sub: "From the UK and USA to Canada, Australia and Europe, we help professionals worldwide secure roles at the companies they want.",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&fit=crop&w=1920&q=70",
    eyebrow: "Interview Coaching & Preparation",
    heading: "Walk in",
    em: "confident.",
    sub: "One-to-one mock interviews, proven answer frameworks and honest feedback that turn nervous candidates into confident hires.",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=webp&fit=crop&w=1920&q=70",
    eyebrow: "End-to-End Job Application Support",
    heading: "We do the",
    em: "heavy lifting.",
    sub: "We find matching roles, tailor every application and submit on your behalf, so you spend less time applying and more time getting hired.",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=webp&fit=crop&w=1920&q=70",
    eyebrow: "Career Coaching & Guidance",
    heading: "A clear path to",
    em: "your next role.",
    sub: "Personalised career guidance and a step-by-step strategy built around your goals, experience and the roles you really want.",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=webp&fit=crop&w=1920&q=70",
    eyebrow: "Cover Letters That Convert",
    heading: "Make recruiters",
    em: "say yes.",
    sub: "Compelling, role-specific cover letters that tell your story and make hiring managers want to meet you, every single time.",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fm=webp&fit=crop&w=1920&q=70",
    eyebrow: "Affordable Career Sponsorship",
    heading: "Talent is universal.",
    em: "So is our support.",
    sub: "Subsidised and sponsored career services for deserving students and professionals, because opportunity should never be limited by your budget.",
  },
];

export const FAQS_HOME = [
  { q: "How long does each service take?", a: "Most documents, resume, cover letter, LinkedIn, are delivered within 48 hours. Coaching and application support are ongoing based on your needs." },
  { q: "Do you offer refunds?", a: "We stand by our quality. If you're not satisfied with your initial documents, we offer unlimited revisions until you're happy." },
  { q: "What is the Career Sponsorship program?", a: "We sponsor deserving students facing financial difficulties. If you qualify, we provide our services at reduced or no cost." },
  { q: "Can I combine multiple services?", a: "Absolutely. Many clients choose a package that combines resume writing, LinkedIn optimization, and interview coaching for maximum impact." },
];

/* ============================================================
   HCPC REGISTRATION PAGE CONTENT
   ============================================================ */

export const HCPC_PROFESSIONS = [
  { icon: "search", title: "Biomedical Scientist", desc: "Laboratory analysis and diagnostic testing roles across NHS and private pathology services." },
  { icon: "heart", title: "Physiotherapist", desc: "Musculoskeletal, neurological and respiratory rehabilitation roles in hospitals and clinics." },
  { icon: "star2", title: "Occupational Therapist", desc: "Helping patients regain independence in NHS trusts, community teams and private practice." },
  { icon: "shield", title: "Operating Department Practitioner", desc: "Perioperative care across anaesthetic, surgical and recovery stages of theatre practice." },
  { icon: "monitor", title: "Radiographer", desc: "Diagnostic imaging and therapeutic radiography roles across UK hospitals and trusts." },
  { icon: "chart", title: "Clinical Scientist", desc: "Specialist scientific and diagnostic roles supporting patient care across NHS departments." },
  { icon: "chat", title: "Speech & Language Therapist", desc: "Assessment and therapy roles for communication and swallowing difficulties in the NHS." },
  { icon: "cap", title: "Practitioner Psychologist", desc: "Clinical, counselling and forensic psychology roles across NHS and independent services." },
];

export const HCPC_NEED = [
  { icon: "shield", title: "Regulatory Compliance", desc: "The HCPC is the legal regulator for 15 health and care professions in the UK. Practising without registration where it is required is against the law, so registration is the first checkpoint on the road to a UK role." },
  { icon: "star2", title: "Professional Recognition", desc: "HCPC registration confirms that your qualifications and experience meet UK standards, giving employers and patients confidence in your competence from day one." },
  { icon: "chart", title: "Better Career Opportunities", desc: "Most NHS trusts and private healthcare providers will only shortlist candidates who are HCPC registered, so registration opens the door to a far wider range of roles." },
  { icon: "health", title: "Patient Safety & Professional Standards", desc: "Registration exists to protect patients. Meeting HCPC standards of proficiency shows you are equipped to deliver safe, effective and ethical care." },
];

export const HCPC_PROCESS = [
  { n: "01", title: "Eligibility Assessment", desc: "We review your qualifications, training and work history against HCPC standards to confirm your route to registration." },
  { n: "02", title: "Document Verification", desc: "Your certificates, transcripts and professional references are checked and organised so nothing is missing or incorrect." },
  { n: "03", title: "Application Preparation", desc: "We help you complete the HCPC application form accurately, including your scope of practice and professional declarations." },
  { n: "04", title: "HCPC Submission", desc: "Your application and supporting evidence are submitted to the HCPC, with all fees and documentation in the correct format." },
  { n: "05", title: "Registration Review", desc: "We track your application through HCPC assessment and respond quickly to any additional information requests." },
  { n: "06", title: "Career Guidance", desc: "Once registered, we support your job search with CV writing, interview coaching and NHS application support." },
];

export const HCPC_GUIDANCE = [
  { icon: "doc", title: "Document Review", desc: "Every certificate, transcript and reference is checked against HCPC requirements before it is submitted." },
  { icon: "pen", title: "Application Support", desc: "We help you complete every section of the HCPC application form clearly, accurately and completely." },
  { icon: "cap", title: "Professional Guidance", desc: "Advice from consultants who understand UK healthcare regulation and international qualification routes." },
  { icon: "check", title: "Error Prevention", desc: "We catch the small mistakes that commonly cause delays or rejections before they reach the HCPC." },
  { icon: "clock", title: "Faster Process", desc: "A well-prepared application moves through HCPC assessment more quickly, so you can start working sooner." },
  { icon: "pin", title: "UK Career Support", desc: "Once registered, we help you find and apply for roles that match your profession and experience." },
];

export const HCPC_WHY_CHOOSE = [
  { icon: "cap", title: "Experienced HCPC Consultants", desc: "Our team has guided healthcare professionals from dozens of countries through HCPC registration." },
  { icon: "scale", title: "Transparent Process", desc: "Clear steps, honest timelines and no hidden requirements at any stage of your application." },
  { icon: "chat", title: "Fast Communication", desc: "Quick responses to your questions by WhatsApp, phone or email, whenever you need us." },
  { icon: "star2", title: "High Success Rate", desc: "A strong track record of applications approved on the first submission to the HCPC." },
  { icon: "heart", title: "Dedicated Support", desc: "One point of contact who stays with you from eligibility check through to registration." },
  { icon: "health", title: "UK Healthcare Expertise", desc: "In-depth knowledge of NHS recruitment, healthcare regulation and UK professional standards." },
];

export const HCPC_FAQS = [
  { q: "What is HCPC Registration?", a: "HCPC registration is official recognition from the Health and Care Professions Council confirming that a healthcare professional meets the UK's standards of proficiency, conduct and ethics to practise in a regulated profession." },
  { q: "Who needs HCPC Registration?", a: "Anyone practising in one of the 15 professions regulated by the HCPC, including biomedical scientists, physiotherapists, radiographers, occupational therapists and operating department practitioners, must be registered before they can legally use a protected title and practise in the UK." },
  { q: "How long does HCPC Registration take?", a: "Processing times vary by profession and route, but straightforward applications with complete documentation are typically assessed within 8 to 12 weeks. Applications with missing or unclear evidence can take considerably longer." },
  { q: "What documents are required for HCPC Registration?", a: "You will generally need proof of identity, evidence of your qualification, transcripts of your training, proof of professional indemnity arrangements and, for some professions, a certificate of current professional status from your existing regulator." },
  { q: "How does HCPC verification work?", a: "The HCPC checks your qualification against its approved standards, and may verify documents directly with your university or previous regulator. Ensuring your paperwork is accurate and complete from the outset reduces the chance of delays during this stage." },
  { q: "What does the HCPC application process involve?", a: "The process starts with an eligibility check, followed by document collection, an online application, payment of the registration fee, and then HCPC assessment. Some professions also require an English language test or a period of supervised practice." },
  { q: "How much does HCPC Registration cost?", a: "The HCPC charges a set registration fee that is reviewed periodically, alongside an annual renewal fee once registered. We can talk you through the current costs for your specific profession during a free consultation." },
  { q: "How long does HCPC processing typically take once submitted?", a: "Once a complete application reaches the HCPC, most straightforward cases are assessed within a few months. Incomplete applications are paused until further evidence is provided, which is why accurate preparation matters." },
  { q: "Can international healthcare professionals apply for UK jobs before registration?", a: "You can apply for and interview for UK healthcare roles before your registration is finalised, but most NHS trusts and private providers require confirmed HCPC registration before you can start work." },
  { q: "Do international applicants face additional requirements?", a: "International applicants usually need their qualifications assessed for equivalence to UK standards, and may need to provide extra evidence of training and supervised practice depending on their country and profession." },
  { q: "How does Career Sponsorship support HCPC Registration?", a: "We review your documents, help you prepare an accurate and complete application, guide you through each stage of the HCPC process, and support your onward job search once you are registered and ready to work in the UK." },
];

/* ============================================================
   OET PREPARATION PAGE CONTENT
   ============================================================ */

export const OET_PROFESSIONS = [
  { icon: "heart", title: "Nursing", desc: "The most common OET pathway, tailored to NMC and international nursing registration requirements." },
  { icon: "health", title: "Medicine", desc: "Clinical consultation and referral-writing practice for doctors registering with the GMC and equivalent bodies." },
  { icon: "star2", title: "Dentistry", desc: "Profession-specific role plays and writing tasks for dental registration pathways worldwide." },
  { icon: "doc", title: "Pharmacy", desc: "Medication counselling scenarios and case-note writing built around real pharmacy practice." },
  { icon: "shield", title: "Physiotherapy", desc: "Assessment and rehabilitation role plays matched to musculoskeletal and neuro physiotherapy contexts." },
  { icon: "search", title: "Occupational Therapy", desc: "Functional assessment and care-planning language for OT registration and NHS recruitment." },
  { icon: "monitor", title: "Radiography", desc: "Patient communication and imaging-referral writing tailored to diagnostic and therapeutic radiography." },
  { icon: "chat", title: "Speech & Language Therapy", desc: "Specialist vocabulary and case discussion practice for speech and language therapy registration." },
];

export const OET_NEED = [
  { icon: "shield", title: "Required by 15+ Regulators", desc: "OET is accepted by healthcare councils across the UK (NMC, GMC, HCPC), Australia (AHPRA), Ireland, New Zealand, Canada, Namibia, Dubai Health Authority and more, making it the standard English test for healthcare registration." },
  { icon: "chat", title: "Real Healthcare Context", desc: "Unlike general English tests, OET uses real clinical materials, consultations, referral letters and case notes, so your preparation doubles as workplace communication practice." },
  { icon: "clock", title: "Fast, Reliable Results", desc: "Computer-based and OET@Home results are released in as little as 48 hours, letting you move on to registration and job applications sooner." },
  { icon: "star2", title: "Grade B Is the Benchmark", desc: "Most regulators require Grade B (350+ out of 500) in every sub-test, Listening, Reading, Writing and Speaking, so targeted, profession-specific coaching matters." },
];

export const OET_PROCESS = [
  { n: "01", title: "Diagnostic Assessment", desc: "A full mock test across all four sub-tests to establish your current grade and identify your specific weak areas." },
  { n: "02", title: "Personalised Study Plan", desc: "A structured plan built around your profession, target regulator and exam timeline, whether you need 2 weeks or 2 months." },
  { n: "03", title: "Sub-Test Focused Coaching", desc: "Dedicated classes for Listening, Reading, Writing (profession-specific letters) and Speaking (role plays with a patient)." },
  { n: "04", title: "Full-Length Mock Exams", desc: "Timed practice tests under real exam conditions with an estimated grade for every sub-test." },
  { n: "05", title: "Examiner-Style Feedback", desc: "Detailed feedback on your writing and speaking from tutors trained on the official OET assessment criteria." },
  { n: "06", title: "Booking & Score Guarantee", desc: "We help you choose the right test format and date, and support you through to your target Grade B." },
];

export const OET_GUIDANCE = [
  { icon: "doc", title: "Profession-Specific Material", desc: "Practice tasks, letters and case notes matched exactly to your healthcare profession, not generic English content." },
  { icon: "chat", title: "1:1 Speaking Practice", desc: "Live role-play sessions with a patient persona, mirroring the real OET Speaking sub-test format and marking criteria." },
  { icon: "pen", title: "Writing Correction & Feedback", desc: "Line-by-line feedback on referral letters, discharge summaries and other profession-specific writing tasks." },
  { icon: "check", title: "Score Estimator & Tracking", desc: "Track your estimated grade across every sub-test after each mock exam, so you always know exactly where you stand." },
  { icon: "clock", title: "Live & Recorded Classes", desc: "Join live group classes or study at your own pace with recorded lessons covering every part of the test." },
  { icon: "star2", title: "Score Improvement Guarantee", desc: "A structured improvement plan and continued support until you reach the Grade B your registration requires." },
];

export const OET_WHY_CHOOSE = [
  { icon: "cap", title: "Ex-Examiner Led Tutors", desc: "Our OET coaches are trained on the official assessment criteria and understand exactly what markers look for." },
  { icon: "star2", title: "Score Improvement Guarantee", desc: "A clear, structured plan designed to get you to Grade B, with ongoing support if you need another attempt." },
  { icon: "clock", title: "Flexible Online Classes", desc: "Live and recorded sessions that fit around shift work, so you can prepare without pausing your career." },
  { icon: "shield", title: "12-Profession Curriculum", desc: "Materials covering all 12 OET-recognised healthcare professions, tailored to your exact registration pathway." },
  { icon: "gear", title: "Fast-Track Intensive Options", desc: "Two-week intensive courses for candidates working to a tight registration or visa deadline." },
  { icon: "heart", title: "Dedicated Support", desc: "One point of contact from your first diagnostic test through to your OET result and beyond." },
];

export const OET_PACKAGES = [
  {
    name: "Foundation",
    tag: "Self-Paced Preparation",
    price: "£89",
    popular: false,
    delivery: "90-day access",
    revisions: "Diagnostic + Study Plan",
    features: [
      ["Full diagnostic mock test with grade estimate", true],
      ["Personalised study plan by profession", true],
      ["Recorded lesson library (all 4 sub-tests)", true],
      ["Live classes", false],
      ["1:1 speaking practice", false],
      ["Writing feedback from a tutor", false],
    ],
    whatsappMessage: "Hi! I'm interested in the OET Foundation package (£89). Can you share more details?",
  },
  {
    name: "Intensive",
    tag: "Most Popular Coaching Plan",
    price: "£189",
    popular: true,
    delivery: "6-week programme",
    revisions: "Unlimited Feedback",
    features: [
      ["Everything in Foundation", true],
      ["Live group classes, all 4 sub-tests", true],
      ["2 full-length mock exams with grading", true],
      ["Writing feedback on referral letters", true],
      ["Group speaking role-play practice", true],
      ["1:1 speaking coaching", false],
    ],
    whatsappMessage: "Hi! I'm interested in the OET Intensive package (£189). Can you share more details?",
  },
  {
    name: "Premium",
    tag: "1:1 Score Guarantee Plan",
    price: "£319",
    popular: false,
    delivery: "Priority scheduling",
    revisions: "Score Guarantee Support",
    features: [
      ["Everything in Intensive", true],
      ["Unlimited full-length mock exams", true],
      ["1:1 speaking coaching with role plays", true],
      ["Dedicated writing tutor & rewrites", true],
      ["Exam booking assistance", true],
      ["Score improvement guarantee", true],
    ],
    whatsappMessage: "Hi! I'm interested in the OET Premium package (£319). Can you share more details?",
  },
];

export const OET_FAQS = [
  { q: "What is the OET exam?", a: "The Occupational English Test (OET) is an English-language proficiency test built specifically for healthcare professionals, using real clinical scenarios across 12 recognised professions including nursing, medicine, dentistry and pharmacy." },
  { q: "What score do I need to pass?", a: "OET is graded, not pass or fail. Each of the four sub-tests, Listening, Reading, Writing and Speaking, is scored from 0 to 500 and given a letter grade from A to E. Most regulators, including the UK's NMC and GMC, require Grade B (350 or above) in every sub-test." },
  { q: "How much does the OET exam cost?", a: "The full OET test (all four sub-tests) costs around AUD 587 (approximately USD 455 or GBP 360), depending on your country and test format. Individual sub-test retakes are available at a lower cost for paper-based bookings." },
  { q: "How long does OET preparation take?", a: "Most candidates prepare for 4 to 8 weeks, though this depends on your starting level. We also offer a 2-week intensive option for candidates with an urgent registration or visa deadline." },
  { q: "How is OET different from IELTS?", a: "IELTS tests general English for study, work or migration, while OET is built entirely around healthcare communication, real consultations, referral letters and clinical role plays, making it more directly relevant to your day-to-day practice." },
  { q: "How quickly will I get my results?", a: "OET on Computer and OET@Home results are typically released within 48 hours to a few business days. Paper-based results can take up to around 13 business days." },
  { q: "Is OET accepted for UK NHS jobs?", a: "Yes. OET Grade B is accepted by the NMC, GMC, HCPC and most NHS trusts as proof of English proficiency for healthcare registration and employment." },
  { q: "Can I retake individual sub-tests?", a: "For OET on Paper, you can rebook and retake individual sub-tests rather than the whole exam, once you have already sat the full test. This option is not currently available for OET on Computer or OET@Home." },
  { q: "Do you guarantee a Grade B?", a: "We cannot guarantee a specific result, as this depends on your effort and starting level, but our structured coaching, mock exams and feedback are built around helping you reach Grade B as efficiently as possible." },
];

/* ============================================================
   IELTS PREPARATION PAGE CONTENT
   ============================================================ */

export const IELTS_TYPES = [
  { icon: "cap", title: "IELTS Academic", desc: "For university and professional body applications. Tests academic reading passages and a formal report-writing task." },
  { icon: "doc", title: "IELTS General Training", desc: "For work, secondary education or migration to English-speaking countries such as the UK, Canada, Australia and New Zealand." },
  { icon: "shield", title: "IELTS for UKVI", desc: "Identical content to Academic or General Training, but administered under UK Home Office security protocols for UK visa applications." },
  { icon: "chat", title: "IELTS Life Skills", desc: "A Speaking and Listening-only test for certain UK family and settlement visa categories, assessed as pass or fail." },
];

export const IELTS_NEED = [
  { icon: "star2", title: "Globally Recognised", desc: "IELTS is accepted by over 12,000 organisations worldwide, universities, employers and immigration authorities across the UK, USA, Canada, Australia and beyond." },
  { icon: "chart", title: "Band Score, Not Pass/Fail", desc: "Results are reported on a 1-9 band scale, so there is no fail, only the band your target university, employer or visa route requires." },
  { icon: "shield", title: "UKVI Requirement", desc: "A UK Student or Skilled Worker visa application requires IELTS for UKVI specifically, taken at an approved Secure English Language Test centre." },
  { icon: "clock", title: "Fast Turnaround", desc: "Computer-delivered IELTS results are available in as little as 1-2 days, while paper-based results take around 13 days, with 2-year validity." },
];

export const IELTS_PROCESS = [
  { n: "01", title: "Diagnostic Test", desc: "A full-length practice test across Listening, Reading, Writing and Speaking to establish your current band score." },
  { n: "02", title: "Personalised Study Plan", desc: "A plan built around your target band, test date, and whether you need Academic, General Training or UKVI." },
  { n: "03", title: "Skill-Based Coaching", desc: "Dedicated classes for each module, with strategy, timing and question-type practice for Reading and Listening." },
  { n: "04", title: "Writing Task Correction", desc: "Detailed, examiner-style feedback on Task 1 (report/letter) and Task 2 (essay) with model answers and rewrites." },
  { n: "05", title: "Speaking Mock Interviews", desc: "One-on-one speaking practice covering all three parts of the test, with fluency, vocabulary and pronunciation feedback." },
  { n: "06", title: "Full Mock Exams & Booking", desc: "Timed, full-length mock tests with band estimation, followed by support choosing your test date and centre." },
];

export const IELTS_GUIDANCE = [
  { icon: "doc", title: "Section-Wise Strategy", desc: "Proven techniques for skimming, scanning and time management across the Reading and Listening modules." },
  { icon: "pen", title: "Writing Task 1 & 2 Correction", desc: "Line-by-line feedback on structure, coherence, grammar and vocabulary for both academic and general writing tasks." },
  { icon: "chat", title: "Speaking Mock Interviews", desc: "Realistic one-on-one speaking sessions covering introductions, cue cards and discussion questions." },
  { icon: "chart", title: "Band Score Tracking", desc: "See your estimated band improve after every mock test, so your progress is always clear and measurable." },
  { icon: "clock", title: "Live & Recorded Classes", desc: "Flexible online classes you can join live or catch up on your own schedule." },
  { icon: "shield", title: "UKVI-Specific Coaching", desc: "Guidance on choosing and preparing for IELTS for UKVI when your goal is a UK student or work visa." },
];

export const IELTS_WHY_CHOOSE = [
  { icon: "cap", title: "Certified IELTS Trainers", desc: "Coaches experienced in Cambridge Assessment English and British Council marking criteria across all four modules." },
  { icon: "star2", title: "Band Score Guarantee", desc: "A structured plan designed to get you to your target band, with continued support if you need to resit." },
  { icon: "gear", title: "Flexible Packages", desc: "Group classes, 1:1 coaching or a hybrid plan, built around your timeline and target band." },
  { icon: "chat", title: "Free Speaking Mock", desc: "Every candidate gets an initial speaking assessment so we know exactly where coaching should focus first." },
  { icon: "chart", title: "High Success Rate", desc: "A strong track record of candidates reaching or exceeding their target band on the first attempt." },
  { icon: "heart", title: "One Dedicated Coach", desc: "A single point of contact who stays with you from your diagnostic test through to your exam result." },
];

export const IELTS_PACKAGES = [
  {
    name: "Foundation",
    tag: "Self-Paced Preparation",
    price: "£79",
    popular: false,
    delivery: "90-day access",
    revisions: "Diagnostic + Study Plan",
    features: [
      ["Full diagnostic mock test with band estimate", true],
      ["Personalised study plan", true],
      ["Recorded lesson library (all 4 modules)", true],
      ["Live classes", false],
      ["1:1 speaking practice", false],
      ["Writing feedback from a tutor", false],
    ],
    whatsappMessage: "Hi! I'm interested in the IELTS Foundation package (£79). Can you share more details?",
  },
  {
    name: "Accelerator",
    tag: "Most Popular Coaching Plan",
    price: "£169",
    popular: true,
    delivery: "6-week programme",
    revisions: "Unlimited Feedback",
    features: [
      ["Everything in Foundation", true],
      ["Live group classes, all 4 modules", true],
      ["2 full-length mock exams with banding", true],
      ["Writing Task 1 & 2 correction", true],
      ["Group speaking practice sessions", true],
      ["1:1 speaking coaching", false],
    ],
    whatsappMessage: "Hi! I'm interested in the IELTS Accelerator package (£169). Can you share more details?",
  },
  {
    name: "Premium",
    tag: "1:1 Band Score Guarantee Plan",
    price: "£289",
    popular: false,
    delivery: "Priority scheduling",
    revisions: "Score Guarantee Support",
    features: [
      ["Everything in Accelerator", true],
      ["Unlimited full-length mock exams", true],
      ["1:1 speaking coaching, all 3 parts", true],
      ["Dedicated writing tutor & rewrites", true],
      ["UKVI test booking assistance", true],
      ["Band score improvement guarantee", true],
    ],
    whatsappMessage: "Hi! I'm interested in the IELTS Premium package (£289). Can you share more details?",
  },
];

export const IELTS_FAQS = [
  { q: "What is IELTS?", a: "IELTS (International English Language Testing System) measures English proficiency across Listening, Reading, Writing and Speaking, jointly managed by the British Council, IDP and Cambridge Assessment English. Results are reported on a 1-9 band scale." },
  { q: "Which IELTS version should I take?", a: "Take IELTS Academic for university admission, IELTS General Training for work or migration, and IELTS for UKVI specifically when applying for most UK student or work visas, as standard IELTS is not accepted for those routes." },
  { q: "How much does IELTS cost?", a: "Fees vary by country, but the standard IELTS Academic or General Training test typically costs the equivalent of roughly £155-220 (about $200-280), while IELTS for UKVI usually costs more, around £200-260." },
  { q: "What band score do I need?", a: "This depends on your goal. Most UK undergraduate courses ask for around Band 6.0-6.5, postgraduate courses often require 6.5-7.0, and many skilled visa routes set thresholds around Band 6.0-7.0 per section. We'll help you confirm the exact requirement for your target institution or visa." },
  { q: "How long is IELTS valid for?", a: "IELTS results are valid for 2 years from your test date for most universities, employers and immigration authorities." },
  { q: "How long does the test take?", a: "The full test takes 2 hours and 45 minutes: Listening (30 min), Reading (60 min) and Writing (60 min) are typically taken back-to-back, with Speaking (11-14 min) scheduled separately, either the same day or within a few days." },
  { q: "How quickly will I get my results?", a: "Computer-delivered IELTS results are usually available within 1-2 days, while paper-based results take around 13 days." },
  { q: "How is IELTS different from OET?", a: "IELTS tests general academic and everyday English, useful for almost any university, employer or visa application. OET is built specifically around healthcare communication and is the preferred test for many medical and nursing regulators." },
  { q: "Do you guarantee a specific band score?", a: "We cannot guarantee an exact result, as this depends on your starting level and effort, but our structured coaching, mock tests and detailed feedback are designed to move you efficiently toward your target band." },
];

/* ============================================================
   CAS PREPARATION PAGE CONTENT
   ============================================================ */

export const CAS_CHECKLIST = [
  { icon: "doc", title: "Valid Passport", desc: "A clear, in-date passport scan is required before any UK university can issue your CAS." },
  { icon: "check", title: "Unconditional Offer Acceptance", desc: "You must formally accept your offer and meet every academic and English-language condition first." },
  { icon: "chart", title: "Tuition Deposit Payment", desc: "Most universities require a deposit or full tuition payment before releasing your CAS statement." },
  { icon: "cap", title: "Academic Transcripts & Certificates", desc: "Final transcripts, degree certificates and any required equivalency documents, verified and complete." },
  { icon: "chat", title: "English Language Test Results", desc: "IELTS for UKVI, OET or another accepted test result meeting your course's minimum requirement." },
  { icon: "shield", title: "Financial Evidence (28-Day Rule)", desc: "Bank statements showing the required funds held for 28 consecutive days, ending within 31 days of your visa application." },
  { icon: "search", title: "ATAS Certificate (If Required)", desc: "An Academic Technology Approval Scheme certificate for certain science, engineering and technology courses." },
  { icon: "heart", title: "Parental Consent (Under 18)", desc: "Signed parental or guardian consent and proof of relationship for applicants who are minors at the time of travel." },
];

export const CAS_NEED = [
  { icon: "shield", title: "Mandatory for Your Student Visa", desc: "You cannot submit a UK Student visa application without a valid CAS reference number from a licensed sponsor." },
  { icon: "chart", title: "Worth 50 Points", desc: "In the UK's points-based student visa system, a valid CAS from a licensed sponsor contributes 50 of the required points, alongside financial evidence." },
  { icon: "clock", title: "Time-Sensitive", desc: "Universities typically begin issuing CAS statements around 4 to 6 months before your course start date, and your visa must be applied for within a set window afterwards." },
  { icon: "star2", title: "Confirms Genuine Sponsorship", desc: "Your CAS proves the Home Office that a licensed UK institution has genuinely accepted you onto a real, compliant course of study." },
];

export const CAS_PROCESS = [
  { n: "01", title: "Offer Review & Acceptance", desc: "We review your offer letter and confirm every academic and English-language condition is fully met before you accept." },
  { n: "02", title: "Document Preparation", desc: "We help you gather and verify your passport, transcripts, English test results and any additional evidence your university needs." },
  { n: "03", title: "Tuition Deposit Guidance", desc: "Clear guidance on your deposit amount, payment method and timeline so your CAS is not delayed." },
  { n: "04", title: "CAS Application Submission", desc: "We liaise with your university's admissions or CAS team to ensure your request is submitted correctly and promptly." },
  { n: "05", title: "Financial Evidence Check", desc: "We check your bank statements against the 28-day rule, matching the exact figures shown on your CAS to avoid refusal." },
  { n: "06", title: "Visa Application Support", desc: "Once your CAS is issued, we support your Student visa application, from the online form to booking your appointment." },
];

export const CAS_GUIDANCE = [
  { icon: "doc", title: "Document Checklist & Verification", desc: "A profession-grade checklist so nothing is missing when your university reviews your CAS eligibility." },
  { icon: "chart", title: "28-Day Rule Financial Planning", desc: "Help calculating the exact funds you need to show, and for how long, to satisfy the Home Office's financial requirement." },
  { icon: "chat", title: "University Liaison", desc: "Direct communication with your institution's CAS or international team to keep your request moving." },
  { icon: "check", title: "CAS Data Cross-Check", desc: "We check your CAS details against your passport, bank statements and offer letter to catch mismatches before they cause a refusal." },
  { icon: "shield", title: "Visa Application Support", desc: "Guidance through your Student visa application, supporting documents, biometric appointment and IHS payment." },
  { icon: "pin", title: "Pre-Departure Guidance", desc: "Practical next steps after your CAS and visa are approved, from accommodation to arrival in the UK." },
];

export const CAS_WHY_CHOOSE = [
  { icon: "shield", title: "Immigration-Aware Consultants", desc: "A team that understands current UK Student visa rules and the exact evidence caseworkers check." },
  { icon: "check", title: "Refusal-Focused Document Review", desc: "We check the small details, matching figures, dates and names, that most commonly trigger a visa refusal." },
  { icon: "clock", title: "Fast, Organised Turnaround", desc: "A clear, deadline-driven process so your CAS and visa application move as quickly as your university allows." },
  { icon: "cap", title: "University Process Knowledge", desc: "Experience working with CAS processes across a wide range of UK universities and colleges." },
  { icon: "scale", title: "Transparent, Honest Process", desc: "Clear timelines and requirements from day one, with no hidden steps or surprise requirements." },
  { icon: "heart", title: "Support Until You Land", desc: "Ongoing guidance from CAS through visa approval and on to your arrival in the UK." },
];

export const CAS_PACKAGES = [
  {
    name: "Essentials",
    tag: "Document Checklist Support",
    price: "£99",
    popular: false,
    delivery: "48-hour review",
    revisions: "Unlimited Revisions",
    features: [
      ["Full CAS eligibility document checklist", true],
      ["Passport & transcript review", true],
      ["28-day financial rule guidance", true],
      ["University liaison", false],
      ["Visa application support", false],
      ["Priority turnaround", false],
    ],
    whatsappMessage: "Hi! I'm interested in the CAS Essentials package (£99). Can you share more details?",
  },
  {
    name: "Complete",
    tag: "CAS & Visa Preparation",
    price: "£219",
    popular: true,
    delivery: "End-to-end support",
    revisions: "Unlimited Revisions",
    features: [
      ["Everything in Essentials", true],
      ["University liaison for CAS issuance", true],
      ["CAS data cross-check against evidence", true],
      ["Student visa application support", true],
      ["Biometric appointment guidance", true],
      ["Priority turnaround", false],
    ],
    whatsappMessage: "Hi! I'm interested in the CAS Complete package (£219). Can you share more details?",
  },
  {
    name: "Priority",
    tag: "End-to-End With Priority Support",
    price: "£379",
    popular: false,
    delivery: "Priority, fastest turnaround",
    revisions: "Dedicated Consultant",
    features: [
      ["Everything in Complete", true],
      ["Priority, fastest turnaround", true],
      ["Dedicated immigration-aware consultant", true],
      ["Mock visa interview preparation", true],
      ["Pre-departure & arrival guidance", true],
      ["Support until visa decision", true],
    ],
    whatsappMessage: "Hi! I'm interested in the CAS Priority package (£379). Can you share more details?",
  },
];

export const CAS_FAQS = [
  { q: "What is a CAS?", a: "A Confirmation of Acceptance for Studies (CAS) is a unique electronic record, identified by a 14-digit reference number, issued by a UK licensed sponsor confirming you have an unconditional place on a course. You need it to apply for a Student visa." },
  { q: "Do I need to submit a physical CAS document?", a: "No. You do not send a physical certificate. You simply enter your 14-digit CAS reference number in your online Student visa application, and the Home Office verifies it directly with your university." },
  { q: "When will my university issue my CAS?", a: "Most universities begin issuing CAS statements around 4 to 6 months before your course start date, once you have accepted your unconditional offer and paid any required deposit." },
  { q: "What is the 28-day financial rule?", a: "You must hold the required funds, covering unpaid tuition plus living costs, in your account for 28 consecutive days, with your final bank statement dated within 31 days of your visa application. If the balance drops below the required amount at any point, the 28-day count resets." },
  { q: "How much money do I need to show?", a: "This depends on your course fees and location. As a guide, living cost requirements are typically around £12,006 for study in London or £9,207 for outside London, on top of any unpaid tuition shown on your CAS, though the exact figures should always be checked against current Home Office guidance." },
  { q: "What documents does my CAS include?", a: "Your CAS typically includes your course details, tuition fee amount, confirmation of any fees already paid, your qualification details used for the offer, and your sponsor's licence number." },
  { q: "How many points does a CAS give me?", a: "Under the UK's points-based Student visa system, a valid CAS from a licensed sponsor contributes 50 points, with the remaining points awarded for meeting the financial and, where relevant, English-language requirements." },
  { q: "What commonly causes a CAS or visa refusal?", a: "The most common issues are financial evidence that does not meet the 28-day rule, mismatched names or figures between your CAS and bank statements, gaps in study history, or incomplete supporting documents." },
  { q: "Can I get a CAS if I am extending my Student visa?", a: "Yes. If you are continuing or extending your studies, your university can issue a new CAS provided you meet ongoing attendance and academic requirements set by the Home Office." },
  { q: "How does Career Sponsorship support CAS preparation?", a: "We review and organise your documents, guide you through the 28-day financial rule, liaise with your university where needed, cross-check your CAS data against your evidence, and support your Student visa application through to a decision." },
];

// ---- DATAFLOW VERIFICATION (GCC Primary Source Verification) ----
export const DATAFLOW_CHECKLIST = [
  { icon: "cap", title: "Plus Two Certificate", desc: "Required for diploma holders as part of your foundational education evidence." },
  { icon: "doc", title: "Diploma / UG / PG Degree Certificate", desc: "Clear copies of the front and back of every degree certificate you hold." },
  { icon: "list", title: "All Degree Mark List / Transcripts", desc: "Complete mark lists or transcripts for every academic year of your qualification." },
  { icon: "send", title: "Experience Certificate", desc: "Verified employer experience letters covering your relevant clinical or professional practice." },
  { icon: "shield", title: "Medical Council / Professional Registration Certificate", desc: "Your current licence or registration certificate from your home country's regulatory council." },
  { icon: "pin", title: "Passport Copy (Front & Back)", desc: "A clear, in-date passport scan showing both the photo page and any relevant stamps." },
  { icon: "star2", title: "Good Standing Certificate", desc: "Where applicable, confirming you hold no disciplinary action against your licence." },
  { icon: "check", title: "Passport-Size Photo", desc: "A recent passport-size photo on a plain white background." },
];

export const DATAFLOW_NEED = [
  { icon: "shield", title: "Mandatory for GCC Licensing", desc: "DOH, DHA, MOH, SCFHS, QCHP and NHRA all require a cleared DataFlow report before they will process your healthcare licence application." },
  { icon: "check", title: "Verifies Your Credentials", desc: "DataFlow independently confirms your degrees, professional registration and work experience directly with the issuing institutions." },
  { icon: "clock", title: "Takes Time, Plan Ahead", desc: "Primary Source Verification with issuing bodies can take several weeks, so accurate documents from day one avoid costly delays." },
  { icon: "star2", title: "One Rejection Can Cost Months", desc: "A single incomplete or mismatched document can see your case rejected and sent back to the start of the queue." },
];

export const DATAFLOW_PROCESS = [
  { n: "01", title: "Document Review", desc: "We check every certificate, transcript and registration document against your target GCC authority's exact requirements." },
  { n: "02", title: "Application Creation", desc: "We set up and complete your DataFlow case correctly the first time, matching your details across every field." },
  { n: "03", title: "Primary Source Verification", desc: "We track your case as DataFlow contacts your university, council and employers directly to verify each document." },
  { n: "04", title: "Query & Objection Handling", desc: "If DataFlow raises a query or objection, we respond quickly with the right supporting evidence to keep your case moving." },
  { n: "05", title: "Report Completion", desc: "Once verification is complete, your final DataFlow report is issued and ready to submit to your regulator." },
  { n: "06", title: "Licensing & Exam Support", desc: "We guide you through the next steps, credential assessment, exam booking and licence application, with your cleared report." },
];

export const DATAFLOW_GUIDANCE = [
  { icon: "doc", title: "Document Checklist & Review", desc: "A profession-specific checklist so nothing is missing before your case is submitted." },
  { icon: "check", title: "DataFlow Case Submission", desc: "We complete and submit your DataFlow application accurately, avoiding the errors that cause delays." },
  { icon: "chat", title: "Direct Case Tracking", desc: "Regular updates on your verification status, so you always know exactly where your case stands." },
  { icon: "shield", title: "Credential Assessment Support", desc: "Guidance through the credential evaluation stage required by your target GCC health authority." },
  { icon: "cap", title: "Exam Booking Assistance", desc: "Support booking Prometric or authority-specific licensing exams once your report clears." },
  { icon: "pin", title: "Authority-Specific Guidance", desc: "Tailored advice for DOH, DHA, MOH, SCFHS, QCHP and NHRA, since each authority's requirements differ." },
];

export const DATAFLOW_WHY_CHOOSE = [
  { icon: "shield", title: "5000+ Cases Completed", desc: "A proven track record supporting healthcare professionals through DataFlow verification for the GCC." },
  { icon: "check", title: "Document-Accuracy Focused", desc: "We check the details, names, dates, institution seals, that most commonly trigger a DataFlow objection." },
  { icon: "clock", title: "Faster, Organised Turnaround", desc: "A clear, tracked process that keeps your case moving instead of sitting idle in a queue." },
  { icon: "health", title: "Healthcare Specialists", desc: "Deep experience with nurses, doctors, allied health and other regulated healthcare professions." },
  { icon: "scale", title: "Transparent Process", desc: "Clear requirements and timelines from day one, with no hidden steps or surprise requests." },
  { icon: "heart", title: "Support Until You're Licensed", desc: "We stay with you from document review through to your final licence application." },
];

export const DATAFLOW_PACKAGES = [
  {
    name: "Essentials",
    tag: "Document Review & Checklist",
    price: "£99",
    popular: false,
    delivery: "48-hour review",
    revisions: "Unlimited Revisions",
    features: [
      ["Full DataFlow document checklist", true],
      ["Certificate & transcript review", true],
      ["Application form guidance", true],
      ["Full case submission", false],
      ["Query & objection handling", false],
      ["Priority turnaround", false],
    ],
    whatsappMessage: "Hi! I'm interested in the DataFlow Essentials package (£99). Can you share more details?",
  },
  {
    name: "Complete",
    tag: "End-to-End DataFlow Verification",
    price: "£219",
    popular: true,
    delivery: "End-to-end support",
    revisions: "Unlimited Revisions",
    features: [
      ["Everything in Essentials", true],
      ["Full case creation & submission", true],
      ["Direct case tracking until cleared", true],
      ["Query & objection handling", true],
      ["Credential assessment guidance", true],
      ["Priority turnaround", false],
    ],
    whatsappMessage: "Hi! I'm interested in the DataFlow Complete package (£219). Can you share more details?",
  },
  {
    name: "Priority",
    tag: "Verification, Assessment & Exam Support",
    price: "£379",
    popular: false,
    delivery: "Priority, fastest turnaround",
    revisions: "Dedicated Consultant",
    features: [
      ["Everything in Complete", true],
      ["Priority, fastest turnaround", true],
      ["Dedicated healthcare consultant", true],
      ["Credential assessment support", true],
      ["Exam booking assistance", true],
      ["Support until your licence is issued", true],
    ],
    whatsappMessage: "Hi! I'm interested in the DataFlow Priority package (£379). Can you share more details?",
  },
];

export const DATAFLOW_FAQS = [
  { q: "What is DataFlow?", a: "DataFlow is a Primary Source Verification (PSV) process used by GCC healthcare authorities to verify your educational qualifications, professional registration and work experience directly with the institutions that issued them." },
  { q: "Which authorities require DataFlow?", a: "DOH (Abu Dhabi), DHA (Dubai), MOH (UAE), SCFHS (Saudi Arabia), QCHP (Qatar) and NHRA (Bahrain) all require a cleared DataFlow report before processing a healthcare licence application." },
  { q: "How long does DataFlow verification take?", a: "Timelines vary by country and institution, since DataFlow must contact each issuing body directly. Most cases clear within a few weeks, though incomplete documents or unresponsive institutions can extend this." },
  { q: "What documents do I need?", a: "Typically your degree and mark list certificates, professional registration or licence, experience certificates, passport copy and a passport-size photo. Requirements vary slightly by profession and target authority." },
  { q: "What happens if DataFlow raises an objection?", a: "An objection means a document could not be verified as submitted, often due to a mismatch or missing information. We respond with the correct supporting evidence to resolve it as quickly as possible." },
  { q: "Do I need DataFlow before or after my licensing exam?", a: "This depends on the authority. Some require a cleared DataFlow report before exam booking, while others allow parallel processing. We advise you based on your specific target authority." },
  { q: "How does Career Sponsorship support DataFlow verification?", a: "We review your documents against your target authority's exact requirements, create and submit your case correctly, track it until it clears, handle any objections, and guide you through credential assessment and exam booking." },
];
