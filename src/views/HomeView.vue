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

    <WorldScenesCarousel :items="worldScenes" />

    <section class="section features" id="features">
      <div class="section__heading">
        <p class="eyebrow">Core Archive</p>
        <h2>江湖资料，不止一面</h2>
        <p>以山河风貌为起点，进入武学、奇术与文化万象交织的燕云江湖。</p>
      </div>
      <div class="feature-grid">
        <FeatureCard v-for="feature in featureCards" :key="feature.id" :feature="feature" />
      </div>
    </section>

    <JianghuShowcase :tabs="showcaseTabs" :panels="showcasePanels" />

    <WeaponSlider :items="weaponPreviews" @select="openWeaponDetail" />

    <AppFooter />
    <DetailModal :item="selectedWeapon" @close="selectedWeapon = null" />
  </main>
</template>
