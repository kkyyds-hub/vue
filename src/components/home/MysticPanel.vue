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
    <p class="eyebrow">Mystic</p>
    <h3>{{ panel.title }}</h3>
    <p>{{ panel.subtitle }}</p>
    <ul>
      <li v-for="point in panel.points" :key="point">{{ point }}</li>
    </ul>
  </article>
</template>
