<script setup>
defineProps({
  item: {
    type: Object,
    default: null,
  },
})

defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="item" class="modal-shell" role="dialog" aria-modal="true" @click.self="$emit('close')">
        <article class="detail-modal">
          <button class="detail-modal__close" type="button" aria-label="关闭弹窗" @click="$emit('close')">
            ×
          </button>
          <div v-if="item.image" class="detail-modal__media">
            <img :src="item.image" :alt="`${item.name}详情画面`" />
          </div>
          <p class="eyebrow">Wuxia Archive</p>
          <h3>{{ item.name }}</h3>
          <p class="detail-modal__role">{{ item.role }}</p>
          <div class="detail-modal__tags">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
          <p class="detail-modal__summary">{{ item.detail }}</p>
        </article>
      </div>
    </Transition>
  </Teleport>
</template>
