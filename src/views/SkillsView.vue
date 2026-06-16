<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import AppFooter from '@/components/common/AppFooter.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import SkillCard from '@/components/skills/SkillCard.vue'
import SkillDetailPanel from '@/components/skills/SkillDetailPanel.vue'
import SkillFilterBar from '@/components/skills/SkillFilterBar.vue'
import SkillStats from '@/components/skills/SkillStats.vue'
import SkillsHero from '@/components/skills/SkillsHero.vue'
import { skillCategories, skillDifficulties, skillEntries, skillsHero } from '@/data/skillsData'

const FAVORITE_STORAGE_KEY = 'yanyun-skill-favorites'

const searchKeyword = ref('')
const activeCategory = ref('全部')
const activeDifficulty = ref('全部')
const selectedSkillId = ref('')
const favoriteIds = ref([])
const searchHint = ref('')

const filteredSkills = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()

  return skillEntries.filter((skill) => {
    const matchesCategory = activeCategory.value === '全部' || skill.category === activeCategory.value
    const matchesDifficulty = activeDifficulty.value === '全部' || skill.difficulty === activeDifficulty.value
    const searchableText = [
      skill.name,
      skill.category,
      skill.difficulty,
      skill.role,
      skill.summary,
      skill.detail,
      skill.usage,
      ...skill.tags,
      ...skill.related,
    ]
      .join(' ')
      .toLowerCase()
    const matchesKeyword = !keyword || searchableText.includes(keyword)

    return matchesCategory && matchesDifficulty && matchesKeyword
  })
})

const favoriteCount = computed(() => favoriteIds.value.length)

const currentSkill = computed(() => skillEntries.find((skill) => skill.id === selectedSkillId.value) || null)

const stats = computed(() => ({
  total: skillEntries.length,
  favorites: favoriteCount.value,
  categories: skillCategories.length - 1,
  results: filteredSkills.value.length,
}))

const heroStats = computed(() => [
  { label: '条目数', value: stats.value.total },
  { label: '已收藏', value: stats.value.favorites },
  { label: '分类数', value: stats.value.categories },
  { label: '当前结果', value: stats.value.results },
])

watch(searchKeyword, (value) => {
  const keyword = value.trim()
  searchHint.value = keyword ? `正在检索：${keyword}` : ''
})

watch(
  favoriteIds,
  (value) => {
    window.localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true },
)

onMounted(() => {
  const rawFavorites = window.localStorage.getItem(FAVORITE_STORAGE_KEY)
  if (!rawFavorites) return

  try {
    const parsedFavorites = JSON.parse(rawFavorites)
    if (Array.isArray(parsedFavorites)) {
      const validIds = new Set(skillEntries.map((skill) => skill.id))
      favoriteIds.value = parsedFavorites.filter((id) => validIds.has(id))
    }
  } catch {
    favoriteIds.value = []
  }
})

function resetFilters() {
  searchKeyword.value = ''
  activeCategory.value = '全部'
  activeDifficulty.value = '全部'
}

function selectSkill(skillId) {
  selectedSkillId.value = skillId
}

function selectRelatedSkill(name) {
  const relatedSkill = skillEntries.find((skill) => skill.name === name)
  if (!relatedSkill) return

  selectedSkillId.value = relatedSkill.id
}

function isFavorited(skillId) {
  return favoriteIds.value.includes(skillId)
}

function toggleFavorite(skillId) {
  if (isFavorited(skillId)) {
    favoriteIds.value = favoriteIds.value.filter((id) => id !== skillId)
    return
  }

  favoriteIds.value = [...favoriteIds.value, skillId]
}
</script>

<template>
  <main class="skills-page">
    <SkillsHero :hero="skillsHero" :stats="heroStats" @show-all="resetFilters" />

    <section class="skills-archive" id="skills-archive">
      <div class="section__heading section__heading--split">
        <div>
          <p class="eyebrow">Skill Codex</p>
          <h2>图鉴检索</h2>
          <p>按关键词、分类与难度筛选条目，快速定位兵器、奇术、心法与探索技。</p>
        </div>
        <SkillStats :stats="stats" />
      </div>

      <SkillFilterBar
        :keyword="searchKeyword"
        :categories="skillCategories"
        :difficulties="skillDifficulties"
        :active-category="activeCategory"
        :active-difficulty="activeDifficulty"
        :search-hint="searchHint"
        @update:keyword="searchKeyword = $event"
        @update:category="activeCategory = $event"
        @update:difficulty="activeDifficulty = $event"
        @clear="resetFilters"
      />

      <div class="skills-archive__layout">
        <section class="skills-archive__list" aria-label="武学条目列表">
          <Transition name="modal-fade" mode="out-in">
            <EmptyState
              v-if="!filteredSkills.length"
              title="未找到匹配的武学条目"
              description="换个关键词，或清空筛选后重新查看。"
            />

            <div v-else class="skill-grid">
              <SkillCard
                v-for="skill in filteredSkills"
                :key="skill.id"
                :skill="skill"
                :favorited="isFavorited(skill.id)"
                :selected="skill.id === selectedSkillId"
                @select="selectSkill"
                @toggle-favorite="toggleFavorite"
              />
            </div>
          </Transition>
        </section>

        <SkillDetailPanel
          :skill="currentSkill"
          :favorited="currentSkill ? isFavorited(currentSkill.id) : false"
          @toggle-favorite="toggleFavorite"
          @select-related="selectRelatedSkill"
        />
      </div>
    </section>

    <AppFooter />
  </main>
</template>
