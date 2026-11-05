import React from "react";
import type { Metadata } from "next";
import Markdoc from "@markdoc/markdoc";
import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";
import Header from "@/components/header";
import {
    RiArrowRightUpLine,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiMailLine,
} from "@remixicon/react";

const reader = createReader(process.cwd(), config);

const title = "Klaudjo Shkurta | Full-stack Web & Mobile Developer";
const description = "Klaudjo Shkurta is a software engineer in Athens building web and mobile apps with TypeScript, React, React Native, Vue, and Next.js.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: "Klaudjo Shkurta",
        title,
        description,
    },
    twitter: {
        card: "summary",
        title,
        description,
    },
};

export default async function Home() {
    const [home, experience, projectEntries] = await Promise.all([
        reader.singletons.home.readOrThrow(),
        reader.collections.experience.all(),
        reader.collections.projects.all(),
    ]);
    const { biography, ...content } = home;
    const { node } = await biography();
    const experiences = await Promise.all(
        experience.map(async ({ slug, entry }) => ({
            slug,
            ...entry,
            summary: (await entry.summary()).node,
        })),
    );

    const projects = await Promise.all(
        projectEntries.map(async ({ slug, entry }) => ({
            slug,
            ...entry,
            summary: (await entry.summary()).node,
        })),
    );

    return (
        <main
            className="group min-h-screen bg-linear-to-b from-[#f8f8f8] to-[#ededed] to-65% px-6 pt-9.75 pb-16.5 text-[#303030] data-[theme=dark]:scheme-dark data-[theme=dark]:from-[#191919] data-[theme=dark]:to-[#101010] data-[theme=dark]:text-[#cecece] data-[theme=system]:dark:scheme-dark data-[theme=system]:dark:from-[#191919] data-[theme=system]:dark:to-[#101010] data-[theme=system]:dark:text-[#cecece] max-[600px]:pt-6 **:focus-visible:outline-2 **:focus-visible:outline-offset-[5px] **:focus-visible:outline-[#898989]"
            data-theme="system"
        >
            <Header />

            <section
                className="mx-auto mt-56.25 text-center max-[600px]:mt-28.75 text-[#1b1b1b] group-data-[theme=dark]:text-[#e4e4e4] group-data-[theme=system]:dark:text-[#e4e4e4]"
                aria-labelledby="headline"
            >
                <p className="mb-7.75 text-lg leading-6">{content.name}</p>
                <h1
                    id="headline"
                    className="mx-auto max-w-175 bg-linear-to-b from-[oklch(21.3%_0_0)] to-[oklch(21.3%_0_0)]/35 group-data-[theme=dark]:from-[oklch(89.7%_0_0)] group-data-[theme=dark]:to-[oklch(89.7%_0_0)]/35 group-data-[theme=system]:dark:from-[oklch(89.7%_0_0)] group-data-[theme=system]:dark:to-[oklch(89.7%_0_0)]/35 bg-clip-text text-[60px] leading-16 font-normal tracking-[-1.2px] text-transparent max-[600px]:max-w-90 max-[600px]:text-[40px] max-[600px]:leading-11 max-[600px]:tracking-[-0.8px]"
                >
                    {content.headline}
                </h1>
            </section>

            <section
                className="mx-auto mt-68 max-w-129 leading-6.75 [&>p]:mb-6.75 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-[3px] [&_a:hover]:opacity-70 max-[600px]:mt-44.25 max-[600px]:text-base max-[600px]:leading-6.5 max-[600px]:[&>p]:mb-6.5"
                aria-label="About me"
            >
                <p className="mb-5.75! max-[600px]:mb-6.25!">
                    {content.greeting}
                </p>
                <div className="[&_p]:mb-6.75 max-[600px]:[&_p]:mb-6.5 [&_p:last-child]:mb-2.5 max-[600px]:[&_p:last-child]:mb-8">
                    {Markdoc.renderers.react(
                        Markdoc.transform(node.children),
                        React,
                    )}
                </div>
                <div aria-labelledby="contact-heading" className="mt-6">
                    <nav
                        aria-label="Contact"
                        className="flex items-center gap-4 text-sm leading-5 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080] [&>a]:no-underline *:inline-flex *:items-center *:gap-2"
                    >
                        {(
                            [
                                {
                                    icon: RiGithubFill,
                                    label: "GitHub",
                                    url: content.githubUrl,
                                },
                                {
                                    icon: RiLinkedinBoxFill,
                                    label: "LinkedIn",
                                    url: content.linkedinUrl,
                                },
                                {
                                    icon: RiMailLine,
                                    label: "Email",
                                    url: content.emailUrl,
                                },
                            ] as const
                        ).map(({ icon: Icon, label, url }) =>
                            url ? (
                                <a key={label} href={url}>
                                    <Icon size={14} aria-hidden="true" />
                                    {label}
                                </a>
                            ) : (
                                <span key={label}>
                                    <Icon size={14} aria-hidden="true" />
                                    {label}
                                </span>
                            ),
                        )}
                    </nav>
                </div>
            </section>

            <section aria-labelledby="experience-heading" className="mt-12 max-w-129 mx-auto">
                <h2
                    id="experience-heading"
                    className="mb-6 w-fit bg-current/15 px-1 pt-1 pb-0.5 text-xs leading-none font-medium tracking-wide uppercase"
                >
                    Experience
                </h2>
                <div>
                    {experiences.map((entry) => (
                        <article
                            key={entry.slug}
                            className="py-4 first:pt-0 last:pb-0"
                        >
                            <h3 className="font-normal">{entry.company}</h3>
                            <p className="mt-1 text-sm opacity-65">
                                {entry.role} · {entry.dates}
                            </p>
                            <div className="mt-3 [&_p+p]:mt-3">
                                {Markdoc.renderers.react(
                                    Markdoc.transform(entry.summary.children),
                                    React,
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {projects.length > 0 && (
                <section aria-labelledby="projects-heading" className="mt-12 max-w-129 mx-auto">
                    <h2
                        id="projects-heading"
                        className="mb-6 w-fit bg-current/15 px-1 pt-1 pb-0.5 text-xs leading-none font-medium tracking-wide uppercase"
                    >
                        Projects
                    </h2>
                    <div className="space-y-8">
                        {projects.map(
                            ({ slug, title, url, summary }) => (
                                <article
                                    key={slug}
                                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-2 sm:gap-6"
                                >
                                    <div className="">
                                        <h3 className="text-xl font-medium">
                                            {url ? (
                                                <a
                                                    href={url}
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    {title}
                                                    <RiArrowRightUpLine
                                                        size={16}
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                            ) : (
                                                title
                                            )}
                                        </h3>
                                        <div className="mt-2 text-base leading-relaxed [&_p+p]:mt-3">
                                            {Markdoc.renderers.react(
                                                Markdoc.transform(
                                                    summary.children,
                                                ),
                                                React,
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                </section>
            )}
        </main>
    );
}
