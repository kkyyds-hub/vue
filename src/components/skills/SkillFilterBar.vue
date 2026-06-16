<script setup>
import SearchBox from '@/components/common/SearchBox.vue'

defineProps({
  keyword: {
    type: String,
    default: '',
  },
  categories: {
    type: Array,
    required: true,
  },
  difficulties: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
  activeDifficulty: {
    type: String,
    required: true,
  },
  searchHint: {
    type: String,
    default: '',
  },
})

defineEmits(['update:keyword', 'update:category', 'update:difficulty', 'clear'])
</script>

<template>
  <section class="skill-filter-bar" aria-label="武学筛选">
    <div class="skill-filter-bar__search">
      <SearchBox
        :model-value="keyword"
        placeholder="搜索名称、定位、标签或说明"
        @update:model-value="$emit('update:keyword', $event)"
      />
      <Transition name="panel-slide">
        <p v-if="searchHint" class="skill-filter-bar__hint">{{ searchHint }}</p>
      </Transition>
    </div>

    <div class="skill-filter-group">
      <span>分类</span>
      <div>
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{ 'is-active': category === activeCategory }"
          @click="$emit('update:category', category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="skill-filter-group">
      <span>难度</span>
      <div>
        <button
          v-for="difficulty in difficulties"
          :key="difficulty"
          type="button"
          :class="{ 'is-active': difficulty === activeDifficulty }"
          @click="$emit('update:difficulty', difficulty)"
        >
          {{ difficulty }}
        </button>
      </div>
    </div>

    <button class="button button--ghost skill-filter-bar__clear" type="button" @click="$emit('clear')">
      清空筛选
    </button>
  </section>
</template>
