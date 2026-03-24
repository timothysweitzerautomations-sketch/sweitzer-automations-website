# Sweitzer Automations — public website

[![Netlify Status](https://api.netlify.com/api/v1/badges/5481e62b-80c0-4b7d-a7f5-f6c6ff1dfcb2/deploy-status)](https://app.netlify.com/projects/enchanting-dasik-895391/deploys)

Static marketing site for [sweitzerautomations.com](https://sweitzerautomations.com): Vite + TypeScript, brand assets, contact form (Netlify), and a **Software** section linking to the open-source Linux and Chrome tools.

**Netlify Forms:** The live contact form is in **`index.html`**. **`public/__forms.html`** duplicates the same fields in a hidden static page so Netlify always detects the **`contact`** form at build time. Do not delete **`__forms.html`** unless you confirm Forms still register.

**Netlify cloud agent:** Copy-paste prompt for the Netlify AI agent is in **[`NETLIFY_AGENT_PROMPT.md`](NETLIFY_AGENT_PROMPT.md)** (includes correct operator name **Timothy Sweitzer**).

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

Output goes to **`dist/`**. Upload that folder to your host, or use Netlify (below).

## Deploy on Netlify (recommended)

This repo includes **`netlify.toml`**: build command `npm run build`, publish folder **`dist`**, Node **20**.

### One-time setup

1. Sign up at **[netlify.com](https://www.netlify.com/)** (use **Sign up with GitHub** so Netlify can read your repo).
2. **Add new site** → **Import an existing project** → **GitHub** → authorize Netlify if asked.
3. Pick your repository (**`sweitzer-automations-website`**). Netlify should read **`netlify.toml`** automatically.
4. Click **Deploy site**. Wait for the build; you’ll get a random URL like **`something.netlify.app`**.
5. **Custom domain:** **Site configuration** → **Domain management** → **Add custom domain** → enter **`sweitzerautomations.com`** (and **`www`** if you want both).
6. Netlify shows **DNS records** to add at your domain registrar (where you bought the domain). Add the **A** / **CNAME** values they give you, then wait for DNS (often minutes, sometimes longer).
7. **HTTPS:** Netlify usually provisions a free certificate automatically once DNS is correct.
8. **Contact form:** The site form uses **`data-netlify="true"`**. After deploy, open **Forms** in the Netlify dashboard; submissions appear there. You can add **email notifications** under **Forms** → **Notifications**.

### After you change the site

Push to **`main`** on GitHub; Netlify rebuilds and deploys automatically (if continuous deployment is enabled—it is by default for Git-connected sites).

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
