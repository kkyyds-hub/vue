<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="culture-section culture-trail">
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">Reading Trail</p>
        <h2>文化线索</h2>
        <p>这不是剧情时间线，而是从山河到人间的页面阅读路径。</p>
      </div>
    </div>

    <div class="culture-trail__list">
      <article v-for="(item, index) in items" :key="item.id" class="culture-trail__item">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>
