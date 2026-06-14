<script setup>
import AppFooter from '@/components/common/AppFooter.vue'

const profileSections = [
  { title: '角色信息', value: '游侠名待录入', summary: '角色资料待你补充，页面结构已预留。' },
  { title: '常用兵器', value: '待选择', summary: '可承接兵器谱中的偏好记录。' },
  { title: '截图收藏', value: '待整理', summary: '适合收纳江湖风貌与个人截图。' },
  { title: '探索记录', value: '待整理', summary: '用于记录山河路线、谜境线索与文化发现。' },
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
