<script setup>
import FavoriteButton from '@/components/common/FavoriteButton.vue'

defineProps({
  weapon: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <article class="weapon-card" tabindex="0" @click="$emit('select', weapon)" @keydown.enter="$emit('select', weapon)">
    <div v-if="weapon.image" class="weapon-card__media">
      <img :src="weapon.image" :alt="`${weapon.name}武学画面`" loading="lazy" />
    </div>
    <div class="weapon-card__top">
      <span class="weapon-card__mark">{{ weapon.name.slice(0, 1) }}</span>
      <FavoriteButton label="入匣" />
    </div>
    <p class="weapon-card__role">{{ weapon.role }}</p>
    <h3>{{ weapon.name }}</h3>
    <p>{{ weapon.summary }}</p>
    <div class="weapon-card__tags">
      <span v-for="tag in weapon.tags" :key="tag">{{ tag }}</span>
    </div>
  </article>
</template>
