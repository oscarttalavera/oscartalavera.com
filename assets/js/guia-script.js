// Script para la Guía de Organización del Festival de Asado
// Maneja la funcionalidad interactiva como marcar tareas, editar elementos
// y guardar el progreso en localStorage

document.addEventListener('DOMContentLoaded', function() {
  // Objeto para almacenar todos los datos de la guía
  let guideData = {
    sections: {},         // Almacena todas las secciones y elementos con su estado
    contacts: {},         // Información de contactos personalizados
    notes: '',            // Notas personales
    lastUpdated: new Date().toISOString()
  };
  
  // Variables para el modo de edición
  let currentEditingItem = null;  // Elemento actual en edición
  let currentSection = null;      // Sección actual para agregar elementos
  
  // Inicialización de elementos DOM
  initializeElements();
  
  // Cargar datos guardados y actualizar la interfaz
  loadSavedData();
  updateProgress();
  
  // Función para inicializar elementos y eventos
  function initializeElements() {
    // Abrir el primer acordeón por defecto
    const firstAccordion = document.querySelector('.accordion-item');
    if (firstAccordion) {
      firstAccordion.classList.add('active');
    }
    
    // Inicializar eventos para checkboxes
    initCheckboxes();
    
    // Inicializar botones de edición
    initEditButtons();
    
    // Inicializar modales
    initModals();
    
    // Inicializar pestañas del programa
    initTabs();
    
    // Inicializar acordeón
    initAccordion();
    
    // Inicializar controles principales
    initMainControls();
    
    // Inicializar gestión de contactos
    initContactsManagement();
  }
  
  // Inicializar eventos para checkboxes
  function initCheckboxes() {
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const listItem = this.closest('li');
        if (this.checked) {
          listItem.classList.add('completed');
        } else {
          listItem.classList.remove('completed');
        }
        updateProgress();
        saveData();
      });
    });
  }
  
  // Inicializar botones de edición
  function initEditButtons() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const listItem = this.closest('li');
        const itemId = listItem.dataset.item;
        const sectionId = listItem.closest('.guide-section').id;
        const itemText = listItem.querySelector('label').textContent.trim();
        const itemNotes = listItem.querySelector('.notes').textContent;
        
        document.getElementById('itemText').value = itemText;
        document.getElementById('itemNotes').value = itemNotes;
        
        currentEditingItem = {
          element: listItem,
          id: itemId,
          section: sectionId
        };
        
        document.getElementById('editModal').style.display = 'block';
      });
    });
  }
  
  // Inicializar modales
  function initModals() {
    // Cerrar modales
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        document.getElementById('editModal').style.display = 'none';
        document.getElementById('addItemModal').style.display = 'none';
        document.getElementById('addContactModal').style.display = 'none';
      });
    });
    
    // Botón guardar edición
    document.getElementById('saveEditBtn').addEventListener('click', function() {
      if (!currentEditingItem) return;
      
      const newText = document.getElementById('itemText').value.trim();
      const newNotes = document.getElementById('itemNotes').value.trim();
      
      if (newText) {
        currentEditingItem.element.querySelector('label').textContent = newText;
        currentEditingItem.element.querySelector('.notes').textContent = newNotes;
        
        // Actualizar en el objeto de datos
        if (!guideData.sections[currentEditingItem.section]) {
          guideData.sections[currentEditingItem.section] = {};
        }
        
        guideData.sections[currentEditingItem.section][currentEditingItem.id] = {
          text: newText,
          notes: newNotes,
          completed: currentEditingItem.element.querySelector('input[type="checkbox"]').checked
        };
        
        saveData();
        showToast('Elemento actualizado');
      }
      
      document.getElementById('editModal').style.display = 'none';
    });
    
    // Cancelar edición
    document.getElementById('cancelEditBtn').addEventListener('click', function() {
      document.getElementById('editModal').style.display = 'none';
    });
    
    // Botones para agregar elementos
    document.querySelectorAll('.add-item-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        currentSection = this.closest('.guide-section').id;
        document.getElementById('addItemModal').style.display = 'block';
        document.getElementById('newItemText').focus();
      });
    });
    
    // Confirmar agregar elemento
    document.getElementById('addItemConfirmBtn').addEventListener('click', function() {
      const newItemText = document.getElementById('newItemText').value.trim();
      const newItemNotes = document.getElementById('newItemNotes').value.trim();
      
      if (newItemText && currentSection) {
        addCustomItem(currentSection, newItemText, newItemNotes);
        
        // Limpiar y cerrar modal
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemNotes').value = '';
        document.getElementById('addItemModal').style.display = 'none';
      }
    });
    
    // Cancelar agregar elemento
    document.getElementById('cancelAddBtn').addEventListener('click', function() {
      document.getElementById('addItemModal').style.display = 'none';
    });
    
    // Confirmar agregar contacto
    document.getElementById('addContactConfirmBtn').addEventListener('click', function() {
      const contactLabel = document.getElementById('contactLabel').value.trim();
      const contactValue = document.getElementById('contactValue').value.trim();
      
      if (contactLabel && contactValue) {
        addCustomContact(contactLabel, contactValue);
        
        // Limpiar y cerrar modal
        document.getElementById('contactLabel').value = '';
        document.getElementById('contactValue').value = '';
        document.getElementById('addContactModal').style.display = 'none';
      }
    });
    
    // Cancelar agregar contacto
    document.getElementById('cancelContactBtn').addEventListener('click', function() {
      document.getElementById('addContactModal').style.display = 'none';
    });
  }
  
  // Inicializar pestañas del programa
  function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // Ocultar todas las pestañas
        document.querySelectorAll('.tab-content').forEach(tab => {
          tab.classList.add('hidden');
        });
        
        // Desactivar todos los botones
        document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Mostrar la pestaña seleccionada
        document.getElementById(tabId).classList.remove('hidden');
        this.classList.add('active');
      });
    });
  }
  
  // Inicializar acordeón
  function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle('active');
      });
    });
  }
  
  // Inicializar controles principales
  function initMainControls() {
    // Guardar notas personales
    document.getElementById('saveNotesBtn').addEventListener('click', function() {
      guideData.notes = document.getElementById('personalNotes').value;
      saveData();
      showToast('Notas guardadas');
    });
    
    // Guardar progreso manualmente
    document.getElementById('saveBtn').addEventListener('click', function() {
      saveData();
      showToast('Progreso guardado');
    });
    
    // Imprimir guía
    document.getElementById('printBtn').addEventListener('click', function() {
      window.print();
    });
    
    // Resetear progreso
    document.getElementById('resetBtn').addEventListener('click', function() {
      if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Esta acción no se puede deshacer.')) {
        resetData();
        showToast('Progreso reiniciado');
      }
    });
  }
  
  // Inicializar gestión de contactos
  function initContactsManagement() {
    // Agregar contacto
    document.getElementById('addContactBtn').addEventListener('click', function() {
      document.getElementById('addContactModal').style.display = 'block';
    });
    
    // Escuchar cambios en inputs de contactos
    document.addEventListener('change', function(e) {
      if (e.target.classList.contains('contact-input') && e.target.classList.contains('editable')) {
        const contactItem = e.target.closest('.contact-item');
        if (contactItem) {
          const contactId = contactItem.dataset.contact;
          const contactLabel = contactItem.querySelector('label').textContent.replace(':', '');
          
          if (contactId && guideData.contacts[contactId]) {
            guideData.contacts[contactId].value = e.target.value;
            saveData();
          } else if (contactLabel) {
            // Para los contactos predefinidos
            document.querySelectorAll('.contacts-container .contact-item').forEach((item, index) => {
              if (item === contactItem) {
                if (!guideData.contacts.predefined) {
                  guideData.contacts.predefined = {};
                }
                guideData.contacts.predefined[index] = {
                  label: contactLabel,
                  value: e.target.value
                };
              }
            });
            saveData();
          }
        }
      }
    });
  }
  
  // FUNCIONES AUXILIARES
  
  // Agregar elemento personalizado a una sección
  function addCustomItem(sectionId, text, notes = '') {
    // Crear ID único para el elemento
    const timestamp = new Date().getTime();
    const itemId = `custom_${timestamp}`;
    
    // Crear nuevo elemento en la lista
    const listItem = document.createElement('li');
    listItem.dataset.item = itemId;
    listItem.classList.add('custom-item');
    listItem.innerHTML = `
      <label><input type="checkbox"> ${text}</label>
      <button class="edit-btn"><i class="fas fa-edit"></i></button>
      <span class="notes">${notes}</span>
    `;
    
    // Agregar a la lista correspondiente
    const sectionList = document.querySelector(`#${sectionId} ul.checklist`);
    sectionList.appendChild(listItem);
    
    // Actualizar en el objeto de datos
    if (!guideData.sections[sectionId]) {
      guideData.sections[sectionId] = {};
    }
    
    guideData.sections[sectionId][itemId] = {
      text: text,
      notes: notes,
      completed: false,
      custom: true
    };
    
    // Agregar event listeners
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
      updateProgress();
      saveData();
    });
    
    const editBtn = listItem.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
      const itemText = listItem.querySelector('label').textContent.trim();
      const itemNotes = listItem.querySelector('.notes').textContent;
      
      document.getElementById('itemText').value = itemText;
      document.getElementById('itemNotes').value = itemNotes;
      
      currentEditingItem = {
        element: listItem,
        id: itemId,
        section: sectionId
      };
      
      document.getElementById('editModal').style.display = 'block';
    });
    
    saveData();
    updateProgress();
    showToast('Elemento agregado');
    
    return listItem;
  }
  
  // Agregar contacto personalizado
  function addCustomContact(label, value) {
    // Crear ID único para el contacto
    const timestamp = new Date().getTime();
    const contactId = `contact_${timestamp}`;
    
    // Crear nuevo elemento de contacto
    const contactItem = document.createElement('div');
    contactItem.className = 'contact-item';
    contactItem.dataset.contact = contactId;
    contactItem.innerHTML = `
      <label>${label}:</label>
      <input type="text" value="${value}" class="contact-input editable">
    `;
    
    // Agregar justo antes del botón de agregar
    const contactContainer = document.querySelector('.contacts-container');
    contactContainer.insertBefore(contactItem, document.getElementById('addContactBtn').parentElement);
    
    // Actualizar en el objeto de datos
    guideData.contacts[contactId] = {
      label: label,
      value: value
    };
    
    saveData();
    showToast('Contacto agregado');
    
    return contactItem;
  }
  
  // Actualizar el indicador de progreso
  function updateProgress() {
    let totalItems = 0;
    let completedItems = 0;
    
    document.querySelectorAll('.checklist li').forEach(item => {
      totalItems++;
      if (item.classList.contains('completed')) {
        completedItems++;
      }
    });
    
    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}% completado (${completedItems}/${totalItems})`;
  }
  
  // Guardar datos en localStorage
  function saveData() {
    // Actualizar el objeto de datos con el estado actual
    document.querySelectorAll('.guide-section').forEach(section => {
      const sectionId = section.id;
      
      if (!guideData.sections[sectionId]) {
        guideData.sections[sectionId] = {};
      }
      
      section.querySelectorAll('.checklist li').forEach(item => {
        const itemId = item.dataset.item;
        const isChecked = item.querySelector('input[type="checkbox"]').checked;
        const itemText = item.querySelector('label').textContent.trim();
        const itemNotes = item.querySelector('.notes').textContent;
        
        guideData.sections[sectionId][itemId] = {
          text: itemText,
          notes: itemNotes,
          completed: isChecked,
          custom: item.classList.contains('custom-item')
        };
      });
    });
    
    // Actualizar fecha de modificación
    guideData.lastUpdated = new Date().toISOString();
    
    // Guardar en localStorage
    localStorage.setItem('asadoGuideData', JSON.stringify(guideData));
  }
  
  // Cargar datos guardados
  function loadSavedData() {
    const savedData = localStorage.getItem('asadoGuideData');
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        guideData = parsedData;
        
        // Aplicar estados guardados a los elementos
        Object.keys(guideData.sections).forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            Object.keys(guideData.sections[sectionId]).forEach(itemId => {
              const itemData = guideData.sections[sectionId][itemId];
              let listItem = section.querySelector(`li[data-item="${itemId}"]`);
              
              // Si es un elemento personalizado y no existe, crearlo
              if (itemData.custom && !listItem) {
                addCustomItem(sectionId, itemData.text, itemData.notes);
                listItem = section.querySelector(`li[data-item="${itemId}"]`);
              }
              
              // Actualizar estado si el elemento existe
              if (listItem) {
                const checkbox = listItem.querySelector('input[type="checkbox"]');
                checkbox.checked = itemData.completed;
                
                if (itemData.completed) {
                  listItem.classList.add('completed');
                } else {
                  listItem.classList.remove('completed');
                }
                
                // Actualizar notas para elementos predefinidos
                listItem.querySelector('.notes').textContent = itemData.notes;
              }
            });
          }
        });
        
        // Cargar contactos personalizados
        Object.keys(guideData.contacts).forEach(contactId => {
          if (contactId === 'predefined') {
            // Manejar contactos predefinidos
            Object.keys(guideData.contacts.predefined).forEach(index => {
              const contactData = guideData.contacts.predefined[index];
              const contactItems = document.querySelectorAll('.contacts-container .contact-item');
              
              if (contactItems[index]) {
                const input = contactItems[index].querySelector('.contact-input.editable');
                if (input) {
                  input.value = contactData.value;
                }
              }
            });
          } else if (contactId !== 'predefined' && guideData.contacts[contactId]) {
            // Contactos personalizados
            const contactData = guideData.contacts[contactId];
            const existingContact = document.querySelector(`.contact-item[data-contact="${contactId}"]`);
            
            if (!existingContact) {
              addCustomContact(contactData.label, contactData.value);
            }
          }
        });
        
        // Cargar notas personales
        if (guideData.notes) {
          document.getElementById('personalNotes').value = guideData.notes;
        }
        
        console.log('Datos cargados de localStorage:', guideData);
      } catch (error) {
        console.error('Error al cargar datos guardados:', error);
      }
    }
  }
  
  // Reiniciar todos los datos
  function resetData() {
    // Reiniciar todos los checkboxes
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
      const listItem = checkbox.closest('li');
      listItem.classList.remove('completed');
    });
    
    // Eliminar elementos personalizados
    document.querySelectorAll('.custom-item').forEach(item => {
      item.remove();
    });
    
    // Reiniciar notas
    document.querySelectorAll('.notes').forEach(note => {
      note.textContent = '';
    });
    
    // Reiniciar contactos personalizados
    document.querySelectorAll('.contact-item[data-contact]').forEach(item => {
      item.remove();
    });
    
    // Reiniciar campos de contacto predefinidos
    document.querySelectorAll('.contacts-container .contact-input.editable').forEach(input => {
      input.value = '';
    });
    
    // Reiniciar notas personales
    document.getElementById('personalNotes').value = '';
    
    // Reiniciar objeto de datos
    guideData = {
      sections: {},
      contacts: {},
      notes: '',
      lastUpdated: new Date().toISOString()
    };
    
    // Borrar localStorage
    localStorage.removeItem('asadoGuideData');
    
    // Actualizar contador de progreso
    updateProgress();
  }
  
  // Mostrar notificación toast
  function showToast(message) {
    const toast = document.getElementById('saveToast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});
