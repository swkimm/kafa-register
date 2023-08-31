import DefaultLayout from '@/layouts/defaultLayout.vue'
import HomeView from '@/views/home/homeView.vue'
import NoticeView from '@/views/notice/noticeView.vue'
import ScheduleView from '@/views/schedule/scheduleView.vue'
import TeamListView from '@/views/teams/teamListView.vue'
import TeamDetailView from '@/views/teamDetail/teamDetailView.vue'

import { createRouter, createWebHistory } from 'vue-router'

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
        },
        {
          path: '/team',
          name: 'team',
          component: TeamListView
        },
        {
          path: '/team/teamDetail',
          name: 'teamDetail',
          component: TeamDetailView
        }
      ]
    }
  ]
})

export default router
