<script setup>
import FavoriteButton from '@/components/common/FavoriteButton.vue'

defineProps({
  skill: {
    type: Object,
    default: null,
  },
  favorited: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle-favorite', 'select-related'])
</script>

<template>
  <aside class="skill-detail-panel">
    <Transition name="panel-slide" mode="out-in">
      <article v-if="skill" :key="skill.id" class="skill-detail-panel__content">
        <div class="skill-detail-panel__head">
          <div>
            <p class="eyebrow">Skill Codex · {{ skill.category }}</p>
            <h2>{{ skill.name }}</h2>
          </div>
          <FavoriteButton
            label="入卷"
            :model-value="favorited"
            @update:model-value="$emit('toggle-favorite', skill.id)"
          />
        </div>

        <div class="skill-detail-panel__meta">
          <span>{{ skill.category }}</span>
          <span>{{ skill.difficulty }}</span>
          <span>{{ skill.role }}</span>
        </div>

        <div class="skill-detail-panel__tags">
          <span v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
        </div>

        <section>
          <h3>简介</h3>
          <p>{{ skill.summary }}</p>
        </section>
        <section>
          <h3>详细说明</h3>
          <p>{{ skill.detail }}</p>
        </section>
        <section>
          <h3>使用场景</h3>
          <p>{{ skill.usage }}</p>
        </section>

        <section>
          <h3>相关条目</h3>
          <div class="skill-detail-panel__related">
            <button
              v-for="item in skill.related"
              :key="item"
              type="button"
              @click="$emit('select-related', item)"
            >
              {{ item }}
            </button>
          </div>
        </section>
      </article>

      <article v-else class="skill-detail-panel__empty">
        <p class="eyebrow">Skill Codex</p>
        <h2>选择一卷武学</h2>
        <p>点击左侧条目后，这里会展开分类、难度、关键词、使用场景与相关条目。</p>
      </article>
    </Transition>
  </aside>
</template>
