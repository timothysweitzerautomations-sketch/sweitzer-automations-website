# Sweitzer Automations — public website

Static marketing site for [sweitzerautomations.com](https://sweitzerautomations.com): Vite + TypeScript, brand assets, contact form (Netlify), and a **Software** section linking to the open-source Linux and Chrome tools.

## Requirements

- **Node.js** 18+ (includes `npm`)

## Local preview

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually **http://127.0.0.1:5173/**).

## Production build

```bash
npm run build
```

Output goes to **`dist/`**. Upload that folder to your host, or point Netlify/Vercel/etc. at this repo and use `npm run build` as the build command with **`dist`** as the publish directory.

## Put this project on GitHub

1. Create a **new empty repository** on GitHub (no README/license if you already have files locally—or add them after the first push).

2. In this folder on your machine:

   ```bash
   cd ~/Desktop/Sweitzer-Automations-website
   git init
   git add .
   git commit -m "Initial commit: Sweitzer Automations public site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with yours. Use SSH if you prefer: `git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`.

3. If GitHub shows “repository already has content,” pull first with `git pull origin main --allow-unrelated-histories`, resolve any conflicts, then push.

## What is not in Git

`node_modules/` and `dist/` are listed in `.gitignore`. After cloning, run `npm install` and `npm run build` to regenerate `dist/`.

## Related repo

Automation tools and dashboards live in the separate **Sweitzer Automations 3-22-26** project on GitHub (see links on the site under Software / Downloads).
