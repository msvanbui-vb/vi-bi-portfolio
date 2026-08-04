import { process } from "@/content/site";

export function Process() {
  return (
    <section className="section-shell split-section process-section" id="process">
      <div className="section-intro sticky-copy">
        <p className="eyebrow">How I work</p>
        <h2>From messy input<br />to <em>published work.</em></h2>
        <p>A practical process for finding the strongest signal, reducing decision fatigue, and getting the work out.</p>
      </div>
      <ol className="process-list">
        {process.map(([number, title, copy]) => (
          <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
        ))}
      </ol>
    </section>
  );
}
