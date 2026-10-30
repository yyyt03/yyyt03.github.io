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
    title: "Yutong Ren · yyyt03",
    description: "Yutong Ren 的个人主页与博客。保持热情。",
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
