<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  keywords: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="hero" id="top">
    <div class="hero__mist hero__mist--left"></div>
    <div class="hero__mist hero__mist--right"></div>
    <div class="hero__grain"></div>

    <div class="hero__content">
      <div class="hero__copy">
        <p class="eyebrow">江湖资料与探索平台</p>
        <h1>燕云十六声</h1>
        <h2>风起燕云，入梦江湖</h2>
        <p class="hero__intro">
          以武侠开放世界为底色，收录山河区域、武学奇术、江湖文化与探索线索，
          构建属于游侠的燕云资料入口。
        </p>

        <div class="hero__tags" aria-label="项目标签">
          <span v-for="keyword in keywords" :key="keyword">{{ keyword }}</span>
        </div>

        <div class="hero__actions">
          <a class="button button--primary" href="#features">进入江湖</a>
          <a class="button button--ghost" href="#world-scenes">查看风貌</a>
        </div>
      </div>

      <aside class="profile-entry-card" aria-label="我的游侠档案入口">
        <div class="profile-entry-card__seal">游侠</div>
        <p class="eyebrow">Profile Gate</p>
        <h3>我的游侠档案</h3>
        <p class="profile-entry-card__intro">装备 / 兵器 / 截图 / 探索记录</p>
        <div class="profile-entry-card__list">
          <div>
            <span>游侠名</span>
            <strong>待录入</strong>
          </div>
          <div>
            <span>常用兵器</span>
            <strong>待选择</strong>
          </div>
          <div>
            <span>探索记录</span>
            <strong>待整理</strong>
          </div>
        </div>
        <RouterLink class="button button--primary profile-entry-card__button" to="/profile">进入档案</RouterLink>
      </aside>
    </div>
  </section>
</template>
