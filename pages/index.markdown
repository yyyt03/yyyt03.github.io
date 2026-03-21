---
layout: default
title: 首页
permalink: /
---
<div class="landing-shell">
  <section class="landing-hero">
    <div class="wrapper landing-hero__content">
      <span class="landing-badge">探索过去的微观世界</span>
      <h1 class="landing-title">考古微形态与<br>实验考古实验室</h1>
      <p class="landing-lead">我们致力于通过先进的科学分析手段，解读人类历史遗留的微观痕迹，重建古代人类行为与环境互动。</p>
      <div class="hero-actions">
        <a class="button-primary" href="{{ '/research/' | relative_url }}">探索研究</a>
        <a class="button-secondary" href="{{ '/about/' | relative_url }}">了解更多</a>
      </div>
    </div>
  </section>

  <section class="section-block section-block--light">
    <div class="wrapper">
      <div class="about-grid">
        <div>
          <h2 class="section-title section-title--left">关于实验室</h2>
          <div class="about-accent-line"></div>
          <p class="about-copy">本网站围绕李英华教授团队的研究与课题组建设工作展开，当前重点展示 <strong>石器技术研究</strong>、<strong>汉水流域及长江中游旧石器技术起源与演化</strong>、<strong>华南与东南亚古代人类文化技术关系</strong> 等核心主题。</p>
          <p class="about-copy">课题组强调历史学、考古学与科技考古的跨学科协作，同时持续推进与东南亚高校和研究机构的国际交流，让成员、新闻、项目与研究成果形成长期可维护的公开窗口。</p>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-card__value">3</div>
              <p>核心研究主题</p>
            </div>
            <div class="stat-card stat-card--accent">
              <div class="stat-card__value">1</div>
              <p>课题组网站原型</p>
            </div>
          </div>
        </div>

        <div class="media-stack">
          <img class="media-stack__image" src="/assets/uploads/site/index-lab.jpg" alt="实验室展示图">
        </div>
      </div>
    </div>
  </section>

  <section class="section-block section-block--soft research-showcase">
    <div class="wrapper">
      <div class="section-header">
        <h2 class="section-title">核心研究领域</h2>
        <p class="section-intro">课题组将传统历史学方法与科技考古分析结合，当前持续建设以下三个方向的内容。</p>
      </div>

      <div class="research-grid">
        <article class="research-card">
          <img class="research-card__image" src="/assets/uploads/site/research-economy.png" alt="石器技术研究">
          <div class="research-card__body">
            <div class="icon-chip icon-chip--blue">⌕</div>
            <h3 class="card-title">石器技术研究</h3>
            <p>围绕旧石器时代技术体系开展类型学与工艺链分析，结合显微观察重建早期人类技术行为与知识传统。</p>
          </div>
        </article>

        <article class="research-card">
          <img class="research-card__image" src="/assets/uploads/site/research-yangtze.jpg" alt="汉水流域与长江中游旧石器研究">
          <div class="research-card__body">
            <div class="icon-chip icon-chip--orange">⚗</div>
            <h3 class="card-title">汉水流域与长江中游旧石器研究</h3>
            <p>关注远古人类石器技术的起源与演化过程，追踪区域人群活动与环境适应之间的长期互动关系。</p>
          </div>
        </article>

        <article class="research-card">
          <img class="research-card__image" src="/assets/uploads/site/research-hankou.jpg" alt="华南与东南亚比较研究">
          <div class="research-card__body">
            <div class="icon-chip icon-chip--green">⌬</div>
            <h3 class="card-title">华南与东南亚比较研究</h3>
            <p>比较华南与东南亚古代人类文化和技术关系，为跨区域考古合作与文明交流研究提供新的证据框架。</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section-block section-block--light">
    <div class="wrapper">
      <div class="section-header">
        <h2 class="section-title">研究团队</h2>
        <p class="section-intro">目前网站已接入真实成员信息，后续将继续补充教师、研究生与合作成员。</p>
      </div>

      {% assign members = site.members | sort: "order" %}
      {% if members.size > 0 %}
      <div class="team-grid">
        {% for member in members limit:3 %}
        <article class="member-card">
          {% if member.photo %}
          <img class="member-card__image" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
          {% else %}
          <div class="member-card__image member-card__image--placeholder">◯</div>
          {% endif %}
          <div class="member-card__body">
            <h3 class="card-title"><a href="{{ member.url | relative_url }}">{{ member.name }}</a></h3>
            <p class="card-meta">{{ member.role }}</p>
            <p>{{ member.research }}</p>
          </div>
        </article>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </section>

  <section class="section-block section-block--dark">
    <div class="wrapper">
      <div class="section-header section-header--left">
        <h2 class="section-title section-title--left">最新学术成果</h2>
        <p class="section-intro">当前这里暂时使用新闻条目承接成果展示。后续如果你希望单独做 publications 数据结构，我们也可以继续拆分。</p>
      </div>

      {% assign latest_news = site.news | sort: "date" | reverse %}
      {% if latest_news.size > 0 %}
      <div class="publication-grid">
        {% for item in latest_news limit:2 %}
        <article class="publication-card">
          <p class="publication-card__journal">Research Update</p>
          <h3 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
          <p>{{ item.summary }}</p>
          <p>{{ item.date | date: "%Y-%m-%d" }}</p>
          <a class="publication-card__link" href="{{ item.url | relative_url }}">阅读摘要</a>
        </article>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </section>

  <section class="section-block section-block--soft">
    <div class="wrapper">
      <div class="section-header">
        <h2 class="section-title">加入我们</h2>
        <p class="section-intro">我们欢迎对考古科学、历史研究与跨区域文化比较感兴趣的学生、研究者及合作伙伴与我们取得联系。</p>
      </div>

      <div class="contact-grid">
        <article class="contact-card">
          <strong>地址</strong>
          <p>武汉大学历史学院<br>这里可继续补充办公地点与通信地址</p>
        </article>
        <article class="contact-card">
          <strong>邮箱</strong>
          <p>liyinghua@whu.edu.cn<br>建议合作与招生咨询优先使用邮件联系</p>
        </article>
      </div>
    </div>
  </section>
</div>
