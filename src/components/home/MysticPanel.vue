<script setup>
defineProps({
  panel: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="showcase-panel showcase-panel--mystic">
    <div class="showcase-panel__copy">
      <p class="eyebrow">Mystic</p>
      <h3>{{ panel.title }}</h3>
      <p>{{ panel.subtitle }}</p>
      <ul>
        <li v-for="point in panel.points" :key="point">{{ point }}</li>
      </ul>
    </div>
    <figure v-if="panel.image" class="showcase-panel__media">
      <img :src="panel.image" :alt="panel.imageAlt || `${panel.title}奇术图`" loading="lazy" />
      <figcaption>{{ panel.sourceLabel || '官方图源' }}</figcaption>
    </figure>
  </article>
</template>
