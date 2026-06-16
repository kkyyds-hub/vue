<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
})

const componentType = computed(() => (props.feature.to ? RouterLink : 'a'))
const linkProps = computed(() => (props.feature.to ? { to: props.feature.to } : { href: props.feature.href }))
</script>

<template>
  <component :is="componentType" class="feature-card feature-card--link" v-bind="linkProps">
    <div v-if="feature.image" class="feature-card__media">
      <img :src="feature.image" :alt="feature.imageAlt || `${feature.title}入口图`" loading="lazy" />
      <span v-if="feature.sourceLabel">{{ feature.sourceLabel }}</span>
    </div>
    <div v-else class="feature-card__fallback" aria-hidden="true">
      <span>{{ feature.label }}</span>
      <small>文字题签</small>
    </div>

    <div class="feature-card__body">
      <div class="feature-card__head">
        <span>{{ feature.label }}</span>
        <small>{{ feature.english }}</small>
      </div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.summary }}</p>
      <ul>
        <li v-for="point in feature.points" :key="point">{{ point }}</li>
      </ul>
      <span class="feature-card__go">进入栏目</span>
    </div>
  </component>
</template>
