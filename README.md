# UToledo Swim Club — Website

The official site of the University of Toledo Swim Club. Hosted at
[utoledo-swim-club.github.io](https://utoledo-swim-club.github.io).

Built with [Astro](https://astro.build) and deployed automatically to GitHub
Pages on every push to `main`.

## Running locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

To preview a production build:

```bash
npm run build
npm run preview
```

## Writing a journal entry

Drop a new markdown file in `src/content/journal/`. Filename convention is
`YYYY-MM-DD-slug.md`. The frontmatter at the top needs a title and a date, plus
anything else you want:

```md
---
title: "week 8 :: conference meet recap"
date: 2026-05-03
week: 8
excerpt: "a one-sentence teaser that shows on the homepage and journal index"
author: "Joshua"
---

write whatever. markdown works: **bold**, *italic*, headings, lists, links,
images (drop them in `public/images/` and reference them like `![alt](/images/name.jpg)`).
```

Push to `main` and the site rebuilds and deploys within a minute or two.

## Editing other pages

- **Roster** — `src/pages/roster.astro`, edit the `roster` array at the top
- **Meets** — `src/data/meets.ts`, edit the `meets` list
- **Practice times, email, Instagram, dues** — `src/data/club.ts` (updates every page at once)
- **Join page steps and FAQ** — `src/pages/join.astro`
- **Guestbook entries** — `src/pages/guestbook.astro`, add to the top of the `entries` array

## Structure

```
src/
  content/journal/       journal entries (markdown)
  components/            header, footer, post card
  data/                  club info and meets list
  layouts/BaseLayout     shared page shell
  pages/                 one file = one page
  styles/global.css      colors, fonts, shared styles
public/                  logo, images (served as-is)
.github/workflows/       auto-deploy to GitHub Pages
```

## Handing off

See `HANDOFF.md` for everything the next person maintaining this site needs
to know.
