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
          <p class="about-copy">本网站围绕导师研究方向与课题组建设工作展开，当前重点展示 <strong>中国古代经济史</strong>、<strong>长江流域开发史</strong>、<strong>汉口经济史</strong> 以及 <strong>楚文化开发史</strong> 等相关研究主题。</p>
          <p class="about-copy">我们希望把传统历史研究、文献分析与数字化展示结合起来，让成员、新闻、项目与研究成果形成一个长期可维护的公开窗口。</p>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-card__value">4</div>
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

  <section class="section-block section-block--soft">
    <div class="wrapper">
      <div class="section-header">
        <h2 class="section-title">核心研究领域</h2>
        <p class="section-intro">结合历史学研究传统与现代分析方法，我们当前希望围绕以下几个方向持续建设课题组网站的内容框架。</p>
      </div>

      <div class="research-grid">
        <article class="research-card">
          <img class="research-card__image" src="/assets/uploads/site/research-economy.png" alt="中国古代经济史">
          <div class="research-card__body">
            <div class="icon-chip icon-chip--blue">⌕</div>
            <h3 class="card-title">中国古代经济史</h3>
            <p>围绕中国古代社会中的生产、交换、区域发展与资源组织，理解经济结构与历史变迁之间的互动关系。</p>
          </div>
        </article>

        <article class="research-card">
          <img class="research-card__image" src="/assets/uploads/site/research-yangtze.jpg" alt="长江流域开发史">
          <div class="research-card__body">
            <div class="icon-chip icon-chip--orange">⚗</div>
            <h3 class="card-title">长江流域开发史</h3>
            <p>从区域开发、交通网络与社会组织角度，追踪长江流域历史发展与区域整合的长期过程。</p>
          </div>
        </article>

        <article class="research-card">
          <img class="research-card__image" src="/assets/uploads/site/research-hankou.jpg" alt="汉口经济史与楚文化开发史">
          <div class="research-card__body">
            <div class="icon-chip icon-chip--green">⌬</div>
            <h3 class="card-title">汉口经济史与楚文化开发史</h3>
            <p>结合城市史、商业史与区域文化史，探索汉口的历史经济地位以及楚文化开发与传播的历史脉络。</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section-block section-block--light">
    <div class="wrapper">
      <div class="section-header">
        <h2 class="section-title">研究团队</h2>
        <p class="section-intro">目前网站已开始接入真实成员信息，后续可继续补充更多教师、研究生与合作成员。</p>
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
        <p class="section-intro">我们欢迎对历史研究、考古科学与数字人文学术展示感兴趣的学生、研究者及合作伙伴与我们取得联系。</p>
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



