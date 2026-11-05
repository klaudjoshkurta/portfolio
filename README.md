This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Editing Home with Keystatic

Run `npm install` and `npm run dev`, then open
[Keystatic](http://127.0.0.1:3000/keystatic) and select **Home**.
The singleton controls the name, headline, greeting, rich-text biography,
contact heading, and personal contact URLs. The header label and CV link are
hardcoded in `src/app/header.tsx`.
Empty URLs keep the corresponding controls inactive.

Use the **Experience** collection to edit each company's name, role, dates,
and rich-text summary. Entries live in `src/content/experience/` and appear
in the homepage Experience section.

Keystatic edits content in the `klaudjoshkurta/portfolio` GitHub repository.
Open the local editor and follow the [GitHub App setup](https://keystatic.com/docs/github-mode).
Install the app only on the portfolio repository and add
`https://klaudjoshkurta.com/api/keystatic/github/oauth/callback` as a callback URL.

Copy the generated settings to your hosting provider's environment variables:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

Keep secrets out of Git. Deploy on a host with a Node.js runtime and rebuild
from the publishing branch when content changes. The public site reads content
from the deployed checkout. The production editor API returns 503 until its
GitHub App settings are present.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
