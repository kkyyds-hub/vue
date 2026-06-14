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
        <p class="eyebrow">Weapon Slider</p>
        <h2>武学与兵器</h2>
        <p>从兵器到奇术，预览不同流派的战斗节奏与江湖气质。</p>
      </div>
      <div class="weapon-slider__actions">
        <button type="button" aria-label="向左滑动武学与兵器" @click="scrollTrack(-1)">‹</button>
        <button type="button" aria-label="向右滑动武学与兵器" @click="scrollTrack(1)">›</button>
        <RouterLink class="button button--ghost" to="/skills">查看更多武学</RouterLink>
      </div>
    </div>

    <div ref="sliderTrack" class="weapon-slider__track" aria-label="武学与兵器横向列表">
      <WeaponPreviewCard
        v-for="weapon in items"
        :key="weapon.id"
        :weapon="weapon"
        @select="emit('select', weapon)"
      />
    </div>
  </section>
</template>
