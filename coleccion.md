---
layout: custom
title: Mi Colección de Autos
permalink: /coleccion
---

<!-- Hero -->
<section class="py-32 px-6 lg:px-24 bg-black" id="coleccion-hero">
  <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    <div>
      <span class="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4 italic">Archivo personal</span>
      <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Colección</h1>
    </div>
    <p class="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
      Una pasión que comenzó en la infancia y sigue creciendo. Modelos a escala con historia.
    </p>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 border border-white/10 mb-12">
    <div class="py-8 px-6 border-r border-b md:border-b-0 border-white/10 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2">{{ site.coches.size }}</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Modelos</div>
    </div>
    <div class="py-8 px-6 border-b md:border-b-0 md:border-r border-white/10 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2" id="totalBrands">0</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Marcas</div>
    </div>
    <div class="py-8 px-6 border-r border-white/10 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2" id="totalSeries">0</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Series</div>
    </div>
    <div class="py-8 px-6 text-center">
      <div class="text-4xl md:text-5xl font-black mb-2" id="premiumCount">0</div>
      <div class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Especiales</div>
    </div>
  </div>
</section>

<!-- Controles -->
<section class="sticky top-[60px] z-50 bg-black border-y border-white/10 px-6 lg:px-24 py-4 flex flex-wrap gap-4 items-center">
  <!-- Search -->
  <div class="flex items-center gap-3 flex-1 min-w-[200px] border border-white/20 px-4 py-2 focus-within:border-white transition-colors">
    <svg class="w-4 h-4 text-zinc-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
    <input type="text" id="searchInput" placeholder="Buscar modelo, marca, serie..." class="bg-transparent border-none outline-none w-full text-sm text-white placeholder-zinc-600 font-light">
  </div>

  <!-- Filters -->
  <div class="flex gap-2 flex-wrap">
    <select id="brandFilter" class="bg-black border border-white/20 text-zinc-400 text-[11px] uppercase tracking-widest px-3 py-2 outline-none hover:border-white transition-colors cursor-pointer">
      <option value="all">Marca</option>
    </select>
    <select id="seriesFilter" class="bg-black border border-white/20 text-zinc-400 text-[11px] uppercase tracking-widest px-3 py-2 outline-none hover:border-white transition-colors cursor-pointer">
      <option value="all">Serie</option>
    </select>
    <select id="yearFilter" class="bg-black border border-white/20 text-zinc-400 text-[11px] uppercase tracking-widest px-3 py-2 outline-none hover:border-white transition-colors cursor-pointer">
      <option value="all">Año</option>
    </select>
    <button id="clearFilters" title="Restablecer filtros" class="border border-white/20 text-zinc-400 px-3 py-2 hover:border-white hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
    </button>
  </div>

  <!-- View toggle -->
  <div class="flex gap-1 ml-auto">
    <button class="col-view-btn active w-9 h-9 border border-white flex items-center justify-center transition-colors" data-view="grid">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    </button>
    <button class="col-view-btn w-9 h-9 border border-white/20 text-zinc-500 flex items-center justify-center transition-colors hover:border-white hover:text-white" data-view="list">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
    </button>
  </div>

  <!-- Count -->
  <span class="text-[10px] uppercase tracking-widest text-zinc-600 font-bold"><span id="resultsCount">{{ site.coches.size }}</span> modelos</span>
</section>

<!-- Colección -->
<section class="px-6 lg:px-24 py-12 bg-black">
  <!-- Cars grid -->
  <div class="cars-grid-new grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0" id="carsContainer">
    {% for car in site.coches %}
    <article class="car-item group border border-white/10 hover:border-white transition-all duration-300 relative overflow-hidden"
         data-brand="{{ car.marca | downcase }}"
         data-year="{{ car.año }}"
         data-series="{{ car.serie | downcase }}"
         data-rarity="{{ car.rareza | downcase }}"
         data-search="{{ car.nombre | downcase }} {{ car.modelo | downcase }} {{ car.serie | downcase }} {{ car.marca | downcase }}">
      <a href="{{ site.baseurl }}{{ car.url }}" class="block">
        <!-- Imagen -->
        <div class="w-full aspect-square bg-zinc-900 overflow-hidden">
          <img src="{{ site.baseurl }}{{ car.imagen | default: '/assets/img/coches/default-car.jpg' }}" alt="{{ car.nombre }}" loading="lazy" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105">
        </div>
        <!-- Info -->
        <div class="p-4 border-t border-white/10 group-hover:border-white transition-colors">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[9px] font-bold uppercase tracking-widest text-zinc-500">{{ car.marca }}</span>
            <span class="text-[9px] text-zinc-600">{{ car.año }}</span>
          </div>
          <h3 class="text-sm font-bold leading-tight mb-1">{{ car.nombre }}</h3>
          <p class="text-[10px] text-zinc-600">{{ car.serie }}{% if car.numero_coleccion %} <span class="font-mono">#{{ car.numero_coleccion }}</span>{% endif %}</p>
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
        <div class="absolute inset-0 flex items-center justify-center bg-white/0 group-hover:bg-white/0 transition-all pointer-events-none">
          <span class="material-symbols-outlined text-2xl opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 bg-white text-black p-1 text-sm">north_east</span>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>

  <!-- Estado vacío -->
  <div id="noResults" class="hidden border border-white/10 p-16 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" class="mx-auto mb-4"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
    <p class="text-zinc-600 uppercase tracking-widest text-sm">Sin resultados</p>
  </div>
</section>

<style>
.cars-grid-new {
  display: grid;
}
.cars-grid-new.view-grid {
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 768px) {
  .cars-grid-new.view-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1024px) {
  .cars-grid-new.view-grid { grid-template-columns: repeat(4, 1fr); }
}
.cars-grid-new.view-list {
  grid-template-columns: 1fr;
}
.cars-grid-new.view-list .car-item a {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cars-grid-new.view-list .car-item .w-full.aspect-square {
  width: 120px;
  height: 90px;
  aspect-ratio: unset;
  flex-shrink: 0;
}
.col-view-btn.active {
  background: #fff;
  color: #000;
  border-color: #fff;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const cars = [
    {% for car in site.coches %}
    {
      "marca": {{ car.marca | jsonify | default: '""' }},
      "año": {{ car.año | jsonify | default: '""' }},
      "serie": {{ car.serie | jsonify | default: '""' }},
      "rareza": {{ car.rareza | jsonify | default: '""' }}
    }{% if forloop.last == false %},{% endif %}
    {% endfor %}
  ];

  const ui = {
    search: document.getElementById('searchInput'),
    brand: document.getElementById('brandFilter'),
    year: document.getElementById('yearFilter'),
    series: document.getElementById('seriesFilter'),
    clearBtn: document.getElementById('clearFilters'),
    count: document.getElementById('resultsCount'),
    container: document.getElementById('carsContainer'),
    noResults: document.getElementById('noResults'),
    viewBtns: document.querySelectorAll('.col-view-btn'),
    items: document.querySelectorAll('.car-item')
  };

  const populateSelect = (selectElem, optionsMap) => {
    const sorted = [...new Set(optionsMap.filter(Boolean))].sort();
    sorted.forEach(val => {
      const opt = document.createElement('option');
      opt.value = val.toString().toLowerCase();
      opt.textContent = val;
      selectElem.appendChild(opt);
    });
  };

  const initData = () => {
    const brands = cars.map(c => c.marca);
    const years = cars.map(c => c.año).sort((a,b) => b - a);
    const series = cars.map(c => c.serie);

    populateSelect(ui.brand, brands);
    const uniqueYears = [...new Set(years.filter(Boolean))];
    uniqueYears.forEach(y => {
      const opt = document.createElement('option');
      opt.value = y.toString();
      opt.textContent = y;
      ui.year.appendChild(opt);
    });
    populateSelect(ui.series, series);

    document.getElementById('totalBrands').innerText = [...new Set(brands.filter(Boolean))].length;
    document.getElementById('totalSeries').innerText = [...new Set(series.filter(Boolean))].length;
    const premiumCount = cars.filter(c => c.rareza && c.rareza.toLowerCase() !== 'normal' && c.rareza.toLowerCase() !== 'común').length;
    document.getElementById('premiumCount').innerText = premiumCount;
  };

  const applyFilters = () => {
    const term = ui.search.value.toLowerCase().trim();
    const b = ui.brand.value;
    const y = ui.year.value;
    const s = ui.series.value;
    let visible = 0;

    ui.items.forEach(el => {
      const ds = el.dataset;
      const matchTerm = term === '' || ds.search.includes(term);
      const matchB = b === 'all' || ds.brand === b;
      const matchY = y === 'all' || ds.year === y;
      const matchS = s === 'all' || ds.series === s;

      if (matchTerm && matchB && matchY && matchS) {
        el.style.display = '';
        setTimeout(() => el.style.opacity = '1', 10);
        visible++;
      } else {
        el.style.opacity = '0';
        setTimeout(() => el.style.display = 'none', 300);
      }
    });

    ui.count.innerText = visible;
    ui.noResults.style.display = visible === 0 ? 'block' : 'none';
    ui.noResults.classList.toggle('hidden', visible !== 0);
  };

  // Init grid view
  ui.container.classList.add('view-grid');

  ui.viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      ui.viewBtns.forEach(b => {
        b.classList.remove('active');
        b.classList.add('border-white/20', 'text-zinc-500');
        b.classList.remove('border-white', 'text-black', 'bg-white');
      });
      const t = e.currentTarget;
      t.classList.add('active');
      t.classList.remove('border-white/20', 'text-zinc-500');
      const v = t.dataset.view;
      ui.container.className = `cars-grid-new ${v === 'grid' ? 'view-grid' : 'view-list'}`;
    });
  });

  ui.search.addEventListener('input', applyFilters);
  ui.brand.addEventListener('change', applyFilters);
  ui.year.addEventListener('change', applyFilters);
  ui.series.addEventListener('change', applyFilters);

  ui.clearBtn.addEventListener('click', () => {
    ui.search.value = '';
    ui.brand.value = 'all';
    ui.year.value = 'all';
    ui.series.value = 'all';
    applyFilters();
  });

  initData();
});
</script>
