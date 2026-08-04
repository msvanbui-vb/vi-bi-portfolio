import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <>
      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{site.title}</p>
          <h1>
            I make complex
            <br />
            products
            <br />
            <em>clear, human,</em>
            <br />
            and hard to
            <br />
            ignore.
          </h1>
          <p className="hero-summary">{site.heroSummary}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View selected work</a>
            <a className="text-link" href="#ai">How I use AI ↗</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Portrait of Van Bui with editorial graphic accents">
          <div className="portrait-card">
            <Image
              src="/images/vi-portrait.png"
              alt="Van Bui (Vi Bi), brand and social media strategist"
              fill
              sizes="(max-width: 768px) 290px, 390px"
              priority
            />
          </div>
          <div className="hero-sun" aria-hidden="true">✦</div>
          <div className="hero-note note-a">BRAND VOICE<br />THAT SOUNDS HUMAN</div>
          <div className="hero-note note-b">SYSTEMS THAT<br />ACTUALLY SHIP</div>
        </div>
      </section>
      <section className="proof-strip" aria-label="Selected proof points">
        <div><strong>~10 years</strong><span>content, social, product, and digital marketing</span></div>
        <div><strong>1.9K → 7K</strong><span>Gavel organic LinkedIn growth</span></div>
        <div><strong>1.3K → 7.4K</strong><span>Hostfully organic LinkedIn growth</span></div>
        <div><strong>207K+</strong><span>Samson Waters organic social views</span></div>
      </section>
    </>
  );
}
