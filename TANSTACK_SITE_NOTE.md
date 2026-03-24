# If your live site still shows old “Representative work” case studies

The **Vite** site in **this repo** (`index.html`) includes an honest **Skills & capabilities** block (`#capabilities`). It does **not** include fictional project stories.

If **`sweitzerautomations.com`** still shows **Conveyor Line / Boiler Plant / Water System** cards, that HTML is coming from a **different codebase** (e.g. the Netlify project built with the cloud agent), **not** from this folder.

**What to do**

1. In **GitHub**, open the repo connected to **`enchanting-dasik-895391`** (or whichever site is in production).
2. Search the repo for **`Representative Work`**, **`Conveyor`**, or **`ControlLogix`**.
3. Remove that section and replace it with the **Skills & capabilities** markup from `index.html` in this repo (section `#capabilities`), or deploy **this** repo to Netlify as the production site so one source of truth drives the domain.

**Goal:** No copy that reads like completed client projects unless those projects are real and approved to share.
