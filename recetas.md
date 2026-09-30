---
layout: custom
title: Recetario
permalink: /recetas
---

<!-- Hero -->
<section class="pt-36 md:pt-40 pb-20 md:pb-32 px-6 lg:px-24" id="recetario-hero">
  <div class="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6">
    <div>
      <span class="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4 italic">Archivo personal</span>
      <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Recetario</h1>
    </div>
    <p class="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
      Recetas propias y de fuentes diversas. Todas probadas y aprobadas.
    </p>
  </div>

  <!-- Filtros (se generan con las categorías que tienen 2 o más recetas) -->
  <div class="hidden flex-wrap gap-2 mb-12" id="recipe-filters" role="group" aria-label="Filtrar recetas por categoría">
    <button type="button" class="recipe-filter-btn active" data-filter="all" aria-pressed="true">Todas <span class="count">{{ site.recetas.size }}</span></button>
  </div>

  <!-- Grid de Recetas -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" id="recipe-grid">
    {% for recipe in site.recetas %}
    <article class="recipe-card group border border-white/10 hover:bg-white hover:text-black transition-colors duration-500 relative flex flex-col -mt-px -ml-px" data-categories="{{ recipe.categories | join: ',' }}">
      <!-- Imagen -->
      <div class="w-full h-[220px] bg-zinc-900 overflow-hidden">
        {% if recipe.image %}
        <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('{{ recipe.image }}')"></div>
        {% endif %}
      </div>
      <!-- Contenido -->
      <div class="p-6 md:p-8 flex flex-col flex-1">
        <div class="flex justify-between items-start gap-4 mb-4">
          <div class="flex gap-2 flex-wrap">
            {% for category in recipe.categories limit:3 %}
            <span class="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 border border-white/10 group-hover:border-black/20 px-2 py-1 transition-colors">{{ category }}</span>
            {% endfor %}
          </div>
          <span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-xl" aria-hidden="true">north_east</span>
        </div>
        <h2 class="text-xl font-bold mb-6 group-hover:underline decoration-1 underline-offset-8 flex-1">{{ recipe.title }}</h2>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 font-bold mt-auto transition-colors">
          {% if recipe.tiempo_prep %}
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            {{ recipe.tiempo_prep }}
          </span>
          {% endif %}
          {% if recipe.dificultad %}
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            {{ recipe.dificultad }}
          </span>
          {% endif %}
        </div>
      </div>
      <a href="{{ recipe.url }}" class="absolute inset-0 z-10"><span class="sr-only">Ver receta: {{ recipe.title }}</span></a>
    </article>
    {% endfor %}
  </div>

  {% if site.recetas.size == 0 %}
  <div class="border border-white/10 p-16 text-center">
    <p class="text-zinc-500 uppercase tracking-widest text-sm">Próximamente</p>
  </div>
  {% endif %}
</section>

<style>
.recipe-filter-btn {
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(255,255,255,0.15);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #a1a1aa;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.recipe-filter-btn .count { opacity: 0.5; margin-left: 0.35rem; }
.recipe-filter-btn:hover { border-color: #fff; color: #fff; }
.recipe-filter-btn.active { background: #fff; color: #000; border-color: #fff; }
.recipe-card[hidden] { display: none; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var bar = document.getElementById('recipe-filters');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.recipe-card'));
  if (!bar || cards.length === 0) return;

  /* Contar categorías y ofrecer solo las que agrupan 2 o más recetas */
  var counts = {};
  cards.forEach(function (card) {
    card.dataset.categories.split(',').filter(Boolean).forEach(function (c) {
      counts[c] = (counts[c] || 0) + 1;
    });
  });
  var cats = Object.keys(counts).filter(function (c) { return counts[c] > 1; })
    .sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b, 'es'); });
  if (cats.length === 0) return;

  cats.forEach(function (c) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'recipe-filter-btn';
    b.dataset.filter = c;
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = c.charAt(0).toUpperCase() + c.slice(1) + ' <span class="count">' + counts[c] + '</span>';
    bar.appendChild(b);
  });
  bar.classList.remove("hidden"); bar.classList.add("flex");

  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('.recipe-filter-btn');
    if (!btn) return;
    var value = btn.dataset.filter;
    bar.querySelectorAll('.recipe-filter-btn').forEach(function (b) {
      var on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    cards.forEach(function (card) {
      var match = value === 'all' || card.dataset.categories.split(',').indexOf(value) !== -1;
      card.hidden = !match;
    });
  });
});
</script>
