<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
const isPaused = ref(false)
const previewItem = ref(null)
let timerId

const activeItem = computed(() => props.items[activeIndex.value] || props.items[0])

function setActive(index) {
  if (!props.items.length) return
  activeIndex.value = (index + props.items.length) % props.items.length
}

function nextScene() {
  setActive(activeIndex.value + 1)
}

function prevScene() {
  setActive(activeIndex.value - 1)
}

function startAutoPlay() {
  stopAutoPlay()
  timerId = window.setInterval(() => {
    if (!isPaused.value) nextScene()
  }, 4500)
}

function stopAutoPlay() {
  if (timerId) {
    window.clearInterval(timerId)
    timerId = undefined
  }
}

onMounted(startAutoPlay)
onBeforeUnmount(stopAutoPlay)
</script>

<template>
  <section
    class="section world-scenes"
    id="world-scenes"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">World Scenes</p>
        <h2>江湖风貌</h2>
        <p>以山河、城郭、谜境与人间画面为索引，展开燕云世界的第一卷。</p>
      </div>
      <div class="world-scenes__heading-actions">
        <RouterLink class="button button--primary" to="/explore">进入山河图志</RouterLink>
        <span class="world-scenes__count">{{ activeIndex + 1 }} / {{ items.length }}</span>
      </div>
    </div>

    <div v-if="activeItem" class="world-scenes__shell">
      <div class="world-scenes__stage">
        <Transition name="scene-fade" mode="out-in">
          <button
            :key="activeItem.id"
            class="world-scenes__image"
            type="button"
            @click="previewItem = activeItem"
          >
            <img :src="activeItem.image" :alt="`${activeItem.title}画面`" />
          </button>
        </Transition>
        <div class="world-scenes__controls" aria-label="江湖风貌轮播控制">
          <button type="button" aria-label="上一张江湖风貌" @click="prevScene">‹</button>
          <button type="button" aria-label="下一张江湖风貌" @click="nextScene">›</button>
        </div>
      </div>

      <aside class="world-scenes__copy">
        <p class="eyebrow">{{ activeItem.sourceKey }}</p>
        <h3>{{ activeItem.title }}</h3>
        <p>{{ activeItem.subtitle }}</p>
        <div class="world-scenes__tags">
          <span v-for="tag in activeItem.tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="world-scenes__dots" role="tablist" aria-label="选择江湖风貌">
          <button
            v-for="(item, index) in items"
            :key="item.id"
            type="button"
            :class="{ 'is-active': index === activeIndex }"
            :aria-label="`切换到${item.title}`"
            :aria-selected="index === activeIndex"
            @click="setActive(index)"
          >
            <span>{{ item.title }}</span>
          </button>
        </div>
      </aside>
    </div>

    <Transition name="modal-fade">
      <div
        v-if="previewItem"
        class="gallery-viewer"
        role="dialog"
        aria-modal="true"
        @click.self="previewItem = null"
      >
        <figure class="gallery-viewer__panel">
          <button class="detail-modal__close" type="button" aria-label="关闭大图预览" @click="previewItem = null">
            ×
          </button>
          <img :src="previewItem.image" :alt="`${previewItem.title}大图预览`" />
          <figcaption>
            <strong>{{ previewItem.title }}</strong>
            <span>{{ previewItem.subtitle }}</span>
          </figcaption>
        </figure>
      </div>
    </Transition>
  </section>
</template>
