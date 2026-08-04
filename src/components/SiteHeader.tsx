"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Van Bui home">
        <span>VB</span>
        <small>Brand + Social</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav id="primary-nav" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a
          className="nav-cta"
          href={site.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
