"use client";

import { useEffect, useRef } from "react";
import type { CaseStudy, MediaAsset } from "@/content/caseStudies";

function MediaGallery({ assets }: { assets: MediaAsset[] }) {
  return (
    <div className={`sample-media-grid ${assets.length > 1 ? "is-multiple" : ""}`}>
      {assets.map((asset) => (
        <figure className={`asset-media ${asset.fit ?? "cover"}`} key={asset.src}>
          <img src={asset.src} alt={asset.alt} loading="lazy" />
          {asset.caption && <figcaption>{asset.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function CaseStudyModal({ study, open, onClose }: { study: CaseStudy; open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby={`${study.id}-title`}
    >
      <div className="dialog-inner">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close case study">
          ×
        </button>
        <p className="eyebrow">
          {study.client} · {study.category}
        </p>
        <h2 id={`${study.id}-title`}>{study.headline}</h2>
        <p className="dialog-period">{study.period}</p>
        <p className="dialog-lead">{study.intro}</p>

        <div className="dialog-columns">
          <div>
            <section className="dialog-section">
              <h3>The challenge</h3>
              {study.challenge.map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </section>
            <section className="dialog-section">
              <h3>What I owned</h3>
              <ul>
                {study.ownership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="dialog-section">
              <h3>The approach</h3>
              {study.approach.map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </section>
          </div>
          <div>
            {study.voices && (
              <section className="dialog-section">
                <h3>Two voices, different jobs</h3>
                <div className="voice-grid">
                  {study.voices.map((voice) => (
                    <article key={voice.title}>
                      <h4>{voice.title}</h4>
                      <p>{voice.copy}</p>
                      {voice.test && <blockquote>{voice.test}</blockquote>}
                    </article>
                  ))}
                </div>
              </section>
            )}
            {study.signalFlow && (
              <section className="dialog-section signal-section">
                <h3>Turning everyday team updates into content opportunities</h3>
                <div className="signal-flow">
                  {study.signalFlow.map((item, index) => (
                    <article key={item.title}>
                      <span>0{index + 1}</span>
                      <h4>{item.title}</h4>
                      <p>{item.copy}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {study.sideSections?.map((section) => (
              <section className="dialog-section" key={section.title}>
                <h3>{section.title}</h3>
                {section.copy.map((copy) => (
                  <p key={copy}>{copy}</p>
                ))}
              </section>
            ))}
          </div>
        </div>

        <section className="results-section">
          <div className="section-kicker">Results</div>
          <div className="metric-grid">
            {study.metrics.map((metric) => (
              <article key={metric.value + metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
          {study.resultNote && <p className="result-note">{study.resultNote}</p>}
          {study.resultsAsset && (
            <figure className={`results-media ${study.resultsAsset.fit ?? "contain"}`}>
              <img src={study.resultsAsset.src} alt={study.resultsAsset.alt} loading="lazy" />
              {study.resultsAsset.caption && <figcaption>{study.resultsAsset.caption}</figcaption>}
            </figure>
          )}
        </section>

        <section className="selected-work">
          <div className="section-kicker">Selected work</div>
          <div className="work-sample-grid">
            {study.work.map((sample) => (
              <article key={sample.number}>
                <MediaGallery assets={sample.assets} />
                <div className="asset-caption-row">
                  <span className="sample-number">{sample.number}</span>
                  {sample.link && (
                    <a className="asset-link" href={sample.link} target="_blank" rel="noreferrer">
                      {sample.linkLabel ?? "View original post"} ↗
                    </a>
                  )}
                </div>
                <h3>{sample.title}</h3>
                <p>{sample.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {study.attribution && (
          <p className="attribution-note">
            <strong>Attribution note:</strong> {study.attribution}
          </p>
        )}
        {study.testimonial && (
          <blockquote className="testimonial">
            {study.testimonial.image && (
              <figure className={`testimonial-media ${study.testimonial.image.fit ?? "contain"}`}>
                <img src={study.testimonial.image.src} alt={study.testimonial.image.alt} loading="lazy" />
              </figure>
            )}
            <div>
              “{study.testimonial.quote}”
              <cite>{study.testimonial.attribution}</cite>
            </div>
          </blockquote>
        )}
      </div>
    </dialog>
  );
}
