import { capabilities } from "@/content/site";

export function Capabilities() {
  return (
    <section className="section-shell split-section" id="capabilities">
      <div className="section-intro sticky-copy">
        <p className="eyebrow">What I own</p>
        <h2>Strategy is useful.<br /><em>Shipping is better.</em></h2>
        <p>I work from the brand idea to the published post, then use the response to sharpen what comes next.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <span className="card-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
