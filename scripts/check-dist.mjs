import { existsSync } from "node:fs";

const required = [
  "dist/index.html",
  "dist/googleec3213cb4652b237.html",
  "dist/robots.txt",
  "dist/sitemap.xml",
];

let failed = false;
for (const file of required) {
  if (!existsSync(file)) {
    console.error(`check-dist: missing ${file}`);
    failed = true;
  }
}

if (failed) {
  console.error("check-dist: fix Vite/public assets so dist contains these files before deploy.");
  process.exit(1);
}
