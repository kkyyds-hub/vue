<script setup>
defineProps({
  feature: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="feature-card">
    <div class="feature-card__head">
      <span>{{ feature.label }}</span>
      <small>{{ feature.english }}</small>
    </div>
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.summary }}</p>
    <ul>
      <li v-for="point in feature.points" :key="point">{{ point }}</li>
    </ul>
  </article>
</template>
