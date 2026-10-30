import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import matter from "gray-matter";
import { marked } from "marked";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const stylesheet = await readFile(path.join(root, "styles.css"), "utf8");
const assetVersion = createHash("sha256")
  .update(stylesheet)
  .update(await readFile(path.join(root, "script.js")))
  .digest("hex").slice(0, 12);
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]);
const bilingual = (tag, zh, en, attributes = "") =>
  `<${tag} data-i18n data-zh="${escape(zh)}" data-en="${escape(en)}" ${attributes}>${escape(zh)}</${tag}>`;

const posts = [];
for (const filename of await readdir(path.join(root, "content/posts"))) {
  if (!filename.endsWith(".md")) continue;
  const { data, content } = matter(await readFile(path.join(root, "content/posts", filename), "utf8"));
  if (data.draft === true) continue;
  const slug = filename.slice(0, -3);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`${filename}: use lowercase letters, numbers, and hyphens in filenames.`);
  if (typeof data.title !== "string" || !data.title.trim()) throw new Error(`${filename}: title is required.`);
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
    throw new Error(`${filename}: date must be a valid YYYY-MM-DD date.`);
  }
  posts.push({ slug, title: data.title, titleEn: data.title_en || data.title, date, content });
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

const empty = bilingual("p", "暂无文章", "No posts yet", 'class="empty-state"');
function postList(items, prefix) {
  if (!items.length) return empty;
  return `<ul class="post-list">${items.map((post) => `<li><a href="${prefix}${post.slug}/"><time datetime="${post.date}">${post.date}</time>${bilingual("span", post.title, post.titleEn)}</a></li>`).join("\n")}</ul>`;
}
const switcher = `<div class="language-switch" aria-label="Language switch">
  <span class="language-thumb" aria-hidden="true"></span>
  <button class="language-option is-active" type="button" data-lang-button="zh" aria-pressed="true">中文</button>
  <button class="language-option" type="button" data-lang-button="en" aria-pressed="false">EN</button>
</div>`;

function document({ title, titleEn, prefix, content, listing = false }) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-zh="${escape(title)} · 任宇童" data-en="${escape(titleEn)} · Yutong Ren">${escape(title)} · 任宇童</title>
  <meta name="description" content="${escape(title)} — 任宇童的博客" data-zh="${escape(title)} — 任宇童的博客" data-en="${escape(titleEn)} — Blog of Yutong Ren">
  <style>${stylesheet}</style>
</head>
<body class="blog-page" data-language="zh">
  <main class="blog-shell">
    <nav class="blog-nav" aria-label="Navigation">
      <a href="${prefix}"><svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 5-7 7 7 7M5 12h14"/></svg>${bilingual("span", "首页", "Home")}</a>
      ${listing ? "" : bilingual("a", "博客", "Blog", `href="${prefix}blog/"`)}
      ${switcher}
    </nav>
    ${content}
  </main>
  <script src="/script.js?v=${assetVersion}"></script>
</body>
</html>\n`;
}

// Only the dedicated build directory is replaced; source files stay in place.
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, "blog"), { recursive: true });
await cp(path.join(root, "public"), output, { recursive: true });
for (const filename of ["styles.css", "script.js"]) await cp(path.join(root, filename), path.join(output, filename));
const homepage = (await readFile(path.join(root, "index.html"), "utf8"))
  .replace('<link rel="stylesheet" href="./styles.css">', () => `<style>${stylesheet}</style>`)
  .replace('src="./script.js"', `src="/script.js?v=${assetVersion}"`)
  .replace(/<!-- RECENT_POSTS -->[\s\S]*?<!-- \/RECENT_POSTS -->/, posts.length ? postList(posts.slice(0, 3), "./blog/") : "");
await writeFile(path.join(output, "index.html"), homepage);
await writeFile(path.join(output, ".nojekyll"), "");
await writeFile(path.join(output, "blog/index.html"), document({
  title: "博客", titleEn: "Blog", prefix: "../", listing: true,
  content: `<section class="blog-index-card" aria-labelledby="blog-heading"><header class="blog-index-header">${bilingual("h1", "博客", "Blog", 'id="blog-heading"')}</header>${postList(posts, "./")}</section>`,
}));

for (const post of posts) {
  const directory = path.join(output, "blog", post.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), document({
    title: post.title, titleEn: post.titleEn, prefix: "../../",
    content: `<article class="article-card">
      <header class="blog-header">${bilingual("h1", post.title, post.titleEn)}<time class="post-date" datetime="${post.date}">${post.date}</time></header>
      <div class="article-body">${marked.parse(post.content)}</div>
      <footer class="article-footer">${bilingual("a", "← 全部文章", "← All posts", 'href="../"')}</footer>
    </article>`,
  }));
}
console.log(`Built homepage, blog index, and ${posts.length} published post(s) in dist/.`);
