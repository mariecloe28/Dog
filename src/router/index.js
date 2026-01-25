import { createRouter, createWebHistory } from 'vue-router'
import BreedView from '../views/BreedView.vue'
import Home from '../views/Home.vue'
import RandomFacts from '@/components/RandomFacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/breed/:breedId',
      name: 'BreedView',
      component: BreedView,
    },
    {
      path: '/randomFacts',
      name: 'RandomFacts',
      component: RandomFacts,

    }
  ],
})

export default router
