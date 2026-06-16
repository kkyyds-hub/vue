<script setup>
import { computed, onMounted, ref } from 'vue'
import AppFooter from '@/components/common/AppFooter.vue'
import { skillEntries } from '@/data/skillsData'

const FAVORITE_STORAGE_KEY = 'yanyun-skill-favorites'

const favoriteIds = ref([])

const favoriteSkills = computed(() =>
  favoriteIds.value
    .map((id) => skillEntries.find((skill) => skill.id === id))
    .filter(Boolean),
)

const profileSections = computed(() => [
  {
    title: '武学入卷',
    value: `${favoriteSkills.value.length} 条`,
    summary: '同步武学图鉴中已收藏的条目，形成个人武学索引。',
  },
  { title: '山河路线', value: '清河 / 开封 / 河西', summary: '以已开放区域为主线，整理游历路线与风貌记忆。' },
  { title: '见闻影册', value: '山河烟火', summary: '收纳城郭、人间、机关与边塞风貌的观看线索。' },
  { title: '偏好标记', value: '武学风格', summary: '记录兵器、奇术与流派偏好，保持资料收纳与游历整理的定位。' },
])

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
</script>

<template>
  <main class="sub-page">
    <section class="sub-hero sub-hero--profile">
      <p class="eyebrow">Wulin Record</p>
      <h1>我的武林录</h1>
      <p>收纳已入卷的武学、区域与见闻，整理属于自己的燕云游历路线。</p>
    </section>

    <section class="sub-section">
      <div class="profile-board">
        <article v-for="section in profileSections" :key="section.title" class="profile-tile">
          <span>{{ section.title }}</span>
          <strong>{{ section.value }}</strong>
          <p>{{ section.summary }}</p>
        </article>
      </div>
    </section>

    <section class="sub-section sub-section--compact">
      <div class="section__heading">
        <p class="eyebrow">Favorite Skills</p>
        <h2>已入卷武学</h2>
        <p>这里读取武学图鉴的本地收藏，用于整理个人偏好的兵器、奇术与流派。</p>
      </div>

      <div v-if="favoriteSkills.length" class="sub-list">
        <article v-for="skill in favoriteSkills" :key="skill.id" class="sub-list__item">
          <div v-if="skill.image" class="sub-list__media">
            <img :src="skill.image" :alt="skill.imageAlt || `${skill.name}武学图`" loading="lazy" />
            <small>{{ skill.sourceLabel || '官方图源' }}</small>
          </div>
          <div v-else class="sub-list__fallback" aria-hidden="true">
            <span>{{ skill.name.slice(0, 1) }}</span>
            <small>文字题签</small>
          </div>
          <div class="sub-list__content">
            <strong>{{ skill.name }}</strong>
            <span>{{ skill.category }} / {{ skill.difficulty }}</span>
            <p>{{ skill.summary }}</p>
          </div>
        </article>
      </div>

      <div v-else class="empty-state empty-state--compact">
        <span class="empty-state__seal">录</span>
        <h3>还没有入卷武学</h3>
        <p>在武学图鉴中收藏条目后，这里会形成你的武林录索引。</p>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
