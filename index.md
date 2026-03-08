---
layout: custom
title: Inicio
---

<!-- Hero Section -->
<section class="min-h-[85vh] flex flex-col justify-center items-center px-6 lg:px-24 pt-24 pb-12 text-center" id="hero">
<div class="flex flex-col items-center gap-10 max-w-4xl mx-auto opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">

<div class="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-700 cursor-default hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
    <img src="/assets/img/OT logo bco.png" alt="Logo" class="max-w-[200px] md:max-w-[300px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
    <h1 class="sr-only">Archivo Personal</h1>
    <span class="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mt-2 block text-center">
        Por Oscar Talavera
    </span>
</div>

<div class="h-px bg-white/20 w-1/3 my-2"></div>

<p class="text-xl md:text-2xl leading-relaxed text-zinc-400 font-light max-w-2xl px-4">
                        Un espacio digital dedicado a la documentación del diseño, la exploración de ideas y el registro meticuloso de objetos. 
                        Una colección de proyectos y reflexiones que combinan la <span class="text-white font-medium">precisión de la ingeniería</span> 
                        con la <span class="text-white font-medium">historia</span> de cada pieza.
</p>
</div>
</section>

<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>

<!-- Marquee / Traits -->
<div class="py-12 border-y border-white/10 overflow-hidden mt-20 relative">
<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}
</style>
<div class="animate-marquee gap-12">
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">Home Barista</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Coleccionista</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">DJ y Audiófilo</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Hobbista de MMA</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">Ingeniero</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">Home Barista</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Coleccionista</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">DJ y Audiófilo</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Hobbista de MMA</span>
<span class="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">Ingeniero</span>
</div>
</div>

<!-- Citations Section -->
<section class="py-32 px-6 lg:px-24" id="citations">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
  <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tighter">Citas e<br/>Ideas</h2>
  <div class="h-px bg-white/20 flex-grow mx-12 hidden lg:block mb-4"></div>
  <p class="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
    Definiendo la filosofía detrás del oficio y el esfuerzo.
  </p>
</div>
<div id="citations-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

  <div class="citation-card" data-icon="waves">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Ningún hombre puede cruzar el mismo río dos veces, porque no será el mismo río y él no será el mismo hombre.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">waves</span>
      <span class="citation-author">Heráclito</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="auto_awesome">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Always have something to look forward to.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">auto_awesome</span>
      <span class="citation-author">Autor desconocido</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="psychology">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Cuando entiendes que toda opinión es una visión cargada de historia personal, entenderás que todo juicio es una confesión.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">psychology</span>
      <span class="citation-author">Nikola Tesla</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="restaurant">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Cooking is a feeling, baking is a science, grilling is an art.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">restaurant</span>
      <span class="citation-author">Alguien en Reddit</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="school">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Es imposible aprender lo que crees que ya sabes.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">school</span>
      <span class="citation-author">Epicteto</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="payments">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">La pobreza cobra intereses.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">payments</span>
      <span class="citation-author">Lo escuché en un podcast</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="air">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Ningún viento es favorable para el que no sabe a dónde se dirige.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">air</span>
      <span class="citation-author">Séneca</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="shield">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">No toda batalla vale la pena. Ganar no siempre significa vencer al otro; a veces, la verdadera victoria es elegir no pelear.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">shield</span>
      <span class="citation-author">Pensador anónimo</span>
    </footer>
  </div>

  <div class="citation-card" data-icon="travel_explore">
    <div class="citation-body">
      <span class="citation-deco">&ldquo;</span>
      <p class="citation-text">Alguien de un país en desarrollo que puede viajar a un país de primer mundo es más rico que alguien de un país de primer mundo que no se puede permitir viajar a un país en desarrollo.</p>
    </div>
    <footer class="citation-foot">
      <span class="material-symbols-outlined citation-icon">travel_explore</span>
      <span class="citation-author">OT (Idea de regadera)</span>
    </footer>
  </div>

</div>
</section>

<style>
/* ── Citation card ─────────────────────────────── */
.citation-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.25rem 2rem 1.75rem;
  border: 1px solid rgba(255,255,255,0.08);
  border-top: 2px solid rgba(255,255,255,0.12); /* accent line — JS tweaks opacity */
  overflow: hidden;
  cursor: default;
  will-change: transform, opacity;
  transition:
    transform 0.55s cubic-bezier(0.4, 0, 0.2, 1),
    opacity   0.55s cubic-bezier(0.4, 0, 0.2, 1),
    border-top-color 0.6s ease,
    background-color 0.4s ease,
    color 0.4s ease;
}
.citation-card:hover {
  background-color: #fff;
  color: #000;
  border-top-color: #000 !important;
}
.citation-card:hover .citation-icon,
.citation-card:hover .citation-author,
.citation-card:hover .citation-deco {
  color: #000;
  opacity: 1;
}

/* giant decorative open-quote */
.citation-deco {
  position: absolute;
  top: -0.5rem;
  left: 1.25rem;
  font-size: 7rem;
  line-height: 1;
  font-family: Georgia, serif;
  color: rgba(255,255,255,0.06);
  pointer-events: none;
  user-select: none;
  transition: color 0.4s ease;
}
.citation-card:hover .citation-deco {
  color: rgba(0,0,0,0.06);
}

.citation-body {
  position: relative;
  padding-top: 2rem;
  flex: 1;
}

.citation-text {
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  color: inherit;
}

.citation-foot {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  transition: border-color 0.4s ease;
}
.citation-card:hover .citation-foot {
  border-top-color: rgba(0,0,0,0.12);
}

.citation-icon {
  font-size: 1rem;
  opacity: 0.35;
  transition: opacity 0.4s ease, transform 0.4s ease;
  color: inherit;
}
.citation-card:hover .citation-icon {
  opacity: 0.7;
  transform: scale(1.15);
}

.citation-author {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 700;
  opacity: 0.45;
  color: inherit;
  transition: opacity 0.4s ease;
}
.citation-card:hover .citation-author {
  opacity: 0.7;
}

/* scatter state */
.citation-card.scattering {
  opacity: 0;
}
</style>

<script>
(function () {
  /* Subtle accent-line opacities cycling per card on shuffle */
  var ACCENTS = [
    'rgba(255,255,255,0.08)',
    'rgba(255,255,255,0.18)',
    'rgba(255,255,255,0.30)',
    'rgba(255,255,255,0.50)',
    'rgba(255,255,255,0.70)',
  ];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  /* Assign random accent-line brightness to each card */
  function randomizeAccents(cards) {
    cards.forEach(function (card) {
      var accent = ACCENTS[Math.floor(Math.random() * ACCENTS.length)];
      card.style.borderTopColor = accent;
    });
  }

  function scatterAndShuffle(cards, grid, callback) {
    /* Phase 1 — scatter with staggered random offsets */
    cards.forEach(function (card, i) {
      var tx  = rand(-32, 32);
      var ty  = rand(-20, 20);
      var rot = rand(-5, 5);
      card.style.transitionDelay = (i * 32) + 'ms';
      card.style.transform = 'translate(' + tx + 'px,' + ty + 'px) rotate(' + rot + 'deg)';
      card.classList.add('scattering');
    });

    /* Phase 2 — settle: new order + new accents */
    var wait = 640 + cards.length * 32;
    setTimeout(function () {
      cards.forEach(function (card) { card.style.transitionDelay = '0ms'; });
      shuffleArray(cards).forEach(function (card) { grid.appendChild(card); });
      randomizeAccents(Array.from(grid.children));
      requestAnimationFrame(function () {
        Array.from(grid.children).forEach(function (card) {
          card.style.transform = '';
          card.classList.remove('scattering');
        });
        if (callback) callback();
      });
    }, wait);
  }

  var busy = false;

  function shuffleCitations() {
    if (busy) return;
    busy = true;
    var grid = document.getElementById('citations-grid');
    if (!grid) { busy = false; return; }
    scatterAndShuffle(Array.from(grid.children), grid, function () { busy = false; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('citations-grid');
    if (!grid) return;
    /* Silent initial shuffle + accent assignment */
    var cards = Array.from(grid.children);
    shuffleArray(cards).forEach(function (c) { grid.appendChild(c); });
    randomizeAccents(Array.from(grid.children));
    /* Animated shuffle every 8 s */
    setInterval(shuffleCitations, 8000);
  });
}());
</script>

<!-- Proyectos / Negocios Section -->
<section class="py-32 px-6 lg:px-24 bg-white text-black" id="proyectos">
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
    <!-- Tritic3D -->
    <div class="flex flex-col gap-8 h-full">
        <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">Tritic</h2>
        <p class="text-lg leading-relaxed text-zinc-700">
            Soluciones avanzadas de fabricación personalizada y consultoría de diseño mecánico. Convertimos ideas conceptuales complejas en realidades tangibles de ingeniería con precisión.
        </p>
        <ul class="space-y-4 text-sm font-bold uppercase tracking-widest pl-0 ml-0 list-none">
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-black rounded-full"></span> Prototipado Rápido</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-black rounded-full"></span> Diseño de Sistemas Mecánicos</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-black rounded-full"></span> Maquinado CNC</li>
        </ul>
        <a href="https://www.tritic3d.com" target="_blank" class="bg-black text-white px-10 py-5 self-start font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center gap-4 mt-auto">
            Visitar Tritic <span class="material-symbols-outlined">arrow_forward</span>
        </a>
    </div>

    <!-- BuenVeneno -->
    <div class="flex flex-col gap-8 h-full">
        <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">BuenVeneno</h2>
        <p class="text-lg leading-relaxed text-zinc-700">
            Agencia de diseño especializada en web. Creamos experiencias digitales a la medida centradas en la estética, el diseño de vanguardia y la funcionalidad.
        </p>
        <ul class="space-y-4 text-sm font-bold uppercase tracking-widest pl-0 ml-0 list-none">
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-black rounded-full"></span> Diseño Web / UI</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-black rounded-full"></span> Desarrollo a Medida</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-black rounded-full"></span> Identidad Visual</li>
        </ul>
        <a href="https://buenveneno.mx" target="_blank" class="bg-black text-white px-10 py-5 self-start font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center gap-4 mt-auto">
            Visitar BuenVeneno <span class="material-symbols-outlined">arrow_forward</span>
        </a>
    </div>
</div>
</section>

<!-- Blog Section -->
<section class="py-32 px-6 lg:px-24 bg-black overflow-hidden" id="blog">
<div class="flex justify-between items-end mb-16">
<div>
<span class="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4 italic">Últimas Reflexiones</span>
<h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Textos</h2>
</div>
<div class="flex items-center gap-6">
    <div class="flex gap-2">
        <button id="prev-post" class="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors" aria-label="Anterior">
            <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <button id="next-post" class="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors" aria-label="Siguiente">
            <span class="material-symbols-outlined">arrow_forward</span>
        </button>
    </div>
    <a class="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-white/60 transition-colors hidden md:block" href="/textos">Ver Todos</a>
</div>
</div>

<div class="relative w-full">
    <div id="posts-slider" class="flex transition-transform duration-500 ease-in-out gap-6" style="transform: translateX(0);">
        {% for post in site.posts limit:6 %}
        <article class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-none relative bg-zinc-900 border border-white/10 p-8 lg:p-12 hover:bg-zinc-800 transition-colors group cursor-pointer flex-shrink-0 flex flex-col justify-between">
          <div>
              <div class="flex justify-between items-start mb-12 relative z-10">
                <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{{ post.date | date: "%b %d, %Y" }} {% if post.tags.size > 0 %}/ {{ post.tags[0] }}{% endif %}</span>
                <span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
              </div>
              
              <h3 class="text-3xl font-bold mb-6 group-hover:underline decoration-1 underline-offset-8 relative z-10">{{ post.title }}</h3>
              
              <p class="text-zinc-400 font-light leading-relaxed mb-8 relative z-10">
                {% if post.description %}
                  {{ post.description | truncatewords: 20 }}
                {% elsif post.excerpt %}
                  {{ post.excerpt | strip_html | truncatewords: 20 }}
                {% endif %}
              </p>
          </div>
          
          {% if post.image %}
          <div class="w-full h-[200px] bg-black grayscale overflow-hidden relative z-10 mt-auto">
            <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style="background-image: url('{{ post.image }}')">
            </div>
          </div>
          {% else %}
          <div class="w-full h-[200px] bg-black grayscale overflow-hidden relative z-10 mt-auto">
            <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style="background-image: url('/assets/img/conocimiento.jpg')">
            </div>
          </div>
          {% endif %}
          <a href="{{ post.url }}" class="absolute inset-0 z-20"><span class="sr-only">Leer Publicación</span></a>
        </article>
        {% endfor %}
    </div>
</div>
<div class="mt-12 text-center md:hidden">
    <a class="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-white/60 transition-colors" href="/textos">Ver Todos los Textos</a>
</div>
</section>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('posts-slider');
    const prevBtn = document.getElementById('prev-post');
    const nextBtn = document.getElementById('next-post');
    
    if(!slider || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    
    function updateSlider() {
        if(slider.children.length === 0) return;
        const item = slider.children[0];
        const gap = 24; // gap-6 is 24px
        const itemWidth = item.offsetWidth;
        const offset = currentIndex * (itemWidth + gap);
        slider.style.transform = `translateX(-${offset}px)`;
    }
    
    function getMaxIndex() {
        if(slider.children.length === 0) return 0;
        const containerWidth = slider.parentElement.offsetWidth;
        const itemWidth = slider.children[0].offsetWidth;
        const visibleCount = Math.floor((containerWidth + 24) / (itemWidth + 24)) || 1;
        return Math.max(0, slider.children.length - visibleCount);
    }
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = getMaxIndex();
        if(currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if(currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    window.addEventListener('resize', () => {
        const maxIndex = getMaxIndex();
        if(currentIndex > maxIndex) currentIndex = maxIndex;
        updateSlider();
    });
});
</script>
