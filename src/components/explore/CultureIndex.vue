<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeCultureId = ref(props.items[0]?.id ?? '')

const activeCulture = computed(() => props.items.find((item) => item.id === activeCultureId.value) || props.items[0])
</script>

<template>
  <section class="explore-section culture-index-section">
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">Culture Index</p>
        <h2>十六声文化索引</h2>
        <p>用更轻的索引方式，把建筑、器物、天象、医术与市井线索放回山河之中。</p>
      </div>
    </div>

    <div class="culture-index">
      <div class="culture-index__tabs" role="tablist" aria-label="文化索引">
        <button
          v-for="item in items"
          :key="item.id"
          type="button"
          :class="{ 'is-active': item.id === activeCultureId }"
          :aria-selected="item.id === activeCultureId"
          @click="activeCultureId = item.id"
        >
          {{ item.name }}
        </button>
      </div>

      <Transition name="panel-slide" mode="out-in">
        <article v-if="activeCulture" :key="activeCulture.id" class="culture-index__detail">
          <p class="eyebrow">{{ activeCulture.enName }}</p>
          <h3>{{ activeCulture.name }}</h3>
          <p>{{ activeCulture.summary }}</p>
        </article>
      </Transition>
    </div>
  </section>
</template>
