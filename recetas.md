---
layout: custom
title: Recetario
---

<!-- Hero -->
<section class="py-32 px-6 lg:px-24" id="recetario-hero">
  <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    <div>
      <span class="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4 italic">Archivo personal</span>
      <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Recetario</h1>
    </div>
    <p class="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
      Recetas propias y de fuentes diversas. Todas probadas y aprobadas.
    </p>
  </div>

  <!-- Filtros -->
  <div class="flex flex-wrap gap-2 mb-12">
    <button class="recipe-filter-btn active px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black" data-filter="all">Todas</button>
    <button class="recipe-filter-btn px-6 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black text-zinc-400" data-filter="desayuno">Desayuno</button>
    <button class="recipe-filter-btn px-6 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black text-zinc-400" data-filter="comida">Comida</button>
    <button class="recipe-filter-btn px-6 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black text-zinc-400" data-filter="cena">Cena</button>
    <button class="recipe-filter-btn px-6 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black text-zinc-400" data-filter="postre">Postres</button>
    <button class="recipe-filter-btn px-6 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black text-zinc-400" data-filter="bebida">Bebidas</button>
  </div>

  <!-- Grid de Recetas -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" id="recipe-grid">
    {% for recipe in site.recetas %}
    <article class="recipe-card group border border-white/10 hover:bg-white hover:text-black transition-all duration-500 relative flex flex-col" data-categories="{{ recipe.categories | join: ' ' }}">
      <!-- Imagen -->
      <div class="w-full h-[220px] bg-zinc-900 overflow-hidden">
        <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('{{ recipe.image }}')"></div>
      </div>
      <!-- Contenido -->
      <div class="p-8 flex flex-col flex-1">
        <div class="flex justify-between items-start mb-4">
          <div class="flex gap-2 flex-wrap">
            {% for category in recipe.categories %}
            <span class="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 border border-white/10 group-hover:border-black/20 px-2 py-1">{{ category }}</span>
            {% endfor %}
          </div>
          <span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-xl">north_east</span>
        </div>
        <h2 class="text-xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-8 flex-1">{{ recipe.title }}</h2>
        <div class="flex gap-6 text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 font-bold mt-auto">
          {% if recipe.tiempo_prep %}
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            {{ recipe.tiempo_prep }}
          </span>
          {% endif %}
          {% if recipe.dificultad %}
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
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
.recipe-filter-btn.active {
  background: #ffffff;
  color: #000000;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.recipe-filter-btn');
  const recipeCards = document.querySelectorAll('.recipe-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('text-zinc-400');
        btn.classList.remove('text-white');
      });
      button.classList.add('active');
      button.classList.remove('text-zinc-400');

      recipeCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = '';
        } else {
          const categories = card.getAttribute('data-categories');
          card.style.display = categories.includes(filterValue) ? '' : 'none';
        }
      });
    });
  });
});
</script>
