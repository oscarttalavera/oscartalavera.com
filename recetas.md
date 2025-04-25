---
layout: custom
title: Recetario
---

<section class="section">
  <h2>Mi Recetario</h2>
  <p class="recetas-intro">Una colección de recetas que voy recopilando, algunas propias y otras de fuentes diversas, todas probadas y aprobadas.</p>
</section>

<section class="section">
  <div class="recipe-filters">
    <button class="filter-btn active" data-filter="all">Todas</button>
    <button class="filter-btn" data-filter="desayuno">Desayuno</button>
    <button class="filter-btn" data-filter="comida">Comida</button>
    <button class="filter-btn" data-filter="cena">Cena</button>
    <button class="filter-btn" data-filter="postre">Postres</button>
    <button class="filter-btn" data-filter="bebida">Bebidas</button>
  </div>
  
  <div class="recipe-grid">
    {% for recipe in site.recetas %}
    <div class="recipe-card" data-categories="{{ recipe.categories | join: ' ' }}">
      <a href="{{ recipe.url }}">
        <div class="recipe-thumb" style="background-image: url('{{ recipe.image }}');"></div>
        <div class="recipe-content">
          <h3>{{ recipe.title }}</h3>
          <div class="recipe-meta">
            <span class="prep-time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              {{ recipe.tiempo_prep }}
            </span>
            <span class="difficulty">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              {{ recipe.dificultad }}
            </span>
          </div>
          <div class="recipe-tags">
            {% for category in recipe.categories %}
            <span class="recipe-tag">{{ category }}</span>
            {% endfor %}
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    // Filtrar recetas
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        // Actualizar botones activos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filtrar recetas
        recipeCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else {
            const categories = card.getAttribute('data-categories');
            if (categories.includes(filterValue)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  });
</script>
