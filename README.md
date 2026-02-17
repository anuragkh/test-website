# Academic Website (GitHub Pages, Markdown-first)

This repo contains a fast, fully static academic site designed to be edited in Markdown and hosted on GitHub Pages.

## Quick start (local preview)
1. Install Ruby + Bundler.
2. Run:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
3. Open http://localhost:4000

## Deploy (GitHub Pages)
This repo uses a GitHub Action to build the site (with `jekyll-scholar` for BibTeX publications) and deploy to the `gh-pages` branch.
1. Push to GitHub.
2. In **Settings → Pages**, set:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **/(root)**
3. The workflow will publish on each push to `main`.

## Editing
- Main page content: `index.md`
- Publications page: `publications.md`
- BibTeX file: `assets/bib/pubs.bib`
- Add PDFs: `assets/papers/<bibkey>.pdf`
- Add slides: `assets/slides/<bibkey>.pdf`
- Styling: `assets/css/style.css`

## Publications links
Each BibTeX entry should use a stable key (e.g., `spirit_sosp25`).
This site automatically links:
- PDF → `/assets/papers/<key>.pdf`
- Slides → `/assets/slides/<key>.pdf`

You can override by adding custom fields in BibTeX:
- `pdf = {assets/papers/customname.pdf}`
- `slides = {assets/slides/customslides.pdf}`
