# Sitio Personal de Oscar Talavera

Repositorio oficial para el sitio web personal de Oscar Talavera ([oscartalavera.com](https://www.oscartalavera.com)). Este sitio actúa como portafolio, blog y colección de proyectos personales.

## 🛠 Tecnologías

El sitio está construido estáticamente utilizando:
* **Jekyll:** Generador de sitios estáticos.
* **Theme:** Minima (personalizado).
* **Hosting:** GitHub Pages.
* **Plugins:**
    * `jekyll-feed`
    * `jekyll-seo-tag`

## 📂 Estructura del Proyecto

* `_posts/`: Entradas del blog (Textos).
* `_recetas/`: Colección personalizada para el recetario.
* `_coches/`: Colección personalizada para la sección de autos.
* `assets/`: Recursos estáticos (CSS, JS, Imágenes, Fuentes).
* `_layouts/`: Plantillas HTML (default, post, recipe, car).
* `_includes/`: Fragmentos reutilizables (header, footer, meta tags).

## 🚀 Instalación y Desarrollo Local

Para ejecutar este sitio en tu máquina local:

1.  **Prerrequisitos:** Asegúrate de tener Ruby y Bundler instalados.
2.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/oscarttalavera/oscartalavera.com.git](https://github.com/oscarttalavera/oscartalavera.com.git)
    cd oscartalavera.com
    ```
3.  **Instalar dependencias:**
    ```bash
    bundle install
    ```
4.  **Ejecutar el servidor local:**
    ```bash
    bundle exec jekyll serve
    ```
5.  Visita `http://localhost:4000` en tu navegador.

## 🎨 Personalización

Los estilos principales se encuentran modularizados en `assets/css/`:
* `style.css`: Estilos globales (tokens, menú, accesibilidad, contenedor de páginas de lectura).
* `post.css`, `recipe.css`, `collection.css`: Estilos específicos por layout (`post`, `recipe` y `car`).

El maquetado de las páginas de listado (inicio, textos, recetario, colección) usa Tailwind por CDN directamente en cada `.md`.

## 📄 Licencia

© Oscar Talavera. Todos los derechos reservados sobre el contenido y los textos.
