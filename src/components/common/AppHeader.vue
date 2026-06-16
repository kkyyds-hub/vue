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
        <RouterLink to="/" exact-active-class="is-active">首页</RouterLink>
        <RouterLink to="/explore" active-class="is-active">山河图志</RouterLink>
        <RouterLink to="/skills" active-class="is-active">武学图鉴</RouterLink>
        <RouterLink to="/culture" active-class="is-active">十六声文化</RouterLink>
      </div>

      <RouterLink class="app-header__profile" to="/profile" active-class="is-active">我的武林录</RouterLink>
    </nav>
  </header>
</template>
