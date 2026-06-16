<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  hero: {
    type: Object,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="explore-hero" :style="{ '--explore-hero-image': `url(${hero.image})` }">
    <div class="explore-hero__shade"></div>
    <div class="explore-hero__content">
      <p class="eyebrow">Landscape Archive</p>
      <h1>{{ hero.title }}</h1>
      <p class="explore-hero__subtitle">{{ hero.subtitle }}</p>

      <div class="explore-hero__actions">
        <a class="button button--primary" href="#region-archive">开始阅卷</a>
        <RouterLink class="button button--ghost" to="/">返回首页</RouterLink>
      </div>
    </div>

    <div class="explore-hero__stats" aria-label="山河图志统计">
      <div v-for="stat in stats" :key="stat.value" class="explore-hero__stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>
