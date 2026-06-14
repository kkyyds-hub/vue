<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <nav class="app-header__bar" aria-label="全站导航">
      <RouterLink class="app-header__brand" to="/">
        <span>燕云十六声</span>
        <small>Where Winds Meet</small>
      </RouterLink>

      <div class="app-header__links">
        <RouterLink to="/">首页</RouterLink>
        <a href="/#world-scenes">江湖风貌</a>
        <a href="/#weapons">兵器谱</a>
        <RouterLink to="/skills">武学图鉴</RouterLink>
      </div>

      <RouterLink class="app-header__profile" to="/profile">游侠档案</RouterLink>
    </nav>
  </header>
</template>
