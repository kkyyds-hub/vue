<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  hero: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="culture-hero" :style="{ '--culture-hero-image': `url(${hero.image})` }">
    <div class="culture-hero__shade"></div>
    <div class="culture-hero__content">
      <p class="eyebrow">{{ hero.eyebrow }}</p>
      <h1>{{ hero.title }}</h1>
      <p>{{ hero.subtitle }}</p>
      <div class="culture-hero__actions">
        <a class="button button--primary" href="#culture-index">浏览文化索引</a>
        <RouterLink class="button button--ghost" to="/">返回首页</RouterLink>
      </div>
    </div>
  </section>
</template>
