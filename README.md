![Portfolio hero in dark mode](docs/hero.jpg)

# Klaudjo Shkurta · Portfolio

Personal portfolio for Klaudjo Shkurta, a full-stack web and mobile developer based in Athens. The site includes a short bio, work experience, projects, contact links, and a downloadable résumé.

Built with Next.js, React, TypeScript, Tailwind CSS, and Keystatic. The public site reads content from the repository at build time.

## Run locally

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Edit content

Open [Keystatic](http://127.0.0.1:3000/keystatic) to edit the **Home** singleton and the **Experience** and **Projects** collections. The source files are in [src/content](src/content), and the résumé is in [public](public).

Keystatic uses GitHub mode with the `klaudjoshkurta/portfolio` repository. Follow the [GitHub App setup guide](https://keystatic.com/docs/github-mode) and install the app on the portfolio repository. Add `https://klaudjoshkurta.com/api/keystatic/github/oauth/callback` as the production callback URL.

Set these variables locally and on your deployment host:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

Keep credentials out of Git. The public site can build without them. The production editor API requires them to sign in.

## Check and build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Deploy to a host with a Node.js runtime for the Keystatic API. Rebuild from the publishing branch after content changes.
