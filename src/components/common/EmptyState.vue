<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="empty-state" role="status">
    <span class="empty-state__seal">空</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
