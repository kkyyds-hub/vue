<script setup>
defineProps({
  keywords: {
    type: Array,
    required: true,
  },
  stats: {
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

    <nav class="top-nav" aria-label="首页导航">
      <a class="top-nav__brand" href="#top">
        <span>燕云录</span>
        <small>Where Winds Meet</small>
      </a>
      <div class="top-nav__links">
        <a href="#top">首页</a>
        <a href="#features">江湖资料</a>
        <a href="#world-scenes">江湖风貌</a>
        <a href="#weapons">武学与兵器</a>
      </div>
    </nav>

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
          <a class="button button--ghost" href="#world-scenes">查看实机画面</a>
        </div>
      </div>

      <aside class="scroll-card" aria-label="江湖卷轴式信息卡">
        <div class="scroll-card__line"></div>
        <p class="eyebrow">Archive Scroll</p>
        <h3>全新江湖资料卷</h3>
        <p>山河 / 武学 / 奇术 / 实机画面</p>
        <div class="scroll-card__grid">
          <div v-for="item in stats" :key="item.value" class="scroll-card__item">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
