import { config, fields, singleton } from "@keystatic/core";

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
                cvLabel: fields.text({ label: "CV button label", defaultValue: "download cv" }),
                cvUrl: fields.url({ label: "CV URL", description: "Link to your CV. Leave empty to disable the download." }),
                telegramUrl: fields.url({ label: "Telegram URL" }),
                linkedinUrl: fields.url({ label: "LinkedIn URL" }),
                emailUrl: fields.url({ label: "Email URL", description: "Use mailto:you@example.com." }),
            },
        }),
    },
});
