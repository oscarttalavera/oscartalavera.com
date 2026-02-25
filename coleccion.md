---
layout: custom
title: Mi Colección de Autos
permalink: /coleccion
---

<div class="collection-wrapper">
  <!-- Hero Section -->
  <section class="collection-hero">
    <div class="hero-content">
      <h1 class="hero-title">Mi Colección de Autos a Escala</h1>
      <p class="hero-subtitle">Una pasión que comenzó en la infancia y sigue creciendo. Explora mi colección de modelos a escala, con detalles y curiosidades de cada pieza.</p>
    </div>
    
    <!-- Estadísticas flotantes tipo Glassmorphism -->
    <div class="collection-stats glass-panel">
      <div class="stat-item">
        <div class="stat-value" id="totalCars">{{ site.coches.size }}</div>
        <div class="stat-label">Modelos</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="totalBrands">0</div>
        <div class="stat-label">Marcas</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="totalSeries">0</div>
        <div class="stat-label">Series</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="premiumCount">0</div>
        <div class="stat-label">Ediciones Especiales</div>
      </div>
    </div>
  </section>

  <!-- Barra de controles -->
  <section class="controls-section glass-panel">
    <div class="search-bar">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
      <input type="text" id="searchInput" placeholder="Buscar modelo, tarjeta, serie, año...">
    </div>
    
    <div class="filters-wrap">
      <div class="filter-box">
        <select id="brandFilter" class="custom-select">
          <option value="all">Marcas</option>
        </select>
      </div>
      <div class="filter-box">
        <select id="seriesFilter" class="custom-select">
          <option value="all">Series</option>
        </select>
      </div>
      <div class="filter-box">
        <select id="yearFilter" class="custom-select">
          <option value="all">Año</option>
        </select>
      </div>
      <button id="clearFilters" class="btn-clear" title="Restablecer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
      </button>
    </div>

    <div class="view-toggles">
      <button class="view-btn active" data-view="grid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </button>
      <button class="view-btn" data-view="list">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
      </button>
    </div>
  </section>

  <!-- Contenedor Resultados -->
  <div class="results-banner">
    <span id="resultsCount">{{ site.coches.size }}</span> modelos encontrados
  </div>

  <!-- Contenedor de Tarjetas -->
  <div class="cars-grid view-grid" id="carsContainer">
    {% for car in site.coches %}
    <article class="car-item glow-card"
         data-brand="{{ car.marca | downcase }}" 
         data-year="{{ car.año }}" 
         data-series="{{ car.serie | downcase }}"
         data-rarity="{{ car.rareza | downcase }}"
         data-search="{{ car.nombre | downcase }} {{ car.modelo | downcase }} {{ car.serie | downcase }} {{ car.marca | downcase }}">
      <a href="{{ site.baseurl }}{{ car.url }}" class="car-anchor">
        <div class="car-img-box">
          <img src="{{ site.baseurl }}{{ car.imagen | default: '/assets/img/coches/default-car.jpg' }}" alt="{{ car.nombre }}" loading="lazy">
          {% if car.rareza %}
            <div class="car-badge rarity-badge" data-level="{{ car.rareza | downcase | replace: ' ', '-' }}">
              {{ car.rareza }}
            </div>
          {% endif %}
        </div>
        <div class="car-details">
          <div class="car-context">
            <span class="brand-tag">{{ car.marca }}</span>
            <span class="year-tag">{{ car.año }}</span>
          </div>
          <h3 class="car-title-text">{{ car.nombre }}</h3>
          <p class="car-series-text">{{ car.serie }} {% if car.numero_coleccion %} <span class="col-num">#{{ car.numero_coleccion }}</span>{% endif %}</p>
        </div>
        <div class="hover-indicator">Ver Detalles ➝</div>
      </a>
    </article>
    {% endfor %}
  </div>

  <!-- Estado Vacío -->
  <div id="noResults" class="empty-state" style="display: none;">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
    <h3>No encontramos modelos</h3>
    <p>Intenta cambiar los filtros o terminología.</p>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const cars = {{ site.coches | jsonify }};
  const ui = {
    search: document.getElementById('searchInput'),
    brand: document.getElementById('brandFilter'),
    year: document.getElementById('yearFilter'),
    series: document.getElementById('seriesFilter'),
    clearBtn: document.getElementById('clearFilters'),
    count: document.getElementById('resultsCount'),
    container: document.getElementById('carsContainer'),
    noResults: document.getElementById('noResults'),
    viewBtns: document.querySelectorAll('.view-btn'),
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
    ui.noResults.style.display = visible === 0 ? 'flex' : 'none';
  };

  ui.viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      ui.viewBtns.forEach(b => b.classList.remove('active'));
      const t = e.currentTarget;
      t.classList.add('active');
      const v = t.dataset.view;
      ui.container.className = `cars-grid view-${v}`;
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
