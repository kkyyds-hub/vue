<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeItem = ref(null)
</script>

<template>
  <section class="section gallery" id="gallery">
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">Gallery</p>
        <h2>实机画面</h2>
        <p>山河、城郭、战斗与奇术，一屏看见燕云江湖。</p>
      </div>
      <span class="gallery__seal">Live Scenes</span>
    </div>

    <div class="gallery__grid">
      <button
        v-for="item in items"
        :key="item.id"
        class="gallery-card"
        type="button"
        @click="activeItem = item"
      >
        <img :src="item.image" :alt="`${item.title}画面`" loading="lazy" />
        <span class="gallery-card__shade"></span>
        <span class="gallery-card__copy">
          <strong>{{ item.title }}</strong>
          <small>{{ item.subtitle }}</small>
        </span>
      </button>
    </div>

    <Transition name="modal-fade">
      <div v-if="activeItem" class="gallery-viewer" role="dialog" aria-modal="true" @click.self="activeItem = null">
        <figure class="gallery-viewer__panel">
          <button class="detail-modal__close" type="button" aria-label="关闭大图预览" @click="activeItem = null">
            ×
          </button>
          <img :src="activeItem.image" :alt="`${activeItem.title}大图预览`" />
          <figcaption>
            <strong>{{ activeItem.title }}</strong>
            <span>{{ activeItem.subtitle }}</span>
          </figcaption>
        </figure>
      </div>
    </Transition>
  </section>
</template>
