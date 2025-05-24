---
layout: custom
title: Mi Colección de Autos
permalink: /coleccion
---

<section class="section">
  <h1>Mi Colección de Autos a Escala</h1>
  <p class="collection-intro">Una pasión que comenzó en la infancia y que sigue creciendo. Aquí documento mi colección de Hot Wheels y otros autos a escala, con detalles de cada modelo, año de adquisición y datos curiosos.</p>
  
  <!-- Estadísticas de la colección -->
  <div class="collection-stats">
    <div class="stat-card">
      <div class="stat-number" id="totalCars">{{ site.coches.size }}</div>
      <div class="stat-label">Total de Modelos</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" id="totalBrands">0</div>
      <div class="stat-label">Marcas</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" id="totalSeries">0</div>
      <div class="stat-label">Series</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" id="newestYear">0</div>
      <div class="stat-label">Año Más Reciente</div>
    </div>
  </div>
</section>

<section class="section">
  <!-- Controles de búsqueda y filtros -->
  <div class="collection-controls">
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Buscar por nombre, modelo, serie..." class="search-input">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>
    
    <div class="view-toggle">
      <button class="view-btn active" data-view="grid" title="Vista en cuadrícula">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
      <button class="view-btn" data-view="list" title="Vista en lista">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3" y2="6"></line>
          <line x1="3" y1="12" x2="3" y2="12"></line>
          <line x1="3" y1="18" x2="3" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
  
  <!-- Filtros -->
  <div class="filters-container">
    <div class="filter-group">
      <label for="brandFilter">Marca:</label>
      <select id="brandFilter" class="filter-select">
        <option value="all">Todas las marcas</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="yearFilter">Año:</label>
      <select id="yearFilter" class="filter-select">
        <option value="all">Todos los años</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="seriesFilter">Serie:</label>
      <select id="seriesFilter" class="filter-select">
        <option value="all">Todas las series</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="colorFilter">Color:</label>
      <select id="colorFilter" class="filter-select">
        <option value="all">Todos los colores</option>
      </select>
    </div>
    
    <button id="clearFilters" class="clear-filters-btn">Limpiar filtros</button>
  </div>
  
  <!-- Resultados -->
  <div class="results-info">
    <span id="resultsCount">{{ site.coches.size }}</span> modelo(s) encontrado(s)
  </div>
  
  <!-- Grid/Lista de autos -->
  <div class="cars-container grid-view" id="carsContainer">
    {% for car in site.coches %}
    <div class="car-card" 
         data-brand="{{ car.marca | downcase }}" 
         data-year="{{ car.año }}" 
         data-series="{{ car.serie | downcase }}" 
         data-color="{{ car.color | downcase }}"
         data-search="{{ car.nombre | downcase }} {{ car.modelo | downcase }} {{ car.serie | downcase }} {{ car.marca | downcase }}">
      <a href="{{ car.url }}" class="car-link">
        <div class="car-image" style="background-image: url('{{ car.imagen | default: '/assets/img/coches/default-car.jpg' }}');"></div>
        <div class="car-info">
          <h3 class="car-name">{{ car.nombre }}</h3>
          <div class="car-meta">
            <span class="car-brand">{{ car.marca }}</span>
            <span class="car-year">{{ car.año }}</span>
          </div>
          <div class="car-series">{{ car.serie }}</div>
          {% if car.rareza %}
          <div class="car-rarity rarity-{{ car.rareza | downcase }}">{{ car.rareza }}</div>
          {% endif %}
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
  
  <!-- Lista view template (inicialmente oculta) -->
  <div class="cars-list hidden" id="carsList">
    {% for car in site.coches %}
    <div class="car-list-item"
         data-brand="{{ car.marca | downcase }}" 
         data-year="{{ car.año }}" 
         data-series="{{ car.serie | downcase }}" 
         data-color="{{ car.color | downcase }}"
         data-search="{{ car.nombre | downcase }} {{ car.modelo | downcase }} {{ car.serie | downcase }} {{ car.marca | downcase }}">
      <a href="{{ car.url }}" class="car-list-link">
        <div class="car-list-image" style="background-image: url('{{ car.imagen | default: '/assets/img/coches/default-car.jpg' }}');"></div>
        <div class="car-list-content">
          <h3 class="car-list-name">{{ car.nombre }}</h3>
          <div class="car-list-details">
            <span class="detail"><strong>Marca:</strong> {{ car.marca }}</span>
            <span class="detail"><strong>Año:</strong> {{ car.año }}</span>
            <span class="detail"><strong>Serie:</strong> {{ car.serie }}</span>
            <span class="detail"><strong>Color:</strong> {{ car.color }}</span>
            {% if car.numero_coleccion %}
            <span class="detail"><strong>#:</strong> {{ car.numero_coleccion }}</span>
            {% endif %}
          </div>
          {% if car.rareza %}
          <div class="car-rarity rarity-{{ car.rareza | downcase }}">{{ car.rareza }}</div>
          {% endif %}
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const cars = {{ site.coches | jsonify }};
  const searchInput = document.getElementById('searchInput');
  const brandFilter = document.getElementById('brandFilter');
  const yearFilter = document.getElementById('yearFilter');
  const seriesFilter = document.getElementById('seriesFilter');
  const colorFilter = document.getElementById('colorFilter');
  const clearFiltersBtn = document.getElementById('clearFilters');
  const resultsCount = document.getElementById('resultsCount');
  const carsContainer = document.getElementById('carsContainer');
  const carsList = document.getElementById('carsList');
  const viewBtns = document.querySelectorAll('.view-btn');
  
  let currentView = 'grid';
  
  // Inicializar filtros
  function initializeFilters() {
    const brands = [...new Set(cars.map(car => car.marca))].sort();
    const years = [...new Set(cars.map(car => car.año))].sort((a, b) => b - a);
    const series = [...new Set(cars.map(car => car.serie))].sort();
    const colors = [...new Set(cars.map(car => car.color))].sort();
    
    brands.forEach(brand => {
      const option = document.createElement('option');
      option.value = brand.toLowerCase();
      option.textContent = brand;
      brandFilter.appendChild(option);
    });
    
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });
    
    series.forEach(serie => {
      const option = document.createElement('option');
      option.value = serie.toLowerCase();
      option.textContent = serie;
      seriesFilter.appendChild(option);
    });
    
    colors.forEach(color => {
      const option = document.createElement('option');
      option.value = color.toLowerCase();
      option.textContent = color;
      colorFilter.appendChild(option);
    });
    
    // Actualizar estadísticas
    document.getElementById('totalBrands').textContent = brands.length;
    document.getElementById('totalSeries').textContent = series.length;
    document.getElementById('newestYear').textContent = Math.max(...years);
  }
  
  // Filtrar autos
  function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const brandValue = brandFilter.value;
    const yearValue = yearFilter.value;
    const seriesValue = seriesFilter.value;
    const colorValue = colorFilter.value;
    
    const container = currentView === 'grid' ? carsContainer : carsList;
    const items = container.querySelectorAll(currentView === 'grid' ? '.car-card' : '.car-list-item');
    
    let visibleCount = 0;
    
    items.forEach(item => {
      const searchData = item.dataset.search;
      const brand = item.dataset.brand;
      const year = item.dataset.year;
      const series = item.dataset.series;
      const color = item.dataset.color;
      
      const matchesSearch = searchData.includes(searchTerm);
      const matchesBrand = brandValue === 'all' || brand === brandValue;
      const matchesYear = yearValue === 'all' || year === yearValue;
      const matchesSeries = seriesValue === 'all' || series === seriesValue;
      const matchesColor = colorValue === 'all' || color === colorValue;
      
      const isVisible = matchesSearch && matchesBrand && matchesYear && matchesSeries && matchesColor;
      
      item.style.display = isVisible ? 'block' : 'none';
      if (isVisible) visibleCount++;
    });
    
    resultsCount.textContent = visibleCount;
  }
  
  // Cambiar vista
  function changeView(view) {
    currentView = view;
    
    viewBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    if (view === 'grid') {
      carsContainer.classList.remove('hidden');
      carsList.classList.add('hidden');
    } else {
      carsContainer.classList.add('hidden');
      carsList.classList.remove('hidden');
    }
    
    filterCars(); // Re-aplicar filtros en la nueva vista
  }
  
  // Limpiar filtros
  function clearFilters() {
    searchInput.value = '';
    brandFilter.value = 'all';
    yearFilter.value = 'all';
    seriesFilter.value = 'all';
    colorFilter.value = 'all';
    filterCars();
  }
  
  // Event listeners
  searchInput.addEventListener('input', filterCars);
  brandFilter.addEventListener('change', filterCars);
  yearFilter.addEventListener('change', filterCars);
  seriesFilter.addEventListener('change', filterCars);
  colorFilter.addEventListener('change', filterCars);
  clearFiltersBtn.addEventListener('click', clearFilters);
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => changeView(btn.dataset.view));
  });
  
  // Inicializar
  initializeFilters();
});
</script>
