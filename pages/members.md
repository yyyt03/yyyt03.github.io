---
layout: default
title: 成员
permalink: /members/
---
<section class="section-block section-block--light">
  <div class="wrapper">
    <div class="section-header">
      <p class="section-kicker">团队成员</p>
      <h1 class="section-title">研究团队</h1>
      <p class="section-intro">汇聚多学科背景的专家学者。当前页面已支持成员照片、简介和详情页跳转。</p>
    </div>

    {% assign members = site.members | sort: "order" %}
    {% if members.size > 0 %}
    <div class="team-grid">
    {% for member in members %}
      <article class="member-card">
        {% if member.photo %}
        <img class="member-card__image" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
        {% else %}
        <div class="member-card__image member-card__image--placeholder">◯</div>
        {% endif %}
        <div class="member-card__body">
          <h2 class="card-title"><a href="{{ member.url | relative_url }}">{{ member.name }}</a></h2>
          <p class="card-meta">{{ member.role }}</p>
          <p>{{ member.research }}</p>
          <p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
        </div>
      </article>
    {% endfor %}
    </div>
    {% else %}
    <p>当前还没有成员信息。</p>
    {% endif %}
  </div>
</section>


