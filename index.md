---
layout: custom
title: Inicio
---

<section class="section">
  <h2>¿Qué hay aquí?</h2>
  <p>Ideas, aficiones, hobbies, creaciones y experimentos. Un espacio personal en constante evolución.</p>
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

<section class="section quotes-carousel-section">
  <h2>Reflexiones</h2>
  <div class="quotes-carousel">
    <div class="quotes-track">
      <div class="quote-item">
        <blockquote>
          <p>Ningún hombre puede cruzar el mismo río dos veces, porque no será el mismo río y él no será el mismo hombre.</p>
          <cite>— Heráclito</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>Always have something to look forward to.</p>
          <cite>— Autor desconocido</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>Cuando entiendes que toda opinión es una visión cargada de historia personal, entenderás que todo juicio es una confesión.</p>
          <cite>— Nikola Tesla</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>Cooking is a feeling, baking is a science, grilling is an art.</p>
          <cite>— Alguien en Reddit</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>Es imposible aprender lo que crees que ya sabes.</p>
          <cite>— Epicteto</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>La pobreza cobra intereses.</p>
          <cite>— Lo escuché en un podcast (creo)</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>Ningún viento es favorable para el que no sabe a dónde se dirige.</p>
          <cite>— Séneca</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>No toda batalla vale la pena. Ganar no siempre significa vencer al otro; a veces, la verdadera victoria es elegir no pelear.</p>
          <cite>– Pensador anónimo</cite>
        </blockquote>
      </div>
      <div class="quote-item">
        <blockquote>
          <p>Alguien de un país en desarrollo que puede viajar a un país de primer mundo es más rico que alguien de un país de primer mundo que no se puede permitir viajar a un país en desarrollo.</p>
          <cite>— OT (Idea de regadera)</cite>
        </blockquote>
      </div>
    </div>
    <div class="quotes-navigation">
      <button class="carousel-nav prev" aria-label="Cita anterior">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="carousel-nav next" aria-label="Siguiente cita">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
  <div class="carousel-dots"></div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.quotes-track');
  const items = document.querySelectorAll('.quote-item');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  let currentIndex = 0;
  let autoplayInterval;
  let isHovering = false;
  
  // Determinar cuántas citas mostrar según el ancho de pantalla
  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }
  
  // Crear indicadores de navegación
  function createDots() {
    dotsContainer.innerHTML = '';
    const itemsPerView = getItemsPerView();
    const totalPages = Math.ceil(items.length / itemsPerView);
    
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Ir a página ${i + 1} de citas`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToIndex(i * itemsPerView));
      dotsContainer.appendChild(dot);
    }
  }
  
  // Actualizar indicadores activos
  function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    const itemsPerView = getItemsPerView();
    const currentPage = Math.floor(currentIndex / itemsPerView);
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }
  
  // Navegar a un índice específico
  function goToIndex(index) {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, items.length - itemsPerView);
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    
    const itemWidth = items[0].offsetWidth;
    const offset = currentIndex * itemWidth;
    
    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
  }
  
  // Navegación siguiente
  function next() {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, items.length - itemsPerView);
    
    if (currentIndex >= maxIndex) {
      goToIndex(0); // Volver al inicio
    } else {
      goToIndex(currentIndex + itemsPerView);
    }
  }
  
  // Navegación anterior
  function prev() {
    const itemsPerView = getItemsPerView();
    
    if (currentIndex <= 0) {
      goToIndex(Math.max(0, items.length - itemsPerView)); // Ir al final
    } else {
      goToIndex(currentIndex - itemsPerView);
    }
  }
  
  // Autoplay
  function startAutoplay() {
    if (!isHovering) {
      autoplayInterval = setInterval(next, 5000);
    }
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
    next();
    stopAutoplay();
    startAutoplay();
  });
  
  prevBtn.addEventListener('click', () => {
    prev();
    stopAutoplay();
    startAutoplay();
  });
  
  // Pausar autoplay en hover
  const carousel = document.querySelector('.quotes-carousel');
  carousel.addEventListener('mouseenter', () => {
    isHovering = true;
    stopAutoplay();
  });
  
  carousel.addEventListener('mouseleave', () => {
    isHovering = false;
    startAutoplay();
  });
  
  // Soporte táctil para móviles
  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        next(); // Swipe left
      } else {
        prev(); // Swipe right
      }
      stopAutoplay();
      startAutoplay();
    }
  }
  
  // Manejar redimensionamiento de ventana
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      createDots();
      goToIndex(0);
    }, 250);
  });
  
  // Inicializar
  createDots();
  startAutoplay();
});
</script>

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
