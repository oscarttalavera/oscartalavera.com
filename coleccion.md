---
layout: custom
title: Mi Colección de Autos
permalink: /coleccion
---

<!-- Hero -->
<section class="pt-36 md:pt-40 pb-12 px-6 lg:px-24 bg-black" id="coleccion-hero">
  <div class="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6">
    <div>
      <span class="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4 italic">Archivo personal</span>
      <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Colección</h1>
    </div>
    <p class="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
      Una pasión que comenzó en la infancia y sigue creciendo. Modelos a escala con historia.
    </p>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 border border-white/10">
    <div class="py-8 px-6 border-r border-b md:border-b-0 border-white/10 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2">{{ site.coches.size }}</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Modelos</div>
    </div>
    <div class="py-8 px-6 border-b md:border-b-0 md:border-r border-white/10 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2" id="totalBrands">–</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Marcas</div>
    </div>
    <div class="py-8 px-6 border-r border-white/10 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2" id="totalSeries">–</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Series</div>
    </div>
    <div class="py-8 px-6 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2" id="premiumCount">–</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Especiales</div>
    </div>
  </div>
</section>

<!-- Controles: solo quedan fijos en pantallas medianas y grandes -->
<section class="md:sticky md:top-[5.25rem] z-40 bg-black/95 backdrop-blur border-y border-white/10 px-6 lg:px-24 py-4 flex flex-wrap gap-3 md:gap-4 items-center" aria-label="Filtros de la colección">
  <!-- Search -->
  <label class="flex items-center gap-3 flex-1 min-w-[220px] border border-white/20 px-4 py-2 focus-within:border-white transition-colors">
    <svg class="w-4 h-4 text-zinc-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
    <span class="sr-only">Buscar</span>
    <input type="search" id="searchInput" placeholder="Buscar modelo, marca, serie..." autocomplete="off" class="bg-transparent border-none outline-none focus:ring-0 focus:outline-none p-0 w-full text-sm text-white placeholder-zinc-600 font-light">
  </label>

  <!-- Filters -->
  <div class="flex gap-2 flex-wrap">
    <select id="brandFilter" aria-label="Filtrar por marca" class="filter-select">
      <option value="all">Marca</option>
    </select>
    <select id="seriesFilter" aria-label="Filtrar por serie" class="filter-select">
      <option value="all">Serie</option>
    </select>
    <select id="yearFilter" aria-label="Filtrar por año" class="filter-select">
      <option value="all">Año</option>
    </select>
    <button type="button" id="clearFilters" class="filter-select flex items-center gap-2 hover:text-white" hidden>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      Limpiar
    </button>
  </div>

  <!-- View toggle + count -->
  <div class="flex items-center gap-4 ml-auto">
    <span class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold whitespace-nowrap" aria-live="polite"><span id="resultsCount">{{ site.coches.size }}</span> <span id="resultsLabel">modelos</span></span>
    <div class="flex gap-1">
      <button type="button" class="col-view-btn active" data-view="grid" aria-label="Vista de cuadrícula" aria-pressed="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </button>
      <button type="button" class="col-view-btn" data-view="list" aria-label="Vista de lista" aria-pressed="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      </button>
    </div>
  </div>
</section>

<!-- Colección -->
<section class="px-6 lg:px-24 py-12 pb-24 bg-black">
  <div class="cars-grid-new view-grid" id="carsContainer">
    {% for car in site.coches %}
    <article class="car-item group border border-white/10 hover:border-white transition-colors duration-300 relative overflow-hidden -mt-px -ml-px"
         data-brand="{{ car.marca | downcase }}"
         data-brand-label="{{ car.marca }}"
         data-year="{{ car.año }}"
         data-series="{{ car.serie | downcase }}"
         data-series-label="{{ car.serie }}"
         data-rarity="{{ car.rareza | downcase }}"
         data-search="{{ car.nombre | downcase }} {{ car.modelo | downcase }} {{ car.serie | downcase }} {{ car.marca | downcase }}">
      <a href="{{ site.baseurl }}{{ car.url }}" class="car-link block">
        <!-- Imagen -->
        <div class="car-thumb w-full aspect-square bg-zinc-900 overflow-hidden relative">
          <span class="material-symbols-outlined absolute inset-0 flex items-center justify-center text-5xl text-white/10" aria-hidden="true">directions_car</span>
          {% if car.imagen %}
          <img src="{{ car.imagen }}" alt="{{ car.nombre }}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105">
          {% endif %}
        </div>
        <!-- Info -->
        <div class="car-info p-4 border-t border-white/10 group-hover:border-white transition-colors">
          <div class="flex justify-between items-center mb-1 gap-2">
            <span class="text-[9px] font-bold uppercase tracking-widest text-zinc-500">{{ car.marca }}</span>
            <span class="text-[9px] text-zinc-500">{{ car.año }}</span>
          </div>
          <h2 class="text-sm font-bold leading-tight mb-1">{{ car.nombre }}</h2>
          <p class="text-[10px] text-zinc-500">{{ car.serie }}{% if car.numero_coleccion %} <span class="font-mono">#{{ car.numero_coleccion }}</span>{% endif %}</p>
          {% if car.rareza and car.rareza != 'Normal' and car.rareza != 'Común' %}
          <span class="inline-block mt-2 text-[8px] font-bold uppercase tracking-widest border px-2 py-0.5
            {% if car.rareza contains 'Treasure' or car.rareza contains 'Super' %}border-green-500/50 text-green-400
            {% elsif car.rareza contains 'Chase' %}border-orange-500/50 text-orange-400
            {% elsif car.rareza contains 'Especial' or car.rareza contains 'Exclusiv' %}border-yellow-500/50 text-yellow-400
            {% else %}border-white/20 text-zinc-400{% endif %}">
            {{ car.rareza }}
          </span>
          {% endif %}
        </div>
      </a>
    </article>
    {% endfor %}
  </div>

  <!-- Estado vacío -->
  <div id="noResults" class="hidden border border-white/10 p-16 text-center mt-px">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" class="mx-auto mb-4" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
    <p class="text-zinc-500 uppercase tracking-widest text-sm">Sin resultados</p>
  </div>
</section>

<style>
.cars-grid-new { display: grid; grid-template-columns: repeat(2, 1fr); }
@media (min-width: 768px)  { .cars-grid-new.view-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .cars-grid-new.view-grid { grid-template-columns: repeat(4, 1fr); } }
.cars-grid-new.view-list { grid-template-columns: 1fr; }
.cars-grid-new.view-list .car-link { display: flex; align-items: stretch; }
.cars-grid-new.view-list .car-thumb { width: 120px; aspect-ratio: auto; flex-shrink: 0; min-height: 90px; }
.cars-grid-new.view-list .car-info { flex: 1; border-top: 0; border-left: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; justify-content: center; }
.car-item[hidden] { display: none; }

.filter-select {
  background: #000;
  border: 1px solid rgba(255,255,255,0.2);
  color: #a1a1aa;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.filter-select:hover, .filter-select:focus { border-color: #fff; outline: none; }
.filter-select[hidden] { display: none; }
select.filter-select { max-width: 11rem; }

.col-view-btn {
  width: 2.25rem; height: 2.25rem;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid rgba(255,255,255,0.2);
  color: #71717a;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.col-view-btn:hover { border-color: #fff; color: #fff; }
.col-view-btn.active { background: #fff; color: #000; border-color: #fff; }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const ui = {
    search: document.getElementById('searchInput'),
    brand: document.getElementById('brandFilter'),
    year: document.getElementById('yearFilter'),
    series: document.getElementById('seriesFilter'),
    clearBtn: document.getElementById('clearFilters'),
    count: document.getElementById('resultsCount'),
    label: document.getElementById('resultsLabel'),
    container: document.getElementById('carsContainer'),
    noResults: document.getElementById('noResults'),
    viewBtns: document.querySelectorAll('.col-view-btn'),
    items: Array.from(document.querySelectorAll('.car-item'))
  };

  /* Etiquetas únicas (value en minúsculas -> texto original) */
  const uniqueLabels = (valueKey, labelKey) => {
    const map = new Map();
    ui.items.forEach(el => {
      const v = el.dataset[valueKey];
      if (v) map.set(v, el.dataset[labelKey] || v);
    });
    return map;
  };

  const fillSelect = (select, map, sorter) => {
    [...map.entries()].sort(sorter).forEach(([value, text]) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = text;
      select.appendChild(opt);
    });
  };

  const byLabel = (a, b) => a[1].localeCompare(b[1], 'es');
  const brands = uniqueLabels('brand', 'brandLabel');
  const series = uniqueLabels('series', 'seriesLabel');
  const years = uniqueLabels('year', 'year');

  fillSelect(ui.brand, brands, byLabel);
  fillSelect(ui.series, series, byLabel);
  fillSelect(ui.year, years, (a, b) => b[0].localeCompare(a[0], undefined, { numeric: true }));

  /* Estadísticas */
  const special = ui.items.filter(el => el.dataset.rarity && !['normal', 'común'].includes(el.dataset.rarity)).length;
  document.getElementById('totalBrands').textContent = brands.size;
  document.getElementById('totalSeries').textContent = series.size;
  document.getElementById('premiumCount').textContent = special;

  const applyFilters = () => {
    const term = ui.search.value.toLowerCase().trim();
    const b = ui.brand.value, y = ui.year.value, s = ui.series.value;
    let visible = 0;

    ui.items.forEach(el => {
      const ds = el.dataset;
      const show = (term === '' || ds.search.includes(term)) &&
                   (b === 'all' || ds.brand === b) &&
                   (y === 'all' || ds.year === y) &&
                   (s === 'all' || ds.series === s);
      el.hidden = !show;
      if (show) visible++;
    });

    ui.count.textContent = visible;
    ui.label.textContent = visible === 1 ? 'modelo' : 'modelos';
    ui.noResults.classList.toggle('hidden', visible !== 0);
    ui.clearBtn.hidden = !(term || b !== 'all' || y !== 'all' || s !== 'all');
  };

  ui.viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ui.viewBtns.forEach(o => {
        const on = o === btn;
        o.classList.toggle('active', on);
        o.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      ui.container.className = `cars-grid-new ${btn.dataset.view === 'list' ? 'view-list' : 'view-grid'}`;
    });
  });

  ui.search.addEventListener('input', applyFilters);
  [ui.brand, ui.year, ui.series].forEach(sel => sel.addEventListener('change', applyFilters));

  ui.clearBtn.addEventListener('click', () => {
    ui.search.value = '';
    ui.brand.value = ui.year.value = ui.series.value = 'all';
    applyFilters();
    ui.search.focus();
  });

  applyFilters();
});
</script>
