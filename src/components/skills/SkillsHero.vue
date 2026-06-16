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

defineEmits(['show-all'])
</script>

<template>
  <section class="skills-hero" :style="{ '--skills-hero-image': `url(${hero.image})` }">
    <div class="skills-hero__content">
      <p class="eyebrow">Martial Archive</p>
      <h1>{{ hero.title }}</h1>
      <p>{{ hero.subtitle }}</p>
      <div class="skills-hero__actions">
        <button class="button button--primary" type="button" @click="$emit('show-all')">查看全部</button>
        <RouterLink class="button button--ghost" to="/">返回首页</RouterLink>
      </div>
    </div>

    <div class="skills-hero__stats">
      <article v-for="stat in stats" :key="stat.label" class="skills-hero__stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </article>
    </div>
  </section>
</template>
