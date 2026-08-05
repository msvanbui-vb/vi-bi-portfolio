import Image from "next/image";

export function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="about-art" aria-label="Vi Bui working remotely">
        <Image
          src="/images/vi-at-work.webp"
          alt="Vi Bui working remotely."
          fill
          sizes="(max-width: 980px) 100vw, 42vw"
          className="about-art-photo"
        />
      </div>
      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h2>I work in social, but think across <em>brand, product, and operations.</em></h2>
        <p>I have spent nearly a decade working across content, social, product, hospitality, SaaS, and digital marketing. I am particularly good at understanding unfamiliar businesses, finding the human story inside complicated material, and turning it into a recognisable brand and a repeatable system.</p>
        <p>I have worked remotely with international teams, collaborated directly with founders, and experienced building a side business from the owner’s perspective. That mix made me comfortable moving between strategy and execution, without waiting for perfect inputs or a large team.</p>
        <div className="about-tags"><span>Vietnamese + English</span><span>Remote-first</span><span>Founder-friendly</span><span>Tech curious</span></div>
      </div>
    </section>
  );
}
