---
layout: custom
title: Textos
permalink: /textos
---

<!-- Hero -->
<section class="py-32 px-6 lg:px-24" id="textos-hero">
  <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    <div>
      <span class="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4 italic">Archivo personal</span>
      <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Textos</h1>
    </div>
    <p class="text-zinc-500 text-sm max-w-xs uppercase tracking-widest leading-loose">
      Ideas, reflexiones y notas escritas. Algunas cortas, otras no tanto.
    </p>
  </div>

  <!-- Grid de Posts -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
    {% for post in site.posts %}
    <article class="group border border-white/10 p-10 hover:bg-white hover:text-black transition-all duration-500 relative flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-start mb-8">
          <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600">{{ post.date | date: "%d %b %Y" }}{% if post.tags.size > 0 %} / {{ post.tags[0] }}{% endif %}</span>
          <span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
        </div>
        <h2 class="text-2xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-8">{{ post.title }}</h2>
        {% if post.description %}
          <p class="text-zinc-400 group-hover:text-zinc-600 font-light leading-relaxed text-sm">{{ post.description | truncatewords: 20 }}</p>
        {% elsif post.excerpt %}
          <p class="text-zinc-400 group-hover:text-zinc-600 font-light leading-relaxed text-sm">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        {% endif %}
      </div>
      {% if post.image %}
      <div class="w-full h-[180px] bg-black overflow-hidden mt-8">
        <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style="background-image: url('{{ post.image }}')"></div>
      </div>
      {% else %}
      <div class="w-full h-[180px] bg-black overflow-hidden mt-8">
        <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style="background-image: url('/assets/img/conocimiento.jpg')"></div>
      </div>
      {% endif %}
      <a href="{{ post.url }}" class="absolute inset-0 z-10"><span class="sr-only">Leer: {{ post.title }}</span></a>
    </article>
    {% endfor %}
  </div>

  {% if site.posts.size == 0 %}
  <div class="border border-white/10 p-16 text-center">
    <p class="text-zinc-500 uppercase tracking-widest text-sm">Próximamente</p>
  </div>
  {% endif %}

  <p class="mt-16 text-[10px] uppercase tracking-widest text-white/20 italic">
    Los textos en este sitio están inspirados por mí y escritos con asistencia de inteligencia artificial.
  </p>
</section>
