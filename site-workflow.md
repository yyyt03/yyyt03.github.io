# 课题组网站下一步流程

## 1. 当前状态

根据当前仓库内容，你现在已经完成了前七步中的大部分基础工作：

- 首页已经接入最新新闻、成员入口和项目概览
- `about.markdown` 和 `_members/pi.md` 已开始替换成真实导师信息
- 已新增 `research.md`、`contact.md` 以及 collections 示例内容
- `_config.yml` 已经更新为适合 GitHub Pages 的基础站点配置
- 本地已经连接远程仓库，但最新改动仍需要合并回 `main` 并推送，GitHub Pages 才会更新

这说明网站已经从“Jekyll 默认示例”进入“第一版可浏览展示”阶段。

---

## 2. 总体建议

对于课题组网站，推荐按这个顺序推进：

1. 先确定 GitHub Pages 的发布方式
2. 再设计网站栏目和内容结构
3. 然后定义结构化内容模板
4. 再把站点配置改成适合 GitHub Pages 的版本
5. 接着替换默认页面内容
6. 建立 collections 和示例数据
7. 最后逐步补展示页、真实内容和样式

也就是说，当前阶段的关键词不是“美化”，而是“搭骨架”。

---

## 3. 第一步：确定 GitHub Pages 方案

你选择的是用户主页仓库方案：

- 仓库名：`yyyt03.github.io`
- 访问地址：`https://yyyt03.github.io/`
- `baseurl`：保持为空 `""`

这一方案适合正式主页，网址也更干净。

---

## 4. 第二步：先定网站栏目

这一步已经定稿，栏目结构按下面执行。

### 固定页面

- 首页 `index`
- 课题组简介 `about`
- 研究方向 `research`
- 联系方式 `contact`

### 列表页

- 成员页 `members`
- 新闻页 `news`
- 项目页 `projects`

### 后续对应的数据目录

- 成员 `_members`
- 新闻 `_news`
- 项目 `_projects`

### 图片目录

- `assets/uploads/`

### 导航顺序

- 首页
- 课题组简介
- 研究方向
- 成员
- 新闻
- 项目
- 联系方式

### 已经落到项目里的文件

- 栏目定稿文档：`site-structure.md`
- 导航数据文件：`_data/navigation.yml`

---

## 5. 第三步：定义每类内容的字段模板

这一步已经完成，三类内容的字段结构和模板都已经落到项目中。

### 成员条目建议字段

- `name`
- `role`
- `photo`
- `research`
- `email`
- `order`

### 新闻条目建议字段

- `title`
- `date`
- `cover`
- `summary`

### 项目条目建议字段

- `title`
- `period`
- `leader`
- `summary`
- `status`

### 已经落到项目里的文件

- 字段说明文档：`content-schema.md`
- 成员模板：`templates/member-template.md`
- 新闻模板：`templates/news-template.md`
- 项目模板：`templates/project-template.md`

---

## 6. 第四步：修改 `_config.yml`

这一步已经完成，站点基础配置已经改成适合 GitHub Pages 课题组网站继续开发的版本。

### 已经修改的内容

- `title`
- `email`
- `description`
- `url`
- `baseurl`
- `lang`
- `timezone`
- `github_username`
- `collections`
- `defaults`
- `exclude`

### 已经落到项目里的文件

- 配置文件：`_config.yml`

### 你还需要自己替换的占位值

- `title`
- `email`
- `description`

当前 `url` 和 `github_username` 已经同步到了你的远程仓库：

- `url: https://yyyt03.github.io`
- `github_username: yyyt03`

---

## 7. 第五步：清理默认页面

这一步已经完成，默认页面已经被替换成适合课题组网站继续填写的占位内容。

### 已经落到项目里的文件

- 首页：`index.markdown`
- 课题组简介页：`about.markdown`
- 研究方向页：`research.md`
- 联系方式页：`contact.md`

这一步的目标不是一次写完所有内容，而是让网站打开后不再出现 Jekyll 默认文案。

---

## 8. 第六步：建立 collections 和示例数据

这一步已经完成，网站的结构化内容目录和第一批示例数据都已经落到项目中。

### 已建立的目录

- `_members/`
- `_news/`
- `_projects/`
- `assets/uploads/`
- `assets/uploads/members/`
- `assets/uploads/news/`
- `assets/uploads/projects/`

### 已加入的示例内容

- `_members/pi.md`
- `_members/student-a.md`
- `_news/2026-03-15-site-setup.md`
- `_projects/project-1.md`

### 这一步完成后的意义

有了 collections 和示例数据以后，下一步就可以开始做成员页、新闻页和项目页的列表展示，而不是继续停留在静态页面阶段。

---

## 9. 第七步：做第一版页面展示

这一步已经完成，首页和列表页已经开始展示结构化内容。

### 已经落到项目里的文件

- 首页：`index.markdown`
- 成员页：`members.md`
- 新闻页：`news.md`
- 项目页：`projects.md`

### 已经完成的展示内容

- 首页显示最新新闻
- 首页显示成员入口
- 首页显示项目概览
- 成员页按 `order` 展示成员信息
- 新闻页按日期倒序展示新闻
- 项目页展示项目概览信息

这一步完成后，网站已经从“只有静态页面和示例数据”进入“第一版可浏览展示”阶段。

---

## 10. 第八步：本地预览与检查

这一步已经实际执行过多次，并且当前站点可以正常本地构建。

```bash
bundle exec jekyll serve
```

需要注意的是，这一步不是只做一次，而是后续每次修改页面、模板或配置后都建议重新检查。

---
## 11. 第九步：连接远程仓库并推送

这一步已经完成：

- 本地仓库已连接 `origin`
- `main` 已经和 GitHub 建立跟踪关系
- 当前远程仓库地址为 `https://github.com/yyyt03/yyyt03.github.io.git`

后续需要做的不是重新连接，而是在每一轮功能完成后把对应改动合回 `main` 并推送。

```bash
git checkout main
git merge --ff-only <功能分支>
git push origin main
```

---
## 12. 第十步：开启 GitHub Pages

GitHub Pages 已经启用，但线上看到的内容是否最新，取决于当前改动有没有真正进入 `main` 并推送到远程。

也就是说：

- Pages 功能本身已经开启
- 但每次新功能完成后，仍然需要合并并推送 `main`
- 如果线上还是旧版本，通常不是 Pages 没开，而是最新分支内容还没有发布

---
## 13. 后续维护建议

为了让课题组成员也能维护，建议提前约定这几条规则：

- 正文内容优先用 Markdown
- 图片统一放到 `assets/uploads/`
- 不直接改复杂模板文件
- 新增成员 / 新闻时，只复制模板文件修改内容
- 优先使用 GitHub 网页端或 `github.dev` 做简单更新

这样可以把维护门槛压得很低。

---

## 14. 你现在最应该做的三件事

如果你想按最小成本继续推进，下一步优先做这 3 件事：

1. 把示例内容逐步替换成真实课题组信息
2. 合并并推送 `main`，检查 GitHub Pages 是否更新到最新版本
3. 再根据实际效果继续做样式优化或导航优化

只要这三步完成，网站就会从“第一版可浏览展示”进入“可正式对外使用的基础版本”。

---

## 15. 一个适合你的推进顺序

可以直接按下面这条路线做：

1. 合并功能分支并推送 `main`
2. 检查 GitHub Pages 线上效果
3. 替换示例内容
4. 微调首页和导航
5. 再做样式美化

这会比一开始就纠结主题、动画效果或 CMS 更稳，也更适合课题组网站这种长期维护型项目。

