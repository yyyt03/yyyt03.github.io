import { Marked, TextRenderer } from "marked";

export function renderArticle(content) {
  const headings = [];
  const usedIds = new Set();
  const markdown = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        if (depth !== 2 && depth !== 3) return `<h${depth}>${html}</h${depth}>\n`;
        const textRenderer = new TextRenderer();
        textRenderer.parser = this.parser;
        textRenderer.html = () => "";
        const text = this.parser.parseInline(tokens, textRenderer).replace(/\s+/g, " ").trim();
        const slug = text.normalize("NFKC").toLowerCase()
          .replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "section";
        const base = `section-${slug}`;
        let id = base;
        let suffix = 2;
        while (usedIds.has(id)) id = `${base}-${suffix++}`;
        usedIds.add(id);
        headings.push({ id, text, depth });
        return `<h${depth} id="${id}" tabindex="-1">${html}</h${depth}>\n`;
      },
    },
  });
  return { html: markdown.parse(content, { async: false }), headings };
}
