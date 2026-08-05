import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-shell contact-grid">
        <div><p className="eyebrow">Let’s work together</p><h2>Building something more people should know about?</h2></div>
        <div><p>I’d love to hear what you’re building, where you want to take it, and how social can help get it there.</p><a className="button button-light" href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">Start a conversation →</a></div>
      </div>
      <div className="section-shell footer-bottom"><strong>VAN BUI / VI BI</strong><span>{site.email}</span><span>Brand · Social · Content systems</span></div>
    </footer>
  );
}
