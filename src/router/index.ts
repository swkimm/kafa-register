import DefaultLayout from '@/layouts/defaultLayout.vue'
import HomeView from '@/views/home/homeView.vue'
import NoticeView from '@/views/notice/noticeView.vue'
// import ResultView from '@/views/result/resultView.vue'
import LeagueScheduleView from '@/views/schedule/league/leagueSchedule.vue'
import AssociationScheduleView from '@/views/schedule/association/associationSchedule.vue'
import TeamDetailView from '@/views/teams/[id]/teamDetailView.vue'
import TeamListView from '@/views/teams/teamListView.vue'
import TeamRegisterView from '@/views/temp/uploadTeamProfile.vue'
import TeamMemberRegisterView from '@/views/temp/uploadTeamMemberProfile.vue'

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
          path: '/schedule/association/:id',
          name: 'association schedule',
          component: AssociationScheduleView
        },
        {
          path: '/schedule/league/:id',
          name: 'league schedule',
          component: LeagueScheduleView
        },
        {
          path: '/team',
          name: 'team',
          component: TeamListView
        },
        {
          path: '/team/:id',
          name: 'team detail',
          component: TeamDetailView
        },
        {
          path: '/register/team',
          name: 'register team',
          component: TeamRegisterView
        },
        {
          path: '/register/member',
          name: 'register member',
          component: TeamMemberRegisterView
        }
        // {
        //   path: '/result',
        //   name: 'result',
        //   component: ResultView
        // }
      ]
    }
  ]
})

export default router
