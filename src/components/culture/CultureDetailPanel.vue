<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  entry: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <aside v-if="entry" class="culture-detail-panel">
    <div class="culture-detail-panel__image">
      <img :src="entry.image" :alt="entry.imageAlt" loading="lazy" />
      <span>{{ entry.sourceLabel || entry.riskNote }}</span>
    </div>

    <div class="culture-detail-panel__content">
      <p class="eyebrow">Culture File · {{ entry.enName }}</p>
      <h2>{{ entry.name }}</h2>
      <strong>{{ entry.category }}</strong>
      <p>{{ entry.summary }}</p>

      <section>
        <h3>视觉关键词</h3>
        <div class="culture-detail-panel__chips">
          <span v-for="keyword in entry.visualKeywords" :key="keyword">{{ keyword }}</span>
        </div>
      </section>

      <section>
        <h3>适合出现的页面</h3>
        <div class="culture-detail-panel__chips">
          <span v-for="page in entry.suitablePages" :key="page">{{ page }}</span>
        </div>
      </section>

      <dl>
        <div>
          <dt>来源可信度</dt>
          <dd>{{ entry.sourceConfidence }}</dd>
        </div>
        <div>
          <dt>来源说明</dt>
          <dd>{{ entry.sourceNote }}</dd>
        </div>
        <div>
          <dt>图片备注</dt>
          <dd>{{ entry.riskNote }}</dd>
        </div>
      </dl>

      <div class="culture-detail-panel__links">
        <RouterLink class="button button--ghost" to="/explore">进入山河图志</RouterLink>
        <RouterLink class="button button--ghost" to="/skills">进入武学图鉴</RouterLink>
      </div>
    </div>
  </aside>
</template>
