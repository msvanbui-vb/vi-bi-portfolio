export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

export type WorkSample = {
  number: string;
  title: string;
  copy: string;
  assets: MediaAsset[];
  link?: string;
  linkLabel?: string;
};

export type CaseStudy = {
  id: string;
  client: string;
  category: string;
  period: string;
  headline: string;
  summary: string;
  tags: string[];
  cardMetrics: Metric[];
  accent: "purple" | "blue" | "ocean";
  featuredAssets: MediaAsset[];
  intro: string;
  challenge: string[];
  ownership: string[];
  approach: string[];
  sideSections?: { title: string; copy: string[] }[];
  voices?: { title: string; copy: string; test?: string }[];
  signalFlow?: { title: string; copy: string }[];
  metrics: Metric[];
  resultNote?: string;
  resultsAsset?: MediaAsset;
  work: WorkSample[];
  attribution?: string;
  testimonial?: {
    quote: string;
    attribution: string;
    image?: MediaAsset;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "gavel",
    client: "Gavel",
    category: "LegalTech SaaS + AI",
    period: "Social Media Manager · Contract · March 2023 to July 2026",
    headline: "Complex legal tech, made clear and credible.",
    summary:
      "I ran Gavel’s social content end to end, translating technical products, customer stories, interviews, and founder expertise into a recognisable brand presence and repeatable publishing system.",
    tags: ["Social strategy", "Technical storytelling", "Founder content", "Content systems"],
    cardMetrics: [
      { value: "1.9K → 7K", label: "LinkedIn followers" },
      { value: "128K+", label: "Impressions in the supplied 12-month analytics view" },
    ],
    accent: "purple",
    featuredAssets: [
      {
        src: "/case-studies/gavel/gavel-exec-word-demo.webp",
        alt: "Gavel Exec operating inside Microsoft Word on a legal document.",
        caption: "Product workflow",
        fit: "cover",
      },
      {
        src: "/case-studies/gavel/gavel-founder-benchmarking.webp",
        alt: "Dorna Moini LinkedIn video post explaining how Gavel benchmarks AI models.",
        caption: "Founder-led education",
        fit: "cover",
      },
      {
        src: "/case-studies/gavel/gavel-manual-redlining.webp",
        alt: "Gavel LinkedIn post using a humorous manual-redlining creative.",
        caption: "Brand voice range",
        fit: "cover",
      },
      {
        src: "/case-studies/gavel/gavel-linkedin-analytics.webp",
        alt: "Gavel LinkedIn analytics showing impressions, reactions, comments, and reposts.",
        caption: "Analytics proof",
        fit: "contain",
      },
    ],
    intro:
      "Gavel builds document automation and AI contract-review tools for attorneys. I independently managed its social content from strategy through publication, then turned the working process into a clearer brand voice and an AI-assisted content system that helped a lean marketing function publish consistently without sounding automated.",
    challenge: [
      "Gavel had strong products, customer stories, founder expertise, interviews, podcasts, and educational material, but limited internal capacity to turn those inputs into ongoing marketing.",
      "Social media became one of the company’s most consistent brand-awareness activities. The content needed to explain complex legal technology to a specialised audience, feel credible to attorneys, avoid generic AI claims, and require minimal day-to-day input from leadership.",
    ],
    ownership: [
      "Social strategy and editorial planning",
      "Company copywriting and founder-led content development",
      "Graphic and carousel design",
      "Video scripting and editing direction",
      "Long-form repurposing, publishing, and channel management",
      "Brand voice documentation, reporting, and AI-assisted workflows",
    ],
    approach: [
      "I built content from expertise Gavel already had: customer case studies, product updates, interviews, podcasts, webinars, events, articles, and press.",
      "For each source, I identified the strongest audience lesson, selected the right voice and format, then carried the piece from draft through design and publication.",
      "As feedback accumulated, I expanded the existing brand foundation into a more complete social tone-and-voice guide. AI supported source extraction, idea development, repurposing, script work, and visual direction. Final positioning, fact-checking, design, tone, and editorial decisions remained human-led.",
    ],
    voices: [
      {
        title: "Gavel company page",
        copy: "Professional, direct, and evidence-led. The company account focused on product education, customer proof, events, partnerships, company news, and practical legal-workflow problems.",
        test: "Would a respected attorney find this credible enough to share with a colleague?",
      },
      {
        title: "Dorna’s founder presence",
        copy: "Practitioner-first, specific, and grounded in her experience as a former attorney and LegalTech founder. I partnered closely with her to turn interviews, public appearances, company experiences, and subject-matter expertise into a consistent thought-leadership presence.",
      },
    ],
    metrics: [
      { value: "1.9K → 7K", label: "Organic company LinkedIn followers" },
      { value: "128,895", label: "Impressions in the supplied 12-month analytics view" },
      { value: "3 posts/week", label: "Average company publishing cadence" },
      { value: "18,945", label: "CEO LinkedIn audience supported" },
    ],
    resultNote:
      "The supplied 12-month LinkedIn analytics capture also shows 1,186 reactions, 146 comments, and 29 reposts. Dorna’s audience grew 25% versus the prior 365 days.",
    resultsAsset: {
      src: "/case-studies/gavel/gavel-linkedin-analytics.webp",
      alt: "LinkedIn analytics for Gavel showing 128,895 impressions, 1,186 reactions, 146 comments, and 29 reposts.",
      caption: "Supplied LinkedIn analytics capture · 3 Aug 2025 to 2 Aug 2026",
      fit: "contain",
    },
    work: [
      {
        number: "01",
        title: "Product storytelling inside the workflow",
        copy: "Instead of describing Gavel Exec as a list of AI features, the content showed how an attorney could work inside Microsoft Word, fill a legal template, review issues, and move through a familiar document workflow.",
        assets: [
          {
            src: "/case-studies/gavel/gavel-exec-word-demo.webp",
            alt: "Gavel Exec demo shown inside Microsoft Word.",
            caption: "Gavel Exec product demo",
            fit: "cover",
          },
          {
            src: "/case-studies/gavel/gavel-fill-template-reel.webp",
            alt: "Instagram Reel introducing Gavel Exec's Fill Template skill.",
            caption: "Short-form product content",
            fit: "cover",
          },
        ],
      },
      {
        number: "02",
        title: "Founder-led technical education",
        copy: "Founder content turned technical subjects such as AI benchmarking, legal-data retention, and product evaluation into practical explanations that remained recognisably Dorna’s voice.",
        assets: [
          {
            src: "/case-studies/gavel/gavel-founder-benchmarking.webp",
            alt: "Dorna Moini LinkedIn video post about legal AI benchmarking.",
            caption: "AI benchmarking",
            fit: "cover",
          },
          {
            src: "/case-studies/gavel/gavel-zero-data-retention.webp",
            alt: "Gavel LinkedIn video post about zero data retention for legal AI.",
            caption: "Security education",
            fit: "cover",
          },
        ],
      },
      {
        number: "03",
        title: "A brand voice with more than one register",
        copy: "The company page could move from evidence-led education to a lighter cultural reference when the idea fit, without losing the product message or becoming generic SaaS content.",
        assets: [
          {
            src: "/case-studies/gavel/gavel-manual-redlining.webp",
            alt: "Gavel LinkedIn post using a humorous manual-redlining meme.",
            caption: "Humorous product angle",
            fit: "cover",
          },
          {
            src: "/case-studies/gavel/gavel-exec-launch.webp",
            alt: "Dorna Moini LinkedIn post announcing the launch of Gavel Exec.",
            caption: "Founder launch content",
            fit: "contain",
          },
        ],
      },
    ],
    testimonial: {
      quote: "You have made it so easy, and you’re so excellent at what you do.",
      attribution: "Dorna Moini, CEO and Co-founder, Gavel",
      image: {
        src: "/case-studies/gavel/gavel-client-testimonial.webp",
        alt: "Direct message from Dorna Moini praising Vi's work and saying she made the process easy.",
        fit: "contain",
      },
    },
  },
  {
    id: "hostfully",
    client: "Hostfully",
    category: "Vacation-rental SaaS",
    period: "Social Media and Community Manager · July 2021 to October 2024",
    headline: "From quiet channels to a visible industry presence.",
    summary:
      "I built Hostfully’s organic social function across five platforms, using product education, customer interviews, partnerships, and team stories to grow reach, trust, and website traffic.",
    tags: ["Organic social strategy", "B2B SaaS storytelling", "Customer interviews", "Content operations"],
    cardMetrics: [
      { value: "1.3K → 7.4K", label: "Organic LinkedIn followers" },
      { value: "2% → 5%", label: "Website traffic share from social" },
    ],
    accent: "blue",
    featuredAssets: [
      {
        src: "/case-studies/hostfully/hostfully-owner-portal.webp",
        alt: "Hostfully Owner Portal product-education Reel.",
        caption: "Product education",
        fit: "cover",
      },
      {
        src: "/case-studies/hostfully/hostfully-customer-video.webp",
        alt: "Hostfully customer or partner video Reel.",
        caption: "Customer content",
        fit: "cover",
      },
      {
        src: "/case-studies/hostfully/hostfully-integration-palooza.webp",
        alt: "Hostfully Integration Palooza event Reel.",
        caption: "Industry event",
        fit: "cover",
      },
      {
        src: "/case-studies/hostfully/hostfully-bali-offsite.webp",
        alt: "Hostfully Bali team offsite Reel.",
        caption: "Team storytelling",
        fit: "cover",
      },
    ],
    intro:
      "Hostfully builds property-management and digital-guidebook software for short-term rental operators. As its one-person social media function, I built and ran an organic system that connected product education, customer proof, industry participation, and company culture to brand discovery and website traffic.",
    challenge: [
      "Hostfully had a strong product and an established presence in vacation-rental technology, but social media was not yet operating as a consistent discovery, credibility, or acquisition channel.",
      "Social contributed approximately 2% of website traffic, product education was limited, and much of the available customer proof lived on third-party review platforms. The task was to build a repeatable organic function that translated product developments, customer results, partnerships, events, and internal milestones into useful content for property managers.",
    ],
    ownership: [
      "Social strategy, editorial planning, copywriting, and design",
      "Customer interviews and video editing",
      "Publishing and channel management",
      "Comments and DMs, while Customer Success owned the broader community",
      "Performance reporting and cross-functional coordination",
      "Five platforms managed concurrently: LinkedIn, Instagram, Facebook, X, and YouTube",
    ],
    approach: [
      "I built an organic publishing system around product and feature education, customer testimonials, team milestones, partner and integration stories, events, and practical resources for property managers.",
      "LinkedIn and Instagram were the primary channels, averaging approximately five original posts per week each. Content was adapted and cross-posted elsewhere only when the audience, format, and timing made sense.",
    ],
    sideSections: [
      {
        title: "Customer stories as a content engine",
        copy: [
          "Customer proof moved beyond static review quotes. I produced approximately five to ten customer interviews, handling the process from the conversation through video editing and social distribution.",
          "Each interview created reusable material for video, text posts, testimonials, product education, and credible brand proof in the customer’s own language.",
        ],
      },
      {
        title: "The operating system behind the content",
        copy: [
          "I built workflows with product, customer-facing, partnerships, and internal teams to surface useful customer stories, product updates, partner opportunities, and team moments.",
          "Toward the end of my tenure, I also developed a reporting structure designed to connect social performance with the broader marketing dashboard.",
        ],
      },
    ],
    metrics: [
      { value: "1.3K → 7.4K", label: "Organic LinkedIn followers" },
      { value: "2K → 8K", label: "Average monthly reach" },
      { value: "2×", label: "Average LinkedIn engagement" },
      { value: "2% → 5%", label: "Website traffic share from social" },
    ],
    resultNote:
      "Internal teams also reported stronger brand recognition at industry events and more inbound interest from potential partners. These are qualitative signals, not formally attributed conversions.",
    work: [
      {
        number: "01",
        title: "Product education",
        copy: "Product and feature updates became practical content for property managers, explaining what changed, why it mattered operationally, and where the product fit into a real hosting workflow.",
        assets: [
          {
            src: "/case-studies/hostfully/hostfully-owner-portal.webp",
            alt: "Hostfully Owner Portal product-education Reel.",
            caption: "Owner Portal Reel",
            fit: "cover",
          },
        ],
      },
      {
        number: "02",
        title: "Customer and industry content",
        copy: "Customer, partner, and integration content added credible voices to the channel and gave the audience a reason to follow beyond product announcements.",
        assets: [
          {
            src: "/case-studies/hostfully/hostfully-customer-video.webp",
            alt: "Hostfully customer or partner video content.",
            caption: "Customer or partner video",
            fit: "cover",
          },
          {
            src: "/case-studies/hostfully/hostfully-integration-palooza.webp",
            alt: "Hostfully Integration Palooza campaign Reel.",
            caption: "Integration campaign",
            fit: "cover",
          },
        ],
      },
      {
        number: "03",
        title: "People and company culture",
        copy: "Team milestones and offsite content helped Hostfully feel visible and human inside a highly networked industry, while still connecting the moment back to the brand.",
        assets: [
          {
            src: "/case-studies/hostfully/hostfully-bali-offsite.webp",
            alt: "Hostfully Bali team offsite Reel.",
            caption: "Bali offsite",
            fit: "cover",
          },
        ],
      },
    ],
    attribution:
      "All headline results are organic. No paid amplification or unverified demo-booking attribution is claimed.",
  },
  {
    id: "samson-waters",
    client: "Samson Waters",
    category: "Vacation rentals · Mexico + Canada",
    period: "Social Media Manager · August 2025 to present",
    headline: "Raw updates, turned into reasons to travel.",
    summary:
      "I turn property footage, team messages, local events, and everyday operational moments into timely campaigns and destination-led stories across Instagram, Facebook, and LinkedIn.",
    tags: ["Organic social strategy", "Signal-led storytelling", "Remote content operations", "Hospitality marketing"],
    cardMetrics: [
      { value: "207K+", label: "Organic Facebook + Instagram views" },
      { value: "2–3/month", label: "Availability or partnership DMs" },
    ],
    accent: "ocean",
    featuredAssets: [
      {
        src: "/case-studies/samson-waters/raw-team-input.webp",
        alt: "Raw balcony video shared by the Samson Waters team.",
        caption: "Raw team input",
        fit: "cover",
      },
      {
        src: "/case-studies/samson-waters/finished-reel.webp",
        alt: "Finished Samson Waters Reel created from the raw balcony footage.",
        caption: "Finished Reel",
        fit: "cover",
      },
      {
        src: "/case-studies/samson-waters/samson-christine-founder-post.webp",
        alt: "Christine Turenne LinkedIn founder post about growing Samson Waters after being told it would not succeed.",
        caption: "CEO LinkedIn",
        fit: "cover",
      },
      {
        src: "/case-studies/samson-waters/samson-instagram-analytics.webp",
        alt: "Instagram content analytics showing total, organic, and paid views for Samson Waters.",
        caption: "Organic + paid breakdown",
        fit: "contain",
      },
    ],
    intro:
      "Samson Waters manages more than 200 vacation-rental listings across destinations in Mexico and Canada. I built and run its organic social content engine, turning unstructured material from distributed teams into consistent, traveler-focused content while keeping the process intentionally light for the people on the ground.",
    challenge: [
      "The brand operates across destinations with different seasons, traveler profiles, property types, and local stories. It needed to feel recognisable without flattening every location into repetitive property posts.",
      "What arrived was rarely a finished brief: a horizontal property video, a few photos, a team update, an event mention, a road-trip clip, or a travel-news link. The challenge was to read those signals, find the audience angle, and keep publishing without asking the team to become content strategists.",
    ],
    ownership: [
      "Content pillars and monthly direction",
      "Editorial planning and copywriting",
      "Graphic design and video editing",
      "Platform adaptation, scheduling, and publishing",
      "Comments, DMs, and light performance reporting",
      "Instagram, Facebook, and LinkedIn at approximately three posts per week",
    ],
    approach: [
      "I moved content away from amenity lists and generic property promotion toward traveler motivation: privacy, calm, convenience, local relevance, pet-friendly travel, remote-work practicality, winter experiences, and the feeling of being there.",
      "The CEO provides final approval. The rest of the end-to-end workflow is mine.",
    ],
    signalFlow: [
      {
        title: "What arrives",
        copy: "Property photos, casual videos, operational updates, local news, milestones, travel moments, and incomplete ideas.",
      },
      {
        title: "What I read",
        copy: "The useful signal: a traveler tension, seasonal moment, local event, visual hook, service advantage, or relatable human detail.",
      },
      {
        title: "What ships",
        copy: "A platform-ready Reel, carousel, caption, destination story, property campaign, company update, or executive post.",
      },
    ],
    sideSections: [
      {
        title: "One brand, different travel motivations",
        copy: [
          "Mexico content can sell warmth, oceanfront calm, local events, and cultural relevance. Canadian content can shift toward ski access, winter planning, mountain stays, and seasonal travel.",
          "The common thread is experience-led storytelling rather than listing copy.",
        ],
      },
      {
        title: "Executive content alongside the travel brand",
        copy: [
          "From August 2025 through August 2026, I also supported CEO Christine’s LinkedIn presence, translating operational experience into leadership stories about teams, hospitality standards, growth, family, guest communication, and the decisions behind a well-run stay.",
        ],
      },
    ],
    metrics: [
      { value: "207K+", label: "Organic Facebook + Instagram views" },
      { value: "+224%", label: "Instagram reach" },
      { value: "+289.1%", label: "Facebook content interactions" },
      { value: "104,400", label: "Christine LinkedIn impressions" },
    ],
    resultNote:
      "From 1 August 2025 to 3 August 2026, Instagram recorded 101,807 organic views and Facebook recorded 105,731. The supplied Instagram analytics also separates 111,254 paid views from the organic result. Christine’s LinkedIn generated 104,400 impressions, 2,547 engagements, and 1,990 total followers over the reporting period.",
    resultsAsset: {
      src: "/case-studies/samson-waters/samson-instagram-analytics.webp",
      alt: "Samson Waters Instagram analytics with total, organic, and paid view breakdown.",
      caption: "Instagram view breakdown · organic and paid shown separately",
      fit: "contain",
    },
    work: [
      {
        number: "01",
        title: "Raw team update → finished social angle",
        copy: "A casual balcony clip arrived without a brief. I identified the visual contrast, reframed it around the reality behind hospitality work, and turned the same footage into a platform-ready Reel.",
        assets: [
          {
            src: "/case-studies/samson-waters/raw-team-input.webp",
            alt: "Raw balcony video shared by the Samson Waters team.",
            caption: "Raw input",
            fit: "cover",
          },
          {
            src: "/case-studies/samson-waters/finished-reel.webp",
            alt: "Finished Samson Waters Reel created from the raw balcony footage.",
            caption: "Finished Reel",
            fit: "cover",
          },
        ],
      },
      {
        number: "02",
        title: "CEO LinkedIn from a real company artifact",
        copy: "A photo of a handwritten insult on an old brochure became a leadership story about standards, persistence, and the systems required to grow beyond 200 homes.",
        assets: [
          {
            src: "/case-studies/samson-waters/samson-christine-founder-post.webp",
            alt: "Christine Turenne LinkedIn post about an old Samson Waters brochure and company growth.",
            caption: "Founder story",
            fit: "cover",
          },
        ],
        link: "https://www.linkedin.com/posts/christine-turenne-0920362a_someone-wrote-this-on-one-of-our-brochures-share-7472583644063277056-j6-8/",
        linkLabel: "View original LinkedIn post",
      },
      {
        number: "03",
        title: "Performance with attribution kept clean",
        copy: "The analytics are shown with organic and paid views separated. My case-study headline uses the organic figures only because paid advertising sat outside my scope.",
        assets: [
          {
            src: "/case-studies/samson-waters/samson-instagram-analytics.webp",
            alt: "Instagram analytics showing organic and paid views separately.",
            caption: "Organic and paid breakdown",
            fit: "contain",
          },
        ],
      },
    ],
    attribution:
      "My scope was organic content creation and publishing. Paid advertising was outside scope, and no booking or revenue attribution is claimed. Social generated approximately two to three monthly DMs about availability or potential partnerships.",
  },
];
