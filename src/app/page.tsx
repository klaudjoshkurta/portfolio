"use client";

import { useState } from "react";


function Icon({ name }: { name: "sun" | "telegram" | "linkedin" | "email" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {name === "sun" && (
        <g stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
        </g>
      )}
      {name === "telegram" && (
        <path
          fill="currentColor"
          d="m21 3-4 18-6-5-3 3 1-6 9-7-11 6-5-2L21 3Z"
        />
      )}
      {name === "linkedin" && (
        <>
          <path fill="currentColor" d="M3 3h18v18H3z" />
          <path
            className="stroke-[#ededed] group-data-[theme=dark]:stroke-[#101010] group-data-[theme=system]:dark:stroke-[#101010]"
            strokeWidth="1.5"
            d="M7 10v7m0-10v1m4 9v-7m0 3c0-4 6-4 6 0v4"
          />
        </>
      )}
      {name === "email" && (
        <g stroke="currentColor" strokeWidth="1.5">
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </g>
      )}
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">();
  function toggleTheme() {
    const dark = theme
      ? theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(dark ? "light" : "dark");
  }
  return (
    <main className="group min-h-screen bg-linear-to-b from-[#f8f8f8] to-[#ededed] to-65% px-6 pt-[39px] pb-[66px] font-[Arial,Helvetica,sans-serif] text-[#303030] data-[theme=dark]:scheme-dark data-[theme=dark]:from-[#191919] data-[theme=dark]:to-[#101010] data-[theme=dark]:text-[#cecece] data-[theme=system]:dark:scheme-dark data-[theme=system]:dark:from-[#191919] data-[theme=system]:dark:to-[#101010] data-[theme=system]:dark:text-[#cecece] max-[600px]:pt-6 [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[5px] [&_:focus-visible]:outline-[#898989]" data-theme={theme ?? "system"}>
      <header className="flex justify-center">
        <div className="flex h-[37px] items-center rounded-full border border-[#d3d3d3] group-data-[theme=dark]:border-[#2c2c2c] group-data-[theme=system]:dark:border-[#2c2c2c] max-[600px]:h-11 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080]">
          <button
            className="grid h-[35px] w-[37px] cursor-pointer place-items-center rounded-full hover:opacity-70 max-[600px]:h-[42px]"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
          >
            <Icon name="sun" />
          </button>
          <span className="h-3.5 w-px bg-[#d3d3d3] group-data-[theme=dark]:bg-[#2c2c2c] group-data-[theme=system]:dark:bg-[#2c2c2c]" />
          {/* Enable when the real CV is supplied. */}
          <button className="pr-[15px] pl-[11px] text-[13px] leading-[35px]" disabled title="CV coming soon">
            download cv
          </button>
        </div>
      </header>
      <section className="mx-auto mt-[225px] text-center max-[600px]:mt-[115px] text-[#1b1b1b] group-data-[theme=dark]:text-[#e4e4e4] group-data-[theme=system]:dark:text-[#e4e4e4]" aria-labelledby="headline">
        <p className="mb-[31px] text-lg leading-6">Klaudjo Shkurta</p>
        <h1 id="headline" className="mx-auto max-w-[700px] text-[60px] leading-[64px] font-normal tracking-[-1.2px] max-[600px]:max-w-[360px] max-[600px]:text-[40px] max-[600px]:leading-[44px] max-[600px]:tracking-[-0.8px]">Full-stack web &amp; mobile developer</h1>
      </section>
      <section className="mx-auto mt-[272px] max-w-[516px] text-lg leading-[27px] [&>p]:mb-[27px] [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-[3px] [&_a:hover]:opacity-70 max-[600px]:mt-[177px] max-[600px]:text-base max-[600px]:leading-[26px] max-[600px]:[&>p]:mb-[26px]" aria-label="About me">
        <p className="mb-[23px]! max-[600px]:mb-[25px]! max-[600px]:text-lg">Hi there 👋ʕ•ᴥ•ʔ</p>
        <p>
          I’m an award-winning marketing and creative director with 10+ years of
          leadership experience across agencies (ex{" "}
          <a href="https://www.bbdo.com/">BBDO</a> /{" "}
          <a href="https://www.ddb.com/">DDB</a>), startups &amp; corporations
          (ex <a href="https://yandex.com/">Yandex</a> /{" "}
          <a href="https://www.alrosa.ru/">Alrosa</a>).
        </p>
        <p>
          Over the past years, I’ve worked in marketing and advertising,
          handling projects for 50+ brands, including IKEA, Nike, Adidas, Audi,
          Uniqlo, McD, Nestlé, Uber and others.
        </p>
        <p>
          My contributions and projects have 100+ global awards including Cannes
          Lions, Webby, Effie, Clio, Red Dot and others.
        </p>
        <p>
          Now I’m cmo @ <a href="https://staya.dog/">staya</a> and continue
          advise startups on marketing, work as a creative director on-demand
          for brands and ad agencies.
        </p>
        <p>
          I craft marketing &amp; business models, product strategies, help
          launch new stuff, manage fundraising and produce various types of
          content.
        </p>
        <p className="mb-2.5! max-[600px]:mb-8!">
          Member of <a href="https://www.iadas.net/">IADAS</a>, as well as a
          judge for The Webby Awards.
        </p>
        <footer>
          <h2 className="mb-[18px] text-lg leading-[27px] font-normal">Let’s connect</h2>
          {/* Personal contact URLs have not been supplied. */}
          <nav aria-label="Contact" className="flex items-center gap-4 text-sm leading-5 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080] [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2">
            <span>
              <Icon name="telegram" />
              Telegram
            </span>
            <span>
              <Icon name="linkedin" />
              LinkedIn
            </span>
            <span>
              <Icon name="email" />
              Email
            </span>
          </nav>
        </footer>
      </section>
    </main>
  );
}
