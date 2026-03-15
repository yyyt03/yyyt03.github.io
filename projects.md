---
layout: page
title: 项目
permalink: /projects/
---

<div class="section-head">
  <h2>项目列表</h2>
</div>

{% assign projects = site.projects %}
{% if projects.size > 0 %}
<div class="content-grid">
{% for project in projects %}
  <article class="card-item card-item--full">
    <p class="card-meta">{{ project.period }}</p>
    <h3 class="card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p><strong>负责人：</strong>{{ project.leader }}</p>
    <p>{{ project.summary }}</p>
  </article>
{% endfor %}
</div>
{% else %}
<p>当前还没有项目内容。</p>
{% endif %}
