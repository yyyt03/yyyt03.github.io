# Yutong Ren 的个人主页与博客

网站：https://yyyt03.github.io/

保留简洁的个人介绍、中英文切换，以及用 Markdown 写作的静态博客。

## 本地预览

需要 Node.js 22 或更新版本。

```powershell
npm ci
npm run build
npm run preview
```

打开 http://127.0.0.1:4173 。修改内容后重新运行 `npm run build`，刷新浏览器。

## 写博客

在 `content/posts/` 下新增 Markdown 文件，例如 `2026-10-30-learning-notes.md`：

```markdown
---
title: 我的学习笔记
title_en: My learning notes
date: "2026-10-30"
draft: false
tags: [AIGC]
---

从这里开始写正文。

## 小标题

支持链接、图片、列表、表格和代码块。
```

- 文件名使用小写英文字母、数字和连字符，它会成为文章地址。
- `title` 和 `date` 必填，`title_en` 可选。语言按钮切换界面和标题，正文保留原文。
- `tags` 是可选的字符串数组，只在文章页显示，不增加分类或筛选。
- `draft: true` 的文章不发布。没有文章时显示简洁的待更新提示。
- 图片放到 `public/images/`，正文使用 `![说明](/images/example.png)` 引用。
- 首页保持个人介绍，通过文字链接进入项目复盘；博客列表只展示日期和标题，按日期倒序排列。

推送到 `main` 后，GitHub Actions 自动安装依赖、生成 `dist/` 并部署到 GitHub Pages。
