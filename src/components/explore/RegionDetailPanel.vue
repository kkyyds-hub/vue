<script setup>
defineProps({
  region: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <aside v-if="region" class="region-detail-panel">
    <p class="eyebrow">Region File · {{ region.enName }}</p>
    <h2>{{ region.name }}</h2>
    <strong class="region-detail-panel__title">{{ region.title }}</strong>

    <div class="region-detail-panel__keywords" aria-label="区域关键词">
      <span v-for="keyword in region.keywords" :key="keyword">{{ keyword }}</span>
    </div>

    <p class="region-detail-panel__summary">{{ region.summary }}</p>

    <p v-if="region.visualNote" class="region-detail-panel__source">{{ region.visualNote }}</p>

    <div class="region-detail-panel__clues">
      <h3>探索线索</h3>
      <ul>
        <li v-for="clue in region.clues" :key="clue">{{ clue }}</li>
      </ul>
    </div>
  </aside>
</template>
