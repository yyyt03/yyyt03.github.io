# 课题组网站内容字段模板

## 本轮目标

这一步的目标是把网站中三类核心内容的字段规范固定下来：

- 成员
- 新闻
- 项目

后续维护时，优先采用“复制模板再修改”的方式，而不是自由创建 Markdown 文件。

---

## 1. 成员 `_members`

### 建议文件名

- `pi.md`
- `phd-zhangsan.md`
- `master-lisi.md`

### 字段说明

- `name`：成员姓名
- `role`：身份，例如 `PI`、`PhD Student`、`Master Student`
- `photo`：成员照片路径，统一写站内路径
- `research`：研究方向，可写成一句话
- `email`：联系邮箱
- `order`：排序数字，数字越小越靠前

### 模板文件

- `templates/member-template.md`

---

## 2. 新闻 `_news`

### 建议文件名

- `2026-03-15-site-plan.md`
- `2026-04-01-paper-accepted.md`

### 字段说明

- `title`：新闻标题
- `date`：发布日期，建议采用 `YYYY-MM-DD`
- `cover`：封面图路径，统一写站内路径
- `summary`：新闻摘要，用于首页或列表页展示

### 模板文件

- `templates/news-template.md`

---

## 3. 项目 `_projects`

### 建议文件名

- `smart-sensing-platform.md`
- `field-ecology-monitoring.md`

### 字段说明

- `title`：项目名称
- `period`：项目周期，例如 `2026-2029`
- `leader`：项目负责人
- `summary`：项目简介
- `status`：项目状态，例如 `ongoing`、`completed`

### 模板文件

- `templates/project-template.md`

---

## 4. 图片路径约定

图片统一放在：

- `assets/uploads/`

建议后续按内容再细分子目录，例如：

- `assets/uploads/members/`
- `assets/uploads/news/`
- `assets/uploads/projects/`

图片字段统一使用站内相对根路径，例如：

- `/assets/uploads/members/pi.jpg`
- `/assets/uploads/news/paper-cover.jpg`

---

## 5. 维护规则

- 不随意增加字段名
- 不随意修改字段拼写
- 录入内容时优先复制模板文件
- 图片先上传，再填写路径
- 日期格式保持统一

---

## 6. 这一步完成后的结果

现在第三步已经确定了三类内容的字段结构。下一步就可以进入：

- 建立 `_members`、`_news`、`_projects`
- 放入 1 到 2 条示例内容
- 开始写列表页和展示模板

