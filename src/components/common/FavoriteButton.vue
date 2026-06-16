<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '收藏',
  },
  modelValue: {
    type: Boolean,
    default: null,
  },
  activeLabel: {
    type: String,
    default: '已藏',
  },
  inactiveLabel: {
    type: String,
    default: '藏',
  },
})

const emit = defineEmits(['update:modelValue', 'toggle'])

const internalFavorited = ref(false)

const favorited = computed(() => props.modelValue ?? internalFavorited.value)

function toggleFavorite() {
  const nextValue = !favorited.value

  if (props.modelValue === null) {
    internalFavorited.value = nextValue
  }

  emit('update:modelValue', nextValue)
  emit('toggle', nextValue)
}
</script>

<template>
  <button
    class="favorite-button"
    :class="{ 'is-active': favorited }"
    type="button"
    :aria-pressed="favorited"
    @click.stop="toggleFavorite"
  >
    <span class="favorite-button__mark">{{ favorited ? props.activeLabel : props.inactiveLabel }}</span>
    <span>{{ props.label }}</span>
  </button>
</template>
