---
layout: page
title: 新闻
permalink: /news/
---

## 新闻动态

{% assign news_list = site.news | sort: "date" | reverse %}
{% if news_list.size > 0 %}
<ul>
{% for item in news_list %}
  <li>
    <strong><a href="{{ item.url | relative_url }}">{{ item.title }}</a></strong>
    <br>
    <small>{{ item.date | date: "%Y-%m-%d" }}</small>
    <br>
    {{ item.summary }}
  </li>
{% endfor %}
</ul>
{% else %}
当前还没有新闻内容。
{% endif %}
