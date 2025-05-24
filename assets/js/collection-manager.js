// collection-manager.js
// Script auxiliar para gestión avanzada de la colección

class CollectionManager {
  constructor(cars) {
    this.cars = cars || [];
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateAdvancedStats();
  }

  bindEvents() {
    // Event listeners para funcionalidades avanzadas
    const exportBtn = document.getElementById('exportCollection');
    const importBtn = document.getElementById('importCollection');
    const statsBtn = document.getElementById('showAdvancedStats');

    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportCollection());
    }

    if (importBtn) {
      importBtn.addEventListener('click', () => this.importCollection());
    }

    if (statsBtn) {
      statsBtn.addEventListener('click', () => this.showAdvancedStats());
    }
  }

  // Estadísticas avanzadas
  getAdvancedStats() {
    const stats = {
      totalValue: 0,
      averagePrice: 0,
      brandDistribution: {},
      yearDistribution: {},
      rarityDistribution: {},
      seriesDistribution: {},
      colorDistribution: {},
      acquisitionTrend: {},
      mostExpensive: null,
      oldestCar: null,
      newestAcquisition: null
    };

    this.cars.forEach(car => {
      // Valor total y promedio
      if (car.precio) {
        stats.totalValue += parseFloat(car.precio);
      }

      // Distribución por marca
      stats.brandDistribution[car.marca] = (stats.brandDistribution[car.marca] || 0) + 1;

      // Distribución por año
      stats.yearDistribution[car.año] = (stats.yearDistribution[car.año] || 0) + 1;

      // Distribución por rareza
      if (car.rareza) {
        stats.rarityDistribution[car.rareza] = (stats.rarityDistribution[car.rareza] || 0) + 1;
      }

      // Distribución por serie
      stats.seriesDistribution[car.serie] = (stats.seriesDistribution[car.serie] || 0) + 1;

      // Distribución por color
      stats.colorDistribution[car.color] = (stats.colorDistribution[car.color] || 0) + 1;

      // Tendencia de adquisición
      if (car.fecha_adquisicion) {
        const year = new Date(car.fecha_adquisicion).getFullYear();
        stats.acquisitionTrend[year] = (stats.acquisitionTrend[year] || 0) + 1;
      }

      // Auto más caro
      if (car.precio && (!stats.mostExpensive || parseFloat(car.precio) > parseFloat(stats.mostExpensive.precio))) {
        stats.mostExpensive = car;
      }

      // Auto más antiguo (por año de fabricación)
      if (!stats.oldestCar || car.año < stats.oldestCar.año) {
        stats.oldestCar = car;
      }

      // Adquisición más reciente
      if (car.fecha_adquisicion && (!stats.newestAcquisition || new Date(car.fecha_adquisicion) > new Date(stats.newestAcquisition.fecha_adquisicion))) {
        stats.newestAcquisition = car;
      }
    });

    // Calcular promedio
    const carsWithPrice = this.cars.filter(car => car.precio);
    stats.averagePrice = carsWithPrice.length > 0 ? stats.totalValue / carsWithPrice.length : 0;

    return stats;
  }

  updateAdvancedStats() {
    const stats = this.getAdvancedStats();
    
    // Actualizar elementos en el DOM si existen
    const totalValueEl = document.getElementById('totalCollectionValue');
    const averagePriceEl = document.getElementById('averageCarPrice');
    const mostExpensiveEl = document.getElementById('mostExpensiveCar');

    if (totalValueEl) {
      totalValueEl.textContent = `$${stats.totalValue.toFixed(2)}`;
    }

    if (averagePriceEl) {
      averagePriceEl.textContent = `$${stats.averagePrice.toFixed(2)}`;
    }

    if (mostExpensiveEl && stats.mostExpensive) {
      mostExpensiveEl.textContent = `${stats.mostExpensive.nombre} - $${stats.mostExpensive.precio}`;
    }
  }

  // Mostrar estadísticas avanzadas en modal
  showAdvancedStats() {
    const stats = this.getAdvancedStats();
    
    const modal = document.createElement('div');
    modal.className = 'stats-modal';
    modal.innerHTML = `
      <div class="stats-modal-content">
        <div class="stats-modal-header">
          <h2>Estadísticas Avanzadas</h2>
          <button class="close-modal">&times;</button>
        </div>
        <div class="stats-modal-body">
          <div class="stats-grid">
            <div class="stat-section">
              <h3>Financiero</h3>
              <p><strong>Valor total:</strong> $${stats.totalValue.toFixed(2)}</p>
              <p><strong>Precio promedio:</strong> $${stats.averagePrice.toFixed(2)}</p>
              <p><strong>Más caro:</strong> ${stats.mostExpensive ? `${stats.mostExpensive.nombre} ($${stats.mostExpensive.precio})` : 'N/A'}</p>
            </div>
            
            <div class="stat-section">
              <h3>Top 5 Marcas</h3>
              ${this.getTopItems(stats.brandDistribution, 5).map(item => 
                `<p><strong>${item.name}:</strong> ${item.count} modelos</p>`
              ).join('')}
            </div>
            
            <div class="stat-section">
              <h3>Por Rareza</h3>
              ${Object.entries(stats.rarityDistribution).map(([rarity, count]) => 
                `<p><strong>${rarity}:</strong> ${count} modelos</p>`
              ).join('')}
            </div>
            
            <div class="stat-section">
              <h3>Adquisiciones por Año</h3>
              ${Object.entries(stats.acquisitionTrend).sort(([a], [b]) => b - a).map(([year, count]) => 
                `<p><strong>${year}:</strong> ${count} autos</p>`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Cerrar modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  getTopItems(distribution, limit = 5) {
    return Object.entries(distribution)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit)
      .map(([name, count]) => ({ name, count }));
  }

  // Exportar colección a JSON
  exportCollection(format = 'json') {
    const data = {
      exported_at: new Date().toISOString(),
      total_cars: this.cars.length,
      stats: this.getAdvancedStats(),
      cars: this.cars
    };

    let content, filename, mimeType;

    switch (format) {
      case 'json':
        content = JSON.stringify(data, null, 2);
        filename = `coleccion-autos-${new Date().toISOString().split('T')[0]}.json`;
        mimeType = 'application/json';
        break;
      
      case 'csv':
        content = this.generateCSV();
        filename = `coleccion-autos-${new Date().toISOString().split('T')[0]}.csv`;
        mimeType = 'text/csv';
        break;
        
      default:
        throw new Error('Formato no soportado');
    }

    this.downloadFile(content, filename, mimeType);
  }

  generateCSV() {
    const headers = [
      'Nombre', 'Marca', 'Año', 'Serie', 'Color', 'Número', 'Rareza', 
      'Estado', 'Precio', 'Fecha Adquisición', 'Lugar Compra'
    ];

    const rows = this.cars.map(car => [
      car.nombre || '',
      car.marca || '',
      car.año || '',
      car.serie || '',
      car.color || '',
      car.numero_coleccion || '',
      car.rareza || '',
      car.estado || '',
      car.precio || '',
      car.fecha_adquisicion || '',
      car.lugar_compra || ''
    ]);

    return [headers, ...rows].map(row => 
      row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
  }

  downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  }

  // Buscar duplicados
  findDuplicates() {
    const duplicates = [];
    const seen = new Map();

    this.cars.forEach((car, index) => {
      const key = `${car.nombre}-${car.marca}-${car.año}`;
      
      if (seen.has(key)) {
        duplicates.push({
          original: seen.get(key),
          duplicate: { ...car, index }
        });
      } else {
        seen.set(key, { ...car, index });
      }
    });

    return duplicates;
  }

  // Validar datos faltantes
  validateData() {
    const issues = [];
    const requiredFields = ['nombre', 'marca', 'año'];

    this.cars.forEach((car, index) => {
      const missing = requiredFields.filter(field => !car[field]);
      
      if (missing.length > 0) {
        issues.push({
          index,
          car: car.nombre || `Auto #${index + 1}`,
          missing
        });
      }
    });

    return issues;
  }

  // Generar reporte de colección
  generateReport() {
    const stats = this.getAdvancedStats();
    const duplicates = this.findDuplicates();
    const issues = this.validateData();

    return {
      summary: {
        total_cars: this.cars.length,
        total_value: stats.totalValue,
        average_price: stats.averagePrice,
        unique_brands: Object.keys(stats.brandDistribution).length,
        unique_series: Object.keys(stats.seriesDistribution).length
      },
      quality: {
        duplicates: duplicates.length,
        missing_data: issues.length,
        completeness: ((this.cars.length - issues.length) / this.cars.length * 100).toFixed(1) + '%'
      },
      distributions: {
        brands: stats.brandDistribution,
        years: stats.yearDistribution,
        rarities: stats.rarityDistribution
      },
      issues: {
        duplicates,
        missing_data: issues
      }
    };
  }
}

// Inicializar el gestor de colección cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  // Solo inicializar en páginas de colección
  if (window.location.pathname.includes('/coleccion') && typeof window.collectionData !== 'undefined') {
    window.collectionManager = new CollectionManager(window.collectionData);
  }
});

// Estilos para el modal de estadísticas
const statsModalStyles = `
.stats-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.stats-modal-content {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stats-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stats-modal-header h2 {
  margin: 0;
  color: var(--collection-accent);
}

.close-modal {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-light);
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-modal:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-accent);
}

.stats-modal-body {
  padding: var(--spacing-md);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.stat-section {
  background-color: rgba(255, 255, 255, 0.02);
  padding: var(--spacing-sm);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-section h3 {
  margin: 0 0 var(--spacing-sm);
  color: var(--text-accent);
  font-size: 1.1rem;
}

.stat-section p {
  margin: var(--spacing-xs) 0;
  font-size: 0.9rem;
  color: var(--text-light);
}
`;

// Agregar estilos al documento
if (!document.getElementById('stats-modal-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'stats-modal-styles';
  styleSheet.textContent = statsModalStyles;
  document.head.appendChild(styleSheet);
}
