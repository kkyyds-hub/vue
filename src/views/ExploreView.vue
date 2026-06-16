<script setup>
import { computed, ref } from 'vue'
import AppFooter from '@/components/common/AppFooter.vue'
import CultureIndex from '@/components/explore/CultureIndex.vue'
import ExploreHero from '@/components/explore/ExploreHero.vue'
import ExploreTimeline from '@/components/explore/ExploreTimeline.vue'
import RegionDetailPanel from '@/components/explore/RegionDetailPanel.vue'
import RegionNavigator from '@/components/explore/RegionNavigator.vue'
import RegionVisualPanel from '@/components/explore/RegionVisualPanel.vue'
import { cultureIndexes, exploreHero, exploreRegions, exploreStats, exploreTimeline } from '@/data/exploreData'

const activeRegionId = ref(exploreRegions[0]?.id ?? '')

const currentRegion = computed(
  () => exploreRegions.find((region) => region.id === activeRegionId.value) || exploreRegions[0],
)

function selectRegion(regionId) {
  activeRegionId.value = regionId
}
</script>

<template>
  <main class="explore-page">
    <ExploreHero :hero="exploreHero" :stats="exploreStats" />

    <section class="explore-section region-archive" id="region-archive">
      <div class="section__heading section__heading--split">
        <div>
          <p class="eyebrow">Region Archive</p>
          <h2>核心区域导览</h2>
          <p>以区域档案面板展开四境风貌：左侧选卷，中间观图，右侧读取关键词与探索线索。</p>
        </div>
      </div>

      <div class="region-archive__shell">
        <RegionNavigator :regions="exploreRegions" :active-id="activeRegionId" @select="selectRegion" />

        <Transition name="region-image-fade" mode="out-in">
          <RegionVisualPanel v-if="currentRegion" :key="currentRegion.id" :region="currentRegion" />
        </Transition>

        <Transition name="panel-slide" mode="out-in">
          <RegionDetailPanel v-if="currentRegion" :key="`${currentRegion.id}-detail`" :region="currentRegion" />
        </Transition>
      </div>
    </section>

    <ExploreTimeline :items="exploreTimeline" />
    <CultureIndex :items="cultureIndexes" />

    <AppFooter />
  </main>
</template>
