---
layout: custom
title: Textos
permalink: /textos
---

<section class="section">
  <h1>Textos</h1>
  <p class="intro-text">Una colección de ideas, reflexiones y otras notas escritas. Algunas cortas, otras no tanto.</p>

  <div class="grid-posts">
    {% for post in site.posts %}
    <div class="post-item">
      <a href="{{ post.url }}">
        <div class="post-thumb" style="background-image: url('{{ post.image }}');"></div>
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <p class="date">{{ post.date | date: "%d %b %Y" }}</p>
          {% if post.excerpt %}
            <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          {% endif %}
        </div>
      </a>
    </div>
    {% endfor %}
  </div>

  <p class="ai-note"><em>Nota: Los textos en este sitio están inspirados por mí y escritos con asistencia de inteligencia artificial.</em></p>
</section>
