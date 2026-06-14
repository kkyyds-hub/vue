<script setup>
import { computed, ref } from 'vue'
import WorldPanel from './WorldPanel.vue'
import CombatPanel from './CombatPanel.vue'
import MysticPanel from './MysticPanel.vue'
import CulturePanel from './CulturePanel.vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  panels: {
    type: Object,
    required: true,
  },
})

const activeKey = ref(props.tabs[0]?.key || 'world')

const componentMap = {
  world: WorldPanel,
  combat: CombatPanel,
  mystic: MysticPanel,
  culture: CulturePanel,
}

const currentComponent = computed(() => componentMap[activeKey.value] || WorldPanel)
const currentPanel = computed(() => props.panels[activeKey.value])
</script>

<template>
  <section class="section showcase" id="showcase">
    <div class="section__heading">
      <p class="eyebrow">Jianghu Matrix</p>
      <h2>江湖四象</h2>
      <p>以山河、武学、奇术、文化四条线索，搭建首页级资料浏览入口。</p>
    </div>

    <div class="showcase__shell">
      <div class="showcase__tabs" role="tablist" aria-label="江湖四象切换">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="showcase__tab"
          :class="{ 'is-active': activeKey === tab.key }"
          type="button"
          role="tab"
          :aria-selected="activeKey === tab.key"
          @click="activeKey = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <Transition name="panel-slide" mode="out-in">
        <component :is="currentComponent" :key="activeKey" :panel="currentPanel" />
      </Transition>
    </div>
  </section>
</template>
