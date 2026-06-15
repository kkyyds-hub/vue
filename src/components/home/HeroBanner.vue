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

      <aside class="profile-entry-card" aria-label="山河卷宗入口">
        <div class="profile-entry-card__seal">山河</div>
        <p class="eyebrow">Landscape Archive</p>
        <h3>山河卷宗</h3>
        <p class="profile-entry-card__intro">一页入江湖，万象见燕云</p>
        <div class="profile-entry-card__list">
          <div>
            <span>清河</span>
            <strong>江湖起承</strong>
          </div>
          <div>
            <span>开封</span>
            <strong>城郭烟火</strong>
          </div>
          <div>
            <span>河西</span>
            <strong>边塞风沙</strong>
          </div>
          <div>
            <span>不见山</span>
            <strong>迷踪待解</strong>
          </div>
        </div>
        <div class="profile-entry-card__actions">
          <RouterLink class="button button--primary" to="/explore">阅览山河</RouterLink>
          <a class="button button--ghost" href="#world-scenes">查看风貌</a>
        </div>
      </aside>
    </div>
  </section>
</template>
