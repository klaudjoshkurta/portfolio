import React from "react";
import Markdoc from "@markdoc/markdoc";
import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";
import Header from "@/components/header";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "@remixicon/react";

const reader = createReader(process.cwd(), config);

export default async function Home() {
    const { biography, ...content } = await reader.singletons.home.readOrThrow();
    const { node } = await biography();

    return (
        <main
            className="group min-h-screen bg-linear-to-b from-[#f8f8f8] to-[#ededed] to-65% px-6 pt-9.75 pb-16.5 font-[Arial,Helvetica,sans-serif] text-[#303030] data-[theme=dark]:scheme-dark data-[theme=dark]:from-[#191919] data-[theme=dark]:to-[#101010] data-[theme=dark]:text-[#cecece] data-[theme=system]:dark:scheme-dark data-[theme=system]:dark:from-[#191919] data-[theme=system]:dark:to-[#101010] data-[theme=system]:dark:text-[#cecece] max-[600px]:pt-6 **:focus-visible:outline-2 **:focus-visible:outline-offset-[5px] **:focus-visible:outline-[#898989]"
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
                <div className="[&_p]:mb-6.75 max-[600px]:[&_p]:mb-6.5 [&_p:last-child]:mb-2.5 max-[600px]:[&_p:last-child]:mb-8">{Markdoc.renderers.react(Markdoc.transform(node.children), React)}</div>
                <footer>
                    <h2 className="mb-4.5 text-lg leading-6.75 font-normal">
                        {content.contactHeading}
                    </h2>
                    <nav
                        aria-label="Contact"
                        className="flex items-center gap-4 text-sm leading-5 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080] [&>a]:no-underline [&>*]:inline-flex [&>*]:items-center [&>*]:gap-2"
                    >
                        {([
                            { icon: RiGithubFill, label: "GitHub", url: content.githubUrl },
                            { icon: RiLinkedinBoxFill, label: "LinkedIn", url: content.linkedinUrl },
                            { icon: RiMailLine, label: "Email", url: content.emailUrl },
                        ] as const).map(({ icon: Icon, label, url }) => url ? (
                            <a key={label} href={url}><Icon size={14} aria-hidden="true" />{label}</a>
                        ) : (
                            <span key={label}><Icon size={14} aria-hidden="true" />{label}</span>
                        ))}
                    </nav>
                </footer>
            </section>
        </main>
    );
}
