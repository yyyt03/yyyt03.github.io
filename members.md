---
layout: page
title: 成员
permalink: /members/
---

<div class="section-head">
  <h2>课题组成员</h2>
</div>

{% assign members = site.members | sort: "order" %}
{% if members.size > 0 %}
<div class="content-grid">
{% for member in members %}
  <article class="card-item member-card">
    {% if member.photo %}
    <img class="member-card__image" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
    {% endif %}
    <p class="card-meta">{{ member.role }}</p>
    <h3 class="card-title"><a href="{{ member.url | relative_url }}">{{ member.name }}</a></h3>
    <p>{{ member.research }}</p>
    <p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
  </article>
{% endfor %}
</div>
{% else %}
<p>当前还没有成员信息。</p>
{% endif %}
