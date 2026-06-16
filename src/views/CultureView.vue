<script setup>
import { computed, ref } from 'vue'
import AppFooter from '@/components/common/AppFooter.vue'
import CultureDetailPanel from '@/components/culture/CultureDetailPanel.vue'
import CultureFeatureGrid from '@/components/culture/CultureFeatureGrid.vue'
import CultureHero from '@/components/culture/CultureHero.vue'
import CultureTimeline from '@/components/culture/CultureTimeline.vue'
import {
  cultureEntries,
  cultureHero,
  cultureOverviewCards,
  cultureReadingTrail,
} from '@/data/cultureData'

const activeCultureId = ref(cultureEntries[0]?.id ?? '')

const currentCulture = computed(
  () => cultureEntries.find((entry) => entry.id === activeCultureId.value) || cultureEntries[0],
)

function selectCulture(id) {
  activeCultureId.value = id
}
</script>

<template>
  <main class="culture-page">
    <CultureHero :hero="cultureHero" />

    <section class="culture-section culture-overview">
      <div class="section__heading section__heading--split">
        <div>
          <p class="eyebrow">Cultural Frame</p>
          <h2>什么是“十六声”</h2>
          <p>它不是单一乐律典故，而是把山河、器物、建筑、礼俗、工艺、医药、历史与人间百态统合为文明之声。</p>
        </div>
      </div>

      <div class="culture-overview__grid">
        <article v-for="card in cultureOverviewCards" :key="card.id" class="culture-overview-card">
          <span>{{ card.enName }}</span>
          <h3>{{ card.title }}</h3>
          <p>{{ card.summary }}</p>
        </article>
      </div>
    </section>

    <section class="culture-section culture-archive" id="culture-index">
      <div class="section__heading section__heading--split">
        <div>
          <p class="eyebrow">Culture Index</p>
          <h2>文化索引</h2>
          <p>以展示性归纳梳理十六声文化主题，点击卡片查看图源、关键词与适用页面。</p>
        </div>
      </div>

      <div class="culture-archive__shell">
        <CultureFeatureGrid
          :entries="cultureEntries"
          :active-id="activeCultureId"
          @select="selectCulture"
        />

        <Transition name="panel-slide" mode="out-in">
          <CultureDetailPanel
            v-if="currentCulture"
            :key="currentCulture.id"
            :entry="currentCulture"
          />
        </Transition>
      </div>
    </section>

    <CultureTimeline :items="cultureReadingTrail" />
    <AppFooter />
  </main>
</template>
