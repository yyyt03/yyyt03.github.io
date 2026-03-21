# Cloudflare 自定义域名修改指南（更新于 2026-03-21）

## 适用范围

适用于你当前已经部署成功的 Cloudflare Pages 项目（Git 仓库自动构建）。

## 一、什么时候需要“修改域名”

常见有三种：

1. 从默认 `*.pages.dev` 切到正式域名（例如 `lab.example.com`）。
2. 已有正式域名，想更换为新域名。
3. 保留旧域名，同时新增一个别名域名。

## 二、标准操作步骤

### 步骤 1：进入域名管理

1. 打开 Cloudflare 控制台。
2. 进入 `Workers & Pages`。
3. 打开你的 Pages 项目。
4. 进入 `Custom domains`（自定义域名）。

### 步骤 2：添加或替换域名

1. 点击 `Set up a custom domain`（或 Add custom domain）。
2. 输入目标域名（例如 `www.example.com` 或 `example.com`）。
3. 按提示保存。

> 如果域名也在同一个 Cloudflare 账户，DNS 记录通常会自动生成。

### 步骤 3：确认 DNS 与证书

在域名详情中确认：

- DNS 记录状态正常（通常是 CNAME，根域可能使用 CNAME flattening）。
- TLS 证书状态为 `Active`。

证书签发通常需要几分钟到几十分钟。

### 步骤 4：更新站点配置并重新部署

如果正式域名发生变化，更新 `_config.yml`：

- `url: "https://你的新域名"`
- `baseurl: ""`（你当前项目保持空字符串即可）

然后推送到 `main`，触发 Pages 重新构建。

### 步骤 5：切换主域名（可选）

如果你要“以新域名为唯一入口”：

1. 在 `Custom domains` 将新域名设为 Primary（若界面提供）。
2. 旧域名可保留为重定向或删除（建议先保留 3~7 天观察）。

## 三、推荐的切换策略（低风险）

1. 先新增新域名，不立刻删除旧域名。
2. 抽查关键页面：`/`、`/members/`、`/news/`、`/projects/`。
3. 确认图片 `/assets/uploads/...` 可正常加载。
4. 确认 24 小时无异常，再下线旧域名。

## 四、常见问题与处理

### 1) 域名一直 Pending

- 检查 DNS 记录是否冲突（同名 A/AAAA/CNAME 重复）。
- 检查域名是否在当前 Cloudflare 账户托管。
- 等待证书签发完成后再测试 HTTPS。

### 2) 新域名打开是旧样式

- 先强制刷新浏览器缓存（Ctrl+F5）。
- 再检查最近一次部署是否成功。
- 再看 `_config.yml` 的 `url` 是否已改为新域名并发布。

### 3) 只有首页正常，子页面 404

- 检查 `permalink` 是否保留。
- 检查 `baseurl` 是否被误改为非空。
- 检查构建输出目录仍是 `_site`。

## 五、执行清单（可复制）

- [ ] 在 Cloudflare Pages 添加新域名
- [ ] 确认 DNS 生效
- [ ] 确认证书 Active
- [ ] 更新 `_config.yml` 的 `url`
- [ ] 推送 `main` 触发重建
- [ ] 验证首页/子页/图片
- [ ] 观察 24 小时后决定是否移除旧域名
