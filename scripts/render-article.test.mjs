import test from "node:test";
import assert from "node:assert/strict";
import { renderArticle } from "./render-article.mjs";

test("formatted Chinese headings provide plain labels and preserve body markup", () => {
  const article = renderArticle("## 缓存与 **同步**\n### 使用 `Cursor` 与 <em>测试</em>\n\n正文");
  assert.deepEqual(article.headings.map(({ text, depth }) => ({ text, depth })), [
    { text: "缓存与 同步", depth: 2 },
    { text: "使用 Cursor 与 测试", depth: 3 },
  ]);
  assert.match(article.html, /<strong>同步<\/strong>/);
  for (const { id } of article.headings) assert(article.html.includes(`id="${id}"`));
});

test("duplicate headings and normalized slug collisions always have unique targets", () => {
  const article = renderArticle("## A\n## A\n## A-2\n## A\n## 😀\n## 😀");
  const ids = article.headings.map(({ id }) => id);
  assert.equal(new Set(ids).size, 6);
  assert.deepEqual(ids.slice(0, 4), ["section-a", "section-a-2", "section-a-2-2", "section-a-3"]);
  assert.equal(renderArticle("## A").headings[0].id, "section-a");
});

test("code samples and content without section headings do not create navigation entries", () => {
  const article = renderArticle("# 标题\n\n正文\n\n```markdown\n## 代码里的标题\n```\n\n#### 补充");
  assert.deepEqual(article.headings, []);
  assert.match(article.html, /<pre><code/);
});
