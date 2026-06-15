<script setup>
import AppFooter from '@/components/common/AppFooter.vue'
import { worldScenes } from '@/data/homeData'

const exploreSections = ['山河风貌', '城郭烟火', '奇术谜境', '文化万象']
</script>

<template>
  <main class="sub-page">
    <section class="sub-hero">
      <p class="eyebrow">World Route</p>
      <h1>江湖探索</h1>
      <p>以风貌画面为索引，整理山河、城郭、谜境与文化线索。</p>
    </section>

    <section class="sub-section">
      <div class="sub-grid">
        <article v-for="section in exploreSections" :key="section" class="sub-card">
          <span>{{ section.slice(0, 1) }}</span>
          <h2>{{ section }}</h2>
          <p>沿着画面线索进入山河图志，串联区域、风物与探索主题。</p>
        </article>
      </div>
    </section>

    <section class="sub-section sub-section--compact">
      <div class="section__heading">
        <p class="eyebrow">Scene Index</p>
        <h2>风貌索引</h2>
      </div>
      <div class="sub-list">
        <article v-for="scene in worldScenes" :key="scene.id" class="sub-list__item">
          <strong>{{ scene.title }}</strong>
          <span>{{ scene.tags.join(' / ') }}</span>
          <p>{{ scene.subtitle }}</p>
        </article>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
