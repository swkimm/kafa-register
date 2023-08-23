import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import HomeView from '@/views/home/homeView.vue'
import NoticeView from '@/views/notice/noticeView.vue'
import ScheduleView from '@/views/schedule/scheduleView.vue'

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
        },
        {
          path: '/notice',
          name: 'notice',
          component: NoticeView
        },
        {
          path: '/schedule',
          name: 'schedule',
          component: ScheduleView
        }
      ]
    }
  ]
})

export default router
