export const siteConfig = {
  name: "DM Growth",
  description:
    "Personalized outbound that brings in high-paying clients. Proven outbound systems to position you as the go-to expert in your niche.",
  tagline: "Outbound that books revenue-ready conversations in 90 days.",
  url: "http://datamodulator.ro",
  nav: [
    { label: "Problems", href: "#problems" },
    { label: "Solution", href: "#solution" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    //eyebrow: "6+ active clients",
    title: "Personalized outbound that brings in high-paying clients.",
    description:
      "With our proven system, we'll use outbound to position your company as the go-to expert in your niche. We'll grow your company together and generate predictable income — all in 90 days.",
    primaryCta: { label: "Book a call", href: "#contact" },
    secondaryCta: { label: "See the system", href: "#solution" },
  },
  problems: [
    {
      title: "DIY outbound that blends in.",
      description:
        "You spend months figuring out messaging only to sound like everyone else — and premium clients ignore you.",
      badge: "1st option",
    },
    {
      title: "Hiring more SDRs/BDRs.",
      description:
        "Long timelines, heavy overhead, and people to manage — without a guarantee they can build a working system.",
      badge: "2nd option",
    },
    {
      title: "A better way exists.",
      description:
        "A done-with-you system built, tested, and run for you — so you stay focused on closing, not babysitting outbound.",
      badge: "3rd option",
    },
  ],
  solution: {
    title: "Introducing LeadForge Outbound.",
    description:
      "A DFY/DWY outbound program that installs infrastructure, messaging, and daily execution to keep your calendar full of buyers.",
    pillars: [
      {
        title: "Outbound infrastructure",
        description: "Warm domains, deliverability, and sending blocks to reach inboxes at scale.",
      },
      {
        title: "ICP & offer clarity",
        description: "Narrowed ICP and crisp offers that resonate with high-paying customers.",
      },
      {
        title: "Daily launch & optimization",
        description: "Sequences, personalization, and iterations shipped weekly to keep reply rates rising.",
      },
    ],
  },
  process: [
    {
      number: "01",
      label: "1st step",
      title: "Competitor & ICP Analysis",
      description:
        "We’ll dive deep into your competitors' strategies—what works for them, what you can do better—and thoroughly analyze your target audience’s pain points, values, and desires.",
    },
    {
      number: "02",
      label: "2nd step",
      title: "Building your infrastructure",
      description: "We'll create your scalable infrastructure on 1, 2 or 5 domains. Built on a Private Server that only you will use.",
    },
    {
      number: "03",
      label: "3rd step",
      title: "ICP Finding & Scraping",
      description: "We'll find your Ideal Customer Profile and scrape them for use in our outbound strategy. The leads will be verified and safe to send.",
    },
    {
      number: "04",
      label: "4th step",
      title: "Copywriting & Personalization",
      description: "Based on your onboardings form we'll start writing the copy and personalizing the outbound strategy to cater to your needs.",
    },
    {
      number: "05",
      label: "5th step",
      title: "Campaign Creation & Launching",
      description: "We'll prepare the campaigns in Smartlead.ai for you to check and make sure it all fits the way you'd speak to your customer. We'll launch after approval.",
    },
    {
      number: "06",
      label: "6th step",
      title: "Inbox Management & Booked Meetings",
      description: "We'll manage the inbound replies and do pipeline management to ensure everyone interested shows up to a meeting with you. Our work is only done when you had a meeting with your ICP.",
    },
  ],
  results: [
    { label: "Avg. reply lift", value: "3.2x" },
    { label: "Booked in 90 days", value: "20-40+" },
    { label: "Active niches served", value: "12" },
  ],
  pricing: [
    {
      name: "Infrastructure build",
      description: "Perfect for people that want to use a proven system.",
      ctaLabel: "Apply Now",
      featured: false,
      perks: [
        { text: "Complete infrastructure build" },
        { text: "1 Free outbound campaign" },
        { text: "DM Growth SOP's" },
      ],
    },
    {
      name: "DM Outbound",
      description: "Perfect for those who don't want to do anything.",
      ctaLabel: "Get Started",
      featured: false,
      perks: [
        { text: "Infrastructure build" },
        { text: "Fractional Head of Sales" },
        { text: "Weekly calls" },
        { text: "1:1 Calls with our team" },
        { text: "24/7 Support on WhatsApp" },
        { text: "3-month engagement" },
      ],
    },
  ],
  cta: {
    title: "Ready to see it for your niche?",
    description: "Send a few details and we'll share the exact outbound plan we'd run for you.",
    calendlyUrl: "https://calendly.com/your-calendly/intro-call",
  },
  lead: {
    title: "Contact us",
    description: "We respond within one business day. Include your niche, offer, and current outbound volume.",
    successCopy: "Thanks for reaching out! We'll follow up with a tailored plan shortly.",
  },
  footer: {
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Behance", href: "https://www.behance.net" },
    ],
  },
  seo: {
    title: "DM Growth",
    description:
      "Launch production-grade marketing sites with Next.js, Tailwind tokens, shadcn/ui, Framer Motion, and analytics-ready wiring.",
    ogImage: "https://dummyimage.com/1200x630/0f172a/e5e7eb&text=DM+Growth",
  },
} as const;
