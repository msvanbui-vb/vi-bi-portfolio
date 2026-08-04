export function AISection() {
  return (
    <section className="ai-section" id="ai">
      <div className="section-shell">
        <p className="eyebrow">How AI fits into my work</p>
        <blockquote>AI helps me move faster.<br /><em>Judgment decides what ships.</em></blockquote>
        <p className="ai-intro">I use AI to research, extract signal, explore angles, repurpose material, develop visual and video directions, and reduce repetitive work. I do not use it to replace audience understanding, fact-checking, taste, or editing.</p>
        <div className="workflow" aria-label="AI-assisted content workflow">
          {['Source', 'Extract', 'Find angle', 'Draft', 'Direct creative', 'Human edit', 'Publish + learn'].map((step, index) => (
            <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>
          ))}
        </div>
      </div>
    </section>
  );
}
