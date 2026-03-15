---
layout: page
title: 成员
permalink: /members/
---

## 课题组成员

{% assign members = site.members | sort: "order" %}
{% if members.size > 0 %}
<ul>
{% for member in members %}
  <li>
    <strong><a href="{{ member.url | relative_url }}">{{ member.name }}</a></strong>
    <br>
    {{ member.role }}
    <br>
    {{ member.research }}
    <br>
    <a href="mailto:{{ member.email }}">{{ member.email }}</a>
  </li>
{% endfor %}
</ul>
{% else %}
当前还没有成员信息。
{% endif %}
