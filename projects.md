---
layout: page
title: 项目
permalink: /projects/
---

## 项目列表

{% assign projects = site.projects %}
{% if projects.size > 0 %}
<ul>
{% for project in projects %}
  <li>
    <strong><a href="{{ project.url | relative_url }}">{{ project.title }}</a></strong>
    <br>
    周期：{{ project.period }}
    <br>
    负责人：{{ project.leader }}
    <br>
    {{ project.summary }}
  </li>
{% endfor %}
</ul>
{% else %}
当前还没有项目内容。
{% endif %}
