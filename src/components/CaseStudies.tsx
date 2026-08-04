"use client";

import { useState } from "react";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudyModal } from "./CaseStudyModal";

export function CaseStudies() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="work-section" id="work">
      <div className="section-shell work-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>
            Problems I’ve
            <br />
            <em>helped solve.</em>
          </h2>
        </div>
      </div>

      <div className="section-shell case-list">
        {caseStudies.map((study, index) => (
          <article className={`case-card case-${study.accent} ${index === 1 ? "case-reverse" : ""}`} key={study.id}>
            <div className="case-copy">
              <div className="case-meta">
                <span>{study.client}</span>
                <span>{study.category}</span>
              </div>
              <h3>{study.headline}</h3>
              <p>{study.summary}</p>
              <div className="tag-list">
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="case-metrics">
                {study.cardMetrics.map((metric) => (
                  <div key={metric.value}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <button className="text-link" type="button" onClick={() => setActiveId(study.id)}>
                Read the case study ↗
              </button>
            </div>

            <div className="case-visual" aria-label={`${study.client} selected work collage`}>
              <div className="featured-work-grid">
                {study.featuredAssets.map((asset) => (
                  <figure className={`featured-tile ${asset.fit ?? "cover"}`} key={asset.src}>
                    <img src={asset.src} alt={asset.alt} loading="lazy" />
                    {asset.caption && <figcaption>{asset.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>

            <CaseStudyModal study={study} open={activeId === study.id} onClose={() => setActiveId(null)} />
          </article>
        ))}
      </div>

      <div className="section-shell more-work-grid">
        <article>
          <p className="eyebrow">CuddlyNest</p>
          <h3>Faster global content without robotic output.</h3>
          <p>AI-assisted systems for multi-language travel content, built with SEO and creative teams.</p>
          <span>40% production-time reduction</span>
        </article>
        <article>
          <p className="eyebrow">CHUS</p>
          <h3>Building an e-commerce content operation from zero.</h3>
          <p>Project operations, team leadership, vendor workflows, UX collaboration, and SEO content production.</p>
          <span>1,200+ product stories</span>
        </article>
      </div>
    </section>
  );
}
