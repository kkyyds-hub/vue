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
  </component>
</template>
