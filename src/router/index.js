import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/skills',
    name: 'skills-placeholder',
    component: HomeView,
  },
  {
    path: '/explore',
    name: 'explore-placeholder',
    component: HomeView,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
