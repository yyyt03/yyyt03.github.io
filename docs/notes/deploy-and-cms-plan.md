# 部署与 CMS 方案（更新于 2026-03-19）

## 最新进展（2026-03-19）

- 你已完成 Pages CMS 登录并成功添加仓库 yyyt03.github.io（分支 main）。
- 当前页面提示 No configuration file，原因是仓库根目录缺少 .pages.yml。
- 本仓库已补充 .pages.yml（见项目根目录）。推送后刷新 Pages CMS 即可看到内容模型。

## 0. 当前问题

你现在遇到的是“GitHub Pages 可以用，但访问加载偏慢”，这通常不只是后端问题，还包括：

- 访问者到 GitHub CDN 的网络路径不稳定。
- 页面大图较多（首屏背景图、研究方向图片、成员图）会放大首屏等待时间。
- 每次内容更新都走 GitHub Pages 构建链路，发布可控但不一定最快。

## 1. 免费托管替代方案（按可用性优先）

### 方案 A：Cloudflare Pages（推荐）

适合你这个 Jekyll 静态站：

- 可直接挂 GitHub 仓库自动部署。
- 静态资源全球 CDN 分发，通常比单点访问 GitHub Pages 更稳。
- 免费计划限制（官方）：
  - 每月 500 次构建
  - 单站点最多 20,000 个文件
  - 单文件最大 25 MiB
  - 静态资源请求免费且不限量（不触发 Functions 时）

### 方案 B：继续 GitHub Pages，但改为 GitHub Actions 发布

- 官方说明：使用自定义 GitHub Actions 工作流发布时，不受“10 builds/hour”软限制影响。
- 适合你暂不迁移平台，但想提高发布稳定性的情况。

### 方案 C：Netlify / Vercel（可选）

- 都能挂 GitHub 自动部署，也都有免费层。
- Vercel Hobby 限制（官方）例如：
  - 每天 100 次部署
  - 单次构建时长上限 45 分钟
- Netlify 仍有免费计划（具体额度按其当前定价页为准，近期有 credit 模式变化）。

## 2. 你这个项目的推荐部署架构

### 推荐架构（现在就能落地）

1. GitHub 继续作为唯一源码仓库（保留现在流程）。
2. 新增 Cloudflare Pages 挂载 `main` 自动部署（免费）。
3. 保留 GitHub Pages 作为备份发布链路（可随时切回）。

这样做的好处：

- 不改内容结构，不改编辑方式。
- 只新增一个部署出口，风险低。
- 可先灰度测试访问速度，再决定是否完全切换。

## 3. 现在是否可以补 Pages CMS？

结论：可以，现在是合适时机。

原因：

- 你的内容结构已经稳定：`pages/` + `_members` + `_news` + `_projects`。
- 图片目录已固定：`assets/uploads/`。
- front matter 字段已经有模板与实际样例。

## 4. Pages CMS 落地流程（推荐）

Pages CMS 官方是基于 GitHub 的无后端表单化编辑器，核心只需 `.pages.yml`。

### 阶段 1：准备（0.5 天）

1. 新建分支：`feat/pages-cms`。
2. 在仓库根目录新增 `.pages.yml`。
3. 配置三类内容：
   - 固定页面（`pages/*.md`）
   - 成员集合（`_members/*.md`）
   - 新闻集合（`_news/*.md`）
   - 项目集合（`_projects/*.md`）
4. 配置媒体目录：`assets/uploads`。

### 阶段 2：接入与验证（0.5 天）

1. 打开 `https://app.pagescms.org`，使用 GitHub 登录并绑定仓库。
2. 在 CMS 中验证：
   - 能看到上述四类内容入口。
   - 新增成员/新闻/项目能生成正确 front matter。
   - 上传图片后路径写入 `/assets/uploads/...`。
3. 本地构建验证：`bundle exec jekyll build`。

### 阶段 3：团队使用（0.5 天）

1. 给编辑成员分配 GitHub 仓库写权限（至少 write）。
2. 约定编辑规范：
   - 标题与摘要不要留空
   - 图片先压缩再上传
   - 发布前预览一次
3. 建议开启分支保护（可选）：
   - 关键内容通过 PR 合并
   - 保留回滚能力

## 5. Pages CMS 起步配置（可直接作为初版）

```yaml
media:
  input: assets/uploads
  output: /assets/uploads

content:
  - name: pages
    label: 固定页面
    type: file
    path: pages/index.markdown
    format: yaml-frontmatter
    fields:
      - name: title
        label: 标题
        type: string
      - name: body
        label: 正文
        type: rich-text

  - name: members
    label: 团队成员
    type: collection
    path: _members
    format: yaml-frontmatter
    subfolders: false
    filename: "{primary}.md"
    fields:
      - name: name
        label: 姓名
        type: string
        required: true
      - name: role
        label: 职称/身份
        type: string
      - name: photo
        label: 照片
        type: image
      - name: research
        label: 研究方向
        type: text
      - name: email
        label: 邮箱
        type: string
      - name: order
        label: 排序
        type: number
      - name: body
        label: 详细介绍
        type: rich-text

  - name: news
    label: 新闻成果
    type: collection
    path: _news
    format: yaml-frontmatter
    subfolders: false
    fields:
      - name: title
        label: 标题
        type: string
        required: true
      - name: date
        label: 日期
        type: date
      - name: cover
        label: 封面图
        type: image
      - name: summary
        label: 摘要
        type: text
      - name: body
        label: 正文
        type: rich-text

  - name: projects
    label: 项目
    type: collection
    path: _projects
    format: yaml-frontmatter
    subfolders: false
    fields:
      - name: title
        label: 项目名称
        type: string
        required: true
      - name: period
        label: 周期
        type: string
      - name: leader
        label: 负责人
        type: string
      - name: summary
        label: 简介
        type: text
      - name: status
        label: 状态
        type: select
        options: [ongoing, completed]
      - name: body
        label: 详情
        type: rich-text
```

## 6. 风险与规避

- 风险 1：编辑者误删 front matter 字段。
  - 规避：在 `.pages.yml` 中将字段全部结构化，减少手写。
- 风险 2：图片过大导致加载慢。
  - 规避：上传前压缩（建议宽边 1600~2000，webp/jpg）。
- 风险 3：主分支被直接覆盖。
  - 规避：开启分支保护，重要改动走 PR。

## 7. 推荐执行顺序（你现在就可以做）

1. 先接入 Cloudflare Pages 做“部署加速层”。
2. 再补 `.pages.yml` 上线 Pages CMS。
3. 试运行 1 周后，根据团队反馈决定是否继续只用 Pages CMS，或切换到 Decap CMS（当你需要“无 GitHub 写权限编辑”时）。

## 8. Cloudflare Pages 接入流程（可直接照着操作）

下面按“先可用、再切换、可回滚”的思路写成 SOP。

### 阶段 A：接入前准备（10~20 分钟）

1. 确认仓库默认分支是 `main`，并且本地构建通过：`bundle exec jekyll build`。
2. 确认 `_config.yml` 的这两个字段：
   - `baseurl: ""`（你现在就是这样）
   - `url:` 先保持现状，等 Cloudflare 域名确定后再改
3. 如果你准备绑定自定义域名，提前确认域名 DNS 可由 Cloudflare 托管。

### 阶段 B：在 Cloudflare Pages 创建站点（15~30 分钟）

1. 登录 Cloudflare 控制台，进入 **Workers & Pages**。
2. 点击 **Create application** -> **Pages** -> **Connect to Git**。
3. 授权 GitHub 后选择仓库 `yyyt03.github.io`，分支选 `main`。
4. 构建配置建议填写：
   - Framework preset: `None`
   - Build command: `bundle exec jekyll build`
   - Build output directory: `_site`
5. 点击 **Save and Deploy**，等待首次部署完成。

> 说明：如果首次构建提示依赖问题，可把 Build command 改成 `bundle install && bundle exec jekyll build` 再重试。

### 阶段 C：功能验证（10~20 分钟）

1. 打开 Pages 生成的 `*.pages.dev` 域名，检查：
   - 首页与各栏目页是否能访问。
   - 成员、新闻、项目详情页是否正常。
   - 图片路径 `/assets/uploads/...` 是否正常加载。
2. 在 GitHub 提交一条小改动（例如文案），确认 Cloudflare 能自动触发新部署。
3. 在 Cloudflare 的 Deployments 页面确认最近一次状态是 `Success`。

### 阶段 D：域名切换（可选，建议验证后再做）

1. 在 Cloudflare Pages -> **Custom domains** 添加你的正式域名。
2. 按 Cloudflare 提示完成 DNS 记录（通常是 CNAME 或 Cloudflare 托管下自动记录）。
3. 等证书状态变为 Active 后再做对外切换通知。
4. 若切到自定义域名，记得把 `_config.yml` 里的 `url` 更新为正式域名并重新部署一次。

### 阶段 E：保留回滚策略（强烈建议）

1. GitHub Pages 暂时不要关闭，保留为备份链路。
2. 对外公告先用 Cloudflare 域名灰度 3~7 天。
3. 如遇异常，临时切回 GitHub Pages 域名即可（零代码回滚）。

### 阶段 F：推荐的发布规范（接入后）

1. 内容改动统一走 `main`（或 PR 合并到 `main`）触发 Cloudflare 自动部署。
2. 每次发布后至少抽查：`/`、`/members/`、`/news/`、`/projects/`。
3. 图片发布前压缩，避免首屏大图拖慢访问。
4. 若后续要接入 Pages Functions，再单独评估成本与缓存策略；纯静态站当前无需启用。

## 9. 参考资料（官方）

- GitHub Pages 限制：
  https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/github-pages-limits
- GitHub Pages 发布源（分支 / Actions）：
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Cloudflare Pages 限制：
  https://developers.cloudflare.com/pages/platform/limits/
- Cloudflare Pages Functions 定价（含静态资源说明）：
  https://developers.cloudflare.com/pages/functions/pricing/
- Vercel 限制：
  https://vercel.com/docs/limits
- Netlify 定价：
  https://www.netlify.com/pricing/
- Pages CMS 文档：
  https://pagescms.org/docs/
- Pages CMS 配置（`.pages.yml`）：
  https://pagescms.org/docs/configuration/
- Decap CMS（Jekyll）：
  https://decapcms.org/docs/jekyll/


## 10. Cloudflare 构建失败案例（2026-03-21）

你本次失败不是 Jekyll 构建失败，而是部署链路选成了 Worker + `wrangler deploy`。

- 证据：日志先显示 `Success: Build command completed`，随后在 `wrangler deploy` 阶段失败。
- 修复：改用 Cloudflare Pages 项目流（Build command: `bundle exec jekyll build`，Output: `_site`，不再填写 `npx wrangler deploy`）。

详见：`docs/notes/error.md`
