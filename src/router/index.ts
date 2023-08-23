import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/homeView.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router
