---
layout: page
title: 新闻
permalink: /news/
---

<div class="section-head">
  <h2>新闻动态</h2>
</div>

{% assign news_list = site.news | sort: "date" | reverse %}
{% if news_list.size > 0 %}
<div class="content-grid">
{% for item in news_list %}
  <article class="card-item card-item--full">
    <p class="card-meta">{{ item.date | date: "%Y-%m-%d" }}</p>
    <h3 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <p>{{ item.summary }}</p>
  </article>
{% endfor %}
</div>
{% else %}
<p>当前还没有新闻内容。</p>
{% endif %}
