# 仓库修改说明

## 目录作用

### 站点配置

- `_config.yml`
  站点总配置。控制站点标题、GitHub Pages 地址、语言、时区、collections、默认 layout 与排除目录。

### 页面源码（已归档）

- `pages/`
  页面类文件统一放在这里，方便管理。

当前包含：

- `pages/index.markdown`（首页）
- `pages/about.markdown`（关于我们）
- `pages/research.md`（研究领域）
- `pages/contact.md`（联系方式）
- `pages/members.md`（成员列表）
- `pages/news.md`（学术成果/新闻列表）
- `pages/projects.md`（项目列表）
- `pages/404.html`（404 页面）

这些页面都使用 `permalink`，所以移动目录后线上 URL 不变。

### 导航与布局

- `_data/navigation.yml`
  控制主导航顺序和入口。
- `_includes/header.html`
  控制顶部导航结构。
- `_includes/head.html`
  控制 `<head>` 元信息与样式链接。
- `_layouts/default.html`
  全站外壳布局（页头、页脚、移动端菜单脚本）。
- `_layouts/page.html`
  普通页面布局。
- `_layouts/member.html`
  成员详情页布局。
- `_layouts/news-item.html`
  新闻详情页布局。
- `_layouts/project-item.html`
  项目详情页布局。

### 样式与资源

- `assets/main.scss`
  全站样式（含桌面/移动端适配、详情页样式）。
- `assets/uploads/members/`
  成员照片。
- `assets/uploads/news/`
  新闻配图。
- `assets/uploads/projects/`
  项目配图。
- `assets/uploads/site/`
  首页与固定页面共用素材图。

### 结构化内容

- `_members/*.md`
  成员数据。
- `_news/*.md`
  新闻数据。
- `_projects/*.md`
  项目数据。

### 模板与文档

- `templates/`
  成员/新闻/项目模板。
- `docs/notes/`
  项目流程和记录文档。
- `docs/references/`
  参考页面和素材（如 `example_code.html`）。

## 常见修改场景

### 想改导航顺序

改 `_data/navigation.yml`。

### 想改页头/导航样式

改 `_includes/header.html` 和 `assets/main.scss`。

### 想改首页内容

改 `pages/index.markdown`。

### 想改固定页面文案

改 `pages/about.markdown`、`pages/research.md`、`pages/contact.md`。

### 想改列表页结构

改 `pages/members.md`、`pages/news.md`、`pages/projects.md`。

### 想改详情页样式

- 成员详情：改 `_layouts/member.html` 和 `assets/main.scss` 中 `member-detail` 相关样式。
- 新闻详情：改 `_layouts/news-item.html` 和 `assets/main.scss` 中 `detail-shell` 相关样式。
- 项目详情：改 `_layouts/project-item.html` 和 `assets/main.scss` 中 `detail-shell` 相关样式。

### 想新增成员

1. 在 `_members/` 复制一个现有成员文件。
2. 修改 `name`、`role`、`photo`、`research`、`email`、`order`。
3. 把图片放进 `assets/uploads/members/`。

### 想修成员图片不显示

按这个顺序检查：

1. 图片文件是否在 `assets/uploads/members/`。
2. 成员 Markdown 中 `photo` 路径是否正确。
3. `pages/members.md` 和 `_layouts/member.html` 是否渲染了 `photo`。

### 想排查子页面图片不显示

按这个顺序检查：

1. 引用路径是否是站内路径（例如 `/assets/uploads/news/site-setup.jpg`）。
2. 图片是否真实存在于仓库对应目录。
3. Jekyll 是否本地构建通过（`bundle exec jekyll build`）。

## 发布流程

```bash
git checkout main
git merge --ff-only <功能分支>
git push origin main
```

如果本地正常、线上异常，优先检查：

1. 最新改动是否已进入 `main`。
2. GitHub Pages 是否完成重新构建。
3. 浏览器是否需要强制刷新（`Ctrl + F5`）。



