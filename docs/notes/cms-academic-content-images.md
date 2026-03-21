# Pages CMS：学术成果栏目封面图 + 正文插图配置与使用流程

更新时间：2026-03-21

## 目标

在 Pages CMS 中维护“学术成果”时，同时支持：

1. 封面图（front matter `cover`）
2. 正文插图（Markdown 正文 `body` 内插图）

## 已完成的仓库配置（已由 Codex 修改）

1. `.pages.yml` 已为 `news` 集合开启：
   - `cover` 图片字段（默认目录 `assets/uploads/news`）
   - `body` 富文本字段（支持正文插图，默认目录 `assets/uploads/news`）
2. 前端样式 `assets/main.scss` 已增加正文插图显示规则：
   - 图片自适应宽度，不溢出
   - 移动端圆角和边距优化
   - 支持 `figure/figcaption`

## 你需要操作（Pages CMS 后台）

1. 【需要你操作】进入 Pages CMS 项目 `yyyt03.github.io`，确认分支为 `main`。
2. 【需要你操作】在学术成果（`news`）中新建或编辑条目：
   - 标题：`title`
   - 日期：`date`
   - 摘要：`summary`
   - 封面图：`cover`
3. 【需要你操作】在“正文（支持插图）”字段中插入图片：
   - 方法 A：工具栏图片按钮
   - 方法 B：输入 `/image`（若编辑器支持命令菜单）
   - 选择或上传图片到 `assets/uploads/news`
4. 【需要你操作】保存并发布（提交到 GitHub）。

## 正文插图推荐写法

如果你更习惯 Markdown，也可以直接写：

```markdown
![图注：样品显微观察](/assets/uploads/news/sample-micro.jpg)

图 1：样品在偏光显微镜下的微痕特征。
```

建议：

1. 图片文件名使用英文和短横线（如 `2026-paper-figure-1.jpg`）
2. 正文里每张图都写 alt 文本，便于检索与无障碍访问
3. 单篇文章图片数量较多时，建议控制单图宽度来源（上传前压缩）

## 验收检查

发布后检查：

1. 学术成果列表页可点击进入详情
2. 详情页显示封面图
3. 正文中插图可正常显示
4. 手机端不出现横向溢出

## 常见问题

### 1) CMS 看不到“插图”入口

1. 先确认仓库根目录已有 `.pages.yml`
2. 在 Pages CMS 项目中刷新页面，必要时重新打开项目
3. 确认编辑的是 `news` 内容类型，而不是只读页面

### 2) 插图路径不对

正文图建议放在：

- `assets/uploads/news/`

引用路径建议写：

- `/assets/uploads/news/文件名.jpg`

### 3) 插图显示过大

当前样式已做自适应；若仍偏大，优先在上传前压缩原图分辨率（例如长边 1600px 以内）。