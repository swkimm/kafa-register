import DefaultLayout from '@/layouts/defaultLayout.vue'
import ConsoleLayout from '@/layouts/consoleLayout.vue'
import HomeView from '@/views/home/homeView.vue'
import NoticeView from '@/views/notice/noticeView.vue'
import GameView from '@/views/game/gameView.vue'
import LeagueScheduleView from '@/views/schedule/league/leagueSchedule.vue'
import AssociationScheduleView from '@/views/schedule/association/associationSchedule.vue'
import TeamDetailView from '@/views/teams/[id]/teamDetailView.vue'
import TeamListView from '@/views/teams/teamListView.vue'
import TeamRegisterView from '@/views/temp/uploadTeamProfile.vue'
import TeamMemberRegisterView from '@/views/temp/uploadTeamMemberProfile.vue'
import LoginView from '@/views/auth/loginView.vue'
import ConsoleView from '@/views/console/consoleView.vue'
import TeamInfoUpdateView from '@/views/manager/updateTeamInfo.vue'
import TeamLogoUpdateView from '@/views/manager/updateTeamLogo.vue'
import TeamRosterUpdateView from '@/views/manager/updateTeamRoster.vue'
import TeamRosterRegisterView from '@/views/manager/registerTeamRoster.vue'
import GalleryView from '@/views/gallery/galleryView.vue'
import LandingLayout from '@/layouts/landingLayout.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
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
          path: '/association/:id/teams',
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
        },
        {
          path: '/game/:id',
          name: 'game',
          component: GameView
        },
        {
          path: '/gallery/:id',
          name: 'gallery',
          component: GalleryView
        }
      ]
    },
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/console',
      component: ConsoleLayout,
      children: [
        {
          path: '/console',
          name: 'consoleView',
          component: ConsoleView
        },
        {
          path: '/update/info',
          name: 'update team info',
          component: TeamInfoUpdateView
        },
        {
          path: '/update/logo',
          name: 'update team Logo',
          component: TeamLogoUpdateView
        },
        {
          path: '/register/roster',
          name: 'register roster',
          component: TeamRosterRegisterView
        },
        {
          path: '/update/roster',
          name: 'update roster',
          component: TeamRosterUpdateView
        }
      ]
    }
  ]
})

export default router
