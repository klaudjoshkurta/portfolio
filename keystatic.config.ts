import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
    storage: { kind: "local" },
    singletons: {
        home: singleton({
            label: "Home",
            path: "src/content/home",
            format: { contentField: "biography" },
            schema: {
                name: fields.text({ label: "Name", validation: { isRequired: true } }),
                headline: fields.text({ label: "Headline", validation: { isRequired: true } }),
                greeting: fields.text({ label: "Greeting" }),
                biography: fields.markdoc({ label: "Biography" }),
                contactHeading: fields.text({ label: "Contact heading" }),
                githubUrl: fields.url({ label: "GitHub URL" }),
                linkedinUrl: fields.url({ label: "LinkedIn URL" }),
                emailUrl: fields.url({ label: "Email URL", description: "Use mailto:you@example.com." }),
            },
        }),
    },
    collections: {
        projects: collection({
            label: "Projects",
            slugField: "title",
            path: "src/content/projects/*",
            format: { contentField: "summary" },
            schema: {
                title: fields.slug({ name: { label: "Title", validation: { isRequired: true } } }),
                url: fields.url({ label: "Project URL" }),
                summary: fields.markdoc({ label: "Summary" }),
            },
        }),
        experience: collection({
            label: "Experience",
            slugField: "company",
            path: "src/content/experience/*",
            format: { contentField: "summary" },
            columns: ["company", "role", "dates"],
            schema: {
                company: fields.slug({ name: { label: "Company", validation: { isRequired: true } } }),
                role: fields.text({ label: "Role", validation: { isRequired: true } }),
                dates: fields.text({ label: "Dates", description: "For example: Jun 2019 - Oct 2026, or Apr 2025 - Present.", validation: { isRequired: true } }),
                summary: fields.markdoc({ label: "Summary" }),
            },
        }),
    },
});
