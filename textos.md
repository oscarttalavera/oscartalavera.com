---
layout: page
title: Textos
permalink: /textos/
---

<h2>Todos los textos</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li class="post-preview">
      <a href="{{ post.url }}">
        {% if post.featured_image %}
          <img src="{{ post.featured_image }}" alt="Imagen de {{ post.title }}" class="post-image">
        {% endif %}
        <h3>{{ post.title }}</h3>
        <p>{{ post.date | date: "%d %b %Y" }}</p>
      </a>
    </li>
  {% endfor %}
</ul>
