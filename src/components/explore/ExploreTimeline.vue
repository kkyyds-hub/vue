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
        <figure v-if="item.image" class="explore-timeline__media">
          <img :src="item.image" :alt="item.imageAlt || `${item.title}路线图`" loading="lazy" />
          <figcaption>{{ item.sourceLabel || '官方图源' }}</figcaption>
        </figure>
        <div class="explore-timeline__body">
          <span class="explore-timeline__index">{{ String(index + 1).padStart(2, '0') }}</span>
          <small>{{ item.keyword }}</small>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
