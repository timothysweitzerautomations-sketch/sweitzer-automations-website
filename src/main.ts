const yearEl = document.querySelector<HTMLSpanElement>("#year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const header = document.querySelector<HTMLElement>(".site-header");
const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
const siteNav = document.querySelector<HTMLElement>("#site-nav");
const navLinks = siteNav?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

function setNavOpen(open: boolean) {
  header?.classList.toggle("is-nav-open", open);
  siteNav?.classList.toggle("is-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
  navToggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
}

navToggle?.addEventListener("click", () => {
  const open = !siteNav?.classList.contains("is-open");
  setNavOpen(open);
});

navLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 720px)").matches) {
      setNavOpen(false);
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && siteNav?.classList.contains("is-open")) {
    setNavOpen(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720 && siteNav?.classList.contains("is-open")) {
    setNavOpen(false);
  }
});
