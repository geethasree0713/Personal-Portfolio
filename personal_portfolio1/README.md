# Manyam Geetha Sree — Portfolio

Personal technical portfolio built from scratch with **plain HTML, Tailwind CSS (CDN), and vanilla JavaScript** — no framework, no build step.

**Live site:** _add your deployed URL here_
**Repo:** _add your GitHub repo URL here_

## Pages

| File | Purpose |
|---|---|
| `index.html` | About, experience, education, GitHub activity, contact form |
| `skills.html` | 20+ skills grouped by category with animated proficiency bars |
| `projects.html` | 6 projects with filtering by tag (Web / GenAI / MERN / Automation) |
| `style.css` | Design tokens (dark + light theme), animations |
| `script.js` | Theme toggle, scroll reveals, skill bar animation, project filter, contact form handler |
| `assets/Manyam_Geetha_Sree_Resume.pdf` | Downloadable résumé |

## Features

- Fully responsive (mobile-first, tested down to 360px width)
- Dark/light theme toggle, persisted in `localStorage`
- Scroll-triggered reveal animations, respects `prefers-reduced-motion`
- Live GitHub contribution graph (via `ghchart.rshah.org`)
- Project filtering by technology tag
- Contact form wired for [Formspree](https://formspree.io) — see setup below
- Semantic HTML, visible keyboard focus states, meta tags for SEO/social

## Before you submit — 3 things to finish

1. **Activate the contact form**
   Create a free form at [formspree.io](https://formspree.io), then in `index.html` replace:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
   with your real endpoint.

2. **Add real project screenshots**
   Drop images into `assets/` (e.g. `assets/collegeiq.png`) and swap the `.thumb` placeholder blocks in `projects.html` for `<img>` tags. Placeholders are clearly marked with a large project number so nothing looks broken in the meantime.

3. **Add your LinkedIn and LeetCode links**
   In `index.html`, the Contact section has two `href="#"` placeholders — update with your real profile URLs.

## Deploy (pick one)

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify** — drag the project folder into [app.netlify.com/drop](https://app.netlify.com/drop), or:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
# then: repo Settings → Pages → Deploy from branch → main → / (root)
```

## Lighthouse checklist

Run in Chrome DevTools → Lighthouse (or `npx lighthouse <url> --view`):

- **Performance 90+**: no build step, one CDN script (Tailwind), lazy-loaded GitHub graph image — should pass out of the box. If it doesn't, the Tailwind CDN script is the usual suspect; swap to a compiled Tailwind build if you need the last few points.
- **Accessibility 95+**: all interactive elements have visible focus states, form inputs have labels via `placeholder` + `required`, color contrast follows the emerald-on-navy / emerald-on-white pairs already in `style.css`. Re-check contrast if you change the palette.
- **SEO**: meta description, title, and Open Graph tags are already in `index.html` — copy the pattern into `skills.html`/`projects.html` if you want page-specific descriptions.

## Suggested commit history

```
feat: scaffold portfolio structure (index, skills, projects)
feat: add dark/light theme toggle and design tokens
feat: add scroll reveal animations and terminal hero
feat: add skills page with categorized proficiency bars
feat: add project filtering by technology
feat: wire up contact form
docs: add README with deploy and Lighthouse notes
```
