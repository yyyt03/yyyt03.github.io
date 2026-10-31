const html = document.documentElement;
const body = document.body;
const title = document.querySelector("title");
const description = document.querySelector('meta[name="description"]');
const textNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const langButtons = document.querySelectorAll("[data-lang-button]");

const metadata = {
  zh: {
    lang: "zh-CN",
    title: "任宇童 · yyyt03",
    description: "任宇童的个人主页与博客。保持热情。",
  },
  en: {
    lang: "en",
    title: "Yutong Ren · yyyt03",
    description: "Personal homepage and blog of Yutong Ren. Stay passionate.",
  },
};

function setLanguage(lang) {
  const next = metadata[lang] ? lang : "zh";

  html.lang = metadata[next].lang;
  body.dataset.language = next;
  title.textContent = title.dataset[next] || metadata[next].title;
  description.setAttribute("content", description.dataset[next] || metadata[next].description);

  textNodes.forEach((node) => {
    const value = node.dataset[next];
    if (value) {
      node.textContent = value;
    }
  });

  altNodes.forEach((node) => {
    const value = node.dataset[`${next}Alt`];
    if (value) {
      node.setAttribute("alt", value);
    }
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langButton === next;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    window.localStorage.setItem("preferred-language", next);
  } catch {
    // Language switching also works when browser storage is unavailable.
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langButton);
  });
});

let savedLanguage;
try {
  savedLanguage = window.localStorage.getItem("preferred-language");
} catch {
  savedLanguage = "zh";
}
setLanguage(savedLanguage || "zh");

const tocLinks = [...document.querySelectorAll(".article-toc a[data-section]")];
if (tocLinks.length) {
  const sections = tocLinks.map((link) => document.getElementById(link.dataset.section));
  const disclosure = document.querySelector(".toc-disclosure");
  const compactLayout = window.matchMedia("(max-width: 1100px)");
  const syncDisclosure = () => { disclosure.open = !compactLayout.matches; };
  syncDisclosure();
  compactLayout.addEventListener("change", syncDisclosure);

  let scheduled = false;
  function updateCurrentSection() {
    scheduled = false;
    let current = 0;
    const threshold = Math.min(180, window.innerHeight * 0.25);
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= threshold) current = index;
    });
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) {
      current = sections.length - 1;
    }
    tocLinks.forEach((link, index) => {
      if (index === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  function scheduleSectionUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateCurrentSection);
  }
  window.addEventListener("scroll", scheduleSectionUpdate, { passive: true });
  window.addEventListener("resize", scheduleSectionUpdate);
  window.addEventListener("hashchange", scheduleSectionUpdate);
  window.addEventListener("load", scheduleSectionUpdate);
  tocLinks.forEach((link) => link.addEventListener("click", () => {
    if (compactLayout.matches) disclosure.open = false;
  }));
  scheduleSectionUpdate();
}
