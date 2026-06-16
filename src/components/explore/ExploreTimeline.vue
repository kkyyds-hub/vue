<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="explore-section explore-timeline-section">
    <div class="section__heading">
      <p class="eyebrow">Route Chapter</p>
      <h2>探索路线</h2>
      <p>不写攻略步骤，只按风貌顺序串起清河、开封、河西与不见山。</p>
    </div>

    <div class="explore-timeline">
      <article v-for="(item, index) in items" :key="item.id" class="explore-timeline__item">
        <span class="explore-timeline__index">{{ String(index + 1).padStart(2, '0') }}</span>
        <div>
          <small>{{ item.keyword }}</small>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
