import DefaultLayout from '@/layouts/defaultLayout.vue'
import HomeView from '@/views/home/homeView.vue'
import NoticeView from '@/views/notice/noticeView.vue'
// import ResultView from '@/views/result/resultView.vue'
import GroupStageScheduleVue from '@/views/schedule/group-stage/groupStage.vue'
import TournamentScheduleVue from '@/views/schedule/tournament/tournamentSchedule.vue'
import TeamDetailView from '@/views/teams/[id]/teamDetailView.vue'
import TeamListView from '@/views/teams/teamListView.vue'
import TeamRegisterView from '@/views/temp/uploadTeamProfile.vue'

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
          path: '/schedule/group-stage',
          name: 'group stage schedule',
          component: GroupStageScheduleVue
        },
        {
          path: '/schedule/tournament',
          name: 'tournament schedule',
          component: TournamentScheduleVue
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
