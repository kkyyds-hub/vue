<script setup>
import CultureFeatureCard from './CultureFeatureCard.vue'

defineProps({
  entries: {
    type: Array,
    required: true,
  },
  activeId: {
    type: String,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <div class="culture-feature-grid">
    <CultureFeatureCard
      v-for="entry in entries"
      :key="entry.id"
      :entry="entry"
      :active="entry.id === activeId"
      @select="$emit('select', $event)"
    />
  </div>
</template>
