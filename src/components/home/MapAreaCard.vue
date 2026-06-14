<script setup>
defineProps({
  area: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="area-card">
    <div class="area-card__meta">
      <span>{{ area.status }}</span>
      <small>{{ area.english }}</small>
    </div>
    <h3>{{ area.name }}</h3>
    <p>{{ area.summary }}</p>
    <div class="area-card__keywords">
      <span v-for="keyword in area.keywords" :key="keyword">{{ keyword }}</span>
    </div>
    <p class="area-card__more">{{ area.more }}</p>
  </article>
</template>
