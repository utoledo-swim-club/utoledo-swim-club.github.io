# Handoff Guide

Hi future person. This doc exists so you can take over this site without
needing to message anyone.

## What this is

A static website for the UToledo Swim Club, rebuilt automatically every time
someone pushes to `main`. Hosted on GitHub Pages under the `utoledo-swim-club`
GitHub organization.

## Accounts and access you need

1. **GitHub account** added to the `utoledo-swim-club` org as an **Owner**.
   Ask the current owner to add you. Being an Owner lets you add/remove
   other people, which you'll need when you hand off too.
2. **Access to the club email** (`swimming@utoledo.edu` or whatever is current) —
   this is the GitHub notification address and also what's listed as contact on
   the site.

## Most common tasks

### Posting a journal entry

1. Go to `github.com/utoledo-swim-club/utoledo-swim-club.github.io`
2. Navigate into `src/content/journal/`
3. Click "Add file" -> "Create new file"
4. Name it `YYYY-MM-DD-short-slug.md` (date first so they sort nicely)
5. Paste in:
   ```md
   ---
   title: "your title here"
   date: 2026-05-03
   week: 5
   excerpt: "one sentence teaser"
   ---

   your content here. markdown formatting works.
   ```
6. Scroll down, commit directly to main.
7. Wait ~60 seconds. The site rebuilds and your entry is live.

### Updating the roster

Edit `src/pages/roster.astro` on GitHub. Find the `roster` array at the top of
the file, add/remove/edit people, commit.

### Adding a meet

Edit `src/data/meets.ts`. Add a new entry to the `meets` list. Set
`status` to `'upcoming'` before it happens, `'past'` after. Keep them in
reverse chronological order.

### Practice times, email, Instagram, dues

Edit `src/data/club.ts`. Every page reads from it, so one change updates the whole site.

### Guestbook

When someone emails in a guestbook entry, paste it at the TOP of the `entries`
array in `src/pages/guestbook.astro`.

## When something goes wrong

- **Site didn't update after I pushed.** Check the Actions tab on GitHub. If
  the workflow failed, click into it and read the error. Usually it's a typo
  in frontmatter (missing quote, wrong date format).
- **I broke the site and it won't deploy.** Revert your last commit — on the
  repo page, click "Commits", find your bad commit, click "..." -> "Revert".
- **I need to run the site locally to test.** See README.md for `npm install` / `npm run dev`.

## Before YOU hand off

When you're about to leave the club, do these things for the next person:

1. Add them to the `utoledo-swim-club` org as an Owner.
2. Make sure the club email password is documented somewhere the club
   has persistent access to (Bitwarden, shared password manager, etc.).
3. Update this file if anything has changed.
4. Keep yourself as an Owner for a few weeks after handoff, in case something
   breaks and the new person needs help. Remove yourself after.

## Who knows what

Current maintainer: Joshua Pereira (2026) — github: @joshuamlpereira

---

That's it. It's just a static site, nothing fancy under the hood. You got this.
