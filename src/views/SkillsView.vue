<script setup>
import AppFooter from '@/components/common/AppFooter.vue'
import { weaponPreviews } from '@/data/homeData'

const skillSections = [
  {
    title: '兵器谱',
    summary: '六类兵器已接入首页展示，后续可继续补充图鉴条目、招式节奏与使用心得。',
  },
  {
    title: '奇术',
    summary: '太极、点穴、狮吼功等奇术共同拓展战斗与探索解法。',
  },
  {
    title: '流派',
    summary: '门派、心法与流派关系交织成更完整的武学脉络。',
  },
]
</script>

<template>
  <main class="sub-page">
    <section class="sub-hero">
      <p class="eyebrow">Martial Archive</p>
      <h1>武学图鉴</h1>
      <p>以兵器、奇术与流派为线索，整理进入江湖后的战斗资料。</p>
    </section>

    <section class="sub-section">
      <div class="sub-grid">
        <article v-for="section in skillSections" :key="section.title" class="sub-card">
          <span>{{ section.title.slice(0, 1) }}</span>
          <h2>{{ section.title }}</h2>
          <p>{{ section.summary }}</p>
        </article>
      </div>
    </section>

    <section class="sub-section sub-section--compact">
      <div class="section__heading">
        <p class="eyebrow">Weapon List</p>
        <h2>兵器条目</h2>
      </div>
      <div class="sub-list">
        <article v-for="weapon in weaponPreviews" :key="weapon.id" class="sub-list__item">
          <strong>{{ weapon.name }}</strong>
          <span>{{ weapon.role }}</span>
          <p>{{ weapon.summary }}</p>
        </article>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
