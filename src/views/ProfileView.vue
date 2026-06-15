<script setup>
import AppFooter from '@/components/common/AppFooter.vue'

const profileSections = [
  { title: '角色信息', value: '燕云游侠', summary: '记录身份、称号与行走江湖的核心资料。' },
  { title: '常用兵器', value: '剑 / 扇', summary: '承接兵器谱中的偏好记录与战斗风格。' },
  { title: '截图收藏', value: '山河影册', summary: '收纳江湖风貌、城郭烟火与人间瞬间。' },
  { title: '探索记录', value: '卷宗归档', summary: '记录山河路线、谜境线索与文化发现。' },
]
</script>

<template>
  <main class="sub-page">
    <section class="sub-hero sub-hero--profile">
      <p class="eyebrow">Profile Gate</p>
      <h1>我的游侠档案</h1>
      <p>装备、兵器、截图与探索记录，作为个人江湖资料的入口。</p>
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

    <AppFooter />
  </main>
</template>
