所以，你的最佳起步策略我建议是：

先不用 CMS。

用 GitHub Pages + Jekyll 跑通。

统一约定：

页面正文都用 .md

每个条目文件顶部保留固定 front matter

图片统一放 assets/uploads/

Markdown 里只填文字，图片只填路径

后续维护优先用 github.dev，不会的人也能在浏览器里改。

也就是说，你说的“设置好解析 md 和图片就行”这句话，方向是对的，但我会补两个现实条件：

第一，要固定内容格式。
不是让大家随便新建 md，而是你先规定好模板，比如“成员必须有 name / role / photo / research / order，新闻必须有 title / date / cover / summary”。这样即使用 GitHub 网页编辑，也不会把结构改乱。Jekyll 的 front matter 和 collections 本来就是为这种结构化内容准备的。

第二，图片要走仓库文件，不要走随手粘贴的外链。
最稳的做法是把图片上传到仓库固定目录，再在 Markdown/front matter 里引用站内路径。GitHub 网页端可以直接上传文件；但网页上传单个文件有 25 MiB 限制，同时最多 100 个文件一批，所以如果田野照片原图很大，最好先压缩再传。

我给你一个很直接的判断标准：

维护者能接受偶尔看到 5～8 行 YAML：先别上 CMS，直接 GitHub 网页编辑。

维护者完全不想碰 YAML/front matter，只想填表单、选图片、点保存：上 Pages CMS。

你现在最看重的是“最少配置、最快上线”：先 GitHub 网页编辑，后面再视情况补 Pages CMS。

就你这个课题组网站，我现在的明确建议是：

第一阶段：不用 CMS。
你把框架搭好，把内容模板定死，让大家用 GitHub 网页或 github.dev 更新。
第二阶段：如果两三次更新后大家还是觉得麻烦，再补 Pages CMS。
这样成本最低，也最不容易一开始把系统搭复杂。

你下一步最值得做的不是选 CMS，而是先定这 4 件事：

图片目录固定为 assets/uploads/

固定页面：pages/index.markdown / pages/about.markdown / pages/research.md / pages/contact.md

条目栏目：_members / _news / _projects

每类条目的字段模板

你把这 4 项定下来，我下一条就直接帮你列出一版**“不用 CMS 也很好维护”的最小目录结构和条目模板**。
