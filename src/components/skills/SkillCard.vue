<script setup>
import FavoriteButton from '@/components/common/FavoriteButton.vue'

defineProps({
  skill: {
    type: Object,
    required: true,
  },
  favorited: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select', 'toggle-favorite'])
</script>

<template>
  <article
    class="skill-card"
    :class="{ 'is-selected': selected }"
    tabindex="0"
    @click="$emit('select', skill.id)"
    @keydown.enter="$emit('select', skill.id)"
  >
    <div v-if="skill.image" class="skill-card__media">
      <img
        :src="skill.image"
        :alt="skill.imageAlt || `${skill.name}官方武学图`"
        loading="lazy"
      />
      <span class="skill-card__source">{{ skill.sourceLabel || '官方图源' }}</span>
    </div>
    <div v-else class="skill-card__fallback">
      <span>{{ skill.name.slice(0, 1) }}</span>
      <small>{{ skill.sourceLabel || '文字题签 · 图源较少' }}</small>
    </div>

    <div class="skill-card__top">
      <span class="skill-card__glyph">{{ skill.name.slice(0, 1) }}</span>
      <FavoriteButton
        label="收藏"
        :model-value="favorited"
        @update:model-value="$emit('toggle-favorite', skill.id)"
      />
    </div>

    <div class="skill-card__meta">
      <span>{{ skill.category }}</span>
      <span>{{ skill.difficulty }}</span>
    </div>

    <h3>{{ skill.name }}</h3>
    <strong>{{ skill.role }}</strong>
    <p>{{ skill.summary }}</p>

    <div class="skill-card__tags">
      <span v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
    </div>

    <button class="skill-card__detail" type="button" @click.stop="$emit('select', skill.id)">
      查看详情
    </button>
  </article>
</template>
