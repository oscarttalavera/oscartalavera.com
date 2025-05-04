---
layout: custom
title: Inicio
---

<section class="section">
  <h2>¿Qué hay aquí?</h2>
  <p>Ideas, aficiones, hobbies, creaciones y experimentos. Un espacio personal en constante evolución.</p>
</section>

<aside class="quotes-sidebar" aria-label="Citas aleatorias">
  <div class="quote-container">
    <blockquote class="quote-content" id="quoteDisplay">
      <p class="quote-text"></p>
      <cite>— <span class="quote-author"></span></cite>
    </blockquote>
    <button class="quote-refresh" aria-label="Mostrar otra cita" title="Mostrar otra cita">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
      </svg>
    </button>
  </div>
</aside>

<script>
const quotes = [
  {
    text: "Ningún hombre puede cruzar el mismo río dos veces, porque no será el mismo río y él no será el mismo hombre.",
    author: "Heráclito"
  },
  {
    text: "Always have something to look forward to.",
    author: "Autor desconocido"
  },
  {
    text: "Cuando entiendes que toda opinión es una visión cargada de historia personal, entenderás que todo juicio es una confesión.",
    author: "Nikola Tesla"
  },
  {
    text: "Cooking is a feeling, baking is a science, grilling is an art.",
    author: "Alguien en Reddit"
  },
  {
    text: "Es imposible aprender lo que crees que ya sabes.",
    author: "Epicteto"
  },
  {
    text: "La pobreza cobra intereses.",
    author: "Lo escuché en un podcast (creo)"
  },
  {
    text: "Ningún viento es favorable para el que no sabe a dónde se dirige.",
    author: "Séneca"
  },
  {
    text: "No toda batalla vale la pena. Ganar no siempre significa vencer al otro; a veces, la verdadera victoria es elegir no pelear.",
    author: "Pensador anónimo"
  },
  {
    text: "Alguien de un país en desarrollo que puede viajar a un país de primer mundo es más rico que alguien de un país de primer mundo que no se puede permitir viajar a un país en desarrollo.",
    author: "OT (Idea de regadera)"
  }
];

let currentQuoteIndex = -1;

function getRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentQuoteIndex);
  
  currentQuoteIndex = newIndex;
  return quotes[newIndex];
}

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  const quoteContent = document.querySelector('.quote-content');
  
  // Fade out
  quoteContent.style.opacity = '0';
  
  setTimeout(() => {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
    
    // Fade in
    quoteContent.style.opacity = '1';
  }, 300);
}

// Initialize with a random quote
document.addEventListener('DOMContentLoaded', () => {
  const initialQuote = getRandomQuote();
  displayQuote(initialQuote);
  
  // Add click handler to refresh button
  document.querySelector('.quote-refresh').addEventListener('click', () => {
    const newQuote = getRandomQuote();
    displayQuote(newQuote);
  });
});
</script>

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
