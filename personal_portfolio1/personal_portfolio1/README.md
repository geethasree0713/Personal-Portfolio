# Manyam Geetha Sree — Portfolio

Personal portfolio built with plain HTML, Tailwind CSS (CDN), and vanilla JavaScript. No framework, no build step.

**Live site:** 
https://mgeethasree-portfolio.vercel.app/


## Structure

```
personal_portfolio1/
├── index.html          # About, experience, education, contact
├── skills.html         # Skills with proficiency bars
├── projects.html       # Projects with tag filtering
├── blog.html           # Blog listing page
├── blogs/
│   -all blogs
├── assets/              # Images and résumé
├── style.css           # Design tokens, animations
└── script.js           # Theme toggle, reveals, filters, form
```

## Features

- Dark/light theme toggle (saved in localStorage)
- Scroll reveal animations
- Project filtering by tech tag
- Blog section for write-ups
- Contact form via Formspree

## Run locally

Just open `index.html` in a browser — no build step needed.

## Deploy

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify** — drag the folder into [app.netlify.com/drop](https://app.netlify.com/drop)

**GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
# then: Settings → Pages → Deploy from branch → main → /
```

