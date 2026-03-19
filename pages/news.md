---
layout: default
title: 新闻
permalink: /news/
---
<section class="section-block section-block--dark">
  <div class="wrapper">
    <div class="section-header section-header--left">
      <p class="section-kicker">学术成果</p>
      <h1 class="section-title section-title--left">最新学术成果</h1>
      <p class="section-intro">当前页面暂以新闻条目承接成果与动态，后续可继续拆分出专门的 publications 数据结构。</p>
    </div>

    {% assign news_list = site.news | sort: "date" | reverse %}
    {% if news_list.size > 0 %}
    <div class="publication-grid">
    {% for item in news_list %}
      <article class="publication-card">
        <p class="publication-card__journal">Research Update</p>
        <h2 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
        <p>{{ item.summary }}</p>
        <p>{{ item.date | date: "%Y-%m-%d" }}</p>
        <a class="publication-card__link" href="{{ item.url | relative_url }}">阅读摘要</a>
      </article>
    {% endfor %}
    </div>
    {% else %}
    <p>当前还没有新闻内容。</p>
    {% endif %}
  </div>
</section>


