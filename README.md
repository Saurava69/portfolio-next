# sauravx.com

Personal portfolio  dark, minimal, single-page.

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS 4
- GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` trigger GitHub Actions → builds static site → deploys to GitHub Pages.

## Structure

```
app/
├── layout.js      # Nav, footer, SEO
├── page.js        # All sections (Hero, Experience, Projects, Skills, Contact)
├── globals.css    # Dark theme, variables
public/
├── Resume.pdf
├── CNAME
```
