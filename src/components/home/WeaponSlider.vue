<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import WeaponPreviewCard from './WeaponPreviewCard.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['select'])

const sliderTrack = ref(null)

function scrollTrack(direction) {
  sliderTrack.value?.scrollBy({
    left: direction * 360,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section class="section weapons" id="weapons">
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">Weapon Archive</p>
        <h2>兵器谱</h2>
        <p>六类兵器各有攻守节奏，先以图鉴结构收住战斗入口。</p>
      </div>
      <div class="weapon-slider__actions">
        <button type="button" aria-label="向左滑动兵器谱" @click="scrollTrack(-1)">‹</button>
        <button type="button" aria-label="向右滑动兵器谱" @click="scrollTrack(1)">›</button>
        <RouterLink class="button button--ghost" to="/skills">查看更多武学</RouterLink>
      </div>
    </div>

    <div ref="sliderTrack" class="weapon-slider__track" aria-label="兵器谱横向列表">
      <WeaponPreviewCard
        v-for="weapon in items"
        :key="weapon.id"
        :weapon="weapon"
        @select="emit('select', weapon)"
      />
    </div>
    <p class="weapon-slider__hint">横向滑动查看全部兵器</p>
  </section>
</template>
