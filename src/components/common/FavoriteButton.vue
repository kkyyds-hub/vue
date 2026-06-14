<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '收藏',
  },
})

const favorited = ref(false)
</script>

<template>
  <button
    class="favorite-button"
    :class="{ 'is-active': favorited }"
    type="button"
    :aria-pressed="favorited"
    @click.stop="favorited = !favorited"
  >
    <span class="favorite-button__mark">{{ favorited ? '已藏' : '藏' }}</span>
    <span>{{ props.label }}</span>
  </button>
</template>
