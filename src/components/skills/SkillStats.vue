<script setup>
defineProps({
  stats: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="skill-stats" aria-label="武学图鉴统计">
    <span>条目 {{ stats.total }}</span>
    <span>收藏 {{ stats.favorites }}</span>
    <span>分类 {{ stats.categories }}</span>
    <span>结果 {{ stats.results }}</span>
  </div>
</template>
