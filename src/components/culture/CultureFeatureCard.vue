<script setup>
defineProps({
  entry: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select'])
</script>

<template>
  <button
    class="culture-feature-card"
    :class="{ 'is-active': active }"
    type="button"
    :aria-pressed="active"
    @click="$emit('select', entry.id)"
  >
    <figure class="culture-feature-card__media">
      <img :src="entry.image" :alt="entry.imageAlt" loading="lazy" />
      <figcaption>{{ entry.sourceLabel || entry.riskNote }}</figcaption>
    </figure>
    <div class="culture-feature-card__body">
      <small>{{ entry.enName }}</small>
      <h3>{{ entry.name }}</h3>
      <p>{{ entry.summary }}</p>
      <span class="culture-feature-card__badge">{{ entry.riskNote }}</span>
      <div>
        <em v-for="tag in entry.tags" :key="tag">{{ tag }}</em>
      </div>
    </div>
  </button>
</template>
