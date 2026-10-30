---
title: 从想法到上线：觉醒天赋推荐小程序复盘
title_en: From Idea to Launch — Awakening Talent Guide Mini-program
date: "2026-10-30"
draft: false
tags: [AIGC]
---

2025 年 7 月至 9 月，我使用 Cursor 辅助开发并运营了微信小程序「觉醒天赋推荐」，为《王者荣耀》觉醒之战玩家提供天赋、出装与玩法方案查询。这是一次由我独立完成需求梳理、开发、测试、发布和运营的产品实践。

## 背景：让攻略更容易查询

觉醒之战中，同一个英雄可以搭配不同天赋和出装，形成不同玩法。攻略里的关键内容既包括天赋选择，也包括装备顺序和操作思路。我希望把这些信息组织成适合手机浏览的方案，让玩家从选英雄到查看推荐搭配，有一条清晰、直接的路径。

## 目标：独立完成一个可用产品

我给项目设定的目标是完成从“有人查攻略”到“有人分享攻略”的使用闭环：玩家能够浏览和收藏方案，也能创建自己的方案；我则通过审核和发布维护内容。首页同时提供全部方案、英雄分类、体验服方案和方案创作入口，尽量减少查找步骤。

<div class="project-gallery">
  <figure><a href="/images/awakening-mini-program/home.png"><img src="/images/awakening-mini-program/home.png" alt="小程序首页，包含全部方案、英雄分类、体验服方案和方案创作入口" width="412" height="853" loading="lazy"></a><figcaption>首页：按使用目的提供入口</figcaption></figure>
  <figure><a href="/images/awakening-mini-program/heroes.png"><img src="/images/awakening-mini-program/heroes.png" alt="按射手、辅助、刺客等职业分类的英雄选择页面" width="391" height="852" loading="lazy"></a><figcaption>英雄分类：从熟悉的英雄开始查找</figcaption></figure>
</div>

## 实现：从攻略浏览到投稿审核

前端使用微信原生小程序和 TypeScript，通过 WXML、WXSS 完成页面；后端使用微信云开发，以云函数处理方案查询、创建、修改和互动，数据保存在微信云数据库中。

**把攻略拆成结构化方案。** 方案围绕英雄组织，包含三个技能的天赋选择、优先加点、推荐装备和玩法说明。列表展示方案摘要、作者、点赞与收藏数，详情页集中呈现完整搭配，并区分正式服与体验服内容。

<div class="project-gallery">
  <figure><a href="/images/awakening-mini-program/plans.jpg"><img src="/images/awakening-mini-program/plans.jpg" alt="全部方案页面，展示英雄筛选、作者、玩法摘要、点赞和收藏" width="1080" height="2374" loading="lazy"></a><figcaption>方案列表：筛选英雄、浏览玩法摘要</figcaption></figure>
  <figure><a href="/images/awakening-mini-program/detail.jpg"><img src="/images/awakening-mini-program/detail.jpg" alt="自爆吸尘器方案详情，包含天赋优先级、装备推荐、玩法说明和作者署名" width="1080" height="2374" loading="lazy"></a><figcaption>方案详情：天赋、出装与玩法集中展示</figcaption></figure>
</div>

**完成投稿到发布的流程。** 用户填写方案后进入待审核状态，管理页面支持预览、编辑、通过发布、退回和下架。退回时记录原因，方便继续修改；用户侧则可以查看自己的方案和收藏内容。

**处理页面之间的数据变化。** 收藏和点赞会影响列表、详情和个人页面。我通过统一的交互状态通知、本地时间戳与缓存更新，让返回页面时能够同步变化；分页加载时按方案 ID 去重，并处理不同日期格式的兼容问题。

开发过程中，我负责明确页面行为、拆分任务、检查 Cursor 生成的代码，并结合实际使用反馈修复问题。重点始终是把功能串成用户能够完整走通的流程。

<div class="project-gallery moderation-gallery">
  <figure><a class="screenshot-crop user-center-crop" href="/images/awakening-mini-program/moderation.jpg"><img src="/images/awakening-mini-program/moderation.jpg" alt="用户中心：我的方案、收藏方案、方案管理与创作入口" width="948" height="6251" loading="lazy"></a><figcaption>用户中心：方案与收藏入口</figcaption></figure>
  <figure><a class="screenshot-crop review-crop" href="/images/awakening-mini-program/moderation.jpg"><img src="/images/awakening-mini-program/moderation.jpg" alt="方案审核：按状态筛选，预览、编辑、通过发布、拒绝和删除方案" width="948" height="6251" loading="lazy"></a><figcaption>方案审核：状态筛选与发布操作</figcaption></figure>
  <figure><a class="screenshot-crop hero-filter-crop" href="/images/awakening-mini-program/moderation.jpg"><img src="/images/awakening-mini-program/moderation.jpg" alt="英雄筛选：在方案管理中展开英雄列表，定位对应方案" width="948" height="6251" loading="lazy"></a><figcaption>英雄筛选：快速定位对应方案</figcaption></figure>
</div>

[查看用户中心与方案审核完整长图 →](/images/awakening-mini-program/moderation.jpg)

## 结果：获得真实用户使用

小程序上线后，在玩法开放的周末稳定有 100+ 活跃用户。下架前保存的云开发运营截图记录了当时的**日活 132 人、周活 286 人、月活 832 人**；访问曲线中，**2025 年 9 月 14 日的访问用户为 211 人**。这些记录让我看到，围绕具体使用场景组织内容，能够让一个个人项目获得真实使用。

<figure class="project-figure usage-figure"><a href="/images/awakening-mini-program/usage.png"><img src="/images/awakening-mini-program/usage.png" alt="下架前的云开发运营记录：日活132、周活286、月活832，2025年9月14日访问用户211" width="1189" height="895" loading="lazy"></a><figcaption>2025 年 9 月下架前保存的历史运营记录</figcaption></figure>

## 结束与收获

2025 年 9 月，研一开学后，课程与学习安排占用了更多精力，我选择下架小程序并停止维护。这次实践让我完整经历了需求、实现、发布和运营，也让我认识到，持续更新内容和维护体验同样是产品工作的一部分。

如今回看，这个项目最有价值的地方，是我借助 AI 把一个具体想法做成了有人使用的产品，并在真实反馈中继续迭代。

[查看项目源码与 README →](https://github.com/yyyt03/timiTest1)
