# Repository Guidelines

## Project Structure & Module Organization

This workspace is for building `foundationagentchallenge.com` for this year's Foundation Agent Challenge. Treat `114_The_Foundation_Agent_Chall.pdf` as the source document for competition framing, rules, tracks, and terminology. Treat `FAC_Branding/` as the source of truth for visual identity: fonts are in `FAC_Branding/Fonts/`, mascot and header images are at the folder root, Discord emotes are in `FAC_Branding/Discord Emotes/`, and the trailer is `FAC_Branding/fac_trailer.mp4`. The existing `pokeagent.github.io/` site is a nearby reference for static event-site structure, not the FAC source of truth.

## Build, Test, and Development Commands

No FAC site build system is committed yet. If the site is implemented as static HTML/CSS/JS, serve it locally from the project root with:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. To inspect text from the proposal PDF while drafting content, use:

```bash
pdftotext 114_The_Foundation_Agent_Chall.pdf -
```

If a package-managed app is added later, document its install, dev, build, lint, and test commands here before relying on them.

## Coding Style & Naming Conventions

Use clear, static-site-friendly naming: `index.html`, `schedule.html`, `rules.html`, `assets/`, `css/`, and `js/` are preferred if new site files are added. Use 2-space indentation for HTML, CSS, and JavaScript. Keep content copy close to the PDF's terminology: "Foundation Agent Challenge," "text games," "web games," "emulated games," "public crawl," and "held-out private crawl." Use local font assets from `FAC_Branding/Fonts/` rather than remote font imports.

## Testing Guidelines

For visual changes, run the local server and check desktop and mobile widths. Verify that branding assets load, video paths work, and PDF-derived claims are accurate. For content updates, cross-check dates, rules, submission limits, and prize language against the latest approved source before publishing.

## Commit & Pull Request Guidelines

There is no root Git history yet. Use concise, imperative commit messages once version control is initialized, for example `Add FAC landing page` or `Update competition rules copy`. Pull requests should include a short change summary, screenshots for visual edits, validation steps run, and notes for any content copied or paraphrased from the PDF.

## Agent-Specific Instructions

Do not rewrite competition facts from memory. Before changing public-facing copy, consult the PDF or an explicitly provided newer source. Preserve the FAC branding assets and licenses; do not edit originals in place unless asked.
