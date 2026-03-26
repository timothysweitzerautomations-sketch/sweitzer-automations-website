import { copyFileSync, existsSync } from "node:fs";

const src = "public/googleec3213cb4652b237.html";
const dest = "dist/googleec3213cb4652b237.html";

if (!existsSync(src)) {
  console.error("copy-gsc-verify: missing", src);
  process.exit(1);
}

copyFileSync(src, dest);
