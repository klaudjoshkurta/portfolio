"use client";

import type { ReactNode } from "react";

export default function ThemeToggle({ children }: { children: ReactNode }) {
    return (
        <button
            className="grid h-8.75 w-9.25 cursor-pointer place-items-center rounded-full hover:opacity-70 max-[600px]:h-10.5"
            aria-label="Toggle light and dark theme"
            onClick={(event) => {
                const page = event.currentTarget.closest("main");
                if (!page) return;

                const dark = page.dataset.theme === "system"
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    : page.dataset.theme === "dark";
                page.dataset.theme = dark ? "light" : "dark";
            }}
        >
            {children}
        </button>
    );
}
