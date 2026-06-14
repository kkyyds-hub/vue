<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppFooter from '@/components/common/AppFooter.vue'
import DetailModal from '@/components/common/DetailModal.vue'
import FeatureCard from '@/components/home/FeatureCard.vue'
import HeroBanner from '@/components/home/HeroBanner.vue'
import JianghuShowcase from '@/components/home/JianghuShowcase.vue'
import MapAreaCard from '@/components/home/MapAreaCard.vue'
import WeaponPreviewCard from '@/components/home/WeaponPreviewCard.vue'
import {
  featureCards,
  heroKeywords,
  mapAreas,
  scrollStats,
  showcasePanels,
  showcaseTabs,
  weaponPreviews,
} from '@/data/homeData'

const selectedWeapon = ref(null)

const featuredAreas = computed(() => mapAreas.filter((area) => area.status !== '未开放'))
const allAreas = computed(() => [...featuredAreas.value, ...mapAreas.filter((area) => area.status === '未开放')])

function openWeaponDetail(weapon) {
  selectedWeapon.value = weapon
}
</script>

<template>
  <main class="home-page">
    <HeroBanner :keywords="heroKeywords" :stats="scrollStats" />

    <section class="section features" id="features">
      <div class="section__heading">
        <p class="eyebrow">Core Archive</p>
        <h2>江湖资料，不止一面</h2>
        <p>围绕开放探索、武侠动作、文化建树与资料收藏，整理成适合课程作品展示的首页结构。</p>
      </div>
      <div class="feature-grid">
        <FeatureCard v-for="feature in featureCards" :key="feature.id" :feature="feature" />
      </div>
    </section>

    <JianghuShowcase :tabs="showcaseTabs" :panels="showcasePanels" />

    <section class="section weapons" id="weapons">
      <div class="section__heading section__heading--split">
        <div>
          <p class="eyebrow">Weapon Preview</p>
          <h2>武器 / 武学预览</h2>
          <p>首页先展示六个代表条目，完整图鉴后续再扩展筛选、收藏与详情页。</p>
        </div>
        <RouterLink class="button button--ghost" to="/skills">查看更多武学</RouterLink>
      </div>

      <div class="weapon-grid">
        <WeaponPreviewCard
          v-for="weapon in weaponPreviews"
          :key="weapon.id"
          :weapon="weapon"
          @select="openWeaponDetail"
        />
      </div>
    </section>

    <section class="section areas" id="areas">
      <div class="section__heading section__heading--split">
        <div>
          <p class="eyebrow">Map Route</p>
          <h2>山河探索入口</h2>
          <p>以 Qinghe / Kaifeng / Hexi 为轻量英文点缀，主体仍保持中文资料平台表达。</p>
        </div>
        <RouterLink class="button button--primary" to="/explore">进入探索</RouterLink>
      </div>

      <div v-if="allAreas.length" class="area-grid">
        <MapAreaCard v-for="area in allAreas" :key="area.id" :area="area" />
      </div>
      <p v-else class="empty-state">暂无区域资料，等待游侠继续发现。</p>
    </section>

    <AppFooter />
    <DetailModal :item="selectedWeapon" @close="selectedWeapon = null" />
  </main>
</template>
