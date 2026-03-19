---
layout: default
title: 项目
permalink: /projects/
---
<section class="section-block section-block--light">
  <div class="wrapper">
    <div class="section-header">
      <p class="section-kicker">项目介绍</p>
      <h1 class="section-title">项目列表</h1>
      <p class="section-intro">这里用于集中展示课题组相关项目、周期与负责人信息，作为导航之外的补充入口。</p>
    </div>

    {% assign projects = site.projects %}
    {% if projects.size > 0 %}
    <div class="project-grid">
    {% for project in projects %}
      <article class="project-card">
        <p class="card-meta">{{ project.period }}</p>
        <h2 class="card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
        <p><strong>负责人</strong>{{ project.leader }}</p>
        <p>{{ project.summary }}</p>
      </article>
    {% endfor %}
    </div>
    {% else %}
    <p>当前还没有项目内容。</p>
    {% endif %}
  </div>
</section>


