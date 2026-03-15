---
layout: page
title: 首页
permalink: /
---

<div class="hero-block">
  <p class="hero-block__kicker">研究团队主页</p>
  <h1 class="hero-block__title">课题组</h1>
  <p class="hero-block__lead">这里可以放课题组的正式名称、所属单位与一句简短定位介绍。现在这版首页已经开始接入成员、新闻和项目内容，方便你一边填充真实信息，一边持续看到网站结构是否合理。</p>
</div>

<div class="info-grid">
  <section class="panel">
    <h2>研究方向概览</h2>
    <ul class="feature-list">
      <li>方向一：这里填写核心研究主题</li>
      <li>方向二：这里填写核心研究主题</li>
      <li>方向三：这里填写核心研究主题</li>
    </ul>
  </section>

  <section class="panel">
    <h2>快速入口</h2>
    <ul class="feature-list">
      <li><a href="{{ '/about/' | relative_url }}">课题组简介</a></li>
      <li><a href="{{ '/research/' | relative_url }}">研究方向</a></li>
      <li><a href="{{ '/members/' | relative_url }}">成员列表</a></li>
      <li><a href="{{ '/news/' | relative_url }}">新闻动态</a></li>
      <li><a href="{{ '/projects/' | relative_url }}">项目介绍</a></li>
      <li><a href="{{ '/contact/' | relative_url }}">联系方式</a></li>
    </ul>
  </section>

  <section class="panel panel--wide">
    <div class="section-head">
      <h2>最新新闻</h2>
      <a href="{{ '/news/' | relative_url }}">查看全部</a>
    </div>
    {% assign latest_news = site.news | sort: "date" | reverse %}
    {% if latest_news.size > 0 %}
    <div class="content-grid">
      {% for item in latest_news limit:3 %}
      <article class="card-item">
        <p class="card-meta">{{ item.date | date: "%Y-%m-%d" }}</p>
        <h3 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
        <p>{{ item.summary }}</p>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <p>当前还没有新闻内容。</p>
    {% endif %}
  </section>

  <section class="panel panel--wide">
    <div class="section-head">
      <h2>成员入口</h2>
      <a href="{{ '/members/' | relative_url }}">查看全部</a>
    </div>
    {% assign members = site.members | sort: "order" %}
    {% if members.size > 0 %}
    <div class="content-grid">
      {% for member in members limit:3 %}
      <article class="card-item member-card">
        {% if member.photo %}
        <img class="member-card__image" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
        {% endif %}
        <p class="card-meta">{{ member.role }}</p>
        <h3 class="card-title"><a href="{{ member.url | relative_url }}">{{ member.name }}</a></h3>
        <p>{{ member.research }}</p>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <p>当前还没有成员内容。</p>
    {% endif %}
  </section>

  <section class="panel panel--wide">
    <div class="section-head">
      <h2>项目概览</h2>
      <a href="{{ '/projects/' | relative_url }}">查看全部</a>
    </div>
    {% assign projects = site.projects %}
    {% if projects.size > 0 %}
    <div class="content-grid">
      {% for project in projects limit:3 %}
      <article class="card-item">
        <p class="card-meta">{{ project.period }}</p>
        <h3 class="card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.summary }}</p>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <p>当前还没有项目内容。</p>
    {% endif %}
  </section>
</div>
