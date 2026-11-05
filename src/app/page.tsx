"use client";

import { useState } from "react";
import styles from "./page.module.css";

function Icon({ name }: { name: "sun" | "telegram" | "linkedin" | "email" }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {name === "sun" && <g stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="3.5" /><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" /></g>}
    {name === "telegram" && <path fill="currentColor" d="m21 3-4 18-6-5-3 3 1-6 9-7-11 6-5-2L21 3Z" />}
    {name === "linkedin" && <><path fill="currentColor" d="M3 3h18v18H3z" /><path stroke="var(--background)" strokeWidth="1.5" d="M7 10v7m0-10v1m4 9v-7m0 3c0-4 6-4 6 0v4" /></>}
    {name === "email" && <g stroke="currentColor" strokeWidth="1.5"><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></g>}
  </svg>;
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">();
  function toggleTheme() {
    const dark = theme ? theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(dark ? "light" : "dark");
  }
  return (
    <main className={styles.page} data-theme={theme}>
      <header className={styles.toolbar}>
        <div className={styles.pill}>
          <button className={styles.themeButton} onClick={toggleTheme} aria-label="Toggle light and dark theme"><Icon name="sun" /></button>
          <span className={styles.divider} />
          {/* Enable when the real CV is supplied. */}
          <button className={styles.cv} disabled title="CV coming soon">download cv</button>
        </div>
      </header>
      <section className={styles.hero} aria-labelledby="headline">
        <p className={styles.name}>Klaudjo Shkurta</p>
        <h1 id="headline">Full-stack web &amp; mobile developer</h1>
      </section>
      <section className={styles.biography} aria-label="About me">
        <p className={styles.greeting}>Hi there 👋ʕ•ᴥ•ʔ</p>
        <p>I’m an award-winning marketing and creative director with 10+ years of leadership experience across agencies (ex <a href="https://www.bbdo.com/">BBDO</a> / <a href="https://www.ddb.com/">DDB</a>), startups &amp; corporations (ex <a href="https://yandex.com/">Yandex</a> / <a href="https://www.alrosa.ru/">Alrosa</a>).</p>
        <p>Over the past years, I’ve worked in marketing and advertising, handling projects for 50+ brands, including IKEA, Nike, Adidas, Audi, Uniqlo, McD, Nestlé, Uber and others.</p>
        <p>My contributions and projects have 100+ global awards including Cannes Lions, Webby, Effie, Clio, Red Dot and others.</p>
        <p>Now I’m cmo @ <a href="https://staya.dog/">staya</a> and continue advise startups on marketing, work as a creative director on-demand for brands and ad agencies.</p>
        <p>I craft marketing &amp; business models, product strategies, help launch new stuff, manage fundraising and produce various types of content.</p>
        <p className={styles.membership}>Member of <a href="https://www.iadas.net/">IADAS</a>, as well as a judge for The Webby Awards.</p>
        <footer className={styles.contact}>
          <h2>Let’s connect</h2>
          {/* Personal contact URLs have not been supplied. */}
          <nav aria-label="Contact">
            <span><Icon name="telegram" />Telegram</span>
            <span><Icon name="linkedin" />LinkedIn</span>
            <span><Icon name="email" />Email</span>
          </nav>
        </footer>
      </section>
    </main>
  );
}
