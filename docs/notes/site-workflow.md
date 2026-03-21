# 课题组网站流程状态（更新于 2026-03-19）

## 当前状态

项目已完成从 Jekyll 初始模板到“可对外浏览版本”的核心工作：

- GitHub Pages 已启用，站点部署链路可用。
- 导航、首页、关于页、研究页、成员页、新闻页、项目页已搭建。
- `_members`、`_news`、`_projects` 已接入并可渲染。
- 成员/新闻/项目详情页已使用独立布局并完成一轮样式统一。
- 页面引用图片已优先本地化到 `assets/uploads/`，避免外链失效。
- 已完成一轮移动端适配修复。
- 页面源码已集中归档到 `pages/`，文档参考素材归档到 `docs/references/`。

## 目录规范（当前执行）

- 页面源码：`pages/`
- 结构化内容：`_members/`、`_news/`、`_projects/`
- 图片资源：`assets/uploads/`
- 过程文档：`docs/notes/`
- 参考素材：`docs/references/`

## 日常维护流程

1. 新建功能分支。
2. 修改页面或数据内容。
3. 本地预览检查：

```bash
bundle exec jekyll serve --livereload
```

4. 构建验证：

```bash
bundle exec jekyll build
```

5. 合并发布：

```bash
git checkout main
git merge --ff-only <功能分支>
git push origin main
```

## 下一步建议（按优先级）

1. 把首页与各页面示例文案替换为真实课题组内容。
2. 持续补齐成员照片、新闻配图、项目封面并统一图片尺寸。
3. 增加成果数据结构（可新增 `publications`）以替代新闻页占位逻辑。
4. 做一轮 SEO 与可访问性优化（标题、描述、语义标签、移动端可读性）。

## 发布排查清单

线上看起来异常时，按顺序检查：

1. 代码是否已进入 `main` 并成功推送。
2. GitHub Pages 构建是否完成。
3. 浏览器缓存是否清理（强制刷新）。
4. 关键路径是否正确：`/assets/main.css`、`/assets/uploads/*`、集合详情页链接。

## 子页面专项优化

详见：`docs/notes/subpage-optimization-plan.md`

## 部署与 CMS 决策

详见：`docs/notes/deploy-and-cms-plan.md`

## 域名维护

详见：`docs/notes/cloudflare-domain-change.md`
