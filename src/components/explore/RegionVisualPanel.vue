<script setup>
defineProps({
  region: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <figure v-if="region" class="region-visual-panel">
    <img :src="region.image" :alt="region.imageAlt" />
    <span v-if="region.sourceBadge" class="region-visual-panel__badge">{{ region.sourceBadge }}</span>
    <figcaption>
      <span>{{ region.tone }}</span>
      <strong>{{ region.name }}</strong>
      <small>{{ region.visualNote }}</small>
    </figcaption>
  </figure>
</template>
