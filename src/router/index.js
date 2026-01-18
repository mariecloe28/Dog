import { createRouter, createWebHistory } from 'vue-router'
import BreedView from '../views/BreedView.vue'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/breed',
      name: 'BreedView',
      component: BreedView,
    },
  ],
})

export default router
