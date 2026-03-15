# 仓库修改说明

## 目录作用

### 站点配置

- `_config.yml`
  站点总配置。这里控制网站标题、GitHub Pages 地址、语言、时区、collections 和默认 layout。

### 导航与页头

- `_data/navigation.yml`
  控制主导航顺序。想把“首页”放在最前面，或调整菜单顺序，就改这里。
- `_includes/header.html`
  控制顶部页头和导航样式结构。想改页头信息、品牌区和菜单 HTML，就改这里。
- `assets/main.scss`
  控制全站视觉样式，包括导航、首页卡片、成员头像和详情页布局。

### 固定页面

- `index.markdown`
  首页内容。这里控制首页的介绍、最新新闻、成员入口和项目概览。
- `about.markdown`
  课题组简介页。这里适合放导师介绍、团队概况和研究方向总述。
- `research.md`
  研究方向页。
- `contact.md`
  联系方式页。
- `members.md`
  成员列表页。
- `news.md`
  新闻列表页。
- `projects.md`
  项目列表页。

### 结构化内容

- `_members/*.md`
  每个成员一份 Markdown。姓名、职称、头像、研究方向、邮箱都在 front matter 里。
- `_news/*.md`
  每条新闻一份 Markdown。
- `_projects/*.md`
  每个项目一份 Markdown。

### 页面布局

- `_layouts/member.html`
  成员详情页布局。成员头像不显示时，优先检查这里和 `members.md` 是否渲染了 `photo` 字段。

### 图片资源

- `assets/uploads/members/`
  成员照片。
- `assets/uploads/news/`
  新闻配图。
- `assets/uploads/projects/`
  项目配图。

图片上传后，需要在对应 Markdown 的 `photo` 或 `cover` 字段里写对路径，例如：

- `/assets/uploads/members/liyinghua.png`

### 模板与项目说明文档

- `templates/`
  存放成员、新闻、项目的内容模板。
- `docs/notes/`
  存放项目过程文档和说明性 Markdown，避免这些文件继续堆在仓库根目录。

## 常见修改场景

### 想改导航顺序

改 `_data/navigation.yml`。

### 想改网站顶部样式

改 `_includes/header.html` 和 `assets/main.scss`。

### 想改首页内容块

改 `index.markdown`。

### 想新增一个成员

1. 在 `_members/` 里复制一个现有成员文件。
2. 修改 front matter 里的 `name`、`role`、`photo`、`research`、`email`、`order`。
3. 把图片放进 `assets/uploads/members/`。

### 想修成员图片不显示

按这个顺序检查：

1. 图片文件是否真的在 `assets/uploads/members/`。
2. 成员 Markdown 里的 `photo` 路径是否正确。
3. `members.md` 和 `_layouts/member.html` 是否在渲染 `photo` 字段。

### 想让线上 GitHub Pages 更新

当前功能分支完成后执行：

```bash
git checkout main
git merge --ff-only <功能分支>
git push origin main
```

如果本地能看到但线上还是旧版本，通常是最新改动还没进入 `main`。
