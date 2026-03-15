---
layout: page
title: 首页
permalink: /
---

# 课题组网站

这里可以放课题组的正式名称，以及一句简短的定位介绍，例如研究方向、所属单位和主要关注的问题。

## 研究方向概览

- 方向一：这里填写核心研究主题
- 方向二：这里填写核心研究主题
- 方向三：这里填写核心研究主题

## 快速入口

- [课题组简介](/about/)
- [研究方向](/research/)
- [成员列表](/members/)
- [新闻动态](/news/)
- [项目介绍](/projects/)
- [联系方式](/contact/)

## 最新新闻

{% assign latest_news = site.news | sort: "date" | reverse %}
{% if latest_news.size > 0 %}
<ul>
{% for item in latest_news limit:3 %}
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

## 成员入口

{% assign members = site.members | sort: "order" %}
{% if members.size > 0 %}
<ul>
{% for member in members limit:3 %}
  <li>
    <strong><a href="{{ member.url | relative_url }}">{{ member.name }}</a></strong> - {{ member.role }}
  </li>
{% endfor %}
</ul>
<p><a href="{{ '/members/' | relative_url }}">查看全部成员</a></p>
{% else %}
当前还没有成员内容。
{% endif %}

## 项目概览

{% assign projects = site.projects %}
{% if projects.size > 0 %}
<ul>
{% for project in projects limit:3 %}
  <li>
    <strong><a href="{{ project.url | relative_url }}">{{ project.title }}</a></strong> - {{ project.period }}
  </li>
{% endfor %}
</ul>
<p><a href="{{ '/projects/' | relative_url }}">查看全部项目</a></p>
{% else %}
当前还没有项目内容。
{% endif %}
