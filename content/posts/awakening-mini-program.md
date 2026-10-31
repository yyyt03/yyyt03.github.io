---
title: 从想法到上线：觉醒天赋推荐小程序复盘
title_en: From Idea to Launch — Awakening Talent Guide Mini-program
date: "2026-10-30"
draft: false
tags: [AIGC]
---

2025 年 7 月至 9 月，我在课余时间使用 Cursor 辅助开发并运营了微信小程序「觉醒天赋推荐」，为《王者荣耀》觉醒之战玩家提供天赋、出装与打法的组合参考。这是一次由我独立完成需求梳理、开发、测试、发布和运营的产品实践。

<figure class="flow-figure" aria-label="产品实践流程：需求梳理、开发、测试、发布、运营">
  <div class="flow-row lifecycle-flow"><span class="flow-step">需求梳理</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">开发</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">测试</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">发布</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">运营</span></div>
</figure>

## 背景：限时玩法里的攻略需求

作为觉醒之战的核心玩家，我经常需要在玩法开放时快速查找英雄搭配。但相关攻略分散在不同平台，天赋选择、装备顺序和打法思路需要来回查找，手机上也缺少便于组合查询的结构化工具。

我希望把这些信息整理成一份随手可查、也能持续补充的方案库，让玩家从选英雄到找到完整搭配，有一条直接的使用路径。

## 目标：独立跑通产品闭环

作为唯一的开发者，我负责需求梳理、页面设计、前后端实现、测试、发布与内容维护。目标是在有限时间内，以较低的试错成本跑通玩家查询、创作和审核发布的完整链路，同时验证 Cursor 如何帮助一个人交付可用产品。

<figure class="flow-figure" aria-label="产品闭环：查攻略、创攻略、审核发布，发布的内容进入方案库供玩家查询">
  <div class="flow-row"><span class="flow-step">查攻略</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">创攻略</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">审核发布</span></div>
  <figcaption>发布的方案进入方案库，供玩家继续查询与参考</figcaption>
</figure>

首页围绕使用目的提供全部方案、英雄分类、体验服方案和方案创作入口，让查询与投稿都能直接开始。

<div class="project-gallery">
  <figure><a href="/images/awakening-mini-program/home.png"><img src="/images/awakening-mini-program/home.png" alt="小程序首页，包含全部方案、英雄分类、体验服方案和方案创作入口" width="412" height="853" loading="lazy"></a><figcaption>首页：按使用目的提供入口</figcaption></figure>
  <figure><a href="/images/awakening-mini-program/heroes.png"><img src="/images/awakening-mini-program/heroes.png" alt="按射手、辅助、刺客等职业分类的英雄选择页面" width="391" height="852" loading="lazy"></a><figcaption>英雄分类：从熟悉的英雄开始查找</figcaption></figure>
</div>

## 行动：从架构到实际交付

### 用云开发搭建全栈架构

前端使用微信原生小程序与 TypeScript，搭建 **10 个业务页面**，通过 WXML、WXSS 完成界面。后端采用微信云开发（Serverless），以 **15 个云函数** 处理方案查询、创建、审核与互动，并通过云数据库保存数据。

选择云开发，让我能够直接使用小程序的云端能力，减少独立部署和维护服务器的工作，把有限精力投入产品功能与使用体验。

### 让攻略结构化，建立审核流程

我将攻略拆解为英雄、技能优先级、天赋、装备和玩法思路等标准字段。列表呈现摘要、作者与互动数据，详情页展示完整搭配，并区分正式服与体验服内容，使浏览、筛选与创作共用一套内容结构。

<div class="project-gallery">
  <figure><a href="/images/awakening-mini-program/plans.jpg"><img src="/images/awakening-mini-program/plans.jpg" alt="全部方案页面，展示英雄筛选、作者、玩法摘要、点赞和收藏" width="1080" height="2374" loading="lazy"></a><figcaption>方案列表：筛选英雄、浏览玩法摘要</figcaption></figure>
  <figure><a href="/images/awakening-mini-program/detail.jpg"><img src="/images/awakening-mini-program/detail.jpg" alt="自爆吸尘器方案详情，包含天赋优先级、装备推荐、玩法说明和作者署名" width="1080" height="2374" loading="lazy"></a><figcaption>方案详情：天赋、出装与玩法集中展示</figcaption></figure>
</div>

用户提交方案后进入待审状态（`pending`），管理页面支持预览、编辑、通过发布、退回和下架。退回时保存原因，帮助投稿者继续修改。这套状态流转将内容创作与审核发布连接起来，也让我能在单人维护的情况下管理持续新增的方案。

<figure class="flow-figure" aria-label="审核流程：提交方案进入待审核，通过后发布；未通过则记录原因并退回，修改提交后返回待审">
  <div class="flow-row"><span class="flow-step">提交方案</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">待审核</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">通过发布</span></div>
  <span class="flow-branch-label">↓ 待审未通过时</span>
  <div class="flow-row is-return"><span class="flow-step">退回留痕</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">修改提交</span><span class="flow-arrow" aria-hidden="true">→</span><span class="flow-step">返回待审</span></div>
  <figcaption>退回时记录原因，修改后重新进入审核流程</figcaption>
</figure>

<div class="project-gallery moderation-gallery">
  <figure><a class="screenshot-crop user-center-crop" href="/images/awakening-mini-program/moderation.jpg"><img src="/images/awakening-mini-program/moderation.jpg" alt="用户中心：我的方案、收藏方案、方案管理与创作入口" width="948" height="6251" loading="lazy"></a><figcaption>用户中心：方案与收藏入口</figcaption></figure>
  <figure><a class="screenshot-crop review-crop" href="/images/awakening-mini-program/moderation.jpg"><img src="/images/awakening-mini-program/moderation.jpg" alt="方案审核：按状态筛选，预览、编辑、通过发布、拒绝和删除方案" width="948" height="6251" loading="lazy"></a><figcaption>方案审核：状态筛选与发布操作</figcaption></figure>
  <figure><a class="screenshot-crop hero-filter-crop" href="/images/awakening-mini-program/moderation.jpg"><img src="/images/awakening-mini-program/moderation.jpg" alt="英雄筛选：在方案管理中展开英雄列表，定位对应方案" width="948" height="6251" loading="lazy"></a><figcaption>英雄筛选：快速定位对应方案</figcaption></figure>
</div>

[查看用户中心与方案审核完整长图 →](/images/awakening-mini-program/moderation.jpg)

### 补齐交互状态与兼容细节

点赞和收藏会同时影响列表、详情及个人页面。我设计了统一的交互状态通知，并结合本地时间戳、页面监听与缓存更新，解决操作后返回上一页时状态没有同步的问题。

分页加载时，按方案 ID 合并去重，避免重复内容和渲染警告；日期展示则统一处理不同数据格式，修复 iOS 上的解析兼容问题。这些细节让各个页面之间的操作能够衔接起来。

### 用 Cursor 加速编码，自己负责判断

我先拆解功能逻辑、数据结构和页面行为，再向 Cursor 提供相关代码与明确的任务上下文，辅助完成逻辑实现和问题修复。自己重点负责架构边界、业务规则、生成代码检查和实际测试。

这种协作方式减少了重复编码，让我能够把更多精力放在需求取舍、功能联调和使用反馈上，推动一个人的开发工作走到上线交付。

## 结果：两个月运营与真实使用

项目成功上线后持续运营约两个月，在玩法开放的周末稳定有 **100+ 活跃用户**，历史最高单日访问 **211 人**，月活 **832 人**。

下架前保存的云开发截图记录了当时的日活 132 人、周活 286 人和月活 832 人；访问曲线中，2025 年 9 月 14 日的访问用户为 211 人。真实使用让我能够根据玩家反馈继续修复问题、补充内容。

<figure class="project-figure usage-figure"><a href="/images/awakening-mini-program/usage.png"><img src="/images/awakening-mini-program/usage.png" alt="下架前的云开发运营记录：日活132、周活286、月活832，2025年9月14日访问用户211" width="1189" height="895" loading="lazy"></a><figcaption>2025 年 9 月下架前保存的历史运营记录</figcaption></figure>

## 结束与收获

2025 年 9 月，研一开学后，课程与学习安排占用了更多精力，我选择下架小程序并停止维护。项目周期从 7 月到 9 月，完整覆盖了需求分析、设计开发、测试发布与上线运营。

如今回看，这个项目最有价值的地方，是我借助 AI 把一个具体想法做成了有人使用的产品，并在真实反馈中继续迭代。

[查看项目源码与 README →](https://github.com/yyyt03/timiTest1)
