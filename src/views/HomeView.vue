<script setup>
import { ref } from 'vue'
import AppFooter from '@/components/common/AppFooter.vue'
import DetailModal from '@/components/common/DetailModal.vue'
import FeatureCard from '@/components/home/FeatureCard.vue'
import HeroBanner from '@/components/home/HeroBanner.vue'
import JianghuShowcase from '@/components/home/JianghuShowcase.vue'
import WeaponSlider from '@/components/home/WeaponSlider.vue'
import WorldScenesCarousel from '@/components/home/WorldScenesCarousel.vue'
import {
  featureCards,
  heroKeywords,
  showcasePanels,
  showcaseTabs,
  weaponPreviews,
  worldScenes,
} from '@/data/homeData'

const selectedWeapon = ref(null)

function openWeaponDetail(weapon) {
  selectedWeapon.value = weapon
}
</script>

<template>
  <main class="home-page">
    <HeroBanner :keywords="heroKeywords" />

    <section class="section features" id="features">
      <div class="section__heading">
        <p class="eyebrow">Core Archive</p>
        <h2>江湖资料，不止一面</h2>
        <p>收录山河、武学、奇术与人间百业，以一页卷宗打开燕云江湖。</p>
      </div>
      <div class="feature-grid">
        <FeatureCard v-for="feature in featureCards" :key="feature.id" :feature="feature" />
      </div>
    </section>

    <JianghuShowcase :tabs="showcaseTabs" :panels="showcasePanels" />

    <WorldScenesCarousel :items="worldScenes" />

    <WeaponSlider :items="weaponPreviews" @select="openWeaponDetail" />

    <AppFooter />
    <DetailModal :item="selectedWeapon" @close="selectedWeapon = null" />
  </main>
</template>
