---
layout: custom
title: Oscar Talavera
---

<p style="text-align: right; margin-bottom: 2rem;"><a href="/textos">→ Textos</a></p>

<section>
  <h2>¿Qué hay aquí?</h2>
  <p>Ideas, aficiones, hobbies, creaciones, etc etc</p>
</section>

<section>
  <h2>Citas / Ideas random / Meditaciones</h2>

  <blockquote>
    Ningún hombre puede cruzar el mismo río dos veces, porque no será el mismo río y él no será el mismo hombre.  
    <cite>— Heráclito</cite>
  </blockquote>
  <blockquote>
    Always have something to look forward to.  
    <cite>— Autor desconocido</cite>
  </blockquote>
  <blockquote>
    Alguien de un país en desarrollo que puede viajar a un país de primer mundo es más rico que alguien de un país de primer mundo que no se puede permitir viajar a un país en desarrollo.  
    <cite>— OT (Idea de regadera)</cite>
  </blockquote>
  <blockquote>
    Cuando entiendes que toda opinión es una visión cargada de historia personal, entenderás que todo juicio es una confesión.  
    <cite>— Nikola Tesla</cite>
  </blockquote>
  <blockquote>
    Cooking is a feeling, baking is a science, grilling is an art.  
    <cite>— Alguien en Reddit</cite>
  </blockquote>
  <blockquote>
    La pobreza cobra intereses.  
    <cite>— Lo escuché en un podcast (creo)</cite>
  </blockquote>
</section>

<section>
  <h2>Bio</h2>
  <ul>
    <li><strong>Ingeniero</strong> — Egresado del ITCH en 2018-19, con experiencia en las industrias aeroespacial y automotriz, en distintas posiciones de diseño y manufactura hasta que emprendí mi propio camino fundando Tritic, basado en soluciones creativas de ingeniería y fabricación.</li>
    <li><strong>Hobbista del MMA</strong> — Aficionado a las artes marciales desde niño. Hoy disfruto el deporte del MMA, desde el sillón frente a la tele, hasta el tatami y la jaula.</li>
    <li><strong>Home barista</strong> — Disfruto el café, pero creo que disfruto más de preparar café.</li>
    <li><strong>Coleccionista</strong> — Mi colección favorita y más grande es de autos a escala (Hot Wheels sobre todo), pero tengo otras pequeñas colecciones como cuchillos-navajas, herramienta (Milwaukee ftw) y cosas que me permitan cocinar de modo "heavy duty".</li>
    <li><strong>DJ y audiófilo</strong> — Fan de la música desde chavalito, fui productor en "mis tiempos" y DJ hasta la fecha. Me gusta escuchar mucha música y no me gusta escucharla en "bocina de compu".</li>
  </ul>
</section>


<h2>Textos recientes</h2>
<ul class="posts">
  {% for post in site.posts limit:5 %}
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
<a href="/textos/">Ver todos los textos</a>
