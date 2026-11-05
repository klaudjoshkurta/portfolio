import { RiSunLine } from "@remixicon/react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
    return (
        <header className="flex justify-center">
            <div className="flex h-9.25 items-center rounded-full border border-[#d3d3d3] group-data-[theme=dark]:border-[#2c2c2c] group-data-[theme=system]:dark:border-[#2c2c2c] max-[600px]:h-11 text-[#898989] group-data-[theme=dark]:text-[#808080] group-data-[theme=system]:dark:text-[#808080]">
                <ThemeToggle>
                    <RiSunLine size={14} aria-hidden="true" />
                </ThemeToggle>
                <span className="h-3.5 w-px bg-[#d3d3d3] group-data-[theme=dark]:bg-[#2c2c2c] group-data-[theme=system]:dark:bg-[#2c2c2c]" />
                <a
                    className="pr-3.75 pl-2.75 text-[13px] leading-8.75"
                    href="/Klaudjo_Shkurta_Resume.pdf"
                    download
                >
                    download cv
                </a>
            </div>
        </header>
    );
}
