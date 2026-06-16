import { createRouter, createWebHistory } from 'vue-router'
import CultureView from '@/views/CultureView.vue'
import ExploreView from '@/views/ExploreView.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SkillsView from '@/views/SkillsView.vue'

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
    name: 'skills',
    component: SkillsView,
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView,
  },
  {
    path: '/culture',
    name: 'culture',
    component: CultureView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})
