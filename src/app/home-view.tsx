"use client";

import { useState, type ReactNode } from "react";
import type { Entry } from "@keystatic/core/reader";
import type config from "../../keystatic.config";

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

type HomeContent = Omit<Entry<typeof config.singletons.home>, "biography">;

export default function HomeView({ content, children }: { content: HomeContent; children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">();
    function toggleTheme() {
        const dark = theme
            ? theme === "dark"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(dark ? "light" : "dark");
    }
    return (
        <main
            className="group min-h-screen bg-linear-to-b from-[#f8f8f8] to-[#ededed] to-65% px-6 pt-9.75 pb-16.5 font-[Arial,Helvetica,sans-serif] text-[#303030] data-[theme=dark]:scheme-dark data-[theme=dark]:from-[#191919] data-[theme=dark]:to-[#101010] data-[theme=dark]:text-[#cecece] data-[theme=system]:dark:scheme-dark data-[theme=system]:dark:from-[#191919] data-[theme=system]:dark:to-[#101010] data-[theme=system]:dark:text-[#cecece] max-[600px]:pt-6 **:focus-visible:outline-2 **:focus-visible:outline-offset-[5px] **:focus-visible:outline-[#898989]"
            data-theme={theme ?? "system"}
        >
            <header className="flex justify-center">
                <div className="flex h-9.25 items-center rounded-full border border-[#d3d3d3] group-data-[theme=dark]:border-[#2c2c2c] group-data-[theme=system]:dark:border-[#2c2c2c] max-[600px]:h-11 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080]">
                    <button
                        className="grid h-8.75 w-9.25 cursor-pointer place-items-center rounded-full hover:opacity-70 max-[600px]:h-10.5"
                        onClick={toggleTheme}
                        aria-label="Toggle light and dark theme"
                    >
                        <Icon name="sun" />
                    </button>
                    <span className="h-3.5 w-px bg-[#d3d3d3] group-data-[theme=dark]:bg-[#2c2c2c] group-data-[theme=system]:dark:bg-[#2c2c2c]" />
                    {content.cvUrl ? (
                        <a className="pr-3.75 pl-2.75 text-[13px] leading-8.75" href={content.cvUrl} download>{content.cvLabel}</a>
                    ) : (
                        <button className="pr-3.75 pl-2.75 text-[13px] leading-8.75" disabled title="CV coming soon">{content.cvLabel}</button>
                    )}
                </div>
            </header>
            <section
                className="mx-auto mt-56.25 text-center max-[600px]:mt-28.75 text-[#1b1b1b] group-data-[theme=dark]:text-[#e4e4e4] group-data-[theme=system]:dark:text-[#e4e4e4]"
                aria-labelledby="headline"
            >
                <p className="mb-7.75 text-lg leading-6">{content.name}</p>
                <h1
                    id="headline"
                    className="mx-auto max-w-175 text-[60px] leading-16 font-normal tracking-[-1.2px] max-[600px]:max-w-90 max-[600px]:text-[40px] max-[600px]:leading-11 max-[600px]:tracking-[-0.8px]"
                >
                    {content.headline}
                </h1>
            </section>
            <section
                className="mx-auto mt-68 max-w-129 text-lg leading-6.75 [&>p]:mb-6.75 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-[3px] [&_a:hover]:opacity-70 max-[600px]:mt-44.25 max-[600px]:text-base max-[600px]:leading-6.5 max-[600px]:[&>p]:mb-6.5"
                aria-label="About me"
            >
                <p className="mb-5.75! max-[600px]:mb-6.25! max-[600px]:text-lg">
                    {content.greeting}
                </p>
                <div className="[&_p]:mb-6.75 max-[600px]:[&_p]:mb-6.5 [&_p:last-child]:mb-2.5 max-[600px]:[&_p:last-child]:mb-8">{children}</div>
                <footer>
                    <h2 className="mb-4.5 text-lg leading-6.75 font-normal">
                        {content.contactHeading}
                    </h2>
                    <nav
                        aria-label="Contact"
                        className="flex items-center gap-4 text-sm leading-5 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080] [&>*]:inline-flex [&>*]:items-center [&>*]:gap-2"
                    >
                        {([
                            { name: "telegram", label: "Telegram", url: content.telegramUrl },
                            { name: "linkedin", label: "LinkedIn", url: content.linkedinUrl },
                            { name: "email", label: "Email", url: content.emailUrl },
                        ] as const).map(({ name, label, url }) => url ? (
                            <a key={name} href={url}><Icon name={name} />{label}</a>
                        ) : (
                            <span key={name}><Icon name={name} />{label}</span>
                        ))}
                    </nav>
                </footer>
            </section>
        </main>
    );
}
