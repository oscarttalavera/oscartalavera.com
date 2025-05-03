---
layout: custom
title: Inicio
---

<section class="section">
  <h2>¿Qué hay aquí?</h2>
  <p>Ideas, aficiones, hobbies, creaciones, etc</p>
</section>

<section class="section quotes-section">
  <h2>Citas / Ideas random / Meditaciones</h2>
  <div class="quotes">
    <blockquote>
      <p>Ningún hombre puede cruzar el mismo río dos veces, porque no será el mismo río y él no será el mismo hombre.</p>
      <cite>— Heráclito</cite>
    </blockquote>
    <blockquote>
      <p>Always have something to look forward to.</p>
      <cite>— Autor desconocido</cite>
    </blockquote>
    <blockquote>
      <p>Cuando entiendes que toda opinión es una visión cargada de historia personal, entenderás que todo juicio es una confesión.</p>
      <cite>— Nikola Tesla</cite>
    </blockquote>
    <blockquote>
      <p>Cooking is a feeling, baking is a science, grilling is an art.</p>
      <cite>— Alguien en Reddit</cite>
    </blockquote>
    <blockquote>
      <p>Es imposible aprender lo que crees que ya sabes.</p>
      <cite>— Epicteto</cite>
    </blockquote>
    <blockquote>
      <p>La pobreza cobra intereses.</p>
      <cite>— Lo escuché en un podcast (creo)</cite>
    </blockquote>
    <blockquote>
      <p>Ningún viento es favorable para el que no sabe a dónde se dirige.</p>
      <cite>— Séneca</cite>
    </blockquote>
    <blockquote>
      <p>No toda batalla vale la pena. Ganar no siempre significa vencer al otro; a veces, la verdadera victoria es elegir no pelear.</p>
      <cite>– Pensador anónimo</cite>
    </blockquote>
    <blockquote>
      <p>Alguien de un país en desarrollo que puede viajar a un país de primer mundo es más rico que alguien de un país de primer mundo que no se puede permitir viajar a un país en desarrollo.</p>
      <cite>— OT (Idea de regadera)</cite>
    </blockquote>
  </div>
</section>

<section class="section bio-section">
  <h2>Bio</h2>
  <ul class="bio-list">
    <li><strong>Ingeniero</strong> — Egresado del ITCH en 2018-19, con experiencia en las industrias aeroespacial y automotriz. Hoy lidero <a href="https://www.tritic3d.com" target="_blank" class="tritic-link">Tritic</a>, brindando soluciones creativas de ingeniería y fabricación.</li>
    <li><strong>Hobbista del MMA</strong> — Aficionado a las artes marciales desde niño. Hoy disfruto el deporte del MMA, desde el sillón frente a la tele, hasta el tatami y la jaula.</li>
    <li><strong>Home barista</strong> — Disfruto el café, pero creo que disfruto más de preparar café.</li>
    <li><strong>Coleccionista</strong> — Mi colección favorita y más grande es de autos a escala (Hot Wheels sobre todo), pero tengo otras pequeñas colecciones como cuchillos-navajas, herramienta y cosas para cocinar.</li>
    <li><strong>DJ y audiófilo</strong> — Fan de la música desde chavalito, fui productor en "mis tiempos" y DJ hasta la fecha. Me gusta escuchar mucha música y mejor si es en Hi-Fi.</li>  </ul>
</section>

<section class="section tritic-section">
  <div class="tritic-card">
    <div class="tritic-content">
      <h3>Tritic</h3>
      <p>Soluciones creativas de ingeniería y fabricación. Transformando ideas en realidad tangible.</p>
      <a href="https://www.tritic3d.com" target="_blank" class="tritic-cta">Visitar Tritic →</a>
    </div>
  </div>
</section>

<section class="section recent-posts-section">
  <h2>Textos recientes</h2>
  <div class="post-carousel">
    {% for post in site.posts limit:5 %}
    <div class="post-card" style="background-image: url('{{ post.image }}');">
      <a href="{{ post.url }}">
        <div class="overlay">
          <h3>{{ post.title }}</h3>
          <p>{{ post.date | date: "%d %b %Y" }}</p>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
  <a href="/textos" class="ver-todos">Ver todos los textos →</a>
</section>
