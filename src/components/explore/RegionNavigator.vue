<script setup>
defineProps({
  regions: {
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
  <nav class="region-nav" aria-label="山河区域">
    <button
      v-for="region in regions"
      :key="region.id"
      class="region-nav__item"
      :class="{ 'is-active': region.id === activeId }"
      type="button"
      @click="$emit('select', region.id)"
    >
      <span>{{ region.status }}</span>
      <strong>{{ region.name }}</strong>
      <small>{{ region.enName }}</small>
    </button>
  </nav>
</template>
